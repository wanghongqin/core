package org.baseframework.activity.service;

import javax.servlet.http.HttpServletRequest;

public interface ActivityRegistrationService {

    /**
     * 报名
     * @param request
     * @return
     */
    String Registration(long activityId,int userId,HttpServletRequest request);

    String SignId(long activityId,HttpServletRequest request);
}
