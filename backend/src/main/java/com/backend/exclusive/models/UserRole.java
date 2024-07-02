package com.backend.exclusive.models;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum UserRole {
    ADMIN(1),
    USER(2);
    public final long value;
}

