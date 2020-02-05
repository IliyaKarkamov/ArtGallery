package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery, Long> {
    Gallery findByNameIgnoreCase(@Param("name") String name);

    boolean existsByNameAndIdIsNot(@Param("name") String name,
                                   @Param("id") Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Gallery g set g.name = ?1, g.address = ?2, g.description = ?3, g.latitude = ?4, g.longitude = ?5, g.active = ?6 where g.id = ?7")
    void saveById(String name, String address, String description, Float latitude, Float longitude, Boolean active, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Gallery g set  g.active = ?1 where g.id = ?2")
    void activate(Boolean active, Long id);
}
