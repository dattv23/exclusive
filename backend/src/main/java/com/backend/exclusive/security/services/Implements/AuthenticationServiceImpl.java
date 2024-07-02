package com.backend.exclusive.security.services.Implements;

import com.backend.exclusive.dtos.CartDTO;
import com.backend.exclusive.models.User;
import com.backend.exclusive.models.UserRole;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.security.dtos.LoginUserDto;
import com.backend.exclusive.security.dtos.RegisterUserDto;
import com.backend.exclusive.security.services.AuthenticationService;
import com.backend.exclusive.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final CartService cartService;

    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationServiceImpl(UserRepository userRepository,
                                     AuthenticationManager authenticationManager,
                                     PasswordEncoder passwordEncoder, CartService cartService
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.cartService = cartService;
    }

    // Method to handle user signup
    public User signup(RegisterUserDto input) {
        // Create a new User entity and set its properties from the DTO
        User user = new User();
        user.setFirstName(input.getFirstName());
        user.setLastName(input.getLastName());
        user.setEmail(input.getEmail());
        user.setRole(UserRole.USER);
        // Encode the user's password before saving
        user.setPassword(passwordEncoder.encode(input.getPassword()));
        // Save the user to the repository and return the saved user
        userRepository.save(user);
        // Create user's cart
        CartDTO cartDTO = new CartDTO();
        cartDTO.setUserId(user.getId().toString());
        cartDTO.setCartItems(new ArrayList<>());
        cartService.createCart(cartDTO);
        return user;
    }

    // Method to authenticate a user during login
    public User authenticate(LoginUserDto input) {
        // Authenticate the user using the provided email and password
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(input.getEmail(), input.getPassword()));

        // Retrieve the user from the repository by email and return the user
        // Throws an exception if the user is not found
        return userRepository.findByEmail(input.getEmail()).orElseThrow();
    }
}
