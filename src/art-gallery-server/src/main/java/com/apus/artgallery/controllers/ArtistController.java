package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artist;
import com.apus.artgallery.services.ArtistService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
public class ArtistController {
    private final ArtistService artistService;

    public ArtistController(ArtistService artistService) {
        this.artistService = artistService;
    }

    @PostMapping("/api/v1/artists")
    public ResponseEntity<Response> addArtist(@RequestBody Artist artist) {
        Response response = new Response("ArtistController.addArtist", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artistService.addArtist(artist));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artists")
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

    @GetMapping("/api/v1/artists/{id}")
    public ResponseEntity<Response> getArtistById(@PathVariable Long id) {
        Response response = new Response("ArtistController.getArtistById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artistService.getById(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artists/active")
    public ResponseEntity<Response> getActiveArtists() {
        Response response = new Response("ArtistController.getActiveArtists", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artistService.getAllActive());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
    @GetMapping("/api/v1/artists/newest/{count}")
    public ResponseEntity<Response> getNewest(@PathVariable Integer count) {
        Response response = new Response("ArtistController.getArtistById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artistService.getNewest(count));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/artists/edit/{id}")
    public ResponseEntity<Response> editArtistById(@RequestBody Artist artist, @PathVariable Long id) {
        Response response = new Response("ArtistController.editArtistById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            artistService.editById(id, artist);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/artists/deactivate/{id}")
    public ResponseEntity<Response> deactivateById(@RequestParam Boolean active, @PathVariable Long id) {
        Response response = new Response("ArtistController.deactivateById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            artistService.deactivate(id, active);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
