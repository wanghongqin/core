package org.baseframework.activity.comm;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * json 帮助类
 *
 * @author 王鸿钦
 */
public class JsonHelper {

    /**
     * 将对象转化为json字符串
     * @param object
     * @return
     */
    public static String objectToStr(Object object) {
        ObjectMapper mapper = new ObjectMapper();
        String json = "";
        try {
            //对时间格式进行处理
            mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS,false);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            mapper.setDateFormat(sdf);
            json = mapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return json;
    }

    /**
     * 将json字符串转化为单个实体对象
     * @param jsonStr
     * @param cls
     * @param <T>
     * @return
     */
    public static <T> T strToObject(String jsonStr,Class<T> cls){
        ObjectMapper mapper = new ObjectMapper();
        T t = null;
        try {
            t = mapper.readValue(jsonStr,cls);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  t;
    }

    /**
     * 将json字符串转化为实体集合
     * @param jsonStr
     * @param <T>
     * @return
     */
    public static <T> List<T> strToList(String jsonStr){
        ObjectMapper mapper = new ObjectMapper();
        List<T> list = new ArrayList<T>();
        try {
            list = mapper.readValue(jsonStr,new TypeReference<List<T>>(){});
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  list;
    }
}
