package com.apus.artgallery.services;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.models.Picture;
import com.apus.artgallery.repositories.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtefactService {
    private final ArtefactRepository artefactRepository;
    private final PictureService pictureService;
    private final StyleRepository styleRepository;
    private final ArtistRepository artistRepository;
    private final EraRepository eraRepository;
    private final ExhibitionRepository exhibitionRepository;

    ArtefactService(ArtefactRepository artefactRepository,
                    PictureService pictureService,
                    StyleRepository styleRepository,
                    ArtistRepository artistRepository,
                    EraRepository eraRepository,
                    ExhibitionRepository exhibitionRepository) {
        this.artefactRepository = artefactRepository;
        this.pictureService = pictureService;
        this.exhibitionRepository = exhibitionRepository;
        this.styleRepository = styleRepository;
        this.eraRepository = eraRepository;
        this.artistRepository = artistRepository;
    }

    public Artefact addArtefact(Artefact artefact) {
        if (artefact.getArtist() == null)
            throw new IllegalArgumentException("No artist specified for this artefact");

        artefactRepository.save(artefact);

        for (Picture picture : artefact.getPictures()) {
            if (picture != null)
                if (pictureService.getPictureById(picture.getId()) == null)
                    pictureService.savePicture(picture);
                else
                    pictureService.updateArtefact(artefact.getId(), picture.getId());
        }
        return artefact;
    }

    public List<Artefact> getArtefacts() {
        return artefactRepository.findAll();
    }

    public List<Artefact> getArtefacts(String name) {
        return artefactRepository.findByNameIgnoreCase(name);
    }

    public void updateArtefactById(Long id, Artefact artefact) {
        if (artefact.getArtist() == null || artistRepository.findById(artefact.getArtist().getId()).isEmpty())
            throw new IllegalArgumentException("Artist does not exist!");
        else if (artefact.getEra() != null && eraRepository.findById(artefact.getEra().getId()).isEmpty())
            throw new IllegalArgumentException("Era does not exist!");
        else if (artefact.getStyle() != null && styleRepository.findById(artefact.getStyle().getId()).isEmpty())
            throw new IllegalArgumentException("Style does not exist!");
        else if (artefact.getExhibition() != null && exhibitionRepository.findById(artefact.getExhibition().getId()).isEmpty())
            throw new IllegalArgumentException("Style does not exist!");

        artefactRepository.saveById(
                artefact.getName(), artefact.getCreatedAt(), artefact.getPrice(),
                artefact.getActive(), artefact.getStyle(), artefact.getEra(),
                artefact.getArtist(), artefact.getExhibition(), id);
    }

    public List<Artefact> getArtefactFromExhibition(Long id) {
        return artefactRepository.findByActiveTrueAndExhibition_Id(id);
    }

    public Artefact getById(Long id) {
        return artefactRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Artefact with the given id doesnt exists!"));
    }

    public void deactivate(Long id, Boolean active) {
        artefactRepository.activate(active, id);
    }

    public List<Picture> getPictures(Long id){
        return pictureService.getPicturesForArtefact(id);
    }

    public List<Artefact> getNewest(Integer maxCount){
        Pageable firstPageWithNElements = PageRequest.of(0, maxCount);

        return artefactRepository.findAllByOrderByIdDesc(firstPageWithNElements); 
    }
}
