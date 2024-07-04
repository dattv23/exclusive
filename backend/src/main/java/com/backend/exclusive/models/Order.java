package com.backend.exclusive.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "orders")
public class Order {
    @Id
    private ObjectId id;

    @DBRef
    @NotNull(message = "{user_not_null}")
    private User user;

    @DBRef
    private Coupon coupon;

    // Calculate this value
    @NotNull(message = "{order_date_not_null}")
    private Date orderDate;

    // Calculate this value
    @NotNull(message = "{total_amount_not_null}")
    private double totalAmount;

    @Pattern(regexp = "^(Pending|Delivering|Completed|Cancelled)$", message = "{status_pattern}")
    private String status = "Pending";

    @DBRef
    @JsonManagedReference
    private List<OrderItem> orderItems;

    @NotNull(message = "Recipient last name is mandatory")
    private String recipientLastName;

    @NotNull(message = "Recipient first name is mandatory")
    private String recipientFirstName;

    @NotNull(message = "Recipient address is mandatory")
    private String recipientCity;

    @NotNull(message = "Recipient address is mandatory")
    private String recipientDistrict;

    @NotNull(message = "Recipient address is mandatory")
    private String recipientAddress;

    @NotNull(message = "Recipient email is mandatory")
    @Email(message = "Invalid email format")
    private String recipientEmail;

    @NotNull(message = "Recipient phone number is mandatory")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$", message = "Invalid phone number")
    private String recipientPhone;

    @Builder.Default
    private boolean isDeleted = false;

    @CreatedDate
    @Builder.Default
    private Date createdAt = new Date();

    @LastModifiedDate
    @Builder.Default
    private Date updatedAt = new Date();
}
