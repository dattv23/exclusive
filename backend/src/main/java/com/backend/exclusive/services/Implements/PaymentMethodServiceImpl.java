package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.PaymentMethodDTO;
import com.backend.exclusive.models.PaymentMethod;
import com.backend.exclusive.repositories.PaymentMethodRepository;
import com.backend.exclusive.services.PaymentMethodService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentMethodServiceImpl implements PaymentMethodService {

    @Autowired
    private PaymentMethodRepository paymentMethodRepository;

    @Override
    public PaymentMethod createPaymentMethod(PaymentMethodDTO paymentMethodDTO) {
        PaymentMethod paymentMethod = new PaymentMethod();
        paymentMethod.setName(paymentMethodDTO.getName());
        paymentMethod.setDeleted(false);
        return paymentMethodRepository.save(paymentMethod);
    }

    @Override
    public List<PaymentMethod> getAllPaymentMethods() {
        return paymentMethodRepository.findAll().stream()
                .filter(paymentMethod -> !paymentMethod.isDeleted())
                .toList();
    }

    @Override
    public List<PaymentMethod> getDeletedPaymentMethods() {
        return paymentMethodRepository.findAll().stream()
                .filter(PaymentMethod::isDeleted)
                .toList();
    }

    @Override
    public Optional<PaymentMethod> getPaymentMethodById(ObjectId id) {
        return paymentMethodRepository.findById(id)
                .filter(paymentMethod -> !paymentMethod.isDeleted());
    }

    @Override
    public Optional<PaymentMethod> updatePaymentMethod(ObjectId id, PaymentMethodDTO paymentMethodDTO) {
        return paymentMethodRepository.findById(id).map(existingMethod -> {
            existingMethod.setName(paymentMethodDTO.getName());
            return paymentMethodRepository.save(existingMethod);
        });
    }

    @Override
    public void deletePaymentMethod(ObjectId id) {
        paymentMethodRepository.findById(id).ifPresent(paymentMethod -> {
            paymentMethod.setDeleted(true);
            paymentMethodRepository.save(paymentMethod);
        });
    }
}
