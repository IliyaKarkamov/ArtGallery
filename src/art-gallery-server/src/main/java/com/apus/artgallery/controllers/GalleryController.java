package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Gallery;
import com.apus.artgallery.services.GalleryService;
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
public class GalleryController {
    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService){
        this.galleryService = galleryService;
    }

    @PostMapping("/api/v1/gallery")
    public ResponseEntity<Response> addGallery(@RequestBody Gallery gallery){
        Response response = new Response("GalleryController.addGallery", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            galleryService.addGallery(gallery);
            response.setResult(true);
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/gallery")
    public ResponseEntity<Response> getAllGalleries(){
        Response response = new Response("GalleryController.getAllGalleries", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            response.setResult(galleryService.getAllGalleries());
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
