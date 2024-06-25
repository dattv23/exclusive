package com.backend.exclusive.services;

import com.backend.exclusive.dtos.PaymentMethodDTO;
import com.backend.exclusive.models.PaymentMethod;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface PaymentMethodService {
    PaymentMethod createPaymentMethod(PaymentMethodDTO paymentMethodDTO);

    List<PaymentMethod> getAllPaymentMethods();

    List<PaymentMethod> getDeletedPaymentMethods();

    Optional<PaymentMethod> getPaymentMethodById(ObjectId id);

    Optional<PaymentMethod> updatePaymentMethod(ObjectId id, PaymentMethodDTO paymentMethodDTO);

    void deletePaymentMethod(ObjectId id);
}
