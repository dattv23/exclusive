package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {
    private String orderId;

    private String methodPayId;

    @Min(value = 0, message = "Amount must be positive")
    private double amount;

    @Pattern(regexp = "^(Success|Failed)$", message = "Invalid status")
    private String status;

    private Date dateOfPay;
}
