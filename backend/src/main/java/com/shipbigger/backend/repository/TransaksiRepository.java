package com.shipbigger.backend.repository;
// Package harus sesuai dengan lokasi file

// Import entity Transaksi
import org.springframework.data.jpa.repository.JpaRepository;
// Import JpaRepository

import com.shipbigger.backend.entity.Transaksi;

public interface TransaksiRepository extends JpaRepository<Transaksi, Long> {
  // Interface ini memungkinkan CRUD Transaksi otomatis
}
