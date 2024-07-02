package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.PaymentMethodDTO;
import com.backend.exclusive.models.PaymentMethod;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PaymentMethodMapper {
    PaymentMethodMapper INSTANCE = Mappers.getMapper(PaymentMethodMapper.class);

    PaymentMethodDTO toPaymentMethodDTO(PaymentMethod paymentMethod);

    PaymentMethod toPaymentMethod(PaymentMethodDTO paymentMethodDTO);

    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
