package com.apus.artgallery.services;

import com.apus.artgallery.models.Exhibition;
import com.apus.artgallery.repositories.ExhibitionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ExhibitionService {
    private final ExhibitionRepository exhibitionRepository;

    public ExhibitionService(ExhibitionRepository exhibitionRepository){
        this.exhibitionRepository = exhibitionRepository;
    }

    public void addExhibition(Exhibition exhibition){
        if (exhibitionRepository.findByNameIgnoreCase(exhibition.getName()) != null)
            throw new IllegalArgumentException("Name already exist!");

        exhibitionRepository.save(exhibition);
    }

    public Boolean isExhibitionActive(Exhibition exhibition){
        List<Exhibition> activeExhibitions = exhibitionRepository.findByStartDateAfterAndEndDateBefore(
                exhibition.getStartDate(),
                exhibition.getEndDate());

        if (!activeExhibitions.isEmpty() && activeExhibitions.contains(exhibition))
            return true;

        return false;
    }

    public List<Exhibition> getActiveExhibitions(){
        return exhibitionRepository.findByStartDateAfterAndEndDateBefore(LocalDateTime.now(), LocalDateTime.now());
    }

    public Exhibition getExhibitionByName(String name){
        return exhibitionRepository.findByNameIgnoreCase(name);
    }

    public List<Exhibition> getExhibitions(){
        return exhibitionRepository.findAll();
    }
}
