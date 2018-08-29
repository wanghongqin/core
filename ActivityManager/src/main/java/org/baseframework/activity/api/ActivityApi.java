package org.baseframework.activity.api;

import org.baseframework.activity.comm.OperationResult;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.extend.ActivityExtend;
import org.baseframework.activity.models.extend.ActivityType;
import org.baseframework.activity.models.extend.EActivityType;
import org.baseframework.activity.models.extend.Users;
import org.baseframework.activity.service.ActivityService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/ActivityApi")
public class ActivityApi {

    @Resource
    private ActivityService activityService;


    @RequestMapping(value = "/queryLimit")
    public Page<ActivityExtend> queryLimit(int currentPage, int pagesize, HttpServletRequest request) {
        return activityService.queryLimit(request, currentPage, pagesize);
    }

    @RequestMapping(value = "/Edit")
    public OperationResult Edit(Activity activity) {
        return activityService.Edit(activity);
    }

    @RequestMapping(value = "/Delete")
    public OperationResult Delete(Long Id) {
        return activityService.Delete(Id);
    }

    @RequestMapping(value = "/Close")
    public OperationResult Close(Long Id) {
        return activityService.Close(Id);
    }

    @RequestMapping(value = "/Open")
    public OperationResult Open(Long Id) {
        return activityService.Open(Id);
    }

    @RequestMapping(value = "/Getliability")
    public List<Users> Getliability() {
        List<Users> users = new ArrayList<Users>();
        Users user = new Users();
        user.setId(1);
        user.setName("admin");
        users.add(user);
        Users user1 = new Users();
        user1.setId(2);
        user1.setName("test");
        users.add(user1);
        return users;
    }

    @RequestMapping(value = "/GetActivityType")
    public List<ActivityType> GetActivityType() {
        EActivityType[] types = EActivityType.values();
        List<ActivityType> list = new ArrayList<ActivityType>();
        for (int i = 0; i < types.length; i++) {
            ActivityType type = new ActivityType();
            type.setDec(types[i].getDec());
            type.setType(types[i].getType());
            list.add(type);
        }
        return list;
    }

}
