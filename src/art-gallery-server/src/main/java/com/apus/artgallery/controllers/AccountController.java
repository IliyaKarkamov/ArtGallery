package com.apus.artgallery.controllers;

import com.apus.artgallery.models.JwtRequest;
import com.apus.artgallery.models.JwtResponse;
import com.apus.artgallery.models.User;
import com.apus.artgallery.services.AccountService;
import com.apus.artgallery.services.AuthenticationService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
public class AccountController {
    private final AccountService accountService;
    private final AuthenticationService authenticationService;

    public AccountController(AccountService accountService, AuthenticationService authenticationService,
                             AuthenticationManager authenticationManager) {
        this.accountService = accountService;
        this.authenticationService = authenticationService;
        this.authenticationService.setAuthenticationManager(authenticationManager);
    }

    @PostMapping(value = "/api/v1/authenticate")
    public ResponseEntity<Response> authenticate(@RequestBody JwtRequest request) {
        Response response = new Response("AccountController.authenticate", LocalDateTime.now());

        HttpStatus status;

        try {
            String token = authenticationService.authenticate(request.getUsername(), request.getPassword());

            response.setResult(new JwtResponse(token));
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/users")
    public ResponseEntity<Response> getUsers() {
        Response response = new Response("AccountController.getUsers", LocalDateTime.now());

        HttpStatus status;

        try {
            response.setResult(accountService.getAllUsers());
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/users/exists")
    public ResponseEntity<Response> userExists(@RequestParam(name = "username", required = false) String username,
                                               @RequestParam(name = "email", required = false) String email) {
        Response response = new Response("AccountController.userExists", LocalDateTime.now());

        HttpStatus status = HttpStatus.BAD_REQUEST;

        try {
            if (username != null) {
                response.setResult(accountService.usernameExists(username));
                status = HttpStatus.OK;
            } else if (email != null) {
                response.setResult(accountService.emailExists(email));
                status = HttpStatus.OK;
            }
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/users/{id}")
    public ResponseEntity<Response> getUserById(@PathVariable Long id) {
        Response response = new Response("AccountController.getUserById", LocalDateTime.now());

        HttpStatus status;

        try {
            response.setResult(accountService.getUserById(id));
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/users/{id}")
    public ResponseEntity<Response> editUserById(@RequestBody User user, @PathVariable Long id) {
        Response response = new Response("AccountController.editUserById", LocalDateTime.now());

        HttpStatus status;

        try {
            accountService.edit(id, user);

            response.setResult(true);
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/users/deactivate/{id}")
    public ResponseEntity<Response> deactivateUserById(@PathVariable Long id,
                                                       @RequestParam Boolean active) {
        Response response = new Response("AccountController.deactivateUserById", LocalDateTime.now());

        HttpStatus status;

        try {
            accountService.remove(id, active);

            response.setResult(true);
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PostMapping(value = "/api/v1/users")
    public ResponseEntity<Response> addUser(@RequestBody User user) {
        Response response = new Response("AccountController.addUser", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;;

        try {
            response.setResult(accountService.createAccount(user));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
