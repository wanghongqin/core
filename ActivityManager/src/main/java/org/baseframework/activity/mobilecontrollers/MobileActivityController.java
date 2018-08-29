package org.baseframework.activity.mobilecontrollers;

import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityAttach;
import org.baseframework.activity.models.ActivityNature;
import org.baseframework.activity.models.Templete;
import org.baseframework.activity.models.extend.EActivityState;
import org.baseframework.activity.models.extend.EActivityType;
import org.baseframework.activity.service.ActivityService;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.security.Principal;
import java.sql.Timestamp;
import java.util.Date;

@Controller
@RequestMapping("/MobileActivity")
public class MobileActivityController {

    @Resource
    private ActivityService activityService;

    @GetMapping("/Index")
    public ModelAndView Index(OAuth2Authentication auth2Authentication) {
        System.out.println(auth2Authentication.getUserAuthentication().getDetails());
        ModelAndView view = new ModelAndView();
        view.setViewName("/MobileActivity/Index");
        view.addObject("userId",1);
        return view;
    }

    @GetMapping("/Edit/{Id}")
    public ModelAndView Edit(@PathVariable(name = "Id") int Id, Principal principal) {
        ModelAndView view = new ModelAndView();
        Activity activity = null;
        ActivityAttach attach = null;
        if (Id > 0) {
            activity = activityService.findById(Id);
            if (activity != null)
                attach = activity.getActivityAttach();
        }
        if (activity == null) {
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
            activity.setActivityAddress("");
        }
        if (attach == null) {
            attach = new ActivityAttach();
            attach.setAttendNumber(0);
            attach.setEnableImagePoint(5);
            attach.setEnrollPoint(2);
            attach.setSignIdPoint(2);
            attach.setImagePoint(1);
            Templete templete = new Templete();
            templete.setAliasName("");
            templete.setId(0);
            attach.setEnrollTemplete(templete);
            attach.setSummaryTemplete(templete);
            attach.setActivity(activity);

        }

        view.addObject("activity", activity);
        view.addObject("attach", attach);

        view.setViewName("/MobileActivity/Edit");
        return view;
    }
}
