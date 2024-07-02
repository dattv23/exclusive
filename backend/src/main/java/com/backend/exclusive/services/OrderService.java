package com.backend.exclusive.services;

import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.models.OrderItem;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    Order createOrder(OrderDTO orderDTO);

    List<Order> getAllOrders();

    List<Order> getDeletedOrders();

    Optional<Order> getOrderById(ObjectId id);

    Optional<Order> updateOrder(ObjectId id, OrderDTO orderDTO);

    void deleteOrder(ObjectId id);

    // Addition
    List<OrderItem> getAllItemsInOrder(ObjectId id);

    Optional<Order> getOrderByUserId(ObjectId userId);

    Order updateStatus(ObjectId id, String status);
}
