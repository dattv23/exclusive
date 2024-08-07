package com.backend.exclusive.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
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

//    @DBRef
//    @NotNull(message = "Order is mandatory")
//    @JsonIgnore // Alternative to @JsonBackReference
//    private Order order;

    @DBRef
    @NotNull(message = "{product_not_null}")
    private Product product;

    @Min(value = 1, message = "{quantity_min}")
    private int quantity;

    @Min(value = 0, message = "{subtotal_min}")
    private double subtotal;
}
