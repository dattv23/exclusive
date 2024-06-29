package com.backend.exclusive.services;

import com.backend.exclusive.dtos.OrderDTO;

public interface CheckoutService {
    String processOrder(OrderDTO orderDTO, String paymentMethodId);
}
