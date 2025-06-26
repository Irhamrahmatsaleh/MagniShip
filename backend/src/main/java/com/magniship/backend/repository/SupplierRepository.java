package com.magniship.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.magniship.backend.entity.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
