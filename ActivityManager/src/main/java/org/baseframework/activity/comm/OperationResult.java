package org.baseframework.activity.comm;

import lombok.Getter;
import lombok.Setter;

/**
 * 操作结果
 */
public class OperationResult {
    /**
     * 操作结果类型
     */
    @Getter
    @Setter
    private boolean ResultType;

    /**
     * 操作返回信息
     */
    @Getter
    @Setter
    private String Message;

    /**
     * 操作返回的日志消息，用于记录日志
     */
    @Getter
    @Setter
    private String Redirecturl;
    /**
     * 操作结果附加信息
     */
    @Getter
    @Setter
    private Object AppendData;

    /**
     * 构造函数
     */

    /**
     * 初始化一个 业务操作结果信息类 的新实例
     *
     * @param resultType 业务操作结果类型
     */
    public OperationResult(boolean resultType) {
        ResultType = resultType;
    }

    /**
     * 初始化一个 定义返回消息的业务操作结果信息类 的新实例
     *
     * @param resultType 业务操作结果类型
     * @param message    业务返回消息
     */
    public OperationResult(boolean resultType, String message) {
        this(resultType);
        Message = message;
    }

    /**
     * 初始化一个 定义返回消息与附加数据的业务操作结果信息类 的新实例
     *
     * @param resultType 业务操作结果类型
     * @param message    业务返回消息
     * @param appendData 业务返回数据
     */
    public OperationResult(boolean resultType, String message,
                           Object appendData) {
        this(resultType, message);
        AppendData = appendData;
    }

    /**
     * 初始化一个 定义返回消息与日志消息的业务操作结果信息类 的新实例
     *
     * @param resultType 业务操作结果类型
     * @param message    业务返回消息
     * @param
     */
    public OperationResult(boolean resultType, String message,
                           String redirecturl) {
        this(resultType, message);
        Redirecturl = redirecturl;
    }

    /**
     * 初始化一个 定义返回消息、日志消息与附加数据的业务操作结果信息类 的新实例
     *
     * @param resultType 业务操作结果类型
     * @param message    业务日志记录消息
     * @param appendData 业务返回数据
     */
    public OperationResult(boolean resultType, String message,
                           String redirecturl, Object appendData) {
        this(resultType, message, redirecturl);
        AppendData = appendData;
    }
}
