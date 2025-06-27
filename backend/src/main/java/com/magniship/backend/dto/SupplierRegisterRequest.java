package com.magniship.backend.dto;

public class SupplierRegisterRequest {
  private String nama; // Nama PT/CV
  private String namaPenanggungJawab;
  private String tanggalLahir;
  private String alamat;
  private String nik;
  private String noHp;
  private String email;
  private String passwordHash;
  private String fotoKtpUrl;
  private String fotoDiriUrl;

  public String getNama() {
    return nama;
  }

  public void setNama(String nama) {
    this.nama = nama;
  }

  public String getNamaPenanggungJawab() {
    return namaPenanggungJawab;
  }

  public void setNamaPenanggungJawab(String namaPenanggungJawab) {
    this.namaPenanggungJawab = namaPenanggungJawab;
  }

  public String getTanggalLahir() {
    return tanggalLahir;
  }

  public void setTanggalLahir(String tanggalLahir) {
    this.tanggalLahir = tanggalLahir;
  }

  public String getAlamat() {
    return alamat;
  }

  public void setAlamat(String alamat) {
    this.alamat = alamat;
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

  public String getFotoKtpUrl() {
    return fotoKtpUrl;
  }

  public void setFotoKtpUrl(String fotoKtpUrl) {
    this.fotoKtpUrl = fotoKtpUrl;
  }

  public String getFotoDiriUrl() {
    return fotoDiriUrl;
  }

  public void setFotoDiriUrl(String fotoDiriUrl) {
    this.fotoDiriUrl = fotoDiriUrl;
  }
}
