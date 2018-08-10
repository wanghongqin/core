package org.baseframework.activity.repository;

import org.baseframework.activity.models.ActivityNature;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityNatureRepository extends JpaRepository<ActivityNature,Long> {
}
