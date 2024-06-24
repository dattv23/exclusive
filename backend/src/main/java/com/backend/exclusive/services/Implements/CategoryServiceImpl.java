package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.CategoryDTO;
import com.backend.exclusive.models.Category;
import com.backend.exclusive.repositories.CategoryRepository;
import com.backend.exclusive.services.CategoryService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findByIsDeletedFalse();
    }

    @Override
    public List<Category> getDeletedCategories() {
        return categoryRepository.findByIsDeletedTrue();
    }

    @Override
    public Optional<Category> getCategoryById(ObjectId id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Category createCategory(CategoryDTO category) {
        Category newCategory = new Category();
        newCategory.setParentId(category.getParentId());
        newCategory.setName(category.getName());
        newCategory.setDescription(category.getDescription());
        newCategory.setDeleted(false);
        newCategory.setCreatedAt(new Date());
        return categoryRepository.save(newCategory);
    }

    @Override
    public Optional<Category> updateCategory(ObjectId id, CategoryDTO categoryDetails) {
        return categoryRepository.findById(id).map(category -> {
            category.setName(categoryDetails.getName());
            category.setDescription(categoryDetails.getDescription());
            category.setUpdatedAt(new Date());
            return categoryRepository.save(category);
        });
    }

    @Override
    public void deleteCategory(ObjectId id) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if (optionalCategory.isPresent()) {
            Category category = optionalCategory.get();
            category.setDeleted(true);
            categoryRepository.save(category);
        } else {
            throw new RuntimeException("Category not found with id " + id);
        }
    }
}
