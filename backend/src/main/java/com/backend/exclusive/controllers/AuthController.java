package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.models.User;
import com.backend.exclusive.security.dtos.LoginResponse;
import com.backend.exclusive.security.dtos.LoginUserDto;
import com.backend.exclusive.security.dtos.RegisterUserDto;
import com.backend.exclusive.security.services.AuthenticationService;
import com.backend.exclusive.security.services.JwtService;
import com.backend.exclusive.services.EmailService;
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
    private final EmailService emailService;

    public AuthController(
            JwtService jwtService,
            AuthenticationService authenticationService,
            EmailService emailService
    ) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
        this.emailService = emailService;
    }

    /**
     * Endpoint to handle user registration.
     *
     * @param registerUserDto the user registration details.
     * @return a ResponseEntity containing the registered user.
     */
    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<User>> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);

        // Send welcome email
        String toEmail = registeredUser.getEmail();
        emailService.sendSignupSuccessEmail(toEmail);

        return ResponseUtil.success(registeredUser);
    }

    /**
     * Endpoint to handle user login.
     *
     * @param loginUserDto the user login details.
     * @return a ResponseEntity containing the login response with JWT token and expiration time.
     */
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtToken);
        loginResponse.setExpiresIn(jwtService.getExpirationTime());
        loginResponse.setRole(authenticatedUser.getRole());

        return ResponseUtil.success(loginResponse);
    }
}