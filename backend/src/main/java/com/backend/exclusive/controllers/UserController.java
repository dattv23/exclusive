package com.backend.exclusive.controllers;

import com.backend.exclusive.models.User;
import com.backend.exclusive.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Handles GET requests to the "/me" endpoint, returning the authenticated user's details
    @GetMapping("/me")
    public ResponseEntity<User> authenticatedUser() {
        // Retrieve the current authentication information from the security context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // Get the current authenticated user from the authentication principal
        User currentUser = (User) authentication.getPrincipal();
        // Return the current user wrapped in a ResponseEntity with an HTTP status of OK (200)
        return ResponseEntity.ok(currentUser);
    }

    // Handles GET requests to the root endpoint "/", returning a list of all users
    @GetMapping("/")
    public ResponseEntity<List<User>> allUsers() {
        // Retrieve the list of all users from the user service
        List<User> users = userService.getAll();
        // Return the list of users wrapped in a ResponseEntity with an HTTP status of OK (200)
        return ResponseEntity.ok(users);
    }
}
