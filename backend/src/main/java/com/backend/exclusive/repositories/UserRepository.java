package com.backend.exclusive.repositories;

import com.backend.exclusive.models.User;

import java.util.List;

public interface UserRepository {
    User save(User user);

    List<User> saveAll(List<User> userEntities);

    List<User> findAll();

    List<User> findAll(List<String> ids);

    User findOne(String id);

    long count();

    long delete(String id);

    long delete(List<String> ids);

    long deleteAll();

    User update(User User);

    long update(List<User> personEntities);
}