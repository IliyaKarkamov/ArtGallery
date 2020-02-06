package com.apus.artgallery.services;

import com.apus.artgallery.models.Exhibition;
import com.apus.artgallery.repositories.*;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExhibitionService {
    private final ExhibitionRepository exhibitionRepository;
    private final StyleRepository styleRepository;
    private final ArtistRepository artistRepository;
    private final EraRepository eraRepository;
    private final RoomRepository roomRepository;

    public ExhibitionService(ExhibitionRepository exhibitionRepository,
                             StyleRepository styleRepositor,
                             ArtistRepository artistRepository,
                             EraRepository eraRepository,
                             RoomRepository roomRepository) {
        this.exhibitionRepository = exhibitionRepository;
        this.eraRepository = eraRepository;
        this.styleRepository = styleRepositor;
        this.artistRepository = artistRepository;
        this.roomRepository = roomRepository;
    }

    public Exhibition addExhibition(Exhibition exhibition) {
        if (exhibitionRepository.findByNameIgnoreCase(exhibition.getName()) != null)
            throw new IllegalArgumentException("Name already exist!");

        exhibitionRepository.save(exhibition);
        return exhibition;
    }

    public Boolean isExhibitionActive(Exhibition exhibition) {
        List<Exhibition> activeExhibitions = exhibitionRepository.findByStartDateAfterAndEndDateBefore(
                exhibition.getStartDate(),
                exhibition.getEndDate());

        return !activeExhibitions.isEmpty() && activeExhibitions.contains(exhibition);
    }

    public List<Exhibition> getActiveExhibitions() {
        return exhibitionRepository.findByStartDateAfterAndEndDateBefore(LocalDate.now(), LocalDate.now());
    }

    public Exhibition getExhibitionByName(String name) {
        return exhibitionRepository.findByNameIgnoreCase(name);
    }

    public List<Exhibition> getExhibitions() {
        return exhibitionRepository.findAll();
    }

    public Exhibition getById(Long id) {
        return exhibitionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Exhibition with the given id doesnt exists!"));
    }

    public void editById(Long id, Exhibition exhibition) {
        if (exhibitionRepository.existsByNameAndIdIsNot(exhibition.getName(), id))
            throw new IllegalArgumentException("Name already exist!");
        else if (exhibition.getArtist() != null && artistRepository.findById(exhibition.getArtist().getId()).isEmpty())
            throw new IllegalArgumentException("Artist does not exist!");
        else if (exhibition.getEra() != null && eraRepository.findById(exhibition.getEra().getId()).isEmpty())
            throw new IllegalArgumentException("Era does not exist!");
        else if (exhibition.getStyle() != null && styleRepository.findById(exhibition.getStyle().getId()).isEmpty())
            throw new IllegalArgumentException("Style does not exist!");
        else if (exhibition.getRoom() != null && roomRepository.findById(exhibition.getRoom().getId()).isEmpty())
            throw new IllegalArgumentException("Room does not exist!");

        exhibitionRepository.saveById(exhibition.getName(), exhibition.getStartDate(), exhibition.getEndDate(),
                exhibition.getArtist(), exhibition.getEra(), exhibition.getStyle(), exhibition.getRoom(), id);
    }

    public List<Exhibition> getExhibitionsFromRooms(Long roomId) {
        return exhibitionRepository.findByRoom_Id(roomId);
    }
}
