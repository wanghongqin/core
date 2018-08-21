package org.baseframework.activity.api;

import org.baseframework.activity.models.Resource;
import org.baseframework.activity.service.ResourceService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/ResourceApi")
public class ResourceApi {

    @javax.annotation.Resource
    private ResourceService resourceService;

    @RequestMapping(value = "/queryLimit")
    public Page<Resource> queryLimit(int currentPage, int pagesize, HttpServletRequest request){
        return  resourceService.queryLimit(request,currentPage ,pagesize);
    }
}
