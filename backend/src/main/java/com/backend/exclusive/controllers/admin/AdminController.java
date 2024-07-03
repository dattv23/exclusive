package com.backend.exclusive.controllers.admin;

import com.backend.exclusive.dtos.ProductDTO;
import com.backend.exclusive.mappers.ProductMapper;
import com.backend.exclusive.repositories.ProductRepository;
import com.backend.exclusive.services.ProductService;
import jakarta.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private ProductService productService;

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
    @GetMapping("/product")
    public String listProducts(Model model) {
        model.addAttribute("products", productService.getAll());
        return "admin/product/index";
    }

    @GetMapping("/products/new")
    public String showCreateProductForm(Model model) {
        model.addAttribute("product", new ProductDTO());
        return "admin/product/create";
    }

    @PostMapping("/products")
    public String createProduct(@ModelAttribute("product") @Valid ProductDTO productDTO, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "admin/product/create";
        }
        productRepository.save(productMapper.toProduct(productDTO));
        return "redirect:/admin/products";
    }

    @GetMapping("/products/edit/{id}")
    public String showUpdateProductForm(@PathVariable("id") String id, Model model) {
        ProductDTO productDTO = productMapper.toProductDTO(productService.getById(new ObjectId(id)).get());
        model.addAttribute("product", productDTO);
        return "admin/product/edit";
    }

    @PostMapping("/products/edit/{id}")
    public String updateProduct(@PathVariable("id") String id, @ModelAttribute("product") @Valid ProductDTO productDTO, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "admin/product/edit";
        }
        productService.update(new ObjectId(id), productDTO);
        return "redirect:/admin/products";
    }

    @GetMapping("/products/delete/{id}")
    public String deleteProduct(@PathVariable("id") String id) {
        productService.delete(new ObjectId(id));
        return "redirect:/admin/products";
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
