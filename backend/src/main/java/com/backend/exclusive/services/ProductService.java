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

    List<Product> searchProductsByName(String name);

    Product create(ProductDTO product, String imageUrl);

    Optional<Product> update(ObjectId id, ProductDTO productDetails);

    Optional<Product> update(ObjectId id, ProductDTO productDetails, String imageUrl);

    void delete(ObjectId id);
}
