package org.baseframework.security.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @GetMapping("/user/me")
    public Principal user(Principal principal) {
        return principal;
    }

    @GetMapping("/user/mee")
    public Principal user() {
        Principal principal = new Principal() {
            @Override
            public String getName() {
                return null;
            }
        };
        return principal;
    }

}