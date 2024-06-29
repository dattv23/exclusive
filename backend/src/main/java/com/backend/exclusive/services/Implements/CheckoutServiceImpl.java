package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.dtos.PaymentDTO;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.services.CheckoutService;
import com.backend.exclusive.services.OrderService;
import com.backend.exclusive.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @Override
    public String processOrder(OrderDTO orderDTO, String paymentMethodId) {
        // Validate order
        Order newOrder = orderService.createOrder(orderDTO);
        // Process payment
        PaymentDTO paymentDTO = new PaymentDTO();
        paymentDTO.setOrderId(newOrder.getId().toHexString());
        paymentDTO.setMethodPayId(paymentMethodId);
        paymentDTO.setAmount(newOrder.getTotalAmount());
        paymentDTO.setStatus("Pending");
        paymentService.createPayment(paymentDTO);
        // Save order to database
        // Return order confirmation

        // For simplicity, we're just returning a confirmation message
        return "Order processed successfully for customer: " + orderDTO.getUserId();
    }
}
