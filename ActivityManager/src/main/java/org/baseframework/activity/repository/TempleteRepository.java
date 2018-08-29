package org.baseframework.activity.repository;

import org.baseframework.activity.models.Templete;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TempleteRepository extends JpaRepository<Templete,Long> {

    List<Templete> findAll(Specification<Templete> specification);
}
