package com.backend.exclusive.dtos;

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
public class RegisterUserDto {
    private String email;

    private String password;

    private String firstName;

    private String lastName;
}
