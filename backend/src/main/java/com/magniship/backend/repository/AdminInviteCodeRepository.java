// File: AdminInviteCodeRepository.java
package com.magniship.backend.repository;

import com.magniship.backend.entity.AdminInviteCode;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminInviteCodeRepository extends JpaRepository<AdminInviteCode, Long> {
  Optional<AdminInviteCode> findByKodeUnik(String kodeUnik); // Mencari berdasarkan kode unik

  boolean existsByKodeUnik(String kodeUnik); // Cek apakah kode sudah ada
}
