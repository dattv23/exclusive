package com.backend.exclusive.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class PaymentMethodDTO {
    @NotBlank(message = "Name is mandatory")
    private String name;

    private boolean isDeleted;
}
