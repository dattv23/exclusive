package com.backend.exclusive.repositories;

import com.backend.exclusive.models.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    List<Product> findByIsDeletedFalse();

    List<Product> findByIsDeletedTrue();

    List<Product> findByNameContainingIgnoreCaseAndIsDeletedFalse(String name);
}
