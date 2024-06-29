package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.mappers.OrderItemMapper;
import com.backend.exclusive.mappers.OrderMapper;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.models.OrderItem;
import com.backend.exclusive.repositories.OrderRepository;
import com.backend.exclusive.services.OrderService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private OrderItemMapper orderItemMapper;

    @Override
    public Order createOrder(OrderDTO orderDTO) {
        Order newOrder = orderMapper.toOrder(orderDTO);
        newOrder.setId(new ObjectId());

        // Manually map orderItems
        List<OrderItem> orderItems = orderDTO.getOrderItems().stream().map(orderItemDTO -> {
            OrderItem orderItem = orderItemMapper.toOrderItem(orderItemDTO);
            orderItem.setId(new ObjectId()); // Set a new ID for each OrderItem
            orderItem.setOrder(newOrder); // Set the reference to the new order
            return orderItem;
        }).collect(Collectors.toList());

        newOrder.setOrderItems(orderItems);

        return orderRepository.save(newOrder);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll().stream()
                .filter(order -> !order.isDeleted())
                .toList();
    }

    @Override
    public List<Order> getDeletedOrders() {
        return orderRepository.findAll().stream()
                .filter(Order::isDeleted)
                .toList();
    }

    @Override
    public Optional<Order> getOrderById(ObjectId id) {
        return orderRepository.findById(id)
                .filter(order -> !order.isDeleted());
    }

    @Override
    public Optional<Order> updateOrder(ObjectId id, OrderDTO orderDTO) {
        return orderRepository.findById(id).map(existingOrder -> {
            Order updatedOrder = orderMapper.toOrder(orderDTO);
            updatedOrder.setId(existingOrder.getId());
            updatedOrder.setOrderItems(existingOrder.getOrderItems());
            orderRepository.save(updatedOrder);
            return updatedOrder;
        });
    }

    @Override
    public void deleteOrder(ObjectId id) {
        orderRepository.findById(id).ifPresent(order -> {
            order.setDeleted(true);
            orderRepository.save(order);
        });
    }

    @Override
    public List<OrderItem> getAllItemsInOrder(ObjectId id) {
        return orderRepository.findById(id).map(Order::getOrderItems).orElse(List.of());
    }

    @Override
    public Optional<Order> getOrderByUserId(ObjectId userId) {
        return orderRepository.findAll().stream()
                .filter(order -> order.getUser().getId().equals(userId)).findFirst();
    }
}
