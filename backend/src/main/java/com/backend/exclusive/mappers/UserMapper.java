package com.backend.exclusive.mappers;

import com.backend.exclusive.dtos.UserDTO;
import com.backend.exclusive.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    User convertToUser(UserDTO userDTO);

    UserDTO convertToUserDto(User user);
}
