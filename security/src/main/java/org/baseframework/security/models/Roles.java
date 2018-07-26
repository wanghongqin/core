package org.baseframework.security.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * 角色表
 */
@Entity
@Table(name = "t_roles")
public class Roles extends EntityBase {

    @Column(name = "roleName",nullable = false)
    @Getter
    @Setter
    private String roelName;

}
