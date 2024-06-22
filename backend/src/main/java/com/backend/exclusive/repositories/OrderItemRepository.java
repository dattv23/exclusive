package com.backend.exclusive.repositories;

import com.backend.exclusive.models.OrderItem;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderItemRepository extends MongoRepository<OrderItem, ObjectId> {
}
