package org.baseframework.activity.mobilecontrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/MobileResource")
public class MobileResourceController {

    @GetMapping("/Upload")
    public ModelAndView Upload(String localIds) {
        ModelAndView view = new ModelAndView();
        view.setViewName("/MobileResource/Upload");
        return view;
    }

    @GetMapping("/ViewResource/{activityId}")
    public ModelAndView ViewResource(@PathVariable(name = "activityId") int activityId) {
        ModelAndView view = new ModelAndView();
        view.addObject("activityId", activityId);
        view.setViewName("/MobileResource/ViewResource");
        return view;
    }
    @GetMapping("/AuditingResource/{activityId}")
    public ModelAndView AuditingResource(@PathVariable(name = "activityId") int activityId){
        ModelAndView view = new ModelAndView();
        view.addObject("activityId", activityId);
        view.setViewName("/MobileResource/AuditingResource");
        return view;
    }
}
