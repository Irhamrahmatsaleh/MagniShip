package com.magniship.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class UserCustomer {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nama;

  private String alamat;

  private LocalDate tanggalLahir;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(unique = true, nullable = false, length = 20)
  private String noHp;

  @Column(nullable = false)
  private String passwordHash;

  @Column(length = 512)
  private String fotoDiriUrl;

  @Column(length = 512)
  private String fotoKtpUrl;

  @OneToOne
  @JoinColumn(name = "customer_id")
  private Customer customer;

  private boolean isActive = true;

  private boolean isEmailVerified = false;

  private LocalDateTime createdAt = LocalDateTime.now();

  private LocalDateTime updatedAt = LocalDateTime.now();

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

  public LocalDate getTanggalLahir() {
    return tanggalLahir;
  }

  public void setTanggalLahir(LocalDate tanggalLahir) {
    this.tanggalLahir = tanggalLahir;
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

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
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
