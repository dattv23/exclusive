package com.backend.exclusive.controllers.admin;

import com.backend.exclusive.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/admin")
public class AdminController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public String index() {
        return "admin/index";
    }

    @GetMapping("/user")
    public String listUsers() {
        return "admin/user/index";
    }

    @GetMapping("/product")
    public String listProducts(Model model) {
        model.addAttribute("products", productService.getAll());
        return "admin/product/index";
    }

    @GetMapping("/category")
    public String listCategories() {
        return "admin/category/index";
    }

    @GetMapping("/order")
    public String listOrders() {
        return "admin/order/index";
    }
}
