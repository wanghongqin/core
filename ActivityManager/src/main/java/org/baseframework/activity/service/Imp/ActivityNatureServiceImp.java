package org.baseframework.activity.service.Imp;

import org.baseframework.activity.models.ActivityNature;
import org.baseframework.activity.repository.ActivityNatureRepository;
import org.baseframework.activity.service.ActivityNatureService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ActivityNatureServiceImp implements ActivityNatureService {

    @Resource
    private ActivityNatureRepository activityNatureRepository;

    @Override
    public List<ActivityNature> GetActivityNatures() {
        return activityNatureRepository.findAll();
    }
}
