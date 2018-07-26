package org.baseframework.activity.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * 活动附加信息
 */
@Entity
@Table(name = "t_activityattach")
public class ActivityAttach extends EntityBase{

    /**
     * 参与人数
     */
    @Column(name = "attendNumber")
    @Getter
    @Setter
    private long attendNumber;

    @OneToOne
    @JoinColumn(name = "activityId",nullable = false)
    @Getter
    @Setter
    @JsonIgnore
    private  Activity activity;
}
