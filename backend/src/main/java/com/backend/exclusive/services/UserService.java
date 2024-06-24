package com.backend.exclusive.services;

import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.models.User;
import com.backend.exclusive.models.UserRole;
import org.bson.types.ObjectId;

import java.util.List;

public interface UserService {
    List<User> getAll();

    User update(ObjectId id, UserDTO userDetails);

    void delete(ObjectId id);

    void assignRole(ObjectId id, UserRole role);
}
