package com.apus.artgallery.controllers;

import com.apus.artgallery.models.User;
import com.apus.artgallery.services.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/api/v1/users")
    public List<User> getUsers() {
        return accountService.getAllUsers();
    }

    @GetMapping("/api/v1/users/{username}")
    public User getUser(@PathVariable String username) {
        return accountService.getUserByUsername(username);
    }

    @PutMapping(value = "/api/v1/users")
    public ResponseEntity<Object> addUser(@RequestBody User user) {
        ResponseEntity<Object> responseEntity;

        try {
            accountService.createAccount(user);

            responseEntity = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body("");
        } catch (Exception e) {
            responseEntity = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(e.getMessage());
        }

        return responseEntity;
    }
}
