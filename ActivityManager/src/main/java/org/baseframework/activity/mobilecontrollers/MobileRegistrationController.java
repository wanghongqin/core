package org.baseframework.activity.mobilecontrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/MobileRegistration")
public class MobileRegistrationController {
    @GetMapping("/AddRegistration/{Id}")
    public ModelAndView AddRegistration(@PathVariable(name = "Id") int Id){
        ModelAndView view = new ModelAndView();
        view.addObject("activityId",Id);
        view.setViewName("/MobileRegistration/AddRegistration");
        return view;
    }

    @GetMapping("/Registration/{Id}")
    public  ModelAndView Registration(@PathVariable(name = "Id") int Id){
        ModelAndView view = new ModelAndView();
        view.addObject("activityId",Id);
        view.setViewName("/MobileRegistration/Registration");
        return view;
    }
}
