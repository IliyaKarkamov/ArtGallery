package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Gallery;
import com.apus.artgallery.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    Room findByNameIgnoreCase(@Param("name") String name);

    boolean existsByNameAndIdIsNot(@Param("name") String name,
                                   @Param("id") Long id);

    List<Room> findByActiveTrueAndGallery_Id(@Param("gallery_id") Long id);

    List<Room> findByActiveTrue();

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Room r set r.name = ?1, r.location = ?2, r.gallery = ?3, r.active = ?4 where r.id = ?5")
    void saveById(String name, String location, Gallery gallery, Boolean active, Long id);

    @Modifying
    @Transactional(propagation = Propagation.REQUIRED)
    @Query("update Room r set r.active = ?1 where r.id = ?2")
    void activate(Boolean active, Long id);
}
