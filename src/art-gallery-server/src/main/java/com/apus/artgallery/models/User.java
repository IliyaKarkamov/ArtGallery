package com.apus.artgallery.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Size(min = 3, max = 100)
    @Column(name = "username")
    private String username;

    @NotBlank
    @Column(name = "email")
    private String email;

    @NotBlank
    @Size(min = 8, max = 64)
    @Column(name = "password")
    private String password;

    @NotBlank
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    private String secondName;

    @NotBlank
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "is_admin")
    private Boolean isAdmin = false;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "deactivated_at")
    private LocalDateTime deactivatedAt;

    @Column(name = "last_login_at")
    private LocalDateTime lastLoginAt;

    public User(){}

    public User(String username,
                String email,
                String password,
                String firstName,
                String secondName,
                String lastName)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        this.lastName = lastName;
        this.secondName = secondName;
        this.firstName = firstName;
    }
}
