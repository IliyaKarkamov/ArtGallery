package com.apus.artgallery.services;

import com.apus.artgallery.models.Gallery;
import com.apus.artgallery.repositories.GalleryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {
    private final GalleryRepository galleryRepository;

    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public void addGallery(Gallery gallery) {
        if (galleryRepository.findByNameIgnoreCase(gallery.getName()) != null)
            throw new IllegalArgumentException("Gallery with the same name already exists.");

        galleryRepository.save(gallery);
    }

    public List<Gallery> getAllGalleries() {
        return galleryRepository.findAll();
    }
}
