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

    /**
     * 报名模板
     */
    @ManyToOne
    @JoinColumn(name="enrollTempleteId",nullable=true)
    @Getter
    @Setter
    private Templete enrollTemplete;


    /**
     * 总结模板
     */
    @ManyToOne
    @JoinColumn(name="summaryTempleteId",nullable=true)
    @Getter
    @Setter
    private Templete summaryTemplete;

    /**
     * 签到积分
     */
    @Column(name = "signIdPoint",columnDefinition = "int default 0")
    @Getter
    @Setter
    private Integer signIdPoint;

    /**
     * 上传资源积分
     */
    @Column(name = "imagePoint",columnDefinition = "int default 0")
    @Getter
    @Setter
    private Integer imagePoint;

    /**
     * 使用资源积分
     */
    @Column(name = "enableImagePoint",columnDefinition = "int default 0")
    @Getter
    @Setter
    private Integer enableImagePoint;

    @OneToOne
    @JoinColumn(name = "activityId",nullable = false)
    @Getter
    @Setter
    @JsonIgnore
    private  Activity activity;
}
