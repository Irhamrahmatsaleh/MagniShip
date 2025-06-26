package com.magniship.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class DetailTransaksi {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "transaksi_id")
  private Transaksi transaksi;

  @ManyToOne
  @JoinColumn(name = "barang_id")
  private Barang barang;

  private Integer qty;

  private Double hargaSatuan;

  private Double subtotal;

  // Getter & Setter
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Transaksi getTransaksi() {
    return transaksi;
  }

  public void setTransaksi(Transaksi transaksi) {
    this.transaksi = transaksi;
  }

  public Barang getBarang() {
    return barang;
  }

  public void setBarang(Barang barang) {
    this.barang = barang;
  }

  public Integer getQty() {
    return qty;
  }

  public void setQty(Integer qty) {
    this.qty = qty;
  }

  public Double getHargaSatuan() {
    return hargaSatuan;
  }

  public void setHargaSatuan(Double hargaSatuan) {
    this.hargaSatuan = hargaSatuan;
  }

  public Double getSubtotal() {
    return subtotal;
  }

  public void setSubtotal(Double subtotal) {
    this.subtotal = subtotal;
  }
}
