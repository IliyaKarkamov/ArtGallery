package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryRepository extends JpaRepository<Gallery, Long> {
    Gallery findByNameIgnoreCase(@Param("name") String name);
}
