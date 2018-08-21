package org.baseframework.activity.api;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.extend.AcitityResourceExtand;
import org.baseframework.activity.service.ActivityResourceService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/ActivityResourceApi")
public class ActivityResourceApi {
    @Resource
    private ActivityResourceService activityResourceService;

    @RequestMapping(value = "/queryLimit")
    public Page<AcitityResourceExtand> queryLimit(int currentPage, int pagesize, HttpServletRequest request) {
        return activityResourceService.queryLimit(request, currentPage, pagesize);
    }

    @RequestMapping(value = "/Upload/{activityId}")
    public OperationResult Upload(@PathVariable(name = "activityId") long activityId, HttpServletRequest request) {
        return activityResourceService.activityResource(activityId, request);
    }

    @RequestMapping(value = "/AuditingResource/{activityId}")
    public OperationResult AuditingResource(@PathVariable(name = "activityId") long activityId, HttpServletRequest request) {
        return activityResourceService.auditingResource(activityId, request);
    }
}
