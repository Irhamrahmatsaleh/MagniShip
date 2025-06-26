// UserCustomerController.java
package com.magniship.backend.controller;

import com.magniship.backend.entity.UserCustomer;
import com.magniship.backend.repository.UserCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-customer")
public class UserCustomerController {

  @Autowired
  private UserCustomerRepository userCustomerRepository;

  @GetMapping
  public List<UserCustomer> getAllUserCustomers() {
    return userCustomerRepository.findAll();
  }

  @GetMapping("/{id}")
  public UserCustomer getUserCustomerById(@PathVariable Long id) {
    return userCustomerRepository.findById(id).orElse(null);
  }

  @PostMapping
  public UserCustomer createUserCustomer(@RequestBody UserCustomer userCustomer) {
    return userCustomerRepository.save(userCustomer);
  }

  @PutMapping("/{id}")
  public UserCustomer updateUserCustomer(@PathVariable Long id, @RequestBody UserCustomer userDetails) {
    Optional<UserCustomer> optionalUser = userCustomerRepository.findById(id);
    if (optionalUser.isPresent()) {
      UserCustomer user = optionalUser.get();
      user.setNama(userDetails.getNama());
      user.setAlamat(userDetails.getAlamat());
      user.setTanggalLahir(userDetails.getTanggalLahir());
      user.setEmail(userDetails.getEmail());
      user.setNoHp(userDetails.getNoHp());
      user.setPasswordHash(userDetails.getPasswordHash());
      user.setFotoDiriUrl(userDetails.getFotoDiriUrl());
      user.setFotoKtpUrl(userDetails.getFotoKtpUrl());
      user.setActive(userDetails.isActive());
      user.setEmailVerified(userDetails.isEmailVerified());
      user.setUpdatedAt(userDetails.getUpdatedAt());
      return userCustomerRepository.save(user);
    } else {
      return null;
    }
  }

  @DeleteMapping("/{id}")
  public void deleteUserCustomer(@PathVariable Long id) {
    userCustomerRepository.deleteById(id);
  }
}
