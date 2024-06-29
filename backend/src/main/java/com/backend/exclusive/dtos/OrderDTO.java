package com.backend.exclusive.dtos;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private String id;

    @NotNull(message = "User Id is mandatory")
    private String userId;

    private String couponId;

    private Date orderDate;

    private double totalAmount;

    @Pattern(regexp = "^(Pending|Completed|Cancelled)$", message = "Invalid status")
    @NotNull(message = "Status is mandatory")
    private String status;

    private List<OrderItemDTO> orderItems;
}
