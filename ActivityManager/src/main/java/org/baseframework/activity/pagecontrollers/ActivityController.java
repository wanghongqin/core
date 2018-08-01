package org.baseframework.activity.pagecontrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
@RequestMapping("/Activity")
public class ActivityController {

    @GetMapping("/Index")
    public ModelAndView Index(Principal principal) {
        ModelAndView view = new ModelAndView();
        view.addObject("user",principal.getName());
        view.setViewName("/Activity/Index");
        return view;
    }
}
