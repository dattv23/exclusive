package com.backend.exclusive.dtos;

import com.backend.exclusive.models.Order;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class PaymentDTO {
    @DBRef
    @NotNull(message = "Order is mandatory")
    private Order order;

    private String methodPayId;

    @Min(value = 0, message = "Amount must be positive")
    private double amount;

    private String status;

    private Date dateOfPay;

    private boolean isDeleted;
}
