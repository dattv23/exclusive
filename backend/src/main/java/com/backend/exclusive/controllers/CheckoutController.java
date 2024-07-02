package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.mappers.OrderMapper;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.services.CheckoutService;
import com.backend.exclusive.services.EmailService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/checkout")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<ApiResponse<OrderDTO>> checkout(@RequestBody OrderDTO orderDTO, @RequestParam String paymentMethodId) {
        Order newOrder = checkoutService.processOrder(orderDTO, paymentMethodId);

        // Send order placed email
        String toEmail = userRepository.findById(new ObjectId(orderDTO.getUserId())).get().getEmail();
        emailService.sendOrderPlacedEmail(toEmail);

        System.out.printf(toEmail);
        return ResponseUtil.success(orderMapper.toOrderDTO(newOrder));
    }
}
