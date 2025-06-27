package com.magniship.backend.controller;

import com.magniship.backend.entity.UserSupplier;
import com.magniship.backend.repository.UserSupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.magniship.backend.dto.SupplierLoginRequest;
import com.magniship.backend.entity.Admin;
import com.magniship.backend.entity.Supplier;
import com.magniship.backend.repository.SupplierRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-supplier")
public class UserSupplierController {

  @Autowired
  private UserSupplierRepository userSupplierRepository;
  @Autowired
  private SupplierRepository supplierRepository;

  @Autowired
  private com.magniship.backend.service.EmailService emailService;

  @Autowired
  private com.magniship.backend.service.OtpService otpService;

  @GetMapping
  public List<UserSupplier> getAllUserSuppliers() {
    return userSupplierRepository.findAll();
  }

  @GetMapping("/{id}")
  public UserSupplier getUserSupplierById(@PathVariable Long id) {
    return userSupplierRepository.findById(id).orElse(null);
  }

  @PostMapping
  public UserSupplier createUserSupplier(@RequestBody UserSupplier userSupplier) {
    userSupplier.setEmailVerified(false);

    // Cek apakah supplier sudah ada (misal berdasarkan nama)
    Supplier supplier = userSupplier.getSupplier();
    Supplier existingSupplier = supplierRepository.findByNama(supplier.getNama()).orElse(null);

    if (existingSupplier == null) {
      // Jika belum ada, simpan supplier baru
      existingSupplier = supplierRepository.save(supplier);
    }

    userSupplier.setSupplier(existingSupplier);

    String otp = emailService.generateOtp();
    emailService.sendOtpEmailHtml(userSupplier.getEmail(), otp);
    otpService.saveOtp(userSupplier.getEmail(), otp);

    return userSupplierRepository.save(userSupplier);
  }

  @PutMapping("/{id}")
  public UserSupplier updateUserSupplier(@PathVariable Long id, @RequestBody UserSupplier details) {
    Optional<UserSupplier> optionalUser = userSupplierRepository.findById(id);
    if (optionalUser.isPresent()) {
      UserSupplier user = optionalUser.get();
      user.setNama(details.getNama());
      user.setAlamat(details.getAlamat());
      user.setEmail(details.getEmail());
      user.setNoHp(details.getNoHp());
      user.setPasswordHash(details.getPasswordHash());
      user.setFotoDiriUrl(details.getFotoDiriUrl());
      user.setFotoKtpUrl(details.getFotoKtpUrl());
      user.setSupplier(details.getSupplier());
      user.setActive(details.isActive());
      user.setEmailVerified(details.isEmailVerified());
      user.setUpdatedAt(details.getUpdatedAt());
      return userSupplierRepository.save(user);
    } else {
      return null;
    }
  }

  @DeleteMapping("/{id}")
  public void deleteUserSupplier(@PathVariable Long id) {
    userSupplierRepository.deleteById(id);
  }

  @PostMapping("/verify-otp")
  public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String otp) {
    boolean valid = otpService.validateOtp(email, otp);
    if (valid) {
      // Ganti adminRepository dengan userSupplierRepository
      UserSupplier user = userSupplierRepository.findByEmail(email).orElse(null);
      if (user != null) {
        user.setEmailVerified(true);
        userSupplierRepository.save(user);
        otpService.removeOtp(email);
        return ResponseEntity.ok("Verifikasi email berhasil. Silakan login.");
      } else {
        return ResponseEntity.status(404).body("UserSupplier tidak ditemukan.");
      }
    } else {
      return ResponseEntity.status(400).body("Kode OTP salah atau sudah kadaluarsa.");
    }
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody SupplierLoginRequest request) {
    Optional<UserSupplier> userOpt = userSupplierRepository.findByEmail(request.getEmail());
    if (userOpt.isEmpty()) {
      return ResponseEntity.status(401).body("Email tidak ditemukan");
    }
    UserSupplier user = userOpt.get();
    if (!user.getPasswordHash().equals(request.getPasswordHash())) {
      return ResponseEntity.status(401).body("Password salah");
    }
    if (!user.isEmailVerified()) {
      return ResponseEntity.status(403).body("Email belum diverifikasi");
    }
    return ResponseEntity.ok("Login berhasil");
  }

}
