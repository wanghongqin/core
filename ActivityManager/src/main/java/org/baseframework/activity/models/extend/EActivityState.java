package org.baseframework.activity.models.extend;

import lombok.Getter;

public enum EActivityState {

    open("开启", "open"), close("关闭", "close");
    @Getter
    private String dec;//
    private String type;

    // 构造方法
    private EActivityState(String dec, String type) {
        this.dec = dec;
        this.type = type;
    }
}
