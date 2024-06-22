package com.backend.exclusive.repositories;

import com.backend.exclusive.models.Coupon;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CouponRepository extends MongoRepository<Coupon, ObjectId> {
}
