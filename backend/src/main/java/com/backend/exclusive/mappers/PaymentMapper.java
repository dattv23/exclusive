package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.PaymentDTO;
import com.backend.exclusive.models.Payment;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PaymentMapper {
    PaymentMapper INSTANCE = Mappers.getMapper(PaymentMapper.class);

    PaymentDTO toPaymentDTO(Payment payment);

    Payment toPayment(PaymentDTO paymentDTO);

    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
