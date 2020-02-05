package com.apus.artgallery.repositories;

import com.apus.artgallery.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<User, Long> {
    User findByUsernameIgnoreCase(@Param("username") String username);

    User findById(@Param("id") long id);

    User findByEmailIgnoreCase(@Param("email") String email);

    List<User> findByIsActiveTrue();

    boolean existsByUsernameAndIdIsNot(@Param("username") String username, @Param("id") Long id);

    boolean existsByEmailAndIdIsNot(@Param("username") String username, @Param("id") Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update User u set u.username = ?1, u.email = ?2, u.firstName = ?3, u.secondName = ?4, u.lastName = ?5, u.isActive = ?6, u.isAdmin = ?7 where u.id = ?8")
    void saveById(String username, String email, String firstName, String secondName, String lastName, Boolean isActive, Boolean isAdmin, Long id);
}
