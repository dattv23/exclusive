package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.dtos.OrderItemDTO;
import com.backend.exclusive.mappers.OrderMapper;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.models.User;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.services.CheckoutService;
import com.backend.exclusive.services.EmailService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

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
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        // init data order
        orderDTO.setUserId(currentUser.getId().toString());
        orderDTO.setOrderDate(new Date());

        List<OrderItemDTO> orderItemDTOS = orderDTO.getOrderItems();
        double total = orderItemDTOS.stream()
                .mapToDouble(OrderItemDTO::getSubtotal)
                .sum();
        orderDTO.setTotalAmount(total);

        orderDTO.setStatus("Pending");
        Order newOrder = checkoutService.processOrder(orderDTO, paymentMethodId);

        // Send order placed email
        String toEmail = userRepository.findById(new ObjectId(orderDTO.getUserId())).get().getEmail();
        emailService.sendOrderPlacedEmail(toEmail);

        return ResponseUtil.success(orderMapper.toOrderDTO(newOrder));
    }
}
