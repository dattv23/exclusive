package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {
    private String id;

    @NotNull(message = "Product Id is mandatory")
    private String productId;

    @Min(value = 1, message = "Quantity must be at least 1")
    private int quantity;

    // Calculate this value
    private double subtotal;
}
