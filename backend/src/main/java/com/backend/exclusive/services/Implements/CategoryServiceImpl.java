package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.CategoryDTO;
import com.backend.exclusive.models.*;
import com.backend.exclusive.repositories.*;
import com.backend.exclusive.services.CategoryService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private ProductRepository productRepository;

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

    @Override
    public Map<String, Double> getCategoryRevenueData() {
        List<Payment> successfulPayments = paymentRepository.findByStatus("Success");
        Map<String, Double> revenueByCategory = new HashMap<>();

        for (Payment payment : successfulPayments) {
            Order order = orderRepository.findById(payment.getOrder().getId()).orElse(null);
            if (order != null) {
                List<OrderItem> orderItems = orderItemRepository.findAllById(order.getOrderItems().stream().map(OrderItem::getId).collect(Collectors.toList()));
                for (OrderItem orderItem : orderItems) {
                    Product product = productRepository.findById(orderItem.getProduct().getId()).orElse(null);
                    if (product != null) {
                        Category category = categoryRepository.findById(product.getCategory().getId()).orElse(null);
                        if (category != null) {
                            String categoryName = category.getName();
                            double orderItemTotal = orderItem.getSubtotal();
                            revenueByCategory.put(categoryName, revenueByCategory.getOrDefault(categoryName, 0.0) + orderItemTotal);
                        }
                    }
                }
            }
        }
        System.out.println(revenueByCategory);
        return revenueByCategory;
    }
}
