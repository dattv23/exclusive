package com.backend.exclusive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExclusiveApplication {
    public static void main(String[] args) {
        SpringApplication.run(ExclusiveApplication.class, args);
        System.out.println("http://localhost:8080/swagger-ui/index.html");
    }
}
