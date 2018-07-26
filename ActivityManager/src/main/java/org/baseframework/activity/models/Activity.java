package org.baseframework.activity.models;

import lombok.Getter;
import lombok.Setter;
import org.baseframework.activity.models.extend.EActivityState;
import org.baseframework.activity.models.extend.EActivityType;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

/**
 * 活动
 */
@Entity
@Table(name = "t_activity")
public class Activity extends EntityBase {

    /**
     * 活动名称
     */
    @Column(name = "activityName", nullable = false)
    @Getter
    @Setter
    private String activityName;

    /**
     * 活动内容
     */
    @Column(name = "activityContent", nullable = false,columnDefinition = "TEXT")
    @Getter
    @Setter
    private String activityContent;

    /**
     * 活动创建者
     */
    @Column(name = "createId", nullable = false)
    @Getter
    @Setter
    private int createId;

    /**
     * 活动负责人
     */
    @Column(name = "liabilityId", nullable = false)
    @Getter
    @Setter
    private int liabilityId;

    /**
     * 活动开始时间
     */
    @Column(name = "startTime", nullable = false)
    @Getter
    @Setter
    private Timestamp startTime;

    /**
     * 活动结束时间
     */
    @Column(name = "endTime")
    @Getter
    @Setter
    private Timestamp endTime;

    @Column(name = "activityState",length = 15)
    @Enumerated(EnumType.STRING)
    @Getter
    @Setter
    private EActivityState activityState;

    @Column(name = "activityType",length = 15)
    @Enumerated(EnumType.STRING)
    @Getter
    @Setter
    private EActivityType activityType;

    @OneToOne(mappedBy = "activity",cascade = {CascadeType.MERGE,CascadeType.REMOVE},fetch = FetchType.LAZY)
    @Getter
    @Setter
    private ActivityAttach activityAttach;

    @OneToMany(mappedBy = "activity",cascade = {CascadeType.MERGE,CascadeType.REMOVE},fetch = FetchType.LAZY)
    @Getter
    @Setter
    private List<ActivityResource> activityResources;
}