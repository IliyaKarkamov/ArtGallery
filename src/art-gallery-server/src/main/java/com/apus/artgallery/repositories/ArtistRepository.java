package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.websocket.server.PathParam;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    Artist findByFirstNameIgnoreCaseAndLastNameIgnoreCase(
            @Param("fistName") String firstName,
            @Param("lastName") String lastName);

    Artist findByAliasIgnoreCase(@Param("alias") String alias);

    boolean existsByFirstNameAndLastNameAndIdIsNot(
            @Param("fistName") String firstName,
            @Param("lastName") String lastName,
            @Param("id") Long id);

    boolean existsByAliasAndIdIsNot(
            @Param("alias") String alias,
            @Param("id") Long id);

    List<Artist> findByActiveTrue();

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Artist a " +
            "set a.firstName = ?1, a.secondName = ?2, a.lastName = ?3, a.alias = ?4, a.birthDate = ?5, " +
            "a.birthPlace = ?6, a.longBio = ?7, a.shortBio = ?8, a.active = ?9 " +
            "where a.id = ?10")
    void saveById(String fisrtName, String secondName, String lastName, String alias, LocalDate birthDate,
                  String birthplace, String longBio, String shortBio, Boolean active, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Artist a " +
            "set a.active = ?1 " +
            "where a.id = ?2")
    void deactivate(Boolean active, Long id);

}
