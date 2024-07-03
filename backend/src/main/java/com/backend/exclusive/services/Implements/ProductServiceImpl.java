package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.mappers.ProductMapper;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.services.CategoryService;
import com.backend.exclusive.services.ProductService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Product> getAll() {
        return productRepository.findByIsDeletedFalse();
    }

    @Override
    public List<Product> getAllDeleted() {
        return productRepository.findByIsDeletedTrue();
    }

    @Override
    public Optional<Product> getById(ObjectId id) {
        return productRepository.findById(id)
                .filter(product -> !product.isDeleted());
    }

    @Override
    public List<Product> getProductsByCategoryId(ObjectId id) {
        return productRepository.findAll()
                .stream()
                .filter(product -> product.getCategory().getId().equals(id))
                .collect(Collectors.toList());
    }

    @Override
    public List<Product> findProducts(String name, String categoryName, Integer price) {
        Query query = new Query();

        if (name != null) {
            query.addCriteria(Criteria.where("name").regex(name, "i"));
        }
        if (categoryName != null) {
            query.addCriteria(Criteria.where("categoryName").regex(categoryName, "i"));
        }
        if (price != null) {
            query.addCriteria(Criteria.where("regularPrice").is(price));
        }
        query.addCriteria(Criteria.where("isDeleted").is(false));
        System.out.println(query);

        return mongoTemplate.find(query, Product.class);
    }

    @Override
    public Product create(ProductDTO product, String imageUrl) {
        Product newProduct = new Product();

        newProduct.setId(new ObjectId());
        newProduct.setCategory(categoryService.getCategoryById(new ObjectId(product.getCategoryId())).get());
        newProduct.setName(product.getName());
        newProduct.setRegularPrice(product.getRegularPrice());
        newProduct.setStockQuantity(product.getStockQuantity());
        newProduct.setDescription(product.getDescription());
        newProduct.setShortDescription(product.getShortDescription());
        newProduct.setImageUrl(imageUrl);
        newProduct.setCategoryName(newProduct.getCategory().getName());
        newProduct.setRate(product.getRate());
        newProduct.setNumberOfRate(product.getNumberOfRate());
        newProduct.setStatus(product.getStatus());
        newProduct.setDeleted(false);
        newProduct.setCreatedAt(new Date());

        System.out.println("New Product: " + newProduct);
        return productRepository.save(newProduct);
    }

    @Override
    public Optional<Product> update(ObjectId id, ProductDTO productDetails) {
        return productRepository.findById(id).map(product -> {
            product.setCategory(categoryService.getCategoryById(new ObjectId(productDetails.getCategoryId())).get());
            product.setCategoryName(categoryService.getCategoryById(new ObjectId(productDetails.getCategoryId())).get().getName());
            product.setName(productDetails.getName());
            product.setRegularPrice(productDetails.getRegularPrice());
            product.setStockQuantity(productDetails.getStockQuantity());
            product.setDescription(productDetails.getDescription());
            product.setShortDescription(productDetails.getShortDescription());
            product.setRate(productDetails.getRate());
            product.setNumberOfRate(productDetails.getNumberOfRate());
            product.setStatus(productDetails.getStatus());
            product.setCategoryName(productDetails.getCategoryName());
            product.setUpdatedAt(new Date());
            return productRepository.save(product);
        });
    }

    @Override
    public Optional<Product> update(ObjectId id, ProductDTO productDetails, String imageUrl) {
        return productRepository.findById(id).map(product -> {
            product.setCategory(categoryService.getCategoryById(new ObjectId(productDetails.getCategoryId())).get());
            product.setCategoryName(categoryService.getCategoryById(new ObjectId(productDetails.getCategoryId())).get().getName());
            product.setName(productDetails.getName());
            product.setRegularPrice(productDetails.getRegularPrice());
            product.setStockQuantity(productDetails.getStockQuantity());
            product.setDescription(productDetails.getDescription());
            product.setShortDescription(productDetails.getShortDescription());
            product.setImageUrl(imageUrl);
            product.setRate(productDetails.getRate());
            product.setNumberOfRate(productDetails.getNumberOfRate());
            product.setStatus(productDetails.getStatus());
            product.setCategoryName(productDetails.getCategoryName());
            product.setUpdatedAt(new Date());
            return productRepository.save(product);
        });
    }

    @Override
    public void updateProductQuantity(ObjectId id, int quantityChange) {
        productRepository.findById(id).ifPresent(product -> {
            product.setStockQuantity(product.getStockQuantity() + quantityChange);
            System.out.println("ProductServiceImpl-updateProductQuantity: " + product.getStockQuantity());
            productRepository.save(product);
        });
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
