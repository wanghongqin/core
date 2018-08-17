package org.baseframework.activity.api;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.service.ActivityService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/ActivityApi")
public class ActivityApi {

    @Resource
    private ActivityService activityService;



    @RequestMapping(value = "/queryLimit")
    public Page<Activity> queryLimit(int currentPage, int pagesize, HttpServletRequest request){
        return  activityService.queryLimit(request,currentPage ,pagesize);
    }

    @RequestMapping(value = "/Edit")
    public OperationResult Edit(Activity activity){
        return activityService.Edit(activity);
    }

    @RequestMapping(value = "/Delete")
    public OperationResult Delete(Long Id){
        return activityService.Delete(Id);
    }
    @RequestMapping(value = "/Close")
    public OperationResult Close(Long Id){
        return  activityService.Close(Id);
    }

    @RequestMapping(value = "/Open")
    public OperationResult Open(Long Id){
        return  activityService.Open(Id);
    }

}
