package com.backend.exclusive.configurations;

import com.backend.exclusive.mappers.*;
import com.backend.exclusive.repositories.UserRepository;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
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

    @Bean
    public UserMapper userMapper() {
        return new UserMapperImpl();
    }

    @Bean
    public CartMapper cartMapper() {
        return new CartMapperImpl();
    }

    @Bean
    public CartItemMapper cartItemMapper() {
        return new CartItemMapperImpl();
    }

    @Bean
    OrderMapper orderMapper() {
        return new OrderMapperImpl();
    }

    @Bean
    OrderItemMapper orderItemMapper() {
        return new OrderItemMapperImpl();
    }

    @Bean
    PaymentMethodMapper paymentMethodMapper() {
        return new PaymentMethodMapperImpl();
    }

    @Bean
    CouponMapper couponMapper() {
        return new CouponMapperImpl();
    }

    @Bean
    CategoryMapper categoryMapper() {
        return new CategoryMapperImpl();
    }

    @Bean
    ProductMapper productMapper() {
        return new ProductMapperImpl();
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

    // This method creates and returns a SecurityScheme object for API key authentication.
    private SecurityScheme createAPIKeyScheme() {
        // Create a new SecurityScheme object and set its type to HTTP
        return new SecurityScheme().type(SecurityScheme.Type.HTTP)
                // Set the bearer format to JWT (JSON Web Token)
                .bearerFormat("JWT")
                // Set the scheme to "bearer" for bearer token authentication
                .scheme("bearer");
    }

    // The @Bean annotation indicates that this method produces a bean to be managed by the Spring container.
    @Bean
    public OpenAPI openAPI() {
        // Create and return a new OpenAPI object with the following configurations:
        return new OpenAPI()
                // Add a security item with the name "Bearer Authentication"
                .addSecurityItem(new SecurityRequirement()
                        .addList("Bearer Authentication"))
                // Add a security scheme named "Bearer Authentication" using the createAPIKeyScheme() method
                .components(new Components()
                        .addSecuritySchemes("Bearer Authentication", createAPIKeyScheme()))
                // Set the API metadata information
                .info(new Info()
                        // Set the title of the API
                        .title("Exclusive API")
                        // Set a custom description for the API
                        .description("Some custom description of API.")
                        // Set the version of the API
                        .version("1.0")
                        // Set the contact information for the API
                        .contact(new Contact()
                                .name("Tan Khoi")
                                .email("tankhoi46@gmail.com")
                                .url("https://www.facebook.com/tankhoi.ntk/"))
                        // Set the license information for the API
                        .license(new License()
                                .name("License of API")
                                .url("API license URL")));
    }

}
