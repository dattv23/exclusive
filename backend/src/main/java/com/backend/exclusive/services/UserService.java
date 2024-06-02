package com.backend.exclusive.services;

import com.backend.exclusive.models.User;

import java.util.List;

public interface UserService {
    List<User> getAll();

    void registerUser(String username, String password);

    void loginUser(String username, String password);
}
