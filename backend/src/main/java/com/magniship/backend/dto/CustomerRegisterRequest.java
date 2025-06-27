package com.magniship.backend.dto;

public class CustomerRegisterRequest {
  private String nama;
  private String alamat;
  private String tanggalLahir;
  private String email;
  private String noHp;
  private String passwordHash;
  private String fotoDiriUrl;
  private String fotoKtpUrl;
  private String customerNama; // Nama PT/Customer (relasi)

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

  public String getTanggalLahir() {
    return tanggalLahir;
  }

  public void setTanggalLahir(String tanggalLahir) {
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

  public String getCustomerNama() {
    return customerNama;
  }

  public void setCustomerNama(String customerNama) {
    this.customerNama = customerNama;
  }
}
