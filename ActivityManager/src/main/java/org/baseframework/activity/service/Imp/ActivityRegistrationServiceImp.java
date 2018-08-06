package org.baseframework.activity.service.Imp;

import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityRegistration;
import org.baseframework.activity.repository.ActivityRegistrationRepository;
import org.baseframework.activity.service.ActivityRegistrationService;
import org.baseframework.activity.service.ActivityService;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;

@Service
public class ActivityRegistrationServiceImp implements ActivityRegistrationService {

    @Resource
    private ActivityService activityService;

    @Resource
    private ActivityRegistrationRepository activityRegistrationRepository;

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
