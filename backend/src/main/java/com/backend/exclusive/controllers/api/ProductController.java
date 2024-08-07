package com.backend.exclusive.controllers.api;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.mappers.ProductMapper;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.services.CloudinaryService;
import com.backend.exclusive.services.ProductService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * REST controller for managing products.
 */
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    private final ProductService productService;

    private final CloudinaryService cloudinaryService;

    private final ProductMapper productMapper;

    @Autowired
    public ProductController(ProductService productService, CloudinaryService cloudinaryService, ProductMapper productMapper) {
        this.productService = productService;
        this.cloudinaryService = cloudinaryService;
        this.productMapper = productMapper;
    }

    /**
     * Get all products(expect deleted products).
     *
     * @return a ResponseEntity containing a list of all products.
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<ProductDTO>>> allProducts() {
        List<Product> products = productService.getAll();
        List<ProductDTO> productDTOList = products.stream().map(productMapper::toProductDTO).collect(Collectors.toList());
        return ResponseUtil.success(productDTOList);
    }

    /**
     * Get all deleted products.
     *
     * @return a ResponseEntity containing a list of all products.
     */
    @GetMapping("/deleted")
    public ResponseEntity<ApiResponse<List<ProductDTO>>> allDeletedCategories() {
        List<Product> products = productService.getAllDeleted();
        List<ProductDTO> productDTOList = products.stream().map(productMapper::toProductDTO).collect(Collectors.toList());
        return ResponseUtil.success(productDTOList);
    }

    /**
     * Get a product by its ID.
     *
     * @param id the ID of the product to retrieve.
     * @return a ResponseEntity containing the product, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductDTO>> getProductById(@PathVariable String id) {
        Optional<Product> product = productService.getById(new ObjectId(id));
        System.out.println(product);
        return ResponseUtil.success(productMapper.toProductDTO(product.get()));
    }

    /**
     * Get a product by its Category id.
     *
     * @param id the Category id of the product to retrieve.
     * @return a ResponseEntity containing the product, or a 404 status if not found.
     */
//    @GetMapping("/getByCategory/{id}")
//    public ResponseEntity<ApiResponse<List<ProductDTO>>> getProductsByCategoryId(@PathVariable String id) {
//        List<Product> products = productService.getProductsByCategoryId(new ObjectId(id));
//        List<ProductDTO> productDTOList = products.stream().map(productMapper::toProductDTO).collect(Collectors.toList());
//        return ResponseUtil.success(productDTOList);
//    }

    /**
     * Create a new product.
     *
     * @param product the product to create.
     * @return a ResponseEntity containing the created product.
     */
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ApiResponse<ProductDTO>>
    createProduct(@Validated @ModelAttribute ProductDTO product,
                  @RequestParam("image") MultipartFile image) throws IOException {

//        List<String> imageUrls = images.stream()
//                .map(image -> {
//                    try {
//                        return cloudinaryService.uploadImage(image);
//                    } catch (IOException e) {
//                        throw new RuntimeException("Failed to upload image", e);
//                    }
//                })
//                .collect(Collectors.toList());
//

        String imageUrl = cloudinaryService.uploadImage(image);
        System.out.println(product);
        System.out.println(imageUrl);
        Product createdProduct = productService.create(product, imageUrl);
        return ResponseUtil.success(productMapper.toProductDTO(createdProduct));
    }

    /**
     * Update an existing product.
     *
     * @param id             the ID of the product to update.
     * @param productDetails the new details for the product.
     * @return a ResponseEntity containing the updated product.
     */
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<ProductDTO>> updateProduct(@PathVariable String id,
                                                                 @Validated @ModelAttribute ProductDTO productDetails,
                                                                 @RequestParam("image") MultipartFile image) throws IOException {
        String imageUrl = null;
        Product updatedProduct = new Product();
        if (image != null && !image.isEmpty()) {
            imageUrl = cloudinaryService.uploadImage(image);
            updatedProduct = productService.update(new ObjectId(id), productDetails, imageUrl).get();
        } else {
            updatedProduct = productService.update(new ObjectId(id), productDetails).get();
        }
        return ResponseUtil.success(productMapper.toProductDTO(updatedProduct));
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

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<ProductDTO>>> searchProductsByName(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Integer price
    ) {

        List<Product> products = productService.findProducts(name, category, price);
        System.out.println(products);
        List<ProductDTO> productDTOList = products.stream().map(productMapper::toProductDTO).collect(Collectors.toList());
        return ResponseUtil.success(productDTOList);
    }
}
