package com.magniship.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;

import java.time.LocalDateTime;

@Entity
public class AdminInviteCode {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String kodeUnik;

  private boolean isUsed = false;

  private Long digunakanOlehAdminId;

  private LocalDateTime createdAt;

  private LocalDateTime usedAt;

  // Getter & Setter
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getKodeUnik() {
    return kodeUnik;
  }

  public void setKodeUnik(String kodeUnik) {
    this.kodeUnik = kodeUnik;
  }

  public boolean isUsed() {
    return isUsed;
  }

  public void setUsed(boolean used) {
    isUsed = used;
  }

  public Long getDigunakanOlehAdminId() {
    return digunakanOlehAdminId;
  }

  public void setDigunakanOlehAdminId(Long digunakanOlehAdminId) {
    this.digunakanOlehAdminId = digunakanOlehAdminId;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDateTime getUsedAt() {
    return usedAt;
  }

  public void setUsedAt(LocalDateTime usedAt) {
    this.usedAt = usedAt;
  }
}
