package com.magniship.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class UserSupplier {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  // Primary key auto increment

  @Column(nullable = false)
  private String nama;
  // Nama lengkap PIC/pemilik

  @Column(nullable = false)
  private String alamat;
  // Alamat pribadi PIC/pemilik

  @Column(unique = true, nullable = false)
  private String email;
  // Email PIC, wajib unik

  @Column(unique = true, nullable = false, length = 20)
  private String noHp;
  // Nomor WhatsApp PIC, wajib unik

  @Column(nullable = false)
  private String passwordHash;
  // Password hash

  @Column(length = 512, nullable = false)
  private String fotoDiriUrl;
  // URL foto diri PIC (wajib)

  @Column(length = 512, nullable = false)
  private String fotoKtpUrl;
  // URL foto KTP PIC (wajib)

  @OneToOne
  @JoinColumn(name = "supplier_id")
  private Supplier supplier;
  // Relasi ke data usaha (perusahaan/CV/PT) supplier

  private boolean isActive = true;
  // Status aktif akun

  private boolean isEmailVerified = false;
  // Status email verifikasi

  private LocalDateTime createdAt = LocalDateTime.now();
  // Waktu pembuatan akun

  private LocalDateTime updatedAt = LocalDateTime.now();
  // Waktu update terakhir

  // Getter & Setter

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

  public String getAlamat() {
    return alamat;
  }

  public void setAlamat(String alamat) {
    this.alamat = alamat;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getNoHp() {
    return noHp;
  }

  public void setNoHp(String noHp) {
    this.noHp = noHp;
  }

  public String getPasswordHash() {
    return passwordHash;
  }

  public void setPasswordHash(String passwordHash) {
    this.passwordHash = passwordHash;
  }

  public String getFotoDiriUrl() {
    return fotoDiriUrl;
  }

  public void setFotoDiriUrl(String fotoDiriUrl) {
    this.fotoDiriUrl = fotoDiriUrl;
  }

  public String getFotoKtpUrl() {
    return fotoKtpUrl;
  }

  public void setFotoKtpUrl(String fotoKtpUrl) {
    this.fotoKtpUrl = fotoKtpUrl;
  }

  public Supplier getSupplier() {
    return supplier;
  }

  public void setSupplier(Supplier supplier) {
    this.supplier = supplier;
  }

  public boolean isActive() {
    return isActive;
  }

  public void setActive(boolean active) {
    isActive = active;
  }

  public boolean isEmailVerified() {
    return isEmailVerified;
  }

  public void setEmailVerified(boolean emailVerified) {
    isEmailVerified = emailVerified;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }
}
