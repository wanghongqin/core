package org.baseframework.activity.service.Imp;

import org.apache.commons.lang3.StringUtils;
import org.baseframework.activity.models.Templete;
import org.baseframework.activity.models.extend.ETempleteType;
import org.baseframework.activity.repository.TempleteRepository;
import org.baseframework.activity.service.TempleteService;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TempleteServiceImp implements TempleteService {

    @Resource
    private TempleteRepository templeteRepository;

    @Override
    public List<Templete> getTempleteWithType(String type) {
        Specification<Templete> specification = (root, query, criteriaBuilder) -> {
            List<Predicate> list = new ArrayList<Predicate>();
            if (!StringUtils.isBlank(type)) {
                Path path = root.get("templeteType");
                list.add(criteriaBuilder.equal(path, ETempleteType.valueOf(type)));
            }
            Predicate[] p = new Predicate[list.size()];
            return criteriaBuilder.and(list.toArray(p));
        };
        return templeteRepository.findAll(specification);
    }
}
