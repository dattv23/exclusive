package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.CouponDTO;
import com.backend.exclusive.models.Coupon;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CouponMapper {
    CouponMapper INSTANCE = Mappers.getMapper(CouponMapper.class);

    CouponDTO toCouponDTO(Coupon payment);

    Coupon toCoupon(CouponDTO paymentDTO);

    default String map(ObjectId value) {
        return value != null ? value.toHexString() : null;
    }

    default ObjectId map(String value) {
        return value != null ? new ObjectId(value) : null;
    }
}
