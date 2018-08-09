package org.baseframework.activity.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "t_activityregistration")
public class ActivityRegistration extends EntityBase {
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    /**
     * 报名人
     */
    @Getter
    @Setter
    @Column(name = "registrationName",nullable = false)
    private String registrationName;

    /**
     * 联系方式
     */
    @Getter
    @Setter
    @Column(name = "phone",nullable = false)
    private String phone;

    /**
     * 关联信息
     */
    @Getter
    @Setter
    @Column(name = "userId")
    private int userId;

    @Getter
    @Setter
    @Column(name = "signId",columnDefinition = "bit default 0")
    private boolean signId;

    /**
     *
     * 签到时间
     */
    @Getter
    @Setter
    @Column(name = "signTime")
    private Timestamp signTime;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "activityId")
    private Activity activity;
}
