package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    Room findByNameIgnoreCase(@Param("name") String name);
}
