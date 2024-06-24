package com.backend.exclusive.controllers;

import com.backend.exclusive.dtos.CouponDTO;
import com.backend.exclusive.models.Coupon;
import com.backend.exclusive.services.CouponService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing coupons.
 */
@RestController
@RequestMapping("/api/v1/coupons")
public class CouponController {

    private final CouponService couponService;

    @Autowired
    public CouponController(CouponService couponService) {
        this.couponService = couponService;
    }

    /**
     * Get all coupons.
     *
     * @return a ResponseEntity containing a list of all coupons.
     */
    @GetMapping("/all")
    public ResponseEntity<List<Coupon>> allCoupons() {
        List<Coupon> coupons = couponService.getAllCoupons();
        return ResponseEntity.ok(coupons);
    }

    /**
     * Get a coupon by its ID.
     *
     * @param id the ID of the coupon to retrieve.
     * @return a ResponseEntity containing the coupon, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Coupon> getCouponById(@PathVariable String id) {
        Optional<Coupon> coupon = couponService.getCouponById(new ObjectId(id));
        return coupon.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Create a new coupon.
     *
     * @param couponDTO the coupon to create.
     * @return a ResponseEntity containing the created coupon.
     */
    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Coupon> createCoupon(@Validated @RequestBody CouponDTO couponDTO) {
        Coupon createdCoupon = couponService.createCoupon(couponDTO);
        return ResponseEntity.ok(createdCoupon);
    }

    /**
     * Update an existing coupon.
     *
     * @param id          the ID of the coupon to update.
     * @param couponDTO the new details for the coupon.
     * @return a ResponseEntity containing the updated coupon.
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Coupon> updateCoupon(@PathVariable String id, @Validated @RequestBody CouponDTO couponDTO) {
        Coupon updatedCoupon = couponService.updateCoupon(new ObjectId(id), couponDTO);
        return ResponseEntity.ok(updatedCoupon);
    }

    /**
     * Delete a coupon by its ID.
     *
     * @param id the ID of the coupon to delete.
     * @return a ResponseEntity with no content status.
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteCoupon(@PathVariable String id) {
        couponService.deleteCoupon(new ObjectId(id));
        return ResponseEntity.noContent().build();
    }
}
