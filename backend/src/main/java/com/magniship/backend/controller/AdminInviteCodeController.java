// File: AdminInviteCodeController.java
package com.magniship.backend.controller;

import com.magniship.backend.entity.AdminInviteCode;
import com.magniship.backend.repository.AdminInviteCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.UUID;

@RestController
@RequestMapping("/api/admin-invite")
public class AdminInviteCodeController {

  @Autowired
  private AdminInviteCodeRepository repo; // Inject repository

  // Endpoint untuk generate kode baru
  @PostMapping("/generate")
  public String generateInviteCode() {
    String prefix = "MAGNI";
    String kode = prefix + UUID.randomUUID().toString().substring(0, 8).toUpperCase();

    while (repo.existsByKodeUnik(kode)) {
      kode = prefix + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }

    AdminInviteCode entity = new AdminInviteCode();
    entity.setKodeUnik(kode);
    entity.setCreatedAt(LocalDateTime.now());
    repo.save(entity);

    return kode;
  }

  // Endpoint cek validitas kode
  @GetMapping("/validate/{kode}")
  public boolean validateKode(@PathVariable String kode) {
    return repo.findByKodeUnik(kode)
        .filter(invite -> !invite.isUsed())
        .isPresent();
  }
}
