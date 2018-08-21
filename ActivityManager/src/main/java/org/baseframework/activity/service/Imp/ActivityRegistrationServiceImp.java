package org.baseframework.activity.service.Imp;

import org.apache.commons.lang3.StringUtils;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityRegistration;
import org.baseframework.activity.repository.ActivityRegistrationRepository;
import org.baseframework.activity.service.ActivityRegistrationService;
import org.baseframework.activity.service.ActivityService;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ActivityRegistrationServiceImp implements ActivityRegistrationService {

    @Resource
    private ActivityService activityService;

    @Resource
    private ActivityRegistrationRepository activityRegistrationRepository;


    @Override
    public Page<ActivityRegistration> queryLimit(HttpServletRequest request, int page, int limit) {
        String registrationName = request.getParameter("registrationName");
        String phone = request.getParameter("phone");
        String activityId = request.getParameter("activityId");
        //查询规则定义
        Specification<ActivityRegistration> specification = (Specification<ActivityRegistration>) (root, query, criteriaBuilder) ->
        {
            List<Predicate> list = new ArrayList<Predicate>();
            if (!StringUtils.isBlank(registrationName)) {
                Path registrationNamepath = root.get("registrationName");
                list.add(criteriaBuilder.like(registrationNamepath, "%" + registrationName + "%"));
            }
            if (!StringUtils.isBlank(phone)) {
                Path phonepath = root.get("phone");
                list.add(criteriaBuilder.like(phonepath, "%" + phone + "%"));
            }
            if (!StringUtils.isBlank(activityId)) {
                Path activityIdpath = root.get("activity").get("Id");
                list.add(criteriaBuilder.equal(activityIdpath, activityId));
            }
            Predicate[] p = new Predicate[list.size()];
            return criteriaBuilder.and(list.toArray(p));
        };
        //排序
        Sort sort = new Sort(Sort.Direction.DESC, "addTime");
        Pageable pageable = PageRequest.of(page - 1, limit, sort);
        Page<ActivityRegistration> pages = activityRegistrationRepository.findAll(specification, pageable);
        return pages;
    }

    /**
     * 报名
     *
     * @param activityId
     * @param userId
     * @param request
     * @return
     */
    @Override
    public String Registration(long activityId, int userId, HttpServletRequest request) {
        Activity activity = activityService.findById(activityId);
        if (activity == null)
            return "失败";

        if (activity.getActivityAttach() != null) {
            long number = activity.getActivityAttach().getAttendNumber();
            if (activity.getActivityRegistrations() != null)
                if (activity.getActivityRegistrations().size() >= number)
                    return "失败";
        }

        String registrationName = request.getParameter("registrationName");
        String phone = request.getParameter("phone");

        ActivityRegistration activityRegistration = new ActivityRegistration();
        activityRegistration.setActivity(activity);
        activityRegistration.setPhone(phone);
        activityRegistration.setRegistrationName(registrationName);
        activityRegistration.setSignId(false);
        activityRegistration.setUserId(userId);
        activityRegistration.setAddTime(new Timestamp(new Date().getTime()));
        activityRegistrationRepository.saveAndFlush(activityRegistration);
        return "成功";
    }

    /**
     * 签到
     *
     * @param activityId
     * @param request
     * @return
     */
    @Override
    public String SignId(long activityId, HttpServletRequest request) {
        Activity activity = activityService.findById(activityId);
        if (activity == null)
            return "失败";

        String registrationName = request.getParameter("registrationName");
        String phone = request.getParameter("phone");
        ActivityRegistration model = new ActivityRegistration();
        model.setRegistrationName(registrationName);
        model.setPhone(phone);
        model.setActivity(activity);
        //忽略null
        ExampleMatcher matcher = ExampleMatcher.matching().withNullHandler(ExampleMatcher.NullHandler.IGNORE);
//                .withMatcher("phone", ExampleMatcher.GenericPropertyMatchers())//模糊查询匹配开头，即{username}%
//                .withMatcher("registrationName" ,ExampleMatcher.GenericPropertyMatchers.contains());//全部模糊查询，即%{address}%
        Example<ActivityRegistration> example = Example.of(model, matcher);
        Optional<ActivityRegistration> opt = activityRegistrationRepository.findOne(example);
        if (!opt.isPresent())
            return "失败";

        ActivityRegistration activityRegistration = opt.get();
        activityRegistration.setSignId(true);
        activityRegistration.setSignTime(new Timestamp(new Date().getTime()));
        activityRegistrationRepository.saveAndFlush(activityRegistration);
        return "成功";
    }
}
