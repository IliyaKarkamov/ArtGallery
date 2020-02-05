package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Era;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface EraRepository extends JpaRepository<Era, Long> {
    List<Era> findByActiveTrue();

    Era findByNameIgnoreCase(@Param("name") String name);

    boolean existsByNameAndIdIsNot(String name, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Era e set e.name = ?1, e.description = ?2, e.active = ?3 where e.id = ?4")
    void saveById(String name, String description, Boolean active, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Era e set e.active = ?1 where e.id = ?2")
    void activate(Boolean active, Long id);
}
