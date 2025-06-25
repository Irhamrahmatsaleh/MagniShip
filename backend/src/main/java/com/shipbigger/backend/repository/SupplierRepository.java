package com.shipbigger.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shipbigger.backend.entity.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
