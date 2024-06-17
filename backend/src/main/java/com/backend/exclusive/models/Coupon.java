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
@Document(collection = "coupons")
public class Coupon {
    @Id
    private ObjectId id;

    @NotBlank(message = "Code is mandatory")
    private String code;

    private String description;
    private double discountPercentage;
    private Date validFrom;
    private Date validUntil;

    @Builder.Default
    private boolean isActive = true;

    private double minimumOrderAmount;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();
}
