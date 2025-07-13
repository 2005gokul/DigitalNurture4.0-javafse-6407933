package com.example.jwtsecurity.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public String authenticate(HttpServletRequest request) {
        System.out.println("✅ /authenticate called");

        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            // Decode Base64 credentials
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
            String decodedCredentials = new String(decodedBytes);

            // Split into username and password
            String[] credentials = decodedCredentials.split(":", 2);
            String username = credentials[0];
            String password = credentials[1];

            System.out.println("✅ Username: " + username);
            System.out.println("✅ Password: " + password);

            // Fake check
            if (username.equals("gokul") && password.equals("secret123")) {
                return "{\"message\":\"Hello " + username + "!\"}";
            } else {
                return "{\"error\":\"Invalid credentials\"}";
            }
        }

        return "{\"error\":\"Authorization header missing\"}";
    }
}
