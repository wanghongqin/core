package org.baseframework.security.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * 登录日志
 */
@Entity
@Table(name = "t_loginLog")
public class LoginLog extends  EntityBase {

    /**
     * 最后登录时间
     */
    @Column(name = "loginTime")
    @Setter
    @Getter
    private Timestamp loginTime;

    /**
     * 登录Ip
     */
    @Column(name = "loginIp",nullable = false)
    @Setter
    @Getter
    private String loginIp;

    /**
     * 登录人员
     */
    @OneToOne
    @JoinColumn(name = "usersId")
    @Setter
    @Getter
    private Users user;

}
