package org.baseframework.activity.service.Imp;

import org.apache.commons.lang3.StringUtils;
import org.baseframework.activity.comm.FileHelper;
import org.baseframework.activity.comm.JsonHelper;
import org.baseframework.activity.comm.OperationResult;
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
import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;

@Service
@Transactional
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
    public String UploadWithStr(String content, HttpServletRequest request) {
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
                String urlpath = "/resource/" + name + "_" + randNum + suffix;//数据库路径
                if (FileHelper.save(filepath, baseContent)) { //数据保存成功，则将数据插入到数据库中
                    return urlpath;
                } else {
                    return ""; //失败
                }
            }
            return ""; //失败
        }
        return "";
    }

    @Override
    public Resource Upload(String content, HttpServletRequest request) {
        List<Resource> resources = UploadResources(request);
        if (resources != null && resources.size() > 0)
            return resources.get(0);
        return null;
    }

    @Override
    public OperationResult Upload(HttpServletRequest request) {
        if (UploadResources(request) == null)
            return new OperationResult(false, "资源上传失败");
        return new OperationResult(true, "资源上传成功");
    }

    @Override
    public List<Resource> UploadResources(HttpServletRequest request) {
        String content = request.getParameter("content");
        if (StringUtils.isBlank(content))
            return null;
        String resourceGroup = request.getParameter("resourceGroup");
        String resourceTag = request.getParameter("resourceTag");
        String remark = request.getParameter("remark");
        String[] contents = StringUtils.split(content, ",");
        List<Resource> list = new ArrayList<Resource>();
        boolean b = true;
        for (String ct : contents) {
            String path = UploadWithStr(ct, request);
            if (!StringUtils.isBlank(path)) {
                Resource resource = new Resource();
                resource.setAddTime(new Timestamp(new Date().getTime()));
                resource.setResourcePath(request.getContextPath() + path);
                resource.setResourceGroup(resourceGroup);
                resource.setResourceTag(resourceTag);
                resource.setRemark(remark);
                list.add(resource);
            } else {
                b = false;
                break;
            }
        }
        if (b) {
            try {
                List<Resource> results = resourceRepository.saveAll(list);
                resourceRepository.flush();
                return results;
            } catch (Exception e) {
                System.out.println(e.getMessage());
                //数据保存失败，则删除图片
                list.forEach(q -> {
                    String path = q.getResourcePath();
                    FileHelper.delete(request.getServletContext().getRealPath("/") + path);
                });
                return null;
            }
        }
        return null;
    }

    @Override
    public List<Resource> findAll(String Ids) {
        String[] ids = StringUtils.split(Ids, ",");
        List<Long> list = new ArrayList<Long>();
        boolean b = true;
        for (String Id : ids) {
            Pattern pattern = Pattern.compile("^[0-9]*[1-9][0-9]*$");
            if (pattern.matcher(Id).matches()) {
                list.add(Long.parseLong(Id));
            } else {
                b = false;
                break;
            }
        }
        if (b) {
            return resourceRepository.findAllById(list);
        } else {
            return null;
        }
    }
}