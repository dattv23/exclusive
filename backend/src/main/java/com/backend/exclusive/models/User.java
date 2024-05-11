package com.backend.exclusive.models;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@Document(collection = "users")
public class User {
     private ObjectId id;
     private String email;
     private String password;
     private String username;
     private String firstName;
     private String lastName;
     private String phoneNumber;
     private String address;
     private boolean isDeleted;
     private Date createdAt;
     private Date updatedAt;
}
