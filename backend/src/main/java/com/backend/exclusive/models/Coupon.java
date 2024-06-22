package com.backend.exclusive.models;

import jakarta.validation.constraints.Max;
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

    @Min(value = 0, message = "Discount percentage must be positive")
    @Max(value = 100, message = "Discount percentage must be less than or equal to 100")
    private double discountPercentage;

    @NotNull(message = "Valid from date is mandatory")
    private Date validFrom;

    @NotNull(message = "Valid until date is mandatory")
    private Date validUntil;

    @Builder.Default
    private boolean isActive = true;

    @Min(value = 0, message = "Minimum order amount must be positive")
    private double minimumOrderAmount;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();
}
