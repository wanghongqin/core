package org.baseframework.activity.service;

import javax.servlet.http.HttpServletRequest;

public interface ActivityResourceService {

    String activityResource(long activityId, HttpServletRequest request);
}
