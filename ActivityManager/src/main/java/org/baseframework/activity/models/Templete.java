package org.baseframework.activity.models;

import lombok.Getter;
import lombok.Setter;
import org.baseframework.activity.models.extend.ETempleteType;

import javax.persistence.*;

@Entity
@Table(name = "t_templete")
public class Templete extends EntityBase {

    @Getter
    @Setter
    @Column(name = "templeteName",nullable = false)
    private String templeteName;
    @Getter
    @Setter
    @Column(name = "templetePath",nullable = false)
    private String templetePath;

    @Getter
    @Setter
    @Column(name = "templeteType",nullable = false)
    @Enumerated(EnumType.STRING)
    private ETempleteType templeteType;
}
