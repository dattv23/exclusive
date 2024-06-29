package com.backend.exclusive.security.dtos;

import com.backend.exclusive.models.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Document
public class LoginResponse {
    private String token;

    private long expiresIn;

    private UserRole role;
}
