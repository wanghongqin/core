package org.baseframework.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"org.baseframework"})
public class SecurityApplication {
    public  static void main(String[] args){
        SpringApplication.run(SecurityApplication.class,args);
    }
}
