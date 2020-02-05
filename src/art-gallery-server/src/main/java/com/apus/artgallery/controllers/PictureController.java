package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Picture;
import com.apus.artgallery.services.PictureService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Controller
public class PictureController {
    private final PictureService pictureService;

    public PictureController(PictureService pictureService) {
        this.pictureService = pictureService;
    }

    @PostMapping("/api/v1/pictures")
    public ResponseEntity<Response> addPicture(@RequestBody Picture picture) {
        Response response = new Response("PictureController.addPicture", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(pictureService.savePicture(picture));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping(value = "/api/v1/pictures/{id}", consumes = {"multipart/form-data"})
    public ResponseEntity<Response> uploadFileToPicture(@PathVariable Long id,
                                                        @RequestParam("file") MultipartFile file) {
        Response response = new Response("PictureController.uploadFileToPicture", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            pictureService.addFileForImage(id, file);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/pictures/{id}")
    public ResponseEntity<Resource> getPicture(@PathVariable Long id) {
        try {
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(pictureService.getPictureFromStorage(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(null);
        }

    }

    @GetMapping("/api/v1/pictures")
    public ResponseEntity<Response> getRoomById() {
        Response response = new Response("RoomController.getRoomById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(pictureService.getAllPictures());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
