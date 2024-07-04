package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Email;
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

    @Pattern(regexp = "^(Pending|Delivering|Completed|Cancelled)$", message = "Invalid status")
    @NotNull(message = "Status is mandatory")
    private String status = "Pending";

    private List<OrderItemDTO> orderItems;

    @NotNull(message = "Recipient address is mandatory")
    private String recipientCity;

    @NotNull(message = "Recipient address is mandatory")
    private String recipientDistrict;

    @NotNull(message = "Recipient last name is mandatory")
    private String recipientLastName;

    @NotNull(message = "Recipient first name is mandatory")
    private String recipientFirstName;

    @NotNull(message = "Recipient address is mandatory")
    private String recipientAddress;

    @NotNull(message = "Recipient email is mandatory")
    @Email(message = "Invalid email format")
    private String recipientEmail;

    @NotNull(message = "Recipient phone number is mandatory")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$", message = "Invalid phone number")
    private String recipientPhone;
}

