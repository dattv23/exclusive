package com.backend.exclusive.services;

public interface EmailService {
    void sendSignupSuccessEmail(String toEmail);
    void sendOrderPlacedEmail(String toEmail);
}
