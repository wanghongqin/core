package org.baseframework.baseconfig;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebCMvcRouter implements WebMvcConfigurer {

    public void configureViewResolvers(ViewResolverRegistry registry) {
        System.out.println(registry);
    }
}
