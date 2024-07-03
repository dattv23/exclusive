package com.backend.exclusive.controllers.admin;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.mappers.ProductMapper;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.services.CategoryService;
import com.backend.exclusive.services.CloudinaryService;
import com.backend.exclusive.services.ProductService;
import jakarta.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public String index() {
        return "admin/index";
    }

    //    user part
    @GetMapping("/user")
    public String listUsers() {
        return "admin/user/index";
    }

    //    product part
    // list
    @GetMapping("/product")
    public String listProducts(Model model) {
        model.addAttribute("products", productService.getAll());
        return "admin/product/index";
    }

    // create
    @GetMapping("/products/new")
    public String showCreateProductForm(Model model) {
        model.addAttribute("product", new ProductDTO());
        model.addAttribute("categories", categoryService.getAllCategories());
        return "admin/product/create";
    }

    @PostMapping("/products")
    public String createProduct(@ModelAttribute("product") @Valid ProductDTO productDTO,
                                BindingResult result, Model model,
                                @RequestParam("imageFile") MultipartFile image) throws IOException {
        System.out.println(result);
        if (result.hasErrors()) {
            return "admin/product/create";
        }
        productDTO.setImageUrl(cloudinaryService.uploadImage(image));
        productDTO.setCategoryName(categoryService.getCategoryById(new ObjectId(productDTO.getCategoryId())).get().getName());
        productService.create(productDTO, productDTO.getImageUrl());
        return "redirect:/api/v1/admin/product";
    }

    // edit
    @GetMapping("/products/edit/{id}")
    public String showUpdateProductForm(@PathVariable("id") String id, Model model) {
        Product product = productService.getById(new ObjectId(id)).get();
        ProductDTO productDTO = productMapper.toProductDTO(product);
        productDTO.setRate(product.getRate());
        productDTO.setNumberOfRate(product.getNumberOfRate());
        productDTO.setStatus(product.getStatus());
        model.addAttribute("product", productDTO);
        model.addAttribute("categories", categoryService.getAllCategories());
        return "admin/product/edit";
    }

    @PostMapping("/products/edit/{id}")
    public String updateProduct(@PathVariable("id") String id,
                                @ModelAttribute("product") @Valid ProductDTO productDTO,
                                BindingResult result,
                                Model model,
                                @RequestParam("imageFile") MultipartFile image) throws IOException {
        System.out.println(result);
        System.out.println(productDTO);
        if (result.hasErrors()) {
            return "admin/product/edit";
        }

        if (!image.isEmpty()) {
            productDTO.setImageUrl(cloudinaryService.uploadImage(image));
            productDTO.setCategoryName(categoryService.getCategoryById(new ObjectId(productDTO.getCategoryId())).get().getName());
            productService.update(new ObjectId(id), productDTO, productDTO.getImageUrl());
        } else {
            productDTO.setCategoryName(categoryService.getCategoryById(new ObjectId(productDTO.getCategoryId())).get().getName());
            productService.update(new ObjectId(id), productDTO);
        }
        return "redirect:/api/v1/admin/product";
    }

    // delete
    @GetMapping("/products/delete/{id}")
    public String deleteProduct(@PathVariable("id") String id) {
        productService.delete(new ObjectId(id));
        return "redirect:/api/v1/admin/product";
    }

    //    category part
    @GetMapping("/category")
    public String listCategories() {
        return "admin/category/index";
    }

    //    order part
    @GetMapping("/order")
    public String listOrders() {
        return "admin/order/index";
    }
}
