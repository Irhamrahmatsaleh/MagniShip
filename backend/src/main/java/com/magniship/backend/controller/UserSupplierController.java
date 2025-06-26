package com.magniship.backend.controller;

import com.magniship.backend.entity.UserSupplier;
import com.magniship.backend.repository.UserSupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-supplier")
public class UserSupplierController {

  @Autowired
  private UserSupplierRepository userSupplierRepository;

  @GetMapping
  public List<UserSupplier> getAllUserSuppliers() {
    return userSupplierRepository.findAll();
  }

  @GetMapping("/{id}")
  public UserSupplier getUserSupplierById(@PathVariable Long id) {
    return userSupplierRepository.findById(id).orElse(null);
  }

  @PostMapping
  public UserSupplier createUserSupplier(@RequestBody UserSupplier userSupplier) {
    return userSupplierRepository.save(userSupplier);
  }

  @PutMapping("/{id}")
  public UserSupplier updateUserSupplier(@PathVariable Long id, @RequestBody UserSupplier details) {
    Optional<UserSupplier> optionalUser = userSupplierRepository.findById(id);
    if (optionalUser.isPresent()) {
      UserSupplier user = optionalUser.get();
      user.setNama(details.getNama());
      user.setAlamat(details.getAlamat());
      user.setEmail(details.getEmail());
      user.setNoHp(details.getNoHp());
      user.setPasswordHash(details.getPasswordHash());
      user.setFotoDiriUrl(details.getFotoDiriUrl());
      user.setFotoKtpUrl(details.getFotoKtpUrl());
      user.setSupplier(details.getSupplier());
      user.setActive(details.isActive());
      user.setEmailVerified(details.isEmailVerified());
      user.setUpdatedAt(details.getUpdatedAt());
      return userSupplierRepository.save(user);
    } else {
      return null;
    }
  }

  @DeleteMapping("/{id}")
  public void deleteUserSupplier(@PathVariable Long id) {
    userSupplierRepository.deleteById(id);
  }
}
