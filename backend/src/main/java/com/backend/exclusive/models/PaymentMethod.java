package com.backend.exclusive.models;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "method_payments")
public class PaymentMethod {
    @Id
    private ObjectId id;

    @NotBlank(message = "{name_not_null}")
    private String name;

    private boolean isDeleted;
}
