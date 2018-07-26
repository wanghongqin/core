package org.baseframework.security.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.sql.Timestamp;

@MappedSuperclass
public class EntityBase implements Serializable {

    @Column(name = "Id")
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    @Getter
    private long Id;

    @Column(name = "addTime")
    @Setter
    @Getter
    private Timestamp addTime;

    @Column(name = "Remark", length = 2500)
    @Setter
    @Getter
    private String remark;
}
