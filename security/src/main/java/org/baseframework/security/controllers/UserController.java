package org.baseframework.security.controllers;

import org.baseframework.security.models.Users;
import org.baseframework.security.service.UserService;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class UserController {

    @Resource
    private UserService userService;

    @GetMapping("/user/info")
    public OAuth2Authentication user(OAuth2Authentication principal) {

        String name =principal.getName();
        Users user = userService.FindByName(name);
        principal.setDetails(user);
        return principal;
    }
}