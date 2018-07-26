package org.baseframework.usercenter.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
public class HomeController {
    @GetMapping("/Index")
    public String Index() {
        return "Index";
    }

    @GetMapping("/securedPage")
    public ModelAndView securedPage(Principal principal) {

        ModelAndView view = new ModelAndView();
        view.addObject("user",principal.getName());
        view.setViewName("securedPage");
        return view;
    }
}
