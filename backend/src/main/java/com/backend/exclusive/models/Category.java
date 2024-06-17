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
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "categories")
public class Category {
    @Id
    private ObjectId id;

    private String parentId;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String description;

    @DBRef
    private List<Product> products;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();

    @Builder.Default
    private boolean destroy = false;
}
