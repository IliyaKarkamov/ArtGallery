package com.apus.artgallery.controllers;

import com.apus.artgallery.models.User;
import com.apus.artgallery.repositories.AccountRepository;
import com.apus.artgallery.services.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {
    private final AccountRepository accountRepository;
    private final AccountService accountService;

    public AccountController(AccountRepository repository, AccountService accountService) {
        this.accountRepository = repository;
        this.accountService = accountService;
    }

    @GetMapping("/api/v1/users")
    public List<User> getUsers() {
        return accountRepository.findAll();
    }

    @GetMapping("/api/v1/users/{username}")
    public User getUser(@PathVariable String username) {
        return accountRepository.findByUsernameIgnoreCase(username);
    }

    @RequestMapping(value = "/api/v1/users", method = RequestMethod.PUT)
    public ResponseEntity<Object> addUser(@RequestParam("username") String username,
                                          @RequestParam("email") String email,
                                          @RequestParam("password") String password,
                                          @RequestParam("firstname") String firstName,
                                          @RequestParam("secondname") String secondName,
                                          @RequestParam("lastname") String lastName) {
        ResponseEntity<Object> responseEntity;
        try {
            User user = accountService.CreateAccount(username, email, password, firstName, secondName, lastName);

            responseEntity = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(user);
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return responseEntity;
    }
}
