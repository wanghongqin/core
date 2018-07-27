package org.baseframework.activity.service;

import org.baseframework.activity.models.Resource;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;

public interface ResourceService {

    Page<Resource> queryLimit(HttpServletRequest request, int page, int limit);

    String queryLimitStr(HttpServletRequest request, int page, int limit);

    String Edit(Resource resource);

    String Delete(Resource resource);

    String Delete(long Id);

    String findStrById(long Id);

    Resource findById(long Id);
}
