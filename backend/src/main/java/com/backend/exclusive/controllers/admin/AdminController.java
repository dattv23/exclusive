package com.backend.exclusive.controllers.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/admin")
public class AdminController {

    @GetMapping
    public String index() {
        return "admin/index";
    }

    @GetMapping("/user")
    public String listUsers() {
        return "admin/user/index";
    }

    @GetMapping("/product")
    public String listProducts() {
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
