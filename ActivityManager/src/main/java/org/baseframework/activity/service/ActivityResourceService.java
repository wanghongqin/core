package org.baseframework.activity.service;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.ActivityResource;
import org.baseframework.activity.models.Resource;
import org.baseframework.activity.models.extend.AcitityResourceExtand;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface ActivityResourceService {

    Page<AcitityResourceExtand> queryLimit(HttpServletRequest request, int page, int limit);

    List<ActivityResource> findAll(Long activityId,List<Long> ids,Boolean enable);

    /**
     * 审核资源
     * @param activityId
     * @param request
     * @return
     */
    OperationResult auditingResource(long activityId, HttpServletRequest request);

    /**
     * 上传资源并保存到相应活动中
     * @param activityId
     * @param request
     * @return
     */
    OperationResult activityResource(long activityId,HttpServletRequest request);

    /**
     * 保存资源
     * @param activityId
     * @param resources
     * @return
     */
    OperationResult activityResource(long activityId, List<Resource> resources);
}
