package com.backend.exclusive.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "order_items")
public class OrderItem {
    @Id
    private ObjectId id;

    @DBRef
    private Order order;

    private String shippingId;

    @DBRef
    private Product product;

    private int quantity;
    private double subtotal;
}
