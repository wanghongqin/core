package org.baseframework.activity.mobilecontrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/MobileResource")
public class MobileResourceController {

    @GetMapping("/Upload")
    public ModelAndView Upload() {
        ModelAndView view = new ModelAndView();
        view.setViewName("/MobileResource/Upload");
        return view;
    }
}
