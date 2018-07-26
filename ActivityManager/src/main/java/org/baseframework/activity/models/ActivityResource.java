package org.baseframework.activity.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * @author 王鸿钦
 *  活动资源
 */
@Entity
@Table(name = "t_activityresource")
public class ActivityResource extends EntityBase {

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "activityId", nullable = false)
    @JsonIgnore
    private Activity activity;

    @Getter
    @Setter
    @ManyToOne
    @JoinColumn(name = "resourceId", nullable = false)
    @JsonIgnore
    private Resource resource;

    @Getter
    @Setter
    @Column(name = "enable",columnDefinition = "bit default 0")
    private boolean enable;
}
