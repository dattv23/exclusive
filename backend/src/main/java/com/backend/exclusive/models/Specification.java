package com.backend.exclusive.models;

import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "specifications")
public class Specification {
    @Id
    private ObjectId id;

    @Min(value = 0, message = "Width must be positive")
    private int width;

    @Min(value = 0, message = "Height must be positive")
    private int height;

    @Min(value = 0, message = "Depth must be positive")
    private int depth;

    @Min(value = 0, message = "Weight must be positive")
    private int weight;

    private boolean qualityChecking;

    private int freshnessDuration;

    private Date whenPacketing;
}
