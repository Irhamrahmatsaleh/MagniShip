// UserCustomerController.java
package com.magniship.backend.controller;

import com.magniship.backend.dto.CustomerLoginRequest;
import com.magniship.backend.entity.Customer;
import com.magniship.backend.entity.UserCustomer;
import com.magniship.backend.repository.UserCustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-customer")
public class UserCustomerController {

  @Autowired
  private UserCustomerRepository userCustomerRepository;

  @Autowired
  private com.magniship.backend.service.EmailService emailService;

  @Autowired
  private com.magniship.backend.service.OtpService otpService;

  @Autowired
  private com.magniship.backend.repository.CustomerRepository customerRepository;

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
    userCustomer.setEmailVerified(false);

    // CEK CUSTOMER SUDAH ADA ATAU BELUM
    Customer inputCustomer = userCustomer.getCustomer();
    Optional<Customer> existingCustomer = customerRepository.findByNama(inputCustomer.getNama());
    Customer customer;
    if (existingCustomer.isPresent()) {
      customer = existingCustomer.get();
    } else {
      customer = customerRepository.save(inputCustomer);
    }
    userCustomer.setCustomer(customer);

    String otp = emailService.generateOtp();
    emailService.sendOtpEmailHtml(userCustomer.getEmail(), otp);
    otpService.saveOtp(userCustomer.getEmail(), otp);
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

  @PostMapping("/verify-otp")
  public ResponseEntity<String> verifyOtp(@RequestParam String email, @RequestParam String otp) {
    boolean valid = otpService.validateOtp(email, otp);
    if (valid) {
      // Ganti adminRepository dengan userSupplierRepository
      UserCustomer user = userCustomerRepository.findByEmail(email).orElse(null);
      if (user != null) {
        user.setEmailVerified(true);
        userCustomerRepository.save(user);
        otpService.removeOtp(email);
        return ResponseEntity.ok("Verifikasi email berhasil. Silakan login.");
      } else {
        return ResponseEntity.status(404).body("UserSupplier tidak ditemukan.");
      }
    } else {
      return ResponseEntity.status(400).body("Kode OTP salah atau sudah kadaluarsa.");
    }
  }

  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody CustomerLoginRequest request) {
    Optional<UserCustomer> userOpt = userCustomerRepository.findByEmail(request.getEmail());
    if (userOpt.isEmpty()) {
      return ResponseEntity.status(401).body("Email tidak ditemukan");
    }
    UserCustomer user = userOpt.get();
    if (!user.getPasswordHash().equals(request.getPasswordHash())) {
      return ResponseEntity.status(401).body("Password salah");
    }
    if (!user.isEmailVerified()) {
      return ResponseEntity.status(403).body("Email belum diverifikasi");
    }
    return ResponseEntity.ok("Login berhasil");
  }

}
