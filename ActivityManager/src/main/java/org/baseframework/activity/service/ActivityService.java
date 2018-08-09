package org.baseframework.activity.service;

import org.baseframework.activity.comm.Table;
import org.baseframework.activity.models.Activity;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;

public interface ActivityService {

    Page<Activity> queryLimit(HttpServletRequest request, int page, int limit);

    Table<Activity> queryLimitStr(HttpServletRequest request, int page, int limit);

    Activity Edit(Activity activity);

    String Edit(HttpServletRequest request);

    String Delete(Activity activity);

    String Delete(long Id);

    String findStrById(long Id);

    Activity findById(long Id);
}
