package com.apus.artgallery.services;

import com.apus.artgallery.models.Era;
import com.apus.artgallery.repositories.EraRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EraService {
    private final EraRepository eraRepository;

    public EraService(EraRepository eraRepository) {
        this.eraRepository = eraRepository;
    }

    public List<Era> getAllActive() {
        return eraRepository.findByActiveTrue();
    }

    public List<Era> getAll() {
        return eraRepository.findAll();
    }

    public Era addEra(Era era) {
        if (eraRepository.findByNameIgnoreCase(era.getName()) != null)
            throw new IllegalArgumentException("Name already exist!");

        eraRepository.save(era);
        return era;
    }
}
