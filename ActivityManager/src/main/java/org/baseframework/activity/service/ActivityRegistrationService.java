package org.baseframework.activity.service;

import org.baseframework.activity.models.ActivityRegistration;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;

public interface ActivityRegistrationService {

    Page<ActivityRegistration> queryLimit(HttpServletRequest request, int page, int limit);
    /**
     * 报名
     * @param request
     * @return
     */
    String Registration(long activityId,int userId,HttpServletRequest request);

    String SignId(long activityId,HttpServletRequest request);

}
