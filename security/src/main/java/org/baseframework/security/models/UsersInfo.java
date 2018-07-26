package org.baseframework.security.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * 用户信息表
 */
@Entity
@Table(name = "t_userInfo")
public class UsersInfo extends EntityBase {
    /**
     * 昵称
     */
    @Column(name = "nickName")
    @Setter
    @Getter
    private String nickName;

    /**
     * 真实姓名
     */
    @Column(name = "realName")
    @Setter
    @Getter
    private String realName;

    /**
     * 生日
     */
    @Column(name = "birtchDay")
    @Setter
    @Getter
    private Timestamp birtchDay;

    /**
     * 性别
     */
    @Column(name = "sex")
    @Setter
    @Getter
    private int sex;

    /**
     * 用户信息
     */
    @OneToOne
    @JoinColumn(name = "usersId")
    @Setter
    @Getter
    private Users users;
}
