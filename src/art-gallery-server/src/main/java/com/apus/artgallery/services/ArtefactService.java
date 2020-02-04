package com.apus.artgallery.services;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.repositories.ArtefactRepository;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.util.List;

@Service
public class ArtefactService {
    private final ArtefactRepository artefactRepository;

    ArtefactService(ArtefactRepository artefactRepository) {
        this.artefactRepository = artefactRepository;
    }

    public void addArtefact(Artefact artefact) {
        if (artefact.getArtist() == null)
            throw new IllegalArgumentException("No artist specified for this artefact");

        artefactRepository.save(artefact);
    }

    public List<Artefact> getArtefacts() {
        return artefactRepository.findAll();
    }

    public List<Artefact> getArtefacts(String name) {
        return artefactRepository.findByNameIgnoreCase(name);
    }

    public void updateArtefact(Artefact artefact) {
        if (artefact.getArtist() == null)
            throw new IllegalArgumentException("No artist specified for this artefact");

        if (artefact.getId() == null)
            throw new IllegalArgumentException("Cannot update non-existing artefact");

        artefactRepository.save(artefact);
    }

    public List<Artefact> getArtefactFromExhibition(Long id) {
        return artefactRepository.findByExhibition_Id(id);
    }
}
