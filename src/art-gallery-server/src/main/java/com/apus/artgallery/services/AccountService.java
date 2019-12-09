package com.apus.artgallery.services;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import org.hibernate.validator.internal.engine.ConstraintViolationImpl;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository repository) {
        accountRepository = repository;
    }

    public void createAccount(User user) throws Exception {
        try {
            if (accountRepository.findByUsernameIgnoreCase(user.getUsername()) != null)
                throw new IllegalArgumentException("Username already exist!");

            if (accountRepository.findByEmailIgnoreCase(user.getEmail()) != null)
                throw new IllegalArgumentException("Email already exist!");

            accountRepository.save(user);
        } catch (ConstraintViolationException e) {
            StringBuilder errorMessage = new StringBuilder();

            Iterator iterator = e.getConstraintViolations().iterator();

            while(iterator.hasNext()){
                ConstraintViolationImpl constraintViolations = (ConstraintViolationImpl) iterator.next();
                errorMessage.append(String.format("Field %s generated error %s \n",
                        constraintViolations.getPropertyPath().toString(),
                        constraintViolations.getMessage()));
            }

            throw new Exception(errorMessage.toString());
        }
    }

    public List<User> getAllUsers(){
        return accountRepository.findAll();
    }

    public User getUserByUsername(String username){
        return accountRepository.findByUsernameIgnoreCase(username);
    }

    public List<User> getActiveUsers(){
        return accountRepository.findByIsActiveTrue();
    }
}
