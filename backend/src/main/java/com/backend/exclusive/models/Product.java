package com.backend.exclusive.models;

import jakarta.validation.constraints.NotBlank;
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
    private Category category;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private double regularPrice;
    private double discountPrice;
    private int stockQuantity;
    private String description;
    private String shortDescription;

    @Builder.Default
    private boolean isDeleted = false;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();
}
