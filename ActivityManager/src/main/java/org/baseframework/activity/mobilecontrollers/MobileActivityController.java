package org.baseframework.activity.mobilecontrollers;

import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityNature;
import org.baseframework.activity.models.extend.EActivityState;
import org.baseframework.activity.models.extend.EActivityType;
import org.baseframework.activity.service.ActivityService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.Date;

@Controller
@RequestMapping("/MobileActivity")
public class MobileActivityController {

    @Resource
    private ActivityService activityService;

    @GetMapping("/Index")
    public ModelAndView Index() {
        ModelAndView view = new ModelAndView();
        view.setViewName("/MobileActivity/Index");
        return view;
    }

    @GetMapping("/Edit/{Id}")
    public ModelAndView Edit(@PathVariable(name = "Id") int Id) {
        ModelAndView view = new ModelAndView();
        Activity activity = null;
        if (Id > 0) {
            activity = activityService.findById(Id);
        }
        if(activity==null){
            activity = new Activity();
            activity.setId(0);
            activity.setActivityContent("");
            activity.setActivityName("");
            activity.setActivityState(EActivityState.open);
            activity.setActivityType(EActivityType.enroll);
            activity.setCreateId(0);
            activity.setLiabilityId(0);
            activity.setRemark("");
            activity.setActivityNature(new ActivityNature());
            Timestamp timestamp = new Timestamp(new Date().getTime());
            activity.setAddTime(timestamp);
            activity.setStartTime(timestamp);
        }
        view.addObject("activity",activity);
        view.setViewName("/MobileActivity/Edit");
        return view;
    }
}
