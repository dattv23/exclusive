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
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "categories")
public class Category {
    @Id
    private ObjectId id;

    private String parentId;

    @NotBlank(message = "{name_mandatory}")
    private String name;

    private String description;

    private String slug;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();

    @Builder.Default
    private boolean isDeleted = false;
}
