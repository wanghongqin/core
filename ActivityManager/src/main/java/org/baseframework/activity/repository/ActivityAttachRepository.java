package org.baseframework.activity.repository;

import org.baseframework.activity.models.ActivityAttach;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 附加信息
 */
public interface ActivityAttachRepository extends JpaRepository<ActivityAttach,Long> {
}
