// AdminController.java
package com.magniship.backend.controller;

import com.magniship.backend.entity.Admin;
import com.magniship.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

  @Autowired
  private AdminRepository adminRepository; // Dependency injection

  @GetMapping
  public List<Admin> getAllAdmins() {
    return adminRepository.findAll();
  }

  @GetMapping("/{id}")
  public Admin getAdminById(@PathVariable Long id) {
    return adminRepository.findById(id).orElse(null);
  }

  @PostMapping
  public Admin createAdmin(@RequestBody Admin admin) {
    return adminRepository.save(admin);
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
}
