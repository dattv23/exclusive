package com.backend.exclusive.models;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {
    @Id
    private ObjectId id;

    @DBRef
    @NotNull(message = "{category_mandatory}")
    private Category category;

    private String categoryName;

    @NotBlank(message = "{name_not_null}")
    private String name;

    @Min(value = 0, message = "{regularPrice_positive}")
    private double regularPrice;

    @Min(value = 0, message = "{discountPrice_positive}")
    private double discountPercent;

    @Min(value = 0, message = "{stockQuantity_positive}")
    private int stockQuantity;

    private String description;

    private String shortDescription;

    private String imageUrl;

    private double rate;

    @Min(value = 0, message = "{numberOfRate_positive}")
    private int numberOfRate;

    private String status;

    @Builder.Default
    private boolean isDeleted = false;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();
}
