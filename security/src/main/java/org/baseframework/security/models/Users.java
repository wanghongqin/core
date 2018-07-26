package org.baseframework.security.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 用户表
 */
@Entity
@Table(name = "t_users")
public class Users extends EntityBase {

    /**
     * 登录名
     */
    @Column(name = "loginName",nullable = false,unique = true)
    @Setter
    @Getter
    private String loginName;

    /**
     * 登录密码
     */
    @Column(name = "loginPassword",nullable = false)
    @Setter
    @Getter
    private String loginPassword;

}
