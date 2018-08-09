package org.baseframework.activity.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * @author 王鸿钦
 * 活动性质
 */
@Entity
@Table(name = "t_activityNature")
public class ActivityNature extends EntityBase {


    @Column(name = "activityNature",nullable = false)
    @Getter
    @Setter
    private String activityNature;


    @OneToMany(mappedBy = "activityNature",cascade = {CascadeType.MERGE,CascadeType.REMOVE},fetch = FetchType.LAZY)
    @Getter
    @Setter
    @JsonIgnore
    private List<Activity> activities;
}
