package com.magniship.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.magniship.backend.entity.Transaksi;
import com.magniship.backend.service.TransaksiService;

import java.util.List;

@RestController
@RequestMapping("/api/transaksi")
public class TransaksiController {
  private final TransaksiService transaksiService;

  public TransaksiController(TransaksiService transaksiService) {
    this.transaksiService = transaksiService;
  }

  @GetMapping
  public List<Transaksi> getAll() {
    return transaksiService.getAll();
  }

  @PostMapping
  public Transaksi save(@RequestBody Transaksi transaksi) {
    return transaksiService.save(transaksi);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) {
    transaksiService.delete(id);
  }
}
