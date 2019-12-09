package com.apus.artgallery.services;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository repository) {
        accountRepository = repository;
    }

    public void createAccount(User user) {
        if (accountRepository.findByUsernameIgnoreCase(user.getUsername()) != null)
            throw new IllegalArgumentException("Username already exist!");

        if (accountRepository.findByEmailIgnoreCase(user.getEmail()) != null)
            throw new IllegalArgumentException("Email already exist!");

        accountRepository.save(user);
    }
}
