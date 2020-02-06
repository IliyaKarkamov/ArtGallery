package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Exhibition;
import com.apus.artgallery.services.ExhibitionService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
public class ExhibitionController {
    private final ExhibitionService exhibitionService;

    public ExhibitionController(ExhibitionService exhibitionService) {
        this.exhibitionService = exhibitionService;
    }

    @PostMapping("/api/v1/exhibitions")
    public ResponseEntity<Response> addExhibition(@RequestBody Exhibition exhibition) {
        Response response = new Response("ExhibitionController.addExhibition", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(exhibitionService.addExhibition(exhibition));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/exhibitions")
    public ResponseEntity<Response> getAllExhibitions() {
        Response response = new Response("ExhibitionController.getAllExhibitions", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(exhibitionService.getExhibitions());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/exhibitions/active")
    public ResponseEntity<Response> getActiveExhibitions() {
        Response response = new Response("ExhibitionController.getActiveExhibitions", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(exhibitionService.getActiveExhibitions());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/exhibitions/{id}")
    public ResponseEntity<Response> getExhibitionById(@PathVariable Long id) {
        Response response = new Response("ExhibitionController.getExhibitionById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(exhibitionService.getById(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/exhibitions/room/{roomId}")
    public ResponseEntity<Response> getExhibitionsFromRooms(@PathVariable Long roomId) {
        Response response = new Response("ExhibitionController.getExhibitionsFromRooms", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(exhibitionService.getExhibitionsFromRooms(roomId));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/exhibitions/edit/{id}")
    public ResponseEntity<Response> editExhibitionById(@RequestBody Exhibition exhibition, @PathVariable Long id) {
        Response response = new Response("ExhibitionController.editExhibitionById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            exhibitionService.editById(id, exhibition);
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
