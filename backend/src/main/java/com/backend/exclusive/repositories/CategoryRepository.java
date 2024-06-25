package com.backend.exclusive.repositories;

import com.backend.exclusive.models.Category;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CategoryRepository extends MongoRepository<Category, ObjectId> {
    List<Category> findByIsDeletedFalse();
    List<Category> findByIsDeletedTrue();
}

