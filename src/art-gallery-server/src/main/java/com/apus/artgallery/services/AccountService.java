package com.apus.artgallery.services;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final PasswordEncoder bcryptEncoder;

    public AccountService(AccountRepository repository, PasswordEncoder bcryptEncoder) {
        this.accountRepository = repository;
        this.bcryptEncoder = bcryptEncoder;
    }

    public User createAccount(User user) {
        if (accountRepository.findByUsernameIgnoreCase(user.getUsername()) != null)
            throw new IllegalArgumentException("Username already exist!");

        if (accountRepository.findByEmailIgnoreCase(user.getEmail()) != null)
            throw new IllegalArgumentException("Email already exist!");

        user.setPassword(bcryptEncoder.encode(user.getPassword()));
        accountRepository.save(user);

        return user;
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

    public User getUserById(long id) {
        return accountRepository.findById(id);
    }

    public List<User> getActiveUsers() {
        return accountRepository.findByIsActiveTrue();
    }

    public void edit(Long id, User user) {
        if (accountRepository.existsByUsernameAndIdIsNot(user.getUsername(), id))
            throw new IllegalArgumentException("Username already exist!");

        if (accountRepository.existsByEmailAndIdIsNot(user.getEmail(), id))
            throw new IllegalArgumentException("Email already exist!");

        accountRepository.saveById(user.getUsername(), user.getEmail(),
                user.getFirstName(), user.getSecondName(), user.getLastName(),
                user.getActive(), user.getAdmin(), id);
    }

    public void remove(Long id, Boolean active) {
        accountRepository.deactivate(active, id);
    }
}
