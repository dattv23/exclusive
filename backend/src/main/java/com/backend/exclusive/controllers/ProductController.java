package com.backend.exclusive.controllers;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.services.ProductService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing products.
 */
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    /**
     * Get all products.
     *
     * @return a ResponseEntity containing a list of all products.
     */
    @GetMapping("/all")
    public ResponseEntity<List<Product>> allProducts() {
        List<Product> products = productService.getAll();
        return ResponseEntity.ok(products);
    }

    /**
     * Get a product by its ID.
     *
     * @param id the ID of the product to retrieve.
     * @return a ResponseEntity containing the product, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        Optional<Product> product = productService.getById(new ObjectId(id));
        return product.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Create a new product.
     *
     * @param product the product to create.
     * @return a ResponseEntity containing the created product.
     */
    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> createProduct(@Validated @RequestBody Product product) {
        Product createdProduct = productService.create(product);
        return ResponseEntity.ok(createdProduct);
    }

    /**
     * Update an existing product.
     *
     * @param id             the ID of the product to update.
     * @param productDetails the new details for the product.
     * @return a ResponseEntity containing the updated product.
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> updateProduct(@PathVariable String id, @Validated @RequestBody ProductDTO productDetails) {
        Product updatedProduct = productService.update(new ObjectId(id), productDetails);
        return ResponseEntity.ok(updatedProduct);
    }

    /**
     * Delete a product by its ID.
     *
     * @param id the ID of the product to delete.
     * @return a ResponseEntity with no content status.
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        productService.delete(new ObjectId(id));
        return ResponseEntity.noContent().build();
    }
}
