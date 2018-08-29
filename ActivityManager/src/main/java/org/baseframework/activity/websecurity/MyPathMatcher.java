package org.baseframework.activity.websecurity;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.AntPathMatcher;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Configuration
public class MyPathMatcher extends AntPathMatcher {

    final Pattern VARIABLE_PATTERN = Pattern.compile("\\{[^/]+?\\}");
    @Override
    protected boolean doMatch(String pattern, String path, boolean fullMatch, Map<String, String> uriTemplateVariables) {
        String[] pattDirs = tokenizePattern(pattern);
        String[] pathDirs = tokenizePath(path.toLowerCase());
        List<String> paths = new ArrayList<String>(Arrays.asList(pathDirs)) ;
        List<String> patterns =new ArrayList<String>(Arrays.asList(pattDirs));
        boolean ismatcher = true;
        if (pathDirs.length > pattDirs.length) {
            boolean b = true;
            for (String pattDir : pattDirs) {
                if (!VARIABLE_PATTERN.matcher(pattDir).matches()) {
                    if (!paths.stream().anyMatch(q->q.equals(pattDir.toLowerCase()))) {
                        b = false;
                    }
                }
            }
            if (b) {
                //获取第一个数据
                String clientId = paths.get(0);//取出第一个
                paths.remove(0);//移除第一个数据
                System.out.println(clientId);
            }
        }
        for (String pattDir : pattDirs) {
            if (VARIABLE_PATTERN.matcher(pattDir).matches()) {
                ismatcher=false;
            }
        }
        path = "/"+StringUtils.join(paths, "/").toLowerCase();
        if (!ismatcher) {
            //如何包含{},则
            String urlId = patterns.get(patterns.size() - 1);//取出第一个
            patterns.remove(patterns.size() - 1);//移除第一个数据
            pattern = "/"+StringUtils.join(patterns, "/").toLowerCase() + "/" + urlId;
        } else {
            pattern = "/"+StringUtils.join(patterns, "/").toLowerCase();
        }
        boolean b = super.doMatch(pattern, path, fullMatch, uriTemplateVariables);
        return b;
    }
}
