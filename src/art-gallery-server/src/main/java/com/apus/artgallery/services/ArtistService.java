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

    public Artist addArtist(Artist artist) {
        if (artistRepository.findByFirstNameIgnoreCaseAndLastNameIgnoreCase(artist.getFirstName(), artist.getFirstName()) != null)
            throw new IllegalArgumentException("Artist with this FirstName and LastName already exists.");

        if (artistRepository.findByAliasIgnoreCase(artist.getAlias()) != null)
            throw new IllegalArgumentException("Artist with this alias already exists");

        artistRepository.save(artist);
        return artist;
    }

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    public Artist getById(Long id) {
        return artistRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Artist with the given id doesnt exists!"));
    }

    public void editById(Long id, Artist artist) {
        if (artistRepository.existsByFirstNameAndLastNameAndIdIsNot(artist.getFirstName(), artist.getLastName(), id))
            throw new IllegalArgumentException("First and Last name already exist!");
        else if (artistRepository.existsByAliasAndIdIsNot(artist.getAlias(), id))
            throw new IllegalArgumentException("Alias already exist!");

        artistRepository.saveById(artist.getFirstName(), artist.getSecondName(), artist.getLastName(),
                artist.getAlias(), artist.getBirthDate(), artist.getBirthPlace(), artist.getLongBio(),
                artist.getShortBio(), artist.getActive(), id);
    }

    public void deactivate(Long id, Boolean active) {
        artistRepository.deactivate(active, id);
    }

    public List<Artist> getAllActive(){
        return artistRepository.findByActiveTrue();
    }
}
