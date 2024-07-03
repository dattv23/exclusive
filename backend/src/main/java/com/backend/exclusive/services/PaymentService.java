package com.backend.exclusive.services;

import com.backend.exclusive.dtos.PaymentDTO;
import com.backend.exclusive.models.Payment;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface PaymentService {
    Payment createPayment(PaymentDTO paymentDTO);

    List<Payment> getAllPayments();

    List<Payment> getDeletedPayments();

    Optional<Payment> getPaymentById(ObjectId id);

    Optional<Payment> updatePayment(ObjectId id, PaymentDTO paymentDTO);

    void deletePayment(ObjectId id);

    List<Integer> getMonthlyEarnings();

    Double getAnnualEarnings();

    Double getThisMonthEarnings();
}
