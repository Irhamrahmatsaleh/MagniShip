// AdminController.java
package com.magniship.backend.controller;

import com.magniship.backend.dto.AdminLoginRequest;
import com.magniship.backend.dto.AdminRegisterRequest;
import com.magniship.backend.entity.Admin;
import com.magniship.backend.entity.AdminInviteCode;
import com.magniship.backend.repository.AdminInviteCodeRepository;
import com.magniship.backend.repository.AdminRepository;
import com.magniship.backend.service.EmailService;
import com.magniship.backend.service.OtpService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
  private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

  @Autowired
  private AdminRepository adminRepository; // Dependency injection

  @Autowired
  private EmailService emailService;

  @Autowired
  private OtpService otpService;

  @Autowired
  private AdminInviteCodeRepository adminInviteCodeRepository;

  @GetMapping
  public List<Admin> getAllAdmins() {
    return adminRepository.findAll();
  }

  @GetMapping("/{id}")
  public Admin getAdminById(@PathVariable Long id) {
    return adminRepository.findById(id).orElse(null);
  }

  @PostMapping
  public Admin createAdmin(@RequestBody AdminRegisterRequest request) {

    // AdminInviteCode inviteCode =
    // adminInviteCodeRepository.findByKodeUnik(request.inviteCode)
    // .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kode
    // undangan tidak ditemukan"));
    Optional<AdminInviteCode> inviteCodeOpt = adminInviteCodeRepository.findByKodeUnik(request.inviteCode);
    if (!inviteCodeOpt.isPresent()) {
      logger.warn("Kode undangan tidak ditemukan: {}", request.inviteCode);
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Kode undangan tidak ditemukan");
    }
    AdminInviteCode inviteCode = inviteCodeOpt.get();

    Admin admin = new Admin();
    admin.setNama(request.nama);
    admin.setAlamat(request.alamat);
    admin.setTanggalLahir(LocalDate.parse(request.tanggalLahir));
    admin.setNik(request.nik);
    admin.setNoHp(request.noHp);
    admin.setEmail(request.email);
    admin.setPasswordHash(request.passwordHash);
    admin.setFotoDiriUrl(request.fotoDiriUrl);
    admin.setFotoKtpUrl(request.fotoKtpUrl);
    admin.setAdminInviteCode(inviteCode);
    admin.setEmailVerified(false);

    String otp = emailService.generateOtp();
    emailService.sendOtpEmailHtml(admin.getEmail(), otp);
    otpService.saveOtp(admin.getEmail(), otp);

    Admin savedAdmin = adminRepository.save(admin);

    // Update status invite code
    inviteCode.setUsed(true);
    inviteCode.setDigunakanOlehAdminId(savedAdmin.getId());
    inviteCode.setUsedAt(java.time.LocalDateTime.now());
    adminInviteCodeRepository.save(inviteCode);

    return savedAdmin;
  }

  @PutMapping("/{id}")
  public Admin updateAdmin(@PathVariable Long id, @RequestBody Admin adminDetails) {
    Optional<Admin> optionalAdmin = adminRepository.findById(id);
    if (optionalAdmin.isPresent()) {
      Admin admin = optionalAdmin.get();
      admin.setNama(adminDetails.getNama());
      admin.setAlamat(adminDetails.getAlamat());
      admin.setTanggalLahir(adminDetails.getTanggalLahir());
      admin.setNik(adminDetails.getNik());
      admin.setNoHp(adminDetails.getNoHp());
      admin.setEmail(adminDetails.getEmail());
      admin.setPasswordHash(adminDetails.getPasswordHash());
      admin.setFotoDiriUrl(adminDetails.getFotoDiriUrl());
      admin.setFotoKtpUrl(adminDetails.getFotoKtpUrl());
      admin.setAdminInviteCode(adminDetails.getAdminInviteCode());
      admin.setEmailVerified(adminDetails.isEmailVerified());
      admin.setActive(adminDetails.isActive());
      admin.setUpdatedAt(adminDetails.getUpdatedAt());
      return adminRepository.save(admin);
    } else {
      return null;
    }
  }

  @DeleteMapping("/{id}")
  public void deleteAdmin(@PathVariable Long id) {
    adminRepository.deleteById(id);
  }

  @PostMapping("/verify-otp")
  public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String otp) {
    boolean valid = otpService.validateOtp(email, otp);
    if (valid) {
      Admin admin = adminRepository.findByEmail(email).orElse(null);
      if (admin != null) {
        admin.setEmailVerified(true);
        adminRepository.save(admin);
        otpService.removeOtp(email);
        return ResponseEntity.ok("Verifikasi email berhasil. Silakan login.");
      } else {
        return ResponseEntity.status(404).body("Admin tidak ditemukan.");
      }
    } else {
      return ResponseEntity.status(400).body("Kode OTP salah atau sudah kadaluarsa.");
    }
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody AdminLoginRequest request) {
    Optional<Admin> adminOpt = adminRepository.findByEmail(request.getEmail());
    if (adminOpt.isEmpty()) {
      return ResponseEntity.status(401).body("Email tidak ditemukan");
    }
    Admin admin = adminOpt.get();
    if (!admin.getPasswordHash().equals(request.getPasswordHash())) {
      return ResponseEntity.status(401).body("Password salah");
    }
    if (!admin.isEmailVerified()) { // Pastikan nama method sesuai entity
      return ResponseEntity.status(403).body("Email belum diverifikasi");
    }
    return ResponseEntity.ok("Login berhasil");
  }

}
