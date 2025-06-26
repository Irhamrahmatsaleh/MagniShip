package com.magniship.backend.service;
// Package sesuai folder

import org.springframework.stereotype.Service;

import com.magniship.backend.entity.Barang;
import com.magniship.backend.repository.BarangRepository;

import java.util.List;

@Service
public class BarangService {
  private final BarangRepository barangRepository;

  public BarangService(BarangRepository barangRepository) {
    this.barangRepository = barangRepository;
  }

  public List<Barang> getAll() {
    return barangRepository.findAll();
  }

  public Barang save(Barang barang) {
    return barangRepository.save(barang);
  }

  public void delete(Long id) {
    barangRepository.deleteById(id);
  }
}
