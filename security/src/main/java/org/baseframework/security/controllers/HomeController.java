package org.baseframework.security.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/Home")
public class HomeController {

    @GetMapping("/Index")
    public String Index(Principal principal){
        return  "test"+principal.getName();
    }
}
