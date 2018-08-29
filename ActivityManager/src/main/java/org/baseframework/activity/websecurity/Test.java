package org.baseframework.activity.websecurity;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public  class Test  implements WebMvcConfigurer {

    @Bean
    protected MyPathMatcher createPathMatcher(){
        return  new MyPathMatcher();
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        // 常用的两种
         configurer.setPathMatcher(createPathMatcher());
        // TODO PathMatchConfigurer 还提供其他的一些 api 以供使用
    }
}
