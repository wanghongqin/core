package org.baseframework.activity.service.Imp;

import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityResource;
import org.baseframework.activity.models.Resource;
import org.baseframework.activity.repository.ActivityResourceRepository;
import org.baseframework.activity.service.ActivityResourceService;
import org.baseframework.activity.service.ActivityService;
import org.baseframework.activity.service.ResourceService;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

;import java.sql.Timestamp;
import java.util.Date;

@Service
public class ActivityResourceServiceImp implements ActivityResourceService {

    @javax.annotation.Resource
    private ActivityService activityService;

    @javax.annotation.Resource
    private ResourceService resourceService;

    @javax.annotation.Resource
    private ActivityResourceRepository activityResourceRepository;

    /**
     * 保存活动资源
     * @param activityId
     * @param request
     * @return
     */
    @Override
    public String activityResource(long activityId, HttpServletRequest request) {
        Activity activity = activityService.findById(activityId);
        if(activity==null)
            return "";
        Resource resource = resourceService.Upload(request);
        if(resource==null)
            return "";
        ActivityResource activityResource = new ActivityResource();
        activityResource.setActivity(activity);
        activityResource.setResource(resource);
        activityResource.setEnable(false);
        activityResource.setRemark("");
        activityResource.setAddTime(new Timestamp(new Date().getTime()));
        activityResourceRepository.saveAndFlush(activityResource);
        return null;
    }
}
