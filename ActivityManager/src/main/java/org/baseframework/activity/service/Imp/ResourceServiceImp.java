package org.baseframework.activity.service.Imp;

import org.baseframework.activity.comm.JsonHelper;
import org.baseframework.activity.models.Resource;
import org.baseframework.activity.repository.ResourceRepository;
import org.baseframework.activity.service.ResourceService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class ResourceServiceImp implements ResourceService {

    @javax.annotation.Resource
    private ResourceRepository resourceRepository;

    @Override
    public Page<Resource> queryLimit(HttpServletRequest request, int page, int pagesize) {

        Specification<Resource> specification = (Specification<Resource>) (root, query, criteriaBuilder) -> {return  null;};
        Sort sort = new Sort(Sort.Direction.DESC,"addTime");
        Pageable pageable = PageRequest.of(page-1,pagesize,sort);
        return resourceRepository.findAll(specification,pageable);
    }

    @Override
    public String queryLimitStr(HttpServletRequest request, int page, int pagesize) {
        Page<Resource> pages = queryLimit(request,page,pagesize);
        return JsonHelper.objectToStr(pages.getContent());
    }

    @Override
    public String Edit(Resource resource) {
         Resource model = resourceRepository.saveAndFlush(resource);
         return  "";
    }

    @Override
    public String Delete(Resource resource) {
        resourceRepository.delete(resource);
        return null;
    }

    @Override
    public String Delete(long Id) {
        resourceRepository.deleteById(Id);
        return null;
    }

    @Override
    public String findStrById(long Id) {
        return JsonHelper.objectToStr(this.findById(Id));
    }

    @Override
    public Resource findById(long Id) {
        return resourceRepository.getOne(Id);
    }
}
