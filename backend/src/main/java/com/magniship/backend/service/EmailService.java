package com.magniship.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

  @Autowired
  private JavaMailSender mailSender;

  // Generate OTP random 6 digit
  public String generateOtp() {
    int otp = 100000 + new java.util.Random().nextInt(900000);
    return String.valueOf(otp);
  }

  // Kirim email OTP dengan tampilan HTML modern
  public void sendOtpEmailHtml(String to, String otp) {
    MimeMessage message = mailSender.createMimeMessage();
    try {
      MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
      helper.setTo(to);
      helper.setSubject("OTP Verifikasi MagniShip");

      String htmlContent = "<div style='font-family:Arial,sans-serif;padding:32px;background:#f9f9f9;color:#222;'>"
          + "<div style='max-width:480px;margin:auto;background:#fff;border-radius:8px;box-shadow:0 1px 8px #ddd;padding:32px 24px'>"
          + "<h2 style='color:#0066cc;text-align:center;'>Kode OTP Verifikasi</h2>"
          + "<div style='font-size:18px;margin:24px 0 12px 0;text-align:center;'>"
          + "Gunakan kode di bawah ini untuk verifikasi akun MagniShip Anda:"
          + "</div>"
          + "<div style='font-size:32px;font-weight:bold;color:#0066cc;text-align:center;letter-spacing:8px;padding:18px 0 16px 0;'>"
          + otp
          + "</div>"
          + "<div style='color:#888;font-size:14px;text-align:center;'>Kode berlaku selama 10 menit. Jangan berikan kode ini ke siapa pun, termasuk pihak MagniShip.</div>"
          + "<div style='text-align:center;margin-top:30px;font-size:13px;color:#aaa;'>MagniShip &copy; "
          + java.time.Year.now()
          + "</div></div></div>";

      helper.setText(htmlContent, true);
      mailSender.send(message);
    } catch (MessagingException e) {
      throw new RuntimeException("Gagal mengirim email OTP", e);
    }
  }
}
