package org.baseframework.activity.service.Imp;

import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityAttach;
import org.baseframework.activity.repository.ActivityAttachRepository;
import org.baseframework.activity.service.ActivityAttachService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Service
public class ActivityAttachServiceImp implements ActivityAttachService {

    @Resource
    private ActivityAttachRepository activityAttachRepository;
    @Override
    public ActivityAttach Edit(Activity activity, HttpServletRequest request) {
        ActivityAttach activityAttach = activity.getActivityAttach();
        if(activityAttach==null)
            activityAttach = new ActivityAttach();
        activityAttach.setActivity(activity);
        ActivityAttach model = activityAttachRepository.saveAndFlush(activityAttach);
        return model;
    }
}
