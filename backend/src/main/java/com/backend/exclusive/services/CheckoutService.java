package com.backend.exclusive.services;

import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.models.Order;

public interface CheckoutService {
    Order processOrder(OrderDTO orderDTO, String paymentMethodId);
}
