package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.OrderDTO;
import com.backend.exclusive.mappers.OrderMapper;
import com.backend.exclusive.models.Order;
import com.backend.exclusive.models.OrderItem;
import com.backend.exclusive.services.OrderService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderMapper orderMapper;

//    /**
//     * Checkout endpoint for processing an order.
//     *
//     * @param orderDTO the checkout request containing user, payment, and order details.
//     * @return a ResponseEntity containing the created Order.
//     */
//    public ResponseEntity<ApiResponse<OrderDTO>> checkout(@Validated @RequestBody OrderDTO orderDTO, String paymentMethodId) {
//        Order createdOrder = orderService.checkout(orderDTO, paymentMethodId);
//
//        return ResponseUtil.success(orderService.toOrderDTO(createdOrder));
//    }

    /**
     * Get all Orders.
     *
     * @return a ResponseEntity containing a list of all Orders.
     */
    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<OrderDTO>>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        List<OrderDTO> orderDTOS = orders.stream().map(orderMapper::toOrderDTO).collect(Collectors.toList());
        return ResponseUtil.success(orderDTOS);
    }

    /**
     * Get all deleted Orders.
     *
     * @return a ResponseEntity containing a list of all deleted Orders.
     */
    @GetMapping("/deleted")
    public ResponseEntity<ApiResponse<List<OrderDTO>>> getDeletedOrders() {
        List<Order> orders = orderService.getDeletedOrders();
        List<OrderDTO> orderDTOS = orders.stream().map(orderMapper::toOrderDTO).collect(Collectors.toList());
        return ResponseUtil.success(orderDTOS);
    }

    /**
     * Get an Order by its ID.
     *
     * @param id the ID of the Order to retrieve.
     * @return a ResponseEntity containing the Order, or a 404 status if not found.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<OrderDTO>> getOrderById(@PathVariable String id) {
        Optional<Order> order = orderService.getOrderById(new ObjectId(id));
        System.out.println(order);
        if (order.isPresent()) {
            OrderDTO orderDTO = orderMapper.toOrderDTO(order.get());
            return ResponseUtil.success(orderDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Create a new Order.
     *
     * @param orderDTO the Order to create.
     * @return a ResponseEntity containing the created Order.
     */
    @PostMapping("/add")
    public ResponseEntity<ApiResponse<OrderDTO>> createOrder(@Validated @RequestBody OrderDTO orderDTO) {
        Order createdOrder = orderService.createOrder(orderDTO);
        return ResponseUtil.success(orderMapper.toOrderDTO(createdOrder));
    }

    /**
     * Update an existing Order.
     *
     * @param id       the ID of the Order to update.
     * @param orderDTO the new details for the Order.
     * @return a ResponseEntity containing the updated Order.
     */
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<OrderDTO>> updateOrder(@PathVariable String id, @Validated @RequestBody OrderDTO orderDTO) {
        Optional<Order> updatedOrder = orderService.updateOrder(new ObjectId(id), orderDTO);
        if (updatedOrder.isPresent()) {
            return ResponseUtil.success(orderMapper.toOrderDTO(updatedOrder.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Delete an existing Order.
     *
     * @param id the ID of the Order to delete.
     * @return a ResponseEntity indicating the outcome of the deletion.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteOrder(@PathVariable String id) {
        try {
            orderService.deleteOrder(new ObjectId(id));
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Get all items in an Order.
     *
     * @param id the ID of the Order.
     * @return a ResponseEntity containing a list of all OrderItems.
     */
    @GetMapping("/{id}/items")
    public ResponseEntity<ApiResponse<List<OrderItem>>> getAllItemsInOrder(@PathVariable String id) {
        List<OrderItem> items = orderService.getAllItemsInOrder(new ObjectId(id));
        return ResponseUtil.success(items);
    }

    /**
     * Get an Order by user ID.
     *
     * @param userId the user ID associated with the Order.
     * @return a ResponseEntity containing the Order, or a 404 status if not found.
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse<OrderDTO>> getOrderByUserId(@PathVariable String userId) {
        Optional<Order> order = orderService.getOrderByUserId(new ObjectId(userId));
        if (order.isPresent()) {
            OrderDTO orderDTO = orderMapper.toOrderDTO(order.get());
            return ResponseUtil.success(orderDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Update status of an order
     *
     * @param id     the order ID
     * @param status the new status
     * @return a ResponseEntity containing the Order
     */
    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponse<OrderDTO>> updateStatusOrder(@PathVariable String id, @RequestBody String status) {
        Order order = orderService.updateStatus(new ObjectId(id), status);
        OrderDTO orderDTO = orderMapper.toOrderDTO(order);
        System.out.println("OrderController-updateStatusOrder: " + order);
        System.out.println("OrderController-updateStatusOrder: " + orderDTO);
        return ResponseUtil.success(orderDTO);
    }
}
