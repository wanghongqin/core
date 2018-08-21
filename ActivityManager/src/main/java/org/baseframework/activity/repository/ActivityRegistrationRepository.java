package org.baseframework.activity.repository;

import org.baseframework.activity.models.ActivityRegistration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRegistrationRepository extends JpaRepository<ActivityRegistration,Long> {

    Page<ActivityRegistration> findAll(Specification<ActivityRegistration> spec, Pageable pageable);
}
