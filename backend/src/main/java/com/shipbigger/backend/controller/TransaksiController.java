package com.shipbigger.backend.controller;

import org.springframework.web.bind.annotation.*;

import com.shipbigger.backend.entity.Transaksi;
import com.shipbigger.backend.service.TransaksiService;

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
