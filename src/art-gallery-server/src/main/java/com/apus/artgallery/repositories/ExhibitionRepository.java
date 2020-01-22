package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Exhibition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ExhibitionRepository extends JpaRepository<Exhibition, Long> {
    Exhibition findByNameIgnoreCase(@Param("name") String name);

    List<Exhibition> findByStartDateAfterAndEndDateBefore(@Param("startDate") LocalDateTime startDate,
                                                          @Param("endDate") LocalDateTime endDate);
}
