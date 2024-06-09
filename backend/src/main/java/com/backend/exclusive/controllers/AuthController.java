package com.backend.exclusive.controllers;

import com.backend.exclusive.models.User;
import com.backend.exclusive.security.dtos.LoginResponse;
import com.backend.exclusive.security.dtos.LoginUserDto;
import com.backend.exclusive.security.dtos.RegisterUserDto;
import com.backend.exclusive.security.services.AuthenticationService;
import com.backend.exclusive.security.services.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private static final Logger log = LoggerFactory.getLogger(AuthController.class);
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    public AuthController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    // Endpoint to handle user registration
    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        // Call the signup method in AuthenticationService to register the user
        User registeredUser = authenticationService.signup(registerUserDto);

        return ResponseEntity.ok(registeredUser);
    }

    // Endpoint to handle user login
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        // Call the authenticate method in AuthenticationService to authenticate the user
        User authenticatedUser = authenticationService.authenticate(loginUserDto);

        // Generate a JWT token for the authenticated user
        String jwtToken = jwtService.generateToken(authenticatedUser);

        // Create a response object containing the token and its expiration time
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());

        return ResponseEntity.ok(loginResponse);
    }
}
