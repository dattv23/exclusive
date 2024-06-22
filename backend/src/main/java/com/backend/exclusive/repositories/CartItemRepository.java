package com.backend.exclusive.repositories;

import com.backend.exclusive.models.CartItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartItemRepository extends MongoRepository<CartItem, Object> {
}
