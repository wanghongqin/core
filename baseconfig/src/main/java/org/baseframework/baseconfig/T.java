package org.baseframework.baseconfig;

import org.springframework.aop.AfterReturningAdvice;
import org.springframework.aop.framework.ProxyFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportAware;
import org.springframework.core.type.AnnotationMetadata;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.util.ClassUtils;

import java.lang.reflect.Method;

@Configuration
public class T implements ImportAware, BeanPostProcessor, ApplicationContextAware {
    private ApplicationContext applicationContext;

    private Class<?> classType;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    @Override
    public void setImportMetadata(AnnotationMetadata importMetadata) {
        this.classType = ClassUtils.resolveClassName(importMetadata.getClassName(), null);
    }

    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (this.classType.isAssignableFrom(bean.getClass())&& bean instanceof WebSecurityConfigurerAdapter) {
            ProxyFactory factory = new ProxyFactory(bean);
            //factory.setTarget(bean);
            factory.addAdvice(new TT());
            bean = factory.getProxy();
        }
        return bean;
    }

    private static class TT implements AfterReturningAdvice {

        @Override
        public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
            WebTest test = new WebTest();
            test.test();
        }
    }
}
