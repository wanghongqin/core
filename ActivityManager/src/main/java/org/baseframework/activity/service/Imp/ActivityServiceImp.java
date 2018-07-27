package org.baseframework.activity.service.Imp;

import org.baseframework.activity.comm.JsonHelper;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.repository.ActivityRepository;
import org.baseframework.activity.service.ActivityService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Service
public class ActivityServiceImp implements ActivityService {

    @Resource
    private ActivityRepository activityRepository;

    @Override
    public Page<Activity> queryLimit(HttpServletRequest request, int page, int limit) {
        //查询规则定义
        Specification<Activity> specification = (Specification<Activity>)(root,query,criteriaBuilder)->{return  null;};
        //排序
        Sort sort = new Sort(Sort.Direction.DESC,"addTime");
        Pageable pageable = PageRequest.of(page-1,limit,sort);
        Page<Activity> pages = activityRepository.findAll(specification,pageable);
        return pages;
    }


    @Override
    public String queryLimitStr(HttpServletRequest request, int page, int limit) {
        Page<Activity> pages =  this.queryLimit(request, page, limit);
        return JsonHelper.objectToStr(pages.getContent());
    }

    @Override
    public String Edit(Activity activity) {
        Activity  model = activityRepository.saveAndFlush(activity);
        return null;
    }

    @Override
    public String Delete(Activity activity) {
        activityRepository.delete(activity);
        return null;
    }

    @Override
    public String Delete(long Id) {
        activityRepository.deleteById(Id);
        return null;
    }

    @Override
    public String findStrById(long Id) {

        return JsonHelper.objectToStr(this.findById(Id));
    }

    @Override
    public Activity findById(long Id) {
        return activityRepository.getOne(Id);
    }
}
