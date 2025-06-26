package com.magniship.backend.service;
// Package sesuai folder

import org.springframework.stereotype.Service;

import com.magniship.backend.entity.Transaksi;
import com.magniship.backend.repository.TransaksiRepository;

import java.util.List;

@Service
public class TransaksiService {
  private final TransaksiRepository transaksiRepository;

  public TransaksiService(TransaksiRepository transaksiRepository) {
    this.transaksiRepository = transaksiRepository;
  }

  public List<Transaksi> getAll() {
    return transaksiRepository.findAll();
  }

  public Transaksi save(Transaksi transaksi) {
    return transaksiRepository.save(transaksi);
  }

  public void delete(Long id) {
    transaksiRepository.deleteById(id);
  }
}
