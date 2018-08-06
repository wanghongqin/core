package org.baseframework.activity.models.extend;

public enum ETempleteType {
    enroll("报名类模板", "enroll"),summary("总结类模板","summary");
    private String dec;
    private String type;

    private ETempleteType(String dec, String type) {
        this.dec = dec;
        this.type = type;
    }

    public String getDec() {
        return dec;
    }

    public String getType() {
        return type;
    }
}
