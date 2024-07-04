package com.backend.exclusive.controllers.admin;

import com.backend.exclusive.services.CategoryService;
import com.backend.exclusive.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/dashboard")
public class DashboardController {
    @Autowired
    private PaymentService paymentService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/earnings")
    public List<Integer> getEarnings() {
        return paymentService.getMonthlyEarnings();
    }

    @GetMapping("/category-revenue-data")
    public Map<String, Double> getCategoryRevenueData() {
        return categoryService.getCategoryRevenueData();
    }
}
