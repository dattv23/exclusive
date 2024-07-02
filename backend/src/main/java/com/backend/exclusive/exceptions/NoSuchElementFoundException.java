package com.backend.exclusive.exceptions;

public class NoSuchElementFoundException extends RuntimeException {
    public NoSuchElementFoundException(String message) {
        super(message);
    }
}