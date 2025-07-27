package com.example.jwtsecurity.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    public boolean isValidUser(String username, String password) {
        return username.equals("user") && password.equals("pwd");
    }
}
