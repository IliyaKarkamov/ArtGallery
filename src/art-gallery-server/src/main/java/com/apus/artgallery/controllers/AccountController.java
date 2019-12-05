package com.apus.artgallery.controllers;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {
    private final AccountRepository accountRepository;

    public AccountController(AccountRepository repository) {
        accountRepository = repository;
    }

    @GetMapping("/api/v1/users")
    public List<User> getUsers() {
        return accountRepository.findAll();
    }

    @GetMapping("/api/v1/users/{username}")
    public User getUser(@PathVariable String username) {
        return accountRepository.findByUsername(username);
    }
}
