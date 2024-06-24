package com.backend.exclusive.controllers;

import com.backend.exclusive.models.User;
import com.backend.exclusive.models.UserRole;
import com.backend.exclusive.services.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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

    /**
     * Get the authenticated user's details.
     *
     * @return a ResponseEntity containing the authenticated user's details.
     */
    @GetMapping("/me")
    public ResponseEntity<User> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        return ResponseEntity.ok(currentUser);
    }

    // TODO: add request 'update basic info of user'

    /**
     * Get a list of all users.
     * This endpoint is restricted to users with the 'ADMIN' role.
     *
     * @return a ResponseEntity containing a list of all users.
     */
    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> allUsers() {
        List<User> users = userService.getAll();
        return ResponseEntity.ok(users);
    }

    /**
     * Assign a role to a user.
     * This endpoint is restricted to users with the 'ADMIN' role.
     *
     * @param id   the ID of the user to assign the role to.
     * @param role the role to assign to the user.
     * @return a ResponseEntity with an HTTP status of OK (200).
     */
    @PutMapping("/{id}/role")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> assignRole(@PathVariable String id, @RequestBody UserRole role) {
        userService.assignRole(new ObjectId(id), role);
        return ResponseEntity.ok().build();
    }
}
