package org.baseframework.activity.models;

import lombok.Getter;
import lombok.Setter;
import org.baseframework.activity.models.extend.ETempleteType;

import javax.persistence.*;

@Entity
@Table(name = "t_templete")
public class Templete extends EntityBase {

    /**
     * 模板别称
     */
    @Getter
    @Setter
    @Column(name = "aliasName",nullable = false)
    private String aliasName;
    /**
     * 模板名称
     */
    @Getter
    @Setter
    @Column(name = "templeteName",nullable = false)
    private String templeteName;
    /**
     * 模板路径
     */
    @Getter
    @Setter
    @Column(name = "templetePath",nullable = false)
    private String templetePath;

    /**
     * 缩略图路径
     */
    @Getter
    @Setter
    @Column(name = "templeteThumbnail",nullable = false)
    private String templeteThumbnail;

    /**
     * 类型
     */
    @Getter
    @Setter
    @Column(name = "templeteType",nullable = false)
    @Enumerated(EnumType.STRING)
    private ETempleteType templeteType;
}
