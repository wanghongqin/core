package org.baseframework.activity.apicontrollers;

import org.baseframework.activity.service.ActivityService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/ActivityApi")
public class ActivityApiController {

    @Resource
    private ActivityService activityService;

    @RequestMapping("/queryLimit")
    public String queryLimit(int page,int limit,HttpServletRequest request){
        return  activityService.queryLimitStr(request,page,limit);
    }
}
