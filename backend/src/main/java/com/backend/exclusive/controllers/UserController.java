package com.backend.exclusive.controllers;

import com.backend.exclusive.common.ApiResponse;
import com.backend.exclusive.common.ResponseUtil;
import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.mappers.UserMapper;
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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @Autowired
    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping("/me")
    public ResponseEntity<ApiResponse<UserDTO>> authenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
        UserDTO userDTO = userMapper.convertToUserDto(currentUser);
        return ResponseUtil.success(userDTO);
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<List<UserDTO>>> allUsers() {
        List<User> users = userService.getAll();
        List<UserDTO> userDTOs = users.stream()
                .map(userMapper::convertToUserDto)
                .collect(Collectors.toList());
        return ResponseUtil.success(userDTOs);
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
    public ResponseEntity<ApiResponse<Void>> assignRole(@PathVariable String id, @RequestBody UserRole role) {
        userService.assignRole(new ObjectId(id), role);
        return ResponseUtil.success(null);
    }
}
