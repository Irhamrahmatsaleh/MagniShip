// AdminRepository.java
package com.magniship.backend.repository;

import com.magniship.backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
  Optional<Admin> findByEmail(String email); // Cari admin by email

  Optional<Admin> findByNoHp(String noHp); // Cari admin by noHp
}
