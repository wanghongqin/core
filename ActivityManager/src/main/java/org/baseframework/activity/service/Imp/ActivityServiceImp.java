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
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.servlet.http.HttpServletRequest;

@Service
public class ActivityServiceImp implements ActivityService {

    @Resource
    private ActivityRepository activityRepository;

    @Override
    public Page<Activity> queryLimit(HttpServletRequest request, int page, int limit) {
        //查询规则定义
        Specification<Activity> specification = new Specification<Activity>() {
            @Override
            public Predicate toPredicate(Root<Activity> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                //
                return null;
            }
        };
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
}
