package com.apus.artgallery.services;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountService implements UserDetailsService {
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

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = accountRepository.findByUsernameIgnoreCase(username);

        if (user != null) {
            return new org.springframework.security.core.userdetails.User(
                    user.getUsername(),
                    user.getPassword(),
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }
}
