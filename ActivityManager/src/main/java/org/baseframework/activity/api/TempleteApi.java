package org.baseframework.activity.api;

import org.baseframework.activity.models.Templete;
import org.baseframework.activity.service.TempleteService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/TempleteApi")
public class TempleteApi {

    @Resource
    private TempleteService templeteService;

    @RequestMapping(value = "/getTempleteWithType")
    public List<Templete> getTempleteWithType(String type) {
        return templeteService.getTempleteWithType(type);
    }
}
