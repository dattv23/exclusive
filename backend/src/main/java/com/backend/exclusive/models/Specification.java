package com.backend.exclusive.models;

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

    private ObjectId productId;
    private int width;
    private int height;
    private int depth;
    private int weight;
    private boolean qualityChecking;
    private int freshnessDuration;
    private Date whenPacketing;
}
