package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.PaymentDTO;
import com.backend.exclusive.models.Payment;
import com.backend.exclusive.repositories.PaymentRepository;
import com.backend.exclusive.services.PaymentService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public Payment createPayment(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        payment.setOrder(paymentDTO.getOrder());
        payment.setMethodPayId(paymentDTO.getMethodPayId());
        payment.setAmount(paymentDTO.getAmount());
        payment.setStatus(paymentDTO.getStatus());
        payment.setDateOfPay(paymentDTO.getDateOfPay());
        payment.setDeleted(false);
        payment.setCreatedAt(new Date());
        return paymentRepository.save(payment);
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll().stream()
                .filter(payment -> !payment.isDeleted())
                .toList();
    }

    @Override
    public List<Payment> getDeletedPayments() {
        return paymentRepository.findAll().stream()
                .filter(Payment::isDeleted)
                .toList();
    }

    @Override
    public Optional<Payment> getPaymentById(ObjectId id) {
        return paymentRepository.findById(id)
                .filter(payment -> !payment.isDeleted());
    }

    @Override
    public Optional<Payment> updatePayment(ObjectId id, PaymentDTO paymentDTO) {
        return paymentRepository.findById(id).map(existingPayment -> {
            existingPayment.setOrder(paymentDTO.getOrder());
            existingPayment.setMethodPayId(paymentDTO.getMethodPayId());
            existingPayment.setAmount(paymentDTO.getAmount());
            existingPayment.setStatus(paymentDTO.getStatus());
            existingPayment.setDateOfPay(paymentDTO.getDateOfPay());
            existingPayment.setUpdatedAt(new Date());
            return paymentRepository.save(existingPayment);
        });
    }

    @Override
    public void deletePayment(ObjectId id) {
        paymentRepository.findById(id).ifPresent(payment -> {
            payment.setDeleted(true);
            paymentRepository.save(payment);
        });
    }
}
