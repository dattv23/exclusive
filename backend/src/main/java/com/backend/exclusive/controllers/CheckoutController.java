package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.services.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/checkout")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @PostMapping
    public ResponseEntity<ApiResponse<String>> checkout(@RequestBody OrderDTO orderDTO, @RequestParam String paymentMethodId) {
        String confirmation = checkoutService.processOrder(orderDTO, paymentMethodId);

        return ResponseUtil.success(confirmation);
    }
}
