package org.baseframework.activity.service.Imp;

import org.baseframework.activity.models.ActivityNature;
import org.baseframework.activity.repository.ActivityNatureRepository;
import org.baseframework.activity.service.ActivityNatureService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ActivityNatureServiceImp implements ActivityNatureService {

    @Resource
    private ActivityNatureRepository activityNatureRepository;

    @Override
    public List<ActivityNature> GetActivityNatures() {
        return activityNatureRepository.findAll();
    }
}
