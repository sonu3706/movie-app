package com.app.movie.controller;

import com.app.movie.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.movie.service.AuthenticationService;

@RestController
@RequestMapping("/auth/")
@CrossOrigin("*")
public class AuthenticationController {

    private AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody User user) {
        ResponseEntity responseEntity = null;
        try {
            user = authenticationService.register(user);
            responseEntity = ResponseEntity.status(201).body(user);
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(409).body(e.getMessage());
        }
        return responseEntity;
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody User user) {
        ResponseEntity responseEntity = null;
        try {
             user = authenticationService.login(user.getEmail(), user.getPassword());
            responseEntity = ResponseEntity.status(200).body(user);
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(409).body(e.getMessage());
        }
        return responseEntity;
    }
}
