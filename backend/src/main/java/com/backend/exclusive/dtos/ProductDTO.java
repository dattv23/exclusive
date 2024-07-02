package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private String id;

    @DBRef
    @NotNull(message = "Category is mandatory")
    private String categoryId;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @Min(value = 0, message = "Regular price must be positive")
    private double regularPrice;

    @Min(value = 0, message = "Stock quantity must be positive")
    private int stockQuantity;

    private String description;

    private String shortDescription;

    private String imageUrl;
}
