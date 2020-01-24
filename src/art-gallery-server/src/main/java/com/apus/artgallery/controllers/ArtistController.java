package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artist;
import com.apus.artgallery.services.ArtistService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Controller
public class ArtistController {
    private final ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @PostMapping("/api/v1/artist")
    public ResponseEntity<Response> addArtist(@RequestBody Artist artist) {
        Response response = new Response("ArtistController.addArtist", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            artistService.addArtist(artist);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artist")
    public ResponseEntity<Response> getAllArtists() {
        Response response = new Response("ArtistController.getAllArtists", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artistService.getAllArtists());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
