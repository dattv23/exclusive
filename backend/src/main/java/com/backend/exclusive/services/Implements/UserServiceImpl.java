package com.backend.exclusive.services.Implements;

import com.backend.exclusive.models.User;
import com.backend.exclusive.repositories.UserRepository;
import com.backend.exclusive.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAll() {
        List<User> users = new ArrayList<>();

        userRepository.findAll().forEach(users::add);

        return users;
    }
    @Autowired
    private MessageSource messageSource;

    public String getUserNotFoundMessage() {
        // Sử dụng messageSource để lấy thông điệp dựa trên ngôn ngữ hiện tại
        return messageSource.getMessage("user.not.found", null, LocaleContextHolder.getLocale());
    }
}
