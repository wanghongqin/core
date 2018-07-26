package org.baseframework.security.repository;

import org.baseframework.security.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    @Query("select u from Users u where u.loginName=?1")
    Users getUsersByLoginName(String loginName);
}
