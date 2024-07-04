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
    public Order processOrder(OrderDTO orderDTO, String paymentMethodId) {
        Order newOrder = orderService.createOrder(orderDTO);
        System.out.println("3" + newOrder);
        // Process payment
        PaymentDTO paymentDTO = new PaymentDTO();
        paymentDTO.setOrderId(newOrder.getId().toHexString());
        paymentDTO.setMethodPayId(paymentMethodId);
        paymentDTO.setAmount(newOrder.getTotalAmount());
        paymentDTO.setStatus("Pending");
        paymentService.createPayment(paymentDTO);

        System.out.println("4" + paymentDTO);
        return newOrder;
    }
}
