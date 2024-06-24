package com.backend.exclusive.services.Implements;

import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.models.User;
import com.backend.exclusive.models.UserRole;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.services.UserService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAll() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @Override
    public User update(ObjectId id, UserDTO userDetails) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User updateUser = userOptional.get();
            updateUser.setEmail(userDetails.getEmail());
            updateUser.setFirstName(userDetails.getFirstName());
            updateUser.setLastName(userDetails.getLastName());
            updateUser.setPhoneNumber(userDetails.getPhoneNumber());
            updateUser.setAddress(userDetails.getAddress());
            updateUser.setUpdatedAt(new Date());
            return userRepository.save(updateUser);
        } else {
            throw new RuntimeException("Update user not found with id " + id);
        }
    }

    @Override
    public void delete(ObjectId id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User deleteUser = user.get();
            deleteUser.setDeleted(true);
            userRepository.save(deleteUser);
        } else {
            throw new RuntimeException("Delete user not found with id " + id);
        }
    }

    @Override
    public void assignRole(ObjectId id, UserRole role) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User updateUser = user.get();
            updateUser.setRole(role);
            userRepository.save(updateUser);
        } else {
            throw new RuntimeException("User not found with id " + id);
        }
    }
}
