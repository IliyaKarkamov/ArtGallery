package com.apus.artgallery.controllers;

import com.apus.artgallery.config.jwt.JwtTokenUtil;
import com.apus.artgallery.models.JwtRequest;
import com.apus.artgallery.models.JwtResponse;
import com.apus.artgallery.models.User;
import com.apus.artgallery.services.AccountService;
import com.apus.artgallery.services.UserDataService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
public class AccountController {
    private final AccountService accountService;
    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserDataService userDataService;

    public AccountController(AccountService accountService, AuthenticationManager authenticationManager,
                             JwtTokenUtil jwtTokenUtil, UserDataService userDataService) {
        this.accountService = accountService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userDataService = userDataService;
    }

    @RequestMapping(value = "/api/v1/authenticate", method = RequestMethod.POST)
    public ResponseEntity<Response> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        Response response = new Response("AccountController.createAuthenticationToken", LocalDateTime.now());

        HttpStatus status;

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDataService
                .loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        response.setResult(new JwtResponse(token));
        status = HttpStatus.OK;
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

    @GetMapping("/api/v1/users/{username}")
    public ResponseEntity<Response> getUser(@PathVariable String username) {
        Response response = new Response("AccountController.getUser", LocalDateTime.now());

        HttpStatus status;

        try {
            response.setResult(accountService.getUserByUsername(username));
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

        HttpStatus status;

        try {
            accountService.createAccount(user);

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

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
