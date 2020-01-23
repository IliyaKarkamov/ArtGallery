package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    Artist findByFirstNameIgnoreCaseAndLastNameIgnoreCase(
            @Param("fistName") String firstName,
            @Param("lastName") String lastName);

    Artist findByAliasIgnoreCase(@Param("alias") String alias);
}
