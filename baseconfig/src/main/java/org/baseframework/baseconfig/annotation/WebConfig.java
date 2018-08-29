package org.baseframework.baseconfig.annotation;

import org.baseframework.baseconfig.T;
import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import({T.class})
public @interface WebConfig {

}
