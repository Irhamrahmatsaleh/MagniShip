package com.magniship.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Admin {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  // Primary key auto increment

  @Column(nullable = false)
  private String nama;
  // Nama lengkap admin

  private String alamat;
  // Alamat lengkap

  private LocalDate tanggalLahir;
  // Tanggal lahir

  @Column(unique = true, nullable = false, length = 20)
  private String nik;
  // Nomor KTP/NIK (unik & wajib)

  @Column(unique = true, nullable = false, length = 20)
  private String noHp;
  // Nomor WhatsApp (unik & wajib)

  @Column(unique = true, nullable = false)
  private String email;
  // Email (unik & wajib)

  @Column(nullable = false)
  private String passwordHash;
  // Hash password (wajib)

  @Column(length = 512)
  private String fotoDiriUrl;
  // URL Cloudinary untuk foto diri

  @Column(length = 512)
  private String fotoKtpUrl;
  // URL Cloudinary untuk foto KTP

  @ManyToOne
  @JoinColumn(name = "invite_code_id", nullable = false)
  private AdminInviteCode adminInviteCode;
  // Relasi ke kode undangan yang dipakai (wajib)

  private boolean isEmailVerified = false;
  // Status verifikasi email

  private boolean isActive = true;
  // Status aktif akun

  private LocalDateTime createdAt = LocalDateTime.now();
  // Waktu registrasi

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

  public LocalDate getTanggalLahir() {
    return tanggalLahir;
  }

  public void setTanggalLahir(LocalDate tanggalLahir) {
    this.tanggalLahir = tanggalLahir;
  }

  public String getNik() {
    return nik;
  }

  public void setNik(String nik) {
    this.nik = nik;
  }

  public String getNoHp() {
    return noHp;
  }

  public void setNoHp(String noHp) {
    this.noHp = noHp;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
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

  public AdminInviteCode getAdminInviteCode() {
    return adminInviteCode;
  }

  public void setAdminInviteCode(AdminInviteCode adminInviteCode) {
    this.adminInviteCode = adminInviteCode;
  }

  public boolean isEmailVerified() {
    return isEmailVerified;
  }

  public void setEmailVerified(boolean emailVerified) {
    isEmailVerified = emailVerified;
  }

  public boolean isActive() {
    return isActive;
  }

  public void setActive(boolean active) {
    isActive = active;
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
