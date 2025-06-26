package com.magniship.backend.repository;

import com.magniship.backend.entity.UserSupplier;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserSupplierRepository extends JpaRepository<UserSupplier, Long> {
  Optional<UserSupplier> findByEmail(String email); // Cari supplier by email

  Optional<UserSupplier> findByNoHp(String noHp); // Cari supplier by noHp
}
