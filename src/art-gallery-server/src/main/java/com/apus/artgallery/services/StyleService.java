package com.apus.artgallery.services;

import com.apus.artgallery.models.Era;
import com.apus.artgallery.models.Style;
import com.apus.artgallery.repositories.StyleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StyleService {
    private final StyleRepository styleRepository;

    public StyleService(StyleRepository styleRepository){
        this.styleRepository = styleRepository;
    }

    public List<Style> getAllActive(){
        return styleRepository.findByActiveTrue();
    }

    public List<Style> getAll(){
        return styleRepository.findAll();
    }


    public void addStyle(Style style){
        if (styleRepository.findByNameIgnoreCase(style.getName()) != null)
            throw new IllegalArgumentException("Name already exist!");

        styleRepository.save(style);
    }
}
