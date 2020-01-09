package com.apus.artgallery.repositories;

import com.apus.artgallery.models.Era;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EraRepository extends JpaRepository<Era, Long>{
    List<Era> findByActiveTrue();

    Era findByNameIgnoreCase(@Param("name") String name);
}
