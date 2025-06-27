package com.magniship.backend.dto;

public class AdminRegisterRequest {
  public String nama;
  public String alamat;
  public String tanggalLahir;
  public String nik;
  public String noHp;
  public String email;
  public String passwordHash;
  public String fotoDiriUrl;
  public String fotoKtpUrl;
  public String inviteCode; // ini kode_unik, bukan id
}
