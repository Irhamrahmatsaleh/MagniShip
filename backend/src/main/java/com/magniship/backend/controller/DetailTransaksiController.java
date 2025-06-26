package com.magniship.backend.controller;

import com.magniship.backend.entity.DetailTransaksi;
import com.magniship.backend.repository.DetailTransaksiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/detailtransaksi")
public class DetailTransaksiController {

  @Autowired
  private DetailTransaksiRepository repo;

  @GetMapping
  public List<DetailTransaksi> getAll() {
    return repo.findAll();
  }

  @PostMapping
  public DetailTransaksi create(@RequestBody DetailTransaksi dt) {
    return repo.save(dt);
  }
}
