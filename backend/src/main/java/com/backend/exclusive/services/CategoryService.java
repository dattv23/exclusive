package com.backend.exclusive.services;

import com.backend.exclusive.dtos.CategoryDTO;
import com.backend.exclusive.models.Category;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface CategoryService {
    List<Category> getAllCategories();

    List<Category> getDeletedCategories();

    Optional<Category> getCategoryById(ObjectId id);

    Category createCategory(CategoryDTO category);

    Optional<Category> updateCategory(ObjectId id, CategoryDTO categoryDetails);

    void deleteCategory(ObjectId id);

    Map<String, Double> getCategoryRevenueData();
}
