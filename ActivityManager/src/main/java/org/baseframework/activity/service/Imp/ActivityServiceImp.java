package org.baseframework.activity.service.Imp;

import org.apache.commons.lang3.StringUtils;
import org.baseframework.activity.comm.JsonHelper;
import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.comm.Table;
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
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityServiceImp implements ActivityService {

    @Resource
    private ActivityRepository activityRepository;


    @Override
    public Page<Activity> queryLimit(HttpServletRequest request, int page, int limit) {
        String activityName = request.getParameter("activityName");
        String startTime = request.getParameter("startTime");
        //查询规则定义
        Specification<Activity> specification = (Specification<Activity>) (root, query, criteriaBuilder) ->
        {
            List<Predicate> list = new ArrayList<Predicate>();
            if (!StringUtils.isBlank(activityName)) {
                Path activityNamepath = root.get("activityName");
                list.add(criteriaBuilder.like(activityNamepath, "%" + activityName + "%"));
            }
            if (!StringUtils.isBlank(startTime)) {
                Path startTimepath = root.get("startTime");
                SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
                try {
                    list.add(criteriaBuilder.lessThanOrEqualTo(startTimepath, new Timestamp(format.parse(startTime).getTime())));
                } catch (ParseException e) {
                    System.out.println(e.getMessage());
                }
            }
            Predicate[] p = new Predicate[list.size()];
            return criteriaBuilder.and(list.toArray(p));
        };
        //排序
        Sort sort = new Sort(Sort.Direction.DESC, "addTime");
        Pageable pageable = PageRequest.of(page - 1, limit, sort);
        Page<Activity> pages = activityRepository.findAll(specification, pageable);
        return pages;
    }


    @Override
    public Table<Activity> queryLimitStr(HttpServletRequest request, int page, int limit) {
        Page<Activity> pages = this.queryLimit(request, page, limit);
        Table<Activity> table = new Table<Activity>();
        table.setDatas(pages.getContent());
        table.setTotal(pages.getTotalElements());
        return table;
    }

    @Override
    public OperationResult Edit(Activity activity) {
        Activity model = activityRepository.saveAndFlush(activity);
        if (model == null)
            return new OperationResult(false, "编辑失败");
        return new OperationResult(true, "编辑成功",model.getId());
    }

    @Override
    public String Edit(HttpServletRequest request) {
        Activity activity = new Activity();
        Activity model = activityRepository.saveAndFlush(activity);
        if (model == null)
            return "失败";
        return "成功";
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
