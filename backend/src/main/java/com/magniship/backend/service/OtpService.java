package com.magniship.backend.service;

import org.springframework.stereotype.Service;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

  // Penyimpanan OTP sementara (simulasi Redis, bisa diganti ke Redis nanti)
  private ConcurrentHashMap<String, String> otpStore = new ConcurrentHashMap<>();

  public void saveOtp(String email, String otp) {
    otpStore.put(email, otp);
  }

  public boolean validateOtp(String email, String otp) {
    String storedOtp = otpStore.get(email);
    return storedOtp != null && storedOtp.equals(otp);
  }

  public void removeOtp(String email) {
    otpStore.remove(email);
  }
}
