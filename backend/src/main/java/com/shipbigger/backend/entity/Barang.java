package com.shipbigger.backend.entity;
// Deklarasi package sesuai folder

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
// Menandai class sebagai entity JPA
public class Barang {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nama;
  private String kode;
  private Integer stok;

  // Getter dan Setter
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNama() {
    return nama;
  }

  public void setNama(String nama) {
    this.nama = nama;
  }

  public String getKode() {
    return kode;
  }

  public void setKode(String kode) {
    this.kode = kode;
  }

  public Integer getStok() {
    return stok;
  }

  public void setStok(Integer stok) {
    this.stok = stok;
  }
}
