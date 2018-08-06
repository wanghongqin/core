package org.baseframework.activity.repository;

import org.baseframework.activity.models.ActivityRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRegistrationRepository extends JpaRepository<ActivityRegistration,Long> {

}
