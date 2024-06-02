package com.backend.exclusive.controllers;

import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.mappers.UserMapper;
import com.backend.exclusive.models.User;
import com.backend.exclusive.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private final UserService userService;

    @Autowired
    private final UserMapper userMapper;

    public AuthController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

//    This method use 3 values: username, password, confirm password (need to refactor method register in user service)
//    @PostMapping("/register")
//    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> credentials) {
//        try {
//            if (!credentials.get("password").equals(credentials.get("passwordConfirm"))) {
//                return ResponseEntity.badRequest().body("Passwords do not match");
//            }
//            userService.registerUser(credentials.get("username"), credentials.get("password"));
//            return ResponseEntity.ok("User registered successfully");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }


//    This method use UserDTO
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid UserDTO userDTO) {
        try {
            User user = userMapper.convertToUser(userDTO);
            userService.registerUser(user.getUsername(), user.getPassword());
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> credentials) {
        try {
            userService.loginUser(credentials.get("username"), credentials.get("password"));
            return ResponseEntity.ok("Login successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
