package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Picture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Long> {
    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Picture p set p.artefact.id = ?1  where p.id = ?2")
    void setArtefact(Long artefactId, Long id);
}
