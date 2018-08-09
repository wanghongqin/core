package org.baseframework.activity.models.extend;

import lombok.Getter;

public enum EActivityType {
    enroll("报名类活动", "enroll"),openup("公开类活动", "openup"), invitation("邀请类活动", "invitation");
    @Getter
    private String dec;
    @Getter
    private String type;

    private EActivityType(String dec, String type) {
        this.dec = dec;
        this.type = type;
    }
}
