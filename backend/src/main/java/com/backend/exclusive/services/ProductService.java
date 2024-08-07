package com.backend.exclusive.services;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.models.Product;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> getAll();

    List<Product> getAllDeleted();

    Optional<Product> getById(ObjectId id);

    List<Product> getProductsByCategoryId(ObjectId id);

    List<Product> findProducts(String name, String categoryName, Integer price);

    Product create(ProductDTO product, String imageUrl);

    Optional<Product> update(ObjectId id, ProductDTO productDetails);

    Optional<Product> update(ObjectId id, ProductDTO productDetails, String imageUrl);

    void updateProductQuantity(ObjectId id, int quantityChange);

    void delete(ObjectId id);

    List<Product> getProductByCategoryId(ObjectId id);

    List<Product> getProductsByCategoryName(String category);

    List<Product> getProductsByStatus(String status);

    List<Product> getProductsByCategoryNameAndStatus(String category, String status);

    void setDiscountForCategoryName(String category, double discountPercent);

    void setDiscountForStatus(String status, double discountPercent);

    void setDiscountForCategoryNameAndStatus(String category, String status, double discountPercent);

    void setDiscountAll(double discountPercent);
}
