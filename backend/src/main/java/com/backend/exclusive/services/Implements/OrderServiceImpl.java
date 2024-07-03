package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.mappers.OrderItemMapper;
import com.backend.exclusive.mappers.OrderMapper;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.models.OrderItem;
import com.backend.exclusive.models.Payment;
import com.backend.exclusive.models.Product;
import com.backend.exclusive.repositories.OrderItemRepository;
import com.backend.exclusive.repositories.OrderRepository;
import com.backend.exclusive.repositories.PaymentRepository;
import com.backend.exclusive.repositories.ProductRepository;
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
    private OrderItemRepository orderItemRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private OrderItemMapper orderItemMapper;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    PaymentRepository paymentRepository;

    @Override
    public Order createOrder(OrderDTO orderDTO) {
        Order newOrder = orderMapper.toOrder(orderDTO);
        newOrder.setId(new ObjectId());

        // Manually map orderItems
        List<OrderItem> orderItems = orderDTO.getOrderItems().stream().map(orderItemDTO -> {
            OrderItem orderItem = orderItemMapper.toOrderItem(orderItemDTO);
            orderItem.setId(new ObjectId());
            orderItemRepository.save(orderItem);
            return orderItem;
        }).collect(Collectors.toList());

        newOrder.setOrderItems(orderItems);
        return orderRepository.save(newOrder);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll().stream().filter(order -> !order.isDeleted()).toList();
    }

    @Override
    public List<Order> getDeletedOrders() {
        return orderRepository.findAll().stream().filter(Order::isDeleted).toList();
    }

    @Override
    public Optional<Order> getOrderById(ObjectId id) {
        Optional<Order> orderOptional = orderRepository.findById(id).filter(order -> !order.isDeleted());
        System.out.println(orderOptional);
        return orderOptional;
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
        return orderRepository.findAll().stream().filter(order -> order.getUser().getId().equals(userId)).findFirst();
    }

    @Override
    public Order updateStatus(ObjectId id, String status) {
        Order order = orderRepository.findById(id).filter(item -> !item.isDeleted()).orElseThrow(() -> new RuntimeException("Order not found"));

        // Update product quantities based on status
        if ("Delivering".equals(status)) {
            order.getOrderItems().forEach(orderItem -> {
                Product product = orderItem.getProduct();
                product.setStockQuantity(product.getStockQuantity() - orderItem.getQuantity());
                productRepository.save(product);
            });
        } else if ("Cancelled".equals(status) && !"Cancelled".equals(order.getStatus())) {
            order.getOrderItems().forEach(orderItem -> {
                Product product = orderItem.getProduct();
                product.setStockQuantity(product.getStockQuantity() + orderItem.getQuantity());
                productRepository.save(product);
            });
        }

        order.setStatus(status);
        return orderRepository.save(order);
    }

    @Override
    public String getPayStatus(ObjectId id) {
        return paymentRepository.findAll()
                .stream()
                .filter(payment -> payment.getOrder().getId().equals(id))
                .map(Payment::getStatus)
                .findFirst()
                .orElse("Payment status not found");
    }

    @Override
    public List<Order> ordersPending() {
        return orderRepository.findAll()
                .stream().filter(order -> order.getStatus().equals("Pending"))
                .toList();
    }
}
