package org.baseframework.activity.service;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.comm.Table;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.extend.ActivityExtend;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;

public interface ActivityService {

    Page<ActivityExtend> queryLimit(HttpServletRequest request, int page, int limit);

    Table<ActivityExtend> queryLimitStr(HttpServletRequest request, int page, int limit);

    OperationResult Edit(Activity activity);

    String Edit(HttpServletRequest request);

    String Delete(Activity activity);

    OperationResult Delete(long Id);

    String findStrById(long Id);

    Activity findById(long Id);

    OperationResult Close(long Id);

    OperationResult Open(long Id);
}
