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

    Product create(ProductDTO product, String imageUrl);

    Optional<Product> update(ObjectId id, ProductDTO productDetails);

    void delete(ObjectId id);
}
