package org.baseframework.activity.api;

import org.baseframework.activity.models.ActivityRegistration;
import org.baseframework.activity.service.ActivityRegistrationService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/ActivityRegistrationApi")
public class ActivityRegistrationApi {

    @Resource
    private ActivityRegistrationService activityRegistrationService;

    @RequestMapping(value = "/queryLimit")
    public Page<ActivityRegistration> queryLimit(int currentPage, int pagesize, HttpServletRequest request){
        return  activityRegistrationService.queryLimit(request,currentPage ,pagesize);
    }
}
