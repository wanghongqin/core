package org.baseframework.security.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * 登录
 */
@Aspect
@Component
public class LoginLogAspect {

    @Pointcut("execution( * org.baseframework.security.service.Imp.UserServiceImp.loadUserByUsername(..))")
    public void writeLog() {
    }

    //后置异常通知
    @AfterThrowing("writeLog()")
    public void throwss(JoinPoint jp) {
        System.out.println("方法异常时执行.....");
    }

    //执行之后通知
    @AfterReturning(returning = "ret", pointcut = "writeLog()")
    public void doAfterReturning(Object ret) {
        System.out.println("方法最后执行.....");
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        // 记录下请求内容
        System.out.println("URL : " + request.getRequestURL().toString());
        System.out.println("HTTP_METHOD : " + request.getMethod());
        System.out.println("IP : " + request.getRemoteAddr());
        System.out.println("ARGS : " + ret);
    }
}
