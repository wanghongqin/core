package org.baseframework.activity.pagecontrollers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/Home")
public class HomeController {

    @GetMapping("/Index")
    public ModelAndView Index(Authentication principal) {
        ModelAndView view = new ModelAndView();
        List<SimpleGrantedAuthority> list = (List<SimpleGrantedAuthority>) principal.getAuthorities();
        view.setViewName("/Home/index");
        return view;
    }
}
