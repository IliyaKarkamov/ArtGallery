package com.apus.artgallery.controllers;

import com.apus.artgallery.models.User;
import com.apus.artgallery.services.AccountService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseExceptionBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
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

    @GetMapping("/api/v1/users/exists")
    public ResponseEntity<Object> userExists(@RequestParam(name = "username", required = false) String username,
                                             @RequestParam(name = "email", required = false) String email) {
        Response response = new Response("userExists", LocalDateTime.now());
        ResponseExceptionBuilder builder = new ResponseExceptionBuilder();

        if (username != null) {
            response.setResult(accountService.usernameExists(username));

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(response);
        } else if (email != null) {
            response.setResult(accountService.emailExists(email));

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(response);
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(response);
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
