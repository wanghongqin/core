package org.baseframework.activity.service;

import org.baseframework.activity.models.Activity;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;

public interface ActivityService {

    Page<Activity> queryLimit(HttpServletRequest request, int page, int limit);

    String queryLimitStr(HttpServletRequest request, int page, int limit);
}
