package org.baseframework.activity.api;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.ActivityAttach;
import org.baseframework.activity.service.ActivityAttachService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/ActivityAttachApi")
public class ActivityAttachApi {
    @Resource
    private ActivityAttachService activityAttachService;

    @RequestMapping(value = "/Edit")
    public OperationResult Edit(ActivityAttach activityAttach){
        return activityAttachService.Edit(activityAttach);
    }
}
