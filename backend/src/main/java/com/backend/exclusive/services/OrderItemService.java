//package com.backend.exclusive.services;
//
//import com.backend.exclusive.dtos.OrderItemDTO;
//import com.backend.exclusive.models.OrderItem;
//import org.bson.types.ObjectId;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface OrderItemService {
//    OrderItem createOrderItem(OrderItemDTO orderItemDTO);
//
//    List<OrderItem> getAllOrderItems();
//
//    List<OrderItem> getDeletedOrderItems();
//
//    Optional<OrderItem> getOrderItemById(ObjectId id);
//
//    Optional<OrderItem> updateOrderItem(ObjectId id, OrderItemDTO orderItemDTO);
//
//    void deleteOrderItem(ObjectId id);
//}
