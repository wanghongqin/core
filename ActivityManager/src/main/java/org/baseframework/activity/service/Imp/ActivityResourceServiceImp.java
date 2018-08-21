package org.baseframework.activity.service.Imp;

import org.apache.commons.lang3.StringUtils;
import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.ActivityResource;
import org.baseframework.activity.models.Resource;
import org.baseframework.activity.models.extend.AcitityResourceExtand;
import org.baseframework.activity.repository.ActivityResourceRepository;
import org.baseframework.activity.service.ActivityResourceService;
import org.baseframework.activity.service.ActivityService;
import org.baseframework.activity.service.ResourceService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Function;
import java.util.regex.Pattern;

;

@Service
@Transactional
public class ActivityResourceServiceImp implements ActivityResourceService {

    @javax.annotation.Resource
    private ActivityService activityService;

    @javax.annotation.Resource
    private ResourceService resourceService;

    @javax.annotation.Resource
    private ActivityResourceRepository activityResourceRepository;

    @Override
    public Page<AcitityResourceExtand> queryLimit(HttpServletRequest request, int page, int limit) {
        String activityId = request.getParameter("activityId");
        String enable = request.getParameter("enable");
        //查询规则定义
        Specification<ActivityResource> specification = (Specification<ActivityResource>) (root, query, criteriaBuilder) ->
        {
            List<Predicate> list = new ArrayList<Predicate>();
            if (!StringUtils.isBlank(activityId)) {
                Path activityIdpath = root.get("activity").get("Id");
                list.add(criteriaBuilder.equal(activityIdpath, activityId));
            }
            if (!StringUtils.isBlank(enable)) {
                if (enable == "true" || enable == "false") {
                    Path enablepath = root.get("enable");
                    list.add(criteriaBuilder.equal(enablepath, enable == "true" ? 1 : 0));
                }
            }
            Predicate[] p = new Predicate[list.size()];
            return criteriaBuilder.and(list.toArray(p));
        };
        //排序
        Sort sort = new Sort(Sort.Direction.DESC, "addTime");
        Pageable pageable = PageRequest.of(page - 1, limit, sort);
        Page<ActivityResource> pages = activityResourceRepository.findAll(specification, pageable);
        Page<AcitityResourceExtand> extands = pages.map(new Function<ActivityResource, AcitityResourceExtand>() {
            @Override
            public AcitityResourceExtand apply(ActivityResource activityResource) {
                AcitityResourceExtand extand = new AcitityResourceExtand();
                extand.setActivity(activityResource.getActivity());
                extand.setAddTime(activityResource.getAddTime());
                extand.setEnable(activityResource.isEnable());
                extand.setId(activityResource.getId());
                extand.setRemark(activityResource.getRemark());
                extand.setResource(activityResource.getResource());
                return extand;
            }
        });
        return extands;
    }

    /**
     * 审核活动资源
     *
     * @param activityId
     * @param request
     * @return
     */
    @Override
    public OperationResult auditingResource(long activityId, HttpServletRequest request) {
        String resouceIds = request.getParameter("resouceIds");
        String[] ids = StringUtils.split(resouceIds, ",");
        List<Long> list = new ArrayList<Long>();
        boolean b = true;
        for (String Id : ids) {
            Pattern pattern = Pattern.compile("^[0-9]*[1-9][0-9]*$");
            if (pattern.matcher(Id).matches()) {
                list.add(Long.parseLong(Id));
            } else {
                b = false;
                break;
            }
        }
        if (b) {
            List<ActivityResource> activityResources = activityResourceRepository.findAll((Specification<ActivityResource>) (root, query, criteriaBuilder) ->
            {
                List<Predicate> predicates = new ArrayList<Predicate>();
                Path activityIdpath = root.get("activity").get("Id");
                predicates.add(criteriaBuilder.equal(activityIdpath, activityId));
                Predicate[] p = new Predicate[predicates.size()];
                return criteriaBuilder.and(predicates.toArray(p));
            });
            try {
                activityResourceRepository.auditingResource(activityId, list);
                activityResourceRepository.cancalResource(activityId, list);
                return new OperationResult(true, "资源审核成功");
            } catch (Exception ex) {
                //还原原始状态
                activityResourceRepository.saveAll(activityResources);
                activityResourceRepository.flush();
                return new OperationResult(false, "资源审核失败");
            }
        } else {
            return new OperationResult(false, "资源审核失败");
        }
    }

    @Override
    public OperationResult activityResource(long activityId, HttpServletRequest request) {
        List<Resource> resources = resourceService.UploadResources(request);
        if (resources == null)
            return new OperationResult(false, "资源上传失败");
        return this.activityResource(activityId, resources);
    }

    @Override
    public OperationResult activityResource(long activityId, List<Resource> resources) {
        Activity activity = activityService.findById(activityId);
        if (activity == null)
            return new OperationResult(false, "活动不存在");
        List<ActivityResource> list = new ArrayList<ActivityResource>();
        for (Resource resource : resources) {
            ActivityResource activityResource = new ActivityResource();
            activityResource.setActivity(activity);
            activityResource.setResource(resource);
            activityResource.setEnable(false);
            activityResource.setRemark("");
            activityResource.setAddTime(new Timestamp(new Date().getTime()));
            list.add(activityResource);
        }
        try {
            activityResourceRepository.saveAll(list);
            activityResourceRepository.flush();
            return new OperationResult(true, "资源上传成功");
        } catch (Exception ex) {
            return new OperationResult(false, "资源上传失败");
        }
    }
}
