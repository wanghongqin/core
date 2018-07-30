package org.baseframework.activity.service.Imp;

import org.baseframework.activity.comm.FileHelper;
import org.baseframework.activity.comm.JsonHelper;
import org.baseframework.activity.models.Resource;
import org.baseframework.activity.repository.ResourceRepository;
import org.baseframework.activity.service.ResourceService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

@Service
public class ResourceServiceImp implements ResourceService {

    @javax.annotation.Resource
    private ResourceRepository resourceRepository;

    @Override
    public Page<Resource> queryLimit(HttpServletRequest request, int page, int pagesize) {

        Specification<Resource> specification = (Specification<Resource>) (root, query, criteriaBuilder) -> {
            return null;
        };
        Sort sort = new Sort(Sort.Direction.DESC, "addTime");
        Pageable pageable = PageRequest.of(page - 1, pagesize, sort);
        return resourceRepository.findAll(specification, pageable);
    }

    @Override
    public String queryLimitStr(HttpServletRequest request, int page, int pagesize) {
        Page<Resource> pages = queryLimit(request, page, pagesize);
        return JsonHelper.objectToStr(pages.getContent());
    }

    @Override
    public String Edit(Resource resource) {
        Resource model = resourceRepository.saveAndFlush(resource);
        return "";
    }

    @Override
    public String Delete(Resource resource) {
        resourceRepository.delete(resource);
        return null;
    }

    @Override
    public String Delete(long Id) {
        resourceRepository.deleteById(Id);
        return null;
    }

    @Override
    public String findStrById(long Id) {
        return JsonHelper.objectToStr(this.findById(Id));
    }

    @Override
    public Resource findById(long Id) {
        return resourceRepository.getOne(Id);
    }

    @Override
    public String UploadWithStr(HttpServletRequest request) {
        Resource resource = Upload(request);
        if (resource == null)
            return "";//失败
        return "";//成功
    }

    @Override
    public Resource Upload(HttpServletRequest request) {
        String content = request.getParameter("content");
        if (content != null && !content.isEmpty()) {
            int infolength = content.indexOf(",");
            // data:image/jpg;
            String baseContent = content;
            String suffix = ".jpg";
            if (infolength > 0) {
                baseContent = content.substring(infolength + 1);
                String info = content.substring(0, infolength);
                int suffixlen = info.indexOf("/");
                int lastlen = info.indexOf(";");
                if (suffixlen > 0 && lastlen > 0) {
                    suffix = info.substring(suffixlen + 1, lastlen);
                    if (suffix.equals("jgp")) {
                        suffix = "jpg";
                    }
                    suffix = "." + suffix;
                }
            }
            //保存路径
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
            String name = dateFormat.format(new Date());
            int randNum = new Random().nextInt(10000);
            StringBuffer path = new StringBuffer();
            path.append(request.getServletContext().getRealPath("/"));
            path.append("resource/");
            if (FileHelper.mkdirs(path.toString())) {
                String filepath = path.toString() + name + "_" + randNum + suffix;
                String urlpath = request.getContextPath() + "/resource/" + name + "_" + randNum + suffix;//数据库路径
                if (FileHelper.save(filepath, baseContent)) { //数据保存成功，则将数据插入到数据库中
                    //如果数据保存失败，则删除相应资源
                    Resource resource = new Resource();
                    resource.setAddTime(new Timestamp(new Date().getTime()));
                    resource.setResourceContent(urlpath);
                    Resource model = resourceRepository.saveAndFlush(resource);
                    if (model == null)
                        FileHelper.delete(filepath);
                    return model; //成功
                } else {
                    return null; //失败
                }
            }
            return null; //失败
        }
        return null; //失败
    }
}
