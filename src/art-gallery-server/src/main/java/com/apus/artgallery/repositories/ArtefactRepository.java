package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Artefact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtefactRepository extends JpaRepository<Artefact, Long> {
    List<Artefact> findByNameIgnoreCase(@Param("name") String name);
}
