package org.baseframework.activity.repository;

import org.baseframework.activity.models.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource,Long> {

    Page<Resource> findAll(Specification<Resource> spec, Pageable pageable);

} 
