package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artist;
import com.apus.artgallery.models.Gallery;
import com.apus.artgallery.services.GalleryService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
public class GalleryController {
    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @PostMapping("/api/v1/galleries")
    public ResponseEntity<Response> addGallery(@RequestBody Gallery gallery) {
        Response response = new Response("GalleryController.addGallery", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(galleryService.addGallery(gallery));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/galleries")
    public ResponseEntity<Response> getAllGalleries() {
        Response response = new Response("GalleryController.getAllGalleries", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(galleryService.getAllGalleries());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/galleries/{id}")
    public ResponseEntity<Response> getGalleryById(@PathVariable Long id) {
        Response response = new Response("GalleryController.getGalleryById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(galleryService.getById(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/galleries/active")
    public ResponseEntity<Response> getAllActive() {
        Response response = new Response("GalleryController.getAllActive", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(galleryService.getAllActive());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/galleries/edit/{id}")
    public ResponseEntity<Response> editGalleryById(@RequestBody Gallery gallery, @PathVariable Long id) {
        Response response = new Response("GalleryController.editGalleryById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            galleryService.editById(id, gallery);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/galleries/deactivate/{id}")
    public ResponseEntity<Response> deactivateById(@RequestParam Boolean active, @PathVariable Long id) {
        Response response = new Response("GalleryController.deactivateById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            galleryService.deactivate(id, active);
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
