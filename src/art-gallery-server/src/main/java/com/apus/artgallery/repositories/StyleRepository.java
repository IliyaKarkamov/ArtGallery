package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Style;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface StyleRepository extends JpaRepository<Style, Long> {
    List<Style> findByActiveTrue();

    Style findByNameIgnoreCase(@Param("name") String name);

    boolean existsByNameAndIdIsNot(String name, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Style s set s.name = ?1, s.description = ?2, s.active = ?3 where s.id = ?4")
    void saveById(String name, String description, Boolean active, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Style s set s.active = ?1 where s.id = ?2")
    void activate(Boolean active, Long id);
}
