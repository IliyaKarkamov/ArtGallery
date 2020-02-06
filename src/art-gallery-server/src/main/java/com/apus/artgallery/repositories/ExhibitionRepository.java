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
public interface ExhibitionRepository extends JpaRepository<Exhibition, Long> {
    Exhibition findByNameIgnoreCase(@Param("name") String name);

    List<Exhibition> findByStartDateAfterAndEndDateBefore(@Param("startDate") LocalDate startDate,
                                                          @Param("endDate") LocalDate endDate);

    boolean existsByNameAndIdIsNot(@Param("name") String name,
                                   @Param("id") Long id);

    List<Exhibition> findByRoom_Id(@Param("room_id") Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Exhibition e set e.name = ?1, e.startDate = ?2, e.endDate = ?3, e.artist = ?4, e.era = ?5, e.style = ?6, e.room = ?7  where e.id = ?8")
    void saveById(String name, LocalDate startDate, LocalDate endDate, Artist artist, Era era, Style style, Room room, Long id);
}
