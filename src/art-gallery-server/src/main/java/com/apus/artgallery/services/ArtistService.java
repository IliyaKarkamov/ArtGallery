package com.apus.artgallery.services;

import com.apus.artgallery.models.Artist;
import com.apus.artgallery.repositories.ArtistRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {
    private final ArtistRepository artistRepository;

    public ArtistService(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    public void addArtist(Artist artist) {
        if (artistRepository.findByFirstNameIgnoreCaseAndLastNameIgnoreCase(artist.getFirstName(), artist.getFirstName()) != null)
            throw new IllegalArgumentException("Artist with this FirstName and LastName already exists.");

        if (artistRepository.findByAliasIgnoreCase(artist.getAlias()) != null)
            throw new IllegalArgumentException("Artist with this alias already exists");

        artistRepository.save(artist);
    }

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }
}
