package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.models.Room;
import com.apus.artgallery.services.ArtefactService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
public class ArtefactController {
    private final ArtefactService artefactService;

    ArtefactController(ArtefactService artefactService) {
        this.artefactService = artefactService;
    }

    @PostMapping("/api/v1/artefacts")
    public ResponseEntity<Response> addArtefact(@RequestBody Artefact artefact) {
        Response response = new Response("ArtefactController.addArtefact", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artefactService.addArtefact(artefact));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefacts")
    public ResponseEntity<Response> getArtefacts() {
        Response response = new Response("ArtefactController.getArtefacts", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artefactService.getArtefacts());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefacts/{name}/{id}")
    public ResponseEntity<Response> getArtefacts(@PathVariable(required = false) String name,
                                                 @PathVariable(required = false) Long id) {
        Response response = new Response("ArtefactController.getArtefacts", LocalDateTime.now());

        HttpStatus status;

        try {
            if (name != null)
                response.setResult(artefactService.getArtefacts(name));
            else if (id != null)
                response.setResult(artefactService.getArtefactFromExhibition(id));
            else
                throw new IllegalArgumentException("No valid Paramenters");
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefacts/exh/{id}")
    public ResponseEntity<Response> getArtefactsFromExhibition(@PathVariable Long id) {
        Response response = new Response("ArtefactController.getArtefactsFromExhibition", LocalDateTime.now());

        HttpStatus status;

        try {
            response.setResult(artefactService.getArtefactFromExhibition(id));
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefacts/{id}")
    public ResponseEntity<Response> getArtefactById(@PathVariable Long id) {
        Response response = new Response("ArtefactController.getArtefactById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artefactService.getById(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefacts/pictures/{id}")
    public ResponseEntity<Response> getPictures(@PathVariable Long id) {
        Response response = new Response("ArtefactController.getPictures", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(artefactService.getPictures(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/artefacts/edit/{id}")
    public ResponseEntity<Response> editArtefactById(@RequestBody Artefact artefact, @PathVariable Long id) {
        Response response = new Response("ArtefactController.editArtefactById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            artefactService.updateArtefactById(id, artefact);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/artefacts/deactivate/{id}")
    public ResponseEntity<Response> deactivateById(@RequestParam Boolean active, @PathVariable Long id) {
        Response response = new Response("ArtefactController.deactivateById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            artefactService.deactivate(id, active);
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
