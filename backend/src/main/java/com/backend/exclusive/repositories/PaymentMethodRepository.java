package com.backend.exclusive.repositories;

import com.backend.exclusive.models.PaymentMethod;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentMethodRepository extends MongoRepository<PaymentMethod, ObjectId> {
}
