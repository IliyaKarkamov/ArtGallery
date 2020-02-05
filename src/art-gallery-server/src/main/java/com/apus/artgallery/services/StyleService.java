package com.apus.artgallery.services;

import com.apus.artgallery.models.Style;
import com.apus.artgallery.repositories.StyleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StyleService {
    private final StyleRepository styleRepository;

    public StyleService(StyleRepository styleRepository) {
        this.styleRepository = styleRepository;
    }

    public List<Style> getAllActive() {
        return styleRepository.findByActiveTrue();
    }

    public List<Style> getAll() {
        return styleRepository.findAll();
    }


    public Style addStyle(Style style) {
        if (styleRepository.findByNameIgnoreCase(style.getName()) != null)
            throw new IllegalArgumentException("Name already exist!");

        styleRepository.save(style);
        return style;
    }

    public Style get(Long id) {
        var style = styleRepository.findById(id);

        if (style.isPresent())
            return style.get();

        throw new IllegalArgumentException("Style with the given id doesnt exists!");
    }

    public void edit(Long id, Style style) {
        if (styleRepository.existsByNameAndIdIsNot(style.getName(), id))
            throw new IllegalArgumentException("Name already exist!");

        styleRepository.saveById(style.getName(), style.getDescription(), style.getActive(), id);
    }

    public void deactivate(Long id) {
    }
}
