package com.apus.artgallery.repositories;

import com.apus.artgallery.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ArtefactRepository extends JpaRepository<Artefact, Long> {
    List<Artefact> findByNameIgnoreCase(@Param("name") String name);

    List<Artefact> findByExhibition_Id(@Param("exhibition_id") Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Artefact a " +
            "set a.name = ?1, a.createdAt = ?2, a.price = ?3, a.active = ?4, a.style = ?5, " +
            "a.era = ?6, a.artist = ?7, a.exhibition = ?8 " +
            "where a.id = ?9")
    void saveById(String name, LocalDate ctreatedAt, Float price, Boolean active, Style style,
                  Era era, Artist artist, Exhibition exhibition, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Artefact a " +
            "set  a.active = ?1 " +
            "where a.id = ?2")
    void activate(Boolean active, Long id);
}
