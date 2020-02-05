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

    public Gallery addGallery(Gallery gallery) {
        if (galleryRepository.findByNameIgnoreCase(gallery.getName()) != null)
            throw new IllegalArgumentException("Gallery with the same name already exists.");

        galleryRepository.save(gallery);
        return gallery;
    }

    public List<Gallery> getAllGalleries() {
        return galleryRepository.findAll();
    }

    public Gallery getById(Long id) {
        return galleryRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Style with the given id doesnt exists!"));
    }

    public void editById(Long id, Gallery gallery) {
        if (galleryRepository.existsByNameAndIdIsNot(gallery.getName(), id))
            throw new IllegalArgumentException("Name already exist!");

        galleryRepository.saveById(gallery.getName(), gallery.getAddress(), gallery.getDescription(),
                gallery.getLatitude(), gallery.getLongitude(), gallery.getActive(), id);
    }

    public void deactivate(Long id, Boolean active) {
        galleryRepository.activate(active, id);
    }

    public List<Gallery> getAllActive(){
        return galleryRepository.findByActiveTrue();
    }
}
