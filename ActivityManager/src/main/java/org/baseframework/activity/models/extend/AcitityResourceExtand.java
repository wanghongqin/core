package org.baseframework.activity.models.extend;

import lombok.Getter;
import lombok.Setter;
import org.baseframework.activity.models.Activity;
import org.baseframework.activity.models.Resource;

import java.io.Serializable;
import java.sql.Timestamp;

public class AcitityResourceExtand implements Serializable {


    @Setter
    @Getter
    private long Id;

    @Setter
    @Getter
    private Timestamp addTime;

    @Setter
    @Getter
    private String remark;

    @Getter
    @Setter
    private Activity activity;

    @Getter
    @Setter
    private Resource resource;

    /**
     * 审核资源标识
     */
    @Getter
    @Setter
    private boolean enable;
}
