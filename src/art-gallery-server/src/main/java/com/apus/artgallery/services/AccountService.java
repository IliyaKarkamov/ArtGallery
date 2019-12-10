package com.apus.artgallery.services;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;

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

        try {
            accountRepository.save(user);
        } catch (ConstraintViolationException e) {
            StringBuilder errorMessage = new StringBuilder();

            for (ConstraintViolation<?> constraintViolations : e.getConstraintViolations()) {
                errorMessage.append(String.format("Validation error for field %s: %s \n",
                        constraintViolations.getPropertyPath().toString(),
                        constraintViolations.getMessage()));
            }

            throw new IllegalArgumentException(errorMessage.toString(), e);
        }
    }

    public Boolean usernameExists(String username) {
        return accountRepository.findByUsernameIgnoreCase(username) != null;
    }

    public Boolean emailExists(String email) {
        return accountRepository.findByEmailIgnoreCase(email) != null;
    }

    public List<User> getAllUsers() {
        return accountRepository.findAll();
    }

    public User getUserByUsername(String username) {
        return accountRepository.findByUsernameIgnoreCase(username);
    }

    public List<User> getActiveUsers() {
        return accountRepository.findByIsActiveTrue();
    }
}
