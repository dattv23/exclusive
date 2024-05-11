package com.backend.exclusive.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Document
public class UserDTO {
    @NotBlank(message = "{email_not_blank}")
    @Email(message = "{email_is_not_valid}")
    private String email;

    @NotBlank(message = "{username_not_blank}")
    private String username;

    @NotBlank(message = "{password_not_blank}")
    private String password;

    @NotBlank(message = "{first_name_not_blank}")
    private String firstName;

    @NotBlank(message = "{last_name_not_blank}")
    private String lastName;

    @Pattern(regexp = "^\\d{10}$", message = "{phone_number_invalid}")
    private String phoneNumber;

    private String address;

    private boolean isDeleted = false;

    private Date createdAt = new Date();
}