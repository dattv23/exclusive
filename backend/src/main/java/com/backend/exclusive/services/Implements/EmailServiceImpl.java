package com.backend.exclusive.services.Implements;


import com.backend.exclusive.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendSignupSuccessEmail(String toEmail) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Welcome to Our Service");
        message.setText("Dear " + toEmail + ",\n\nThank you for signing up. We're glad to have you with us!");

        mailSender.send(message);
    }
}
