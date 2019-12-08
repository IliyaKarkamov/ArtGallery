package com.apus.artgallery.services;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final int MIN_PASSWORD_LENGTH = 8;
    private final int MAX_PASSWORD_LENGTH = 64;

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository repository) {
        accountRepository = repository;
    }

    public User CreateAccount(String username,
                              String email,
                              String password,
                              String firstName,
                              String secondName,
                              String lastName) throws Exception {

        if (username.isBlank() || email.isBlank() || firstName.isBlank() || lastName.isBlank() || password.isBlank())
            throw new Exception("No blank field allowed!");

        if ((password.length() < MIN_PASSWORD_LENGTH) || (password.length() > MAX_PASSWORD_LENGTH))
            throw new Exception("Password is too short");

        if (accountRepository.findByUsernameIgnoreCase(username) != null)
            throw new Exception("Username already exist!");

        if (accountRepository.findByEmailIgnoreCase(email) != null)
            throw new Exception("Email already exist!");

        User user = new User(username, email, password, firstName, secondName, lastName);
        accountRepository.save(user);
        return user;
    }
}
