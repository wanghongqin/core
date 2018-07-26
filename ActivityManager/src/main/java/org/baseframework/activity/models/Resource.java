package org.baseframework.activity.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * @author 王鸿钦
 *  资源表
 */
@Entity
@Table(name = "t_resource")
public class Resource extends EntityBase {

    @Getter
    @Setter
    @Column(name = "resourceType",nullable = false)
    private String resourceType;

    @Getter
    @Setter
    @Column(name = "resourceContent",nullable = false)
    private String resourceContent;

    @Getter
    @Setter
    @Column(name = "ownerId",nullable = false)
    /**
     * 拥有者Id
     */
    private int ownerId;

    @Getter
    @Setter
    @Column(name = "resourceTag")
    /**
     * 资源标签 ?
     */
    private String resourceTag;

    @Getter
    @Setter
    @Column(name = "resourceGroup")
    /**
     * 资源分组 ?
     */
    private String resourceGroup;

    @Getter
    @Setter
    @OneToMany(mappedBy = "resource",cascade = {CascadeType.MERGE,CascadeType.REMOVE},fetch = FetchType.LAZY)
    private List<ActivityResource> activityResources;
}
