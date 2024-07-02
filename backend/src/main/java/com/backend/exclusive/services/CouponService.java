package com.backend.exclusive.services;

import com.backend.exclusive.dtos.CouponDTO;
import com.backend.exclusive.models.Coupon;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface CouponService {
    List<Coupon> getAllCoupons();

    Optional<Coupon> getCouponById(ObjectId id);

    Coupon createCoupon(CouponDTO couponDTO);

    Coupon updateCoupon(ObjectId id, CouponDTO couponDTO);

    void deleteCoupon(ObjectId id);
}
