package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Era;
import com.apus.artgallery.services.EraService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
public class EraController {
    private final EraService eraService;

    public EraController(EraService eraService) {
        this.eraService = eraService;
    }

    @GetMapping("/api/v1/eras")
    public ResponseEntity<Response> getEras() {
        Response response = new Response("EraController.getUsers", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(eraService.getAll());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/eras/active")
    public ResponseEntity<Response> getActiveEras() {
        Response response = new Response("EraController.getActiveEras", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(eraService.getAllActive());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/eras/{id}")
    public ResponseEntity<Response> getEraById(@PathVariable Long id) {
        Response response = new Response("EraController.getEraById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(eraService.getById(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PostMapping("/api/v1/eras")
    public ResponseEntity<Response> addEra(@RequestBody Era era) {
        Response response = new Response("EraController.addEra", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(eraService.addEra(era));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/eras/edit/{id}")
    public ResponseEntity<Response> editEraById(@PathVariable Long id,
                                                @RequestBody Era era) {
        Response response = new Response("EraController.editEraById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            eraService.editById(id, era);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/eras/deactivate/{id}")
    public ResponseEntity<Response> deactivate(@PathVariable Long id,
                                                @RequestParam Boolean active) {
        Response response = new Response("EraController.deactivate", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            eraService.deactivate(id, active);
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
