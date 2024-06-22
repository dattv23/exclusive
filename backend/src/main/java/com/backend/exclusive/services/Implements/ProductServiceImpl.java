package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.services.ProductService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getById(ObjectId id) {
        return productRepository.findById(id);
    }

    @Override
    public Product create(Product product) {
        product.setId(ObjectId.get());
        product.setCreatedAt(new Date());
        product.setUpdatedAt(new Date());
        return productRepository.save(product);
    }

    @Override
    public Product update(ObjectId id, ProductDTO productDetails) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setCategory(productDetails.getCategory());
            product.setName(productDetails.getName());
            product.setRegularPrice(productDetails.getRegularPrice());
            product.setDiscountPrice(productDetails.getDiscountPrice());
            product.setStockQuantity(productDetails.getStockQuantity());
            product.setDescription(productDetails.getDescription());
            product.setShortDescription(productDetails.getShortDescription());
            product.setUpdatedAt(new Date());
            return productRepository.save(product);
        } else {
            throw new RuntimeException("Product not found with id " + id);
        }
    }

    @Override
    public void delete(ObjectId id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setDeleted(true);
            productRepository.save(product);
        } else {
            throw new RuntimeException("Product not found with id " + id);
        }
    }
}
