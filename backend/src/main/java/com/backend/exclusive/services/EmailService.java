package com.backend.exclusive.services;

import org.bson.types.ObjectId;

public interface EmailService {
    void sendSignupSuccessEmail(String toEmail);
    void sendOrderPlacedEmail(String toEmail, ObjectId orderId);
}
