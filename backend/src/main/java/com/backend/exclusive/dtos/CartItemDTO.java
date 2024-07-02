package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {
    private String id;

    private String productId;

    private ProductDTO product;

    @Min(value = 1, message = "Quantity must be at least 1")
    private int quantity;
}
