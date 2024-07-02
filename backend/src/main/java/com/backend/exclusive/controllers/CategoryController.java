package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.CategoryDTO;
import com.backend.exclusive.mappers.CategoryMapper;
import com.backend.exclusive.models.Category;
import com.backend.exclusive.services.CategoryService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CategoryMapper categoryMapper;

    @GetMapping
    public ResponseEntity<ApiResponse<List<CategoryDTO>>> allCategories() {
        List<Category> categories = categoryService.getAllCategories();
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(categoryMapper::toCategoryDTO).collect(Collectors.toList());
        return ResponseUtil.success(categoryDTOS);
    }

    @GetMapping("/deleted")
    public ResponseEntity<ApiResponse<List<CategoryDTO>>> allDeletedCategories() {
        List<Category> categories = categoryService.getDeletedCategories();
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(categoryMapper::toCategoryDTO).collect(Collectors.toList());
        return ResponseUtil.success(categoryDTOS);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<CategoryDTO>> getCategoryById(@PathVariable String id) {
        Optional<Category> category = categoryService.getCategoryById(new ObjectId(id));
        return ResponseUtil.success(categoryMapper.toCategoryDTO(category.get()));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CategoryDTO>> createCategory(@RequestBody CategoryDTO category) {
        Category createdCategory = categoryService.createCategory(category);
        return ResponseUtil.success(categoryMapper.toCategoryDTO(createdCategory));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<CategoryDTO>> updateCategory(@PathVariable String id, @RequestBody CategoryDTO categoryDetails) {
        Optional<Category> updatedCategory = categoryService.updateCategory(new ObjectId(id), categoryDetails);
        return ResponseUtil.success(categoryMapper.toCategoryDTO(updatedCategory.get()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable String id) {
        try {
            categoryService.deleteCategory(new ObjectId(id));
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
