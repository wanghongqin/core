package org.baseframework.activity.service.Imp;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.ActivityAttach;
import org.baseframework.activity.repository.ActivityAttachRepository;
import org.baseframework.activity.service.ActivityAttachService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class ActivityAttachServiceImp implements ActivityAttachService {

    @Resource
    private ActivityAttachRepository activityAttachRepository;
    @Override
    public OperationResult Edit(ActivityAttach activityAttach) {
        ActivityAttach model = activityAttachRepository.saveAndFlush(activityAttach);
        if(model==null)
            return new OperationResult(false, "编辑失败");
        return new OperationResult(true, "编辑成功");
    }
}
