package org.baseframework.activity.pagecontrollers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Activity")
public class ActivityController {

    @GetMapping("/Index")
    public String Index() {
        return "/Activity/Index";
    }
}
