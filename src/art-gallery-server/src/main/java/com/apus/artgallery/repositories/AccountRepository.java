package com.apus.artgallery.repositories;

import com.apus.artgallery.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<User, Long> {
    User findByUsername(@Param("username") String username);
}
