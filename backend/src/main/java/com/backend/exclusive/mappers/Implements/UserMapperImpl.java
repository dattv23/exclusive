package com.backend.exclusive.mappers.Implements;

import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.mappers.UserMapper;
import com.backend.exclusive.models.User;
import org.mapstruct.Mapper;

@Mapper
public class UserMapperImpl implements UserMapper {
    @Override
    public User convertToUser(UserDTO userDTO) {
        if (userDTO == null) {
            return null;
        }

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword()); // Make sure to encode password appropriately
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setAddress(userDTO.getAddress());
        user.setDeleted(userDTO.isDeleted());
        user.setCreatedAt(userDTO.getCreatedAt());
        return user;
    }

    @Override
    public UserDTO convertToUserDto(User user) {
        if (user == null) {
            return null;
        }

        UserDTO userDTO = new UserDTO();
        userDTO.setEmail(user.getEmail());
        userDTO.setUsername(user.getUsername());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setAddress(user.getAddress());
        userDTO.setDeleted(user.isDeleted());
        userDTO.setCreatedAt(user.getCreatedAt());
        return userDTO;
    }
}
