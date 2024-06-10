package com.backend.exclusive.security.services;

import com.backend.exclusive.models.User;
import com.backend.exclusive.security.dtos.LoginUserDto;
import com.backend.exclusive.security.dtos.RegisterUserDto;

public interface AuthenticationService {
    public User signup(RegisterUserDto input);

    public User authenticate(LoginUserDto input);
}