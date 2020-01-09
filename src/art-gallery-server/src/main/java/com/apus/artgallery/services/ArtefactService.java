package com.apus.artgallery.services;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.repositories.ArtefactRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtefactService {
    private final ArtefactRepository artefactRepository;

    ArtefactService(ArtefactRepository artefactRepository){
        this.artefactRepository = artefactRepository;
    }

    public void addArtefact(Artefact artefact){
        artefactRepository.save(artefact);
    }

    public List<Artefact> getArtefacts(){
        return artefactRepository.findAll();
    }

    public List<Artefact> getArtefacts(String name){
        return artefactRepository.findByNameIgnoreCase(name);
    }
}
