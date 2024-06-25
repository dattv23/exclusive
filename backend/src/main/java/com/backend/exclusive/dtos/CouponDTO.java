package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document
public class CouponDTO {
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

    @Min(value = 0, message = "Minimum order amount must be positive")
    private double minimumOrderAmount;
}
