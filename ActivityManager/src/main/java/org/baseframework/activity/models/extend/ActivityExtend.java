package org.baseframework.activity.models.extend;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.baseframework.activity.models.ActivityAttach;
import org.baseframework.activity.models.ActivityNature;
import org.baseframework.activity.models.ActivityRegistration;

import java.sql.Timestamp;
import java.util.List;

public class ActivityExtend {

    @Setter
    @Getter
    private long Id;

    @Setter
    @Getter
    private Timestamp addTime;

    @Setter
    @Getter
    private String remark;
    /**
     * 活动名称
     */
    @Getter
    @Setter
    private String activityName;

    /**
     * 活动内容
     */
    @Getter
    @Setter
    private String activityContent;

    /**
     * 活动创建者
     */
    @Getter
    @Setter
    private int createId;

    /**
     * 活动负责人
     */
    @Getter
    @Setter
    private int liabilityId;

    /**
     * 活动开始时间
     */
    @Getter
    @Setter
    @JsonFormat(locale = "zh", timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Timestamp startTime;

    /**
     * 活动结束时间
     */
    @Getter
    @Setter
    private Timestamp endTime;

    @Getter
    @Setter
    private EActivityState activityState;

    @Getter
    @Setter
    private EActivityType activityType;


    @Getter
    @Setter
    /**
     * 活动性质
     */
    private ActivityNature activityNature;

    @Getter
    @Setter
    private ActivityAttach activityAttach;

    @Getter
    @Setter
    private long activityResourceSize;

    @Getter
    @Setter
    private List<ActivityRegistration> activityRegistrations;
}
