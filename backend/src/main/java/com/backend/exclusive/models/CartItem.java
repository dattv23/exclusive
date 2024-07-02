package com.backend.exclusive.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Document(collection = "cart_items")
public class CartItem {
    @Id
    private ObjectId id;

    @DBRef
    @NotNull(message = "Product is mandatory")
    private Product product;

    @Min(value = 1, message = "Quantity must be at least 1")
    private int quantity;
}
