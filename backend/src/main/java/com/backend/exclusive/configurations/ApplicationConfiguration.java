package com.backend.exclusive.configurations;

import com.backend.exclusive.mappers.Implements.UserMapperImpl;
import com.backend.exclusive.mappers.UserMapper;
import com.backend.exclusive.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class ApplicationConfiguration {
    @Autowired
    private final UserRepository userRepository;

    public ApplicationConfiguration(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Bean to provide UserDetailsService which retrieves user details from the database
    @Bean
    UserDetailsService userDetailsService() {
        return username -> userRepository.findByEmail(username)
                // Throw an exception if the user is not found
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    // Bean to provide a password encoder for hashing passwords
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Bean to provide a mapper for converting between User entities and DTOs
    @Bean
    public UserMapper userMapper() {
        return new UserMapperImpl();
    }

    // Bean to provide the authentication manager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        // Retrieve and return the authentication manager from the provided configuration
        return config.getAuthenticationManager();
    }

    // Bean to provide an authentication provider
    @Bean
    AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        // Set the custom UserDetailsService
        authProvider.setUserDetailsService(userDetailsService());

        // Set the password encoder
        authProvider.setPasswordEncoder(passwordEncoder());

        // Return the configured authentication provider
        return authProvider;
    }
}
