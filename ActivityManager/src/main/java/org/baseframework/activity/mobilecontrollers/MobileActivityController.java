package org.baseframework.activity.mobilecontrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/MobileActivity")
public class MobileActivityController {

    @GetMapping("/Index")
    public ModelAndView Index() {
        ModelAndView view = new ModelAndView();
        view.setViewName("/MobileActivity/Index");
        return view;
    }
}
