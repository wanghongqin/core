package org.baseframework.activity.api;

import org.baseframework.activity.models.ActivityNature;
import org.baseframework.activity.service.ActivityNatureService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/ActivityNatureApi")
public class ActivityNatureApi {

    @Resource
    private ActivityNatureService activityNatureService;

    @RequestMapping(value = "/queryActivityNature")
    public List<ActivityNature> queryActivityNature(){
        return  activityNatureService.GetActivityNatures();
    }
}
