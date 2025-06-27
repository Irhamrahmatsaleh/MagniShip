package com.magniship.backend.controller;

import com.magniship.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test-email")
public class EmailTestController {

  @Autowired
  private EmailService emailService;

  @GetMapping
  public String testSendEmail(@RequestParam String to) {
    String otp = emailService.generateOtp();
    emailService.sendOtpEmailHtml(to, otp);
    return "Email terkirim ke: " + to + " | OTP: " + otp;
  }
}
