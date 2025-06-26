package com.magniship.backend.entity;

import jakarta.persistence.*;

@Entity
public class Transaksi {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "barang_id")
  private Barang barang;

  @ManyToOne
  @JoinColumn(name = "supplier_id")
  private Supplier supplier;

  @ManyToOne
  @JoinColumn(name = "customer_id", nullable = true)
  private Customer customer;

  private Integer jumlah;
  private String tipe; // "IMPORT" atau "EXPORT"

  // Getter & Setter
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Barang getBarang() {
    return barang;
  }

  public void setBarang(Barang barang) {
    this.barang = barang;
  }

  public Supplier getSupplier() {
    return supplier;
  }

  public void setSupplier(Supplier supplier) {
    this.supplier = supplier;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public Integer getJumlah() {
    return jumlah;
  }

  public void setJumlah(Integer jumlah) {
    this.jumlah = jumlah;
  }

  public String getTipe() {
    return tipe;
  }

  public void setTipe(String tipe) {
    this.tipe = tipe;
  }
}
