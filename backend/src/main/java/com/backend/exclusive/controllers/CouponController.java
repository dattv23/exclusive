package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.CouponDTO;
import com.backend.exclusive.mappers.CouponMapper;
import com.backend.exclusive.models.Coupon;
import com.backend.exclusive.services.CouponService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * REST controller for managing coupons.
 */
@RestController
@RequestMapping("/api/v1/coupons")
public class CouponController {

    @Autowired
    private CouponService couponService;

    @Autowired
    private CouponMapper couponMapper;

    /**
     * Get all coupons.
     *
     * @return a ResponseEntity containing a list of all coupons.
     */
    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<CouponDTO>>> allCoupons() {
        List<Coupon> coupons = couponService.getAllCoupons();
        List<CouponDTO> couponDTOS = coupons.stream()
                .map(couponMapper::toCouponDTO).collect(Collectors.toList());
        return ResponseUtil.success(couponDTOS);
    }

    /**
     * Get a coupon by its ID.
     *
     * @param id the ID of the coupon to retrieve.
     * @return a ResponseEntity containing the coupon, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CouponDTO>> getCouponById(@PathVariable String id) {
        Optional<Coupon> coupon = couponService.getCouponById(new ObjectId(id));
        if (coupon.isPresent()) {
            CouponDTO couponDTO = couponMapper.toCouponDTO(coupon.get());
            return ResponseUtil.success(couponDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Create a new coupon.
     *
     * @param couponDTO the coupon to create.
     * @return a ResponseEntity containing the created coupon.
     */
    @PostMapping("/add")
    public ResponseEntity<ApiResponse<CouponDTO>> createCoupon(@Validated @RequestBody CouponDTO couponDTO) {
        Coupon createdCoupon = couponService.createCoupon(couponDTO);
        return ResponseUtil.success(couponMapper.toCouponDTO(createdCoupon));
    }

    /**
     * Update an existing coupon.
     *
     * @param id        the ID of the coupon to update.
     * @param couponDTO the new details for the coupon.
     * @return a ResponseEntity containing the updated coupon.
     */
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CouponDTO>> updateCoupon(@PathVariable String id, @Validated @RequestBody CouponDTO couponDTO) {
        Coupon updatedCoupon = couponService.updateCoupon(new ObjectId(id), couponDTO);
        return ResponseUtil.success(couponMapper.toCouponDTO(updatedCoupon));
    }

    /**
     * Delete a coupon by its ID.
     *
     * @param id the ID of the coupon to delete.
     * @return a ResponseEntity with no content status.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCoupon(@PathVariable String id) {
        couponService.deleteCoupon(new ObjectId(id));
        return ResponseEntity.noContent().build();
    }
}
