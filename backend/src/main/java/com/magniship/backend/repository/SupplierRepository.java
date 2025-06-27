package com.magniship.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.magniship.backend.entity.Supplier;
import java.util.Optional;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
  Optional<Supplier> findByNama(String nama);
}
