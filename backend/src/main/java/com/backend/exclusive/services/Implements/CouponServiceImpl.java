package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.CouponDTO;
import com.backend.exclusive.models.Coupon;
import com.backend.exclusive.repositories.CouponRepository;
import com.backend.exclusive.services.CouponService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CouponServiceImpl implements CouponService {

    private final CouponRepository couponRepository;

    @Autowired
    public CouponServiceImpl(CouponRepository couponRepository) {
        this.couponRepository = couponRepository;
    }

    @Override
    public List<Coupon> getAllCoupons() {
        return couponRepository.findAll();
    }

    @Override
    public Optional<Coupon> getCouponById(ObjectId id) {
        return couponRepository.findById(id);
    }

    @Override
    public Coupon createCoupon(CouponDTO couponDTO) {
        Coupon newCoupon = new Coupon();
        newCoupon.setActive(true);
        newCoupon.setCode(couponDTO.getCode());
        newCoupon.setDescription(couponDTO.getDescription());
        newCoupon.setValidFrom(couponDTO.getValidFrom());
        newCoupon.setValidFrom(couponDTO.getValidFrom());
        newCoupon.setDiscountPercentage(couponDTO.getDiscountPercentage());
        newCoupon.setMinimumOrderAmount(couponDTO.getMinimumOrderAmount());
        newCoupon.setCreatedAt(new Date());
        return couponRepository.save(newCoupon);

    }

    @Override
    public Coupon updateCoupon(ObjectId id, CouponDTO couponDetails) {
        Optional<Coupon> optionalCoupon = couponRepository.findById(id);
        if (optionalCoupon.isPresent()) {
            Coupon updateCoupon = optionalCoupon.get();
            updateCoupon.setCode(couponDetails.getCode());
            updateCoupon.setDescription(couponDetails.getDescription());
            updateCoupon.setValidFrom(couponDetails.getValidFrom());
            updateCoupon.setValidFrom(couponDetails.getValidFrom());
            updateCoupon.setDiscountPercentage(couponDetails.getDiscountPercentage());
            updateCoupon.setMinimumOrderAmount(couponDetails.getMinimumOrderAmount());
            updateCoupon.setUpdatedAt(new Date());
            return couponRepository.save(updateCoupon);
        } else {
            throw new RuntimeException("Coupon not found");
        }
    }

    @Override
    public void deleteCoupon(ObjectId id) {
        couponRepository.deleteById(id);
    }
}
