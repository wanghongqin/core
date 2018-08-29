package org.baseframework.activity.mobilecontrollers;

import org.apache.commons.lang3.StringUtils;
import org.baseframework.activity.models.ActivityResource;
import org.baseframework.activity.service.ActivityResourceService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/MobileResource")
public class MobileResourceController {

    @Resource
    private ActivityResourceService activityResourceService;

    @GetMapping("/Upload")
    public ModelAndView Upload(String localIds) {
        ModelAndView view = new ModelAndView();
        view.setViewName("/MobileResource/Upload");
        return view;
    }

    @GetMapping("/ViewResource/{activityId}")
    public ModelAndView ViewResource(@PathVariable(name = "activityId") long activityId) {
        ModelAndView view = new ModelAndView();
        view.addObject("activityId", activityId);
        view.setViewName("/MobileResource/ViewResource");
        return view;
    }

    @GetMapping("/AuditingResource/{activityId}")
    public ModelAndView AuditingResource(@PathVariable(name = "activityId") long activityId) {
        ModelAndView view = new ModelAndView();
        view.addObject("activityId", activityId);

        //获取资源
        List<ActivityResource> list = activityResourceService.findAll(activityId, null, true);
        List<Long> ids = list.stream().collect(() -> new ArrayList<Long>(), (item, it) -> item.add(it.getId()), (all, ll) -> all.addAll(ll));
        view.addObject("resouceIds", StringUtils.join(ids, ","));
        view.setViewName("/MobileResource/AuditingResource");
        return view;
    }
}
