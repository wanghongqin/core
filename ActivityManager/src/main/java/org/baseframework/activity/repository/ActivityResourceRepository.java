package org.baseframework.activity.repository;

import org.baseframework.activity.models.ActivityResource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityResourceRepository extends JpaRepository<ActivityResource,Long> {
}
