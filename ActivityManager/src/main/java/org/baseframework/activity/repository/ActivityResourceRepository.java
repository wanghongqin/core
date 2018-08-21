package org.baseframework.activity.repository;

import org.baseframework.activity.models.ActivityResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ActivityResourceRepository extends JpaRepository<ActivityResource, Long> {

    Page<ActivityResource> findAll(Specification<ActivityResource> spec, Pageable pageable);

    List<ActivityResource> findAll(Specification<ActivityResource> spec);

//    @Query(value = "select activityResource from  ActivityResource activityResource  where activityResource.activity.Id=:activityId and activityResource.resource.Id in :resouceIds")
//    List<ActivityResource> queryLimit(@Param("activityId") long activityId,@Param("resouceIds")List<Long> resouceIds);
//
//    @Query(value = "select activityResource from  ActivityResource activityResource  where activityResource.activity.Id=:activityId")
//    List<ActivityResource> queryLimit(@Param("activityId") long activityId);


    @Modifying
    @Query(value = "update ActivityResource activityResource set activityResource.enable = true where activityResource.activity.Id=:activityId and activityResource.resource.Id in :resouceIds")
    int auditingResource(@Param("activityId") long activityId, @Param("resouceIds") List<Long> resouceIds);

    @Modifying
    @Query(value = "update ActivityResource activityResource set activityResource.enable = false where activityResource.activity.Id=:activityId and activityResource.resource.Id not in :resouceIds")
    int cancalResource(@Param("activityId") long activityId, @Param("resouceIds") List<Long> resouceIds);
}
