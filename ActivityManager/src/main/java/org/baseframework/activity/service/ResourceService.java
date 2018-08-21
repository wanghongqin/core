
package org.baseframework.activity.service;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.Resource;
import org.springframework.data.domain.Page;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface ResourceService {

    Page<Resource> queryLimit(HttpServletRequest request, int page, int limit);

    String queryLimitStr(HttpServletRequest request, int page, int limit);

    String Edit(Resource resource);

    String Delete(Resource resource);

    String Delete(long Id);

    String findStrById(long Id);

    Resource findById(long Id);

    /**
     * 上传资源
     * @param request
     * @return
     */
    String UploadWithStr(String content,HttpServletRequest request);

    /**
     * 上传资源
     * @param request
     * @return
     */
    Resource Upload(String content,HttpServletRequest request);

    OperationResult Upload( HttpServletRequest request);

    List<Resource> UploadResources( HttpServletRequest request);

    List<Resource> findAll(String Ids);
}
