package com.backend.exclusive.dtos;

import com.backend.exclusive.models.Category;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class ProductDTO {
    @DBRef
    @NotNull(message = "Category is mandatory")
    private Category category;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @Min(value = 0, message = "Regular price must be positive")
    private double regularPrice;

    @Min(value = 0, message = "Stock quantity must be positive")
    private int stockQuantity;

    private String description;

    private String shortDescription;
}
