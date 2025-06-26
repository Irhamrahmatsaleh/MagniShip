package com.magniship.backend.repository;
// Package harus sesuai dengan lokasi file

// Import entity Transaksi
import org.springframework.data.jpa.repository.JpaRepository;
// Import JpaRepository

import com.magniship.backend.entity.Transaksi;

public interface TransaksiRepository extends JpaRepository<Transaksi, Long> {
  // Interface ini memungkinkan CRUD Transaksi otomatis
}
