package org.baseframework.activity.pccontrollers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/Activity")
public class ActivityController {

    @GetMapping("/Index")
    public ModelAndView Index(Authentication principal) {
        ModelAndView view = new ModelAndView();
        List<SimpleGrantedAuthority> list = (List<SimpleGrantedAuthority>) principal.getAuthorities();
        view.setViewName("/Activity/Index");
        return view;
    }
}