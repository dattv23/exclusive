package com.backend.exclusive.configurations;

import com.backend.exclusive.security.jwts.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfiguration(JwtAuthenticationFilter jwtAuthenticationFilter, AuthenticationProvider authenticationProvider) {
        this.authenticationProvider = authenticationProvider;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    // Define a list of URLs that should be accessible without authentication
    private static final String[] WHITE_LIST_URL = {
            "/api/v1/auth/**",
            "/api/v1/products",
            "/api/v1/products/{id}",
            "/api/v1/categories",
            "/api/v1/categories/{id}",
            "/v2/api-docs",
            "/v3/api-docs",
            "/v3/api-docs/**",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui/**",
            "/webjars/**",
            "/swagger-ui.html",
            "/api/v1/admin/**",
            "/admin/css/**",
            "/admin/js/**",
            "/admin/img/**",
            "/admin/vendor/**"
    };

    // Configure the security filter chain
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Disable CSRF protection as it is not required for stateless APIs
                .csrf(csrf -> csrf.disable())

                // Configure authorization rules
                .authorizeHttpRequests(authorize -> authorize
                        // Allow access to URLs in the white list without authentication
                        .requestMatchers(WHITE_LIST_URL).permitAll()

                        // Require authentication for all other requests
                        .anyRequest().authenticated())

                // Configure session management to be stateless (no server-side session is created)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                // Set the custom authentication provider
                .authenticationProvider(authenticationProvider)

                // Add the JWT authentication filter before the UsernamePasswordAuthenticationFilter
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        // Build and return the security filter chain
        return http.build();
    }

    // Configure CORS settings
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // Set allowed origins (can be expanded as needed)
        configuration.setAllowedOrigins(List.of("http://localhost:8080", "http://localhost:3000"));

        // Set allowed HTTP methods
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // Set allowed headers for CORS requests
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));

        // Allow credentials (cookies, authorization headers, etc.)
        configuration.setAllowCredentials(true);

        // Expose specific headers in the response
        configuration.setExposedHeaders(List.of("Authorization"));

        // Register the CORS configuration for all paths
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        // Return the configured CORS source
        return source;
    }
}
