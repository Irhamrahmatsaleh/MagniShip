package com.magniship.backend.entity;
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

  private Double harga;
  private String fotoUrl; // URL foto barang (Cloudinary/dll)
  private String videoUrl; // URL video barang (YouTube/Cloudinary/opsional)
  private String deskripsi; // Deskripsi detail barang

  public Double getHarga() {
    return harga;
  }

  public void setHarga(Double harga) {
    this.harga = harga;
  }

  public String getFotoUrl() {
    return fotoUrl;
  }

  public void setFotoUrl(String fotoUrl) {
    this.fotoUrl = fotoUrl;
  }

  public String getVideoUrl() {
    return videoUrl;
  }

  public void setVideoUrl(String videoUrl) {
    this.videoUrl = videoUrl;
  }

  public String getDeskripsi() {
    return deskripsi;
  }

  public void setDeskripsi(String deskripsi) {
    this.deskripsi = deskripsi;
  }

}
