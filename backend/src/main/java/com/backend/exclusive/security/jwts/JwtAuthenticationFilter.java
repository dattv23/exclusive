package com.backend.exclusive.security.jwts;

import com.backend.exclusive.security.services.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

    @Autowired
    private final JwtService jwtService;

    @Autowired
    private final UserDetailsService userDetailsService;

    @Autowired
    private final HandlerExceptionResolver handlerExceptionResolver;

    @Autowired
    public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService, HandlerExceptionResolver handlerExceptionResolver) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.handlerExceptionResolver = handlerExceptionResolver;
    }

    // Override the doFilterInternal method to implement JWT authentication logic
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {
        // Retrieve the Authorization header from the request
        final String authHeader = request.getHeader("Authorization");

        // Create a logger for logging messages
        logger.info("Processing request: {}", request.getRequestURI());

        // If the Authorization header is missing or does not start with "Bearer ", skip JWT processing
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            logger.info("No JWT token found in the request");
            filterChain.doFilter(request, response);
            return;
        }

        try {
            // Extract the JWT token from the Authorization header
            final String jwt = authHeader.substring(7);
            // Extract the username from the JWT token
            final String userEmail = jwtService.extractUsername(jwt);
            logger.info("JWT token found: {}, extracted user: {}", jwt, userEmail);

            // Check if the user is not already authenticated
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (userEmail != null && authentication == null) {
                // Load user details from the database using the username
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

                // Validate the JWT token
                if (jwtService.isTokenValid(jwt, userDetails)) {
                    // Create an authentication token
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    // Set the authentication details
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    // Set the authentication in the security context
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                    logger.info("User authenticated: {}", userEmail);
                }
            }

            // Proceed with the next filter in the chain
            filterChain.doFilter(request, response);
        } catch (Exception exception) {
            // Log the exception and handle it using the exception resolver
            logger.error("Exception during JWT processing", exception);
            handlerExceptionResolver.resolveException(request, response, null, exception);
        }
    }
}

