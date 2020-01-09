package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.services.ArtefactService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;

@Controller
public class ArtefactContraller {
    private final ArtefactService artefactService;

    ArtefactContraller(ArtefactService artefactService){
        this.artefactService = artefactService;
    }

    @PostMapping("/api/v1/artefact")
    public ResponseEntity<Response> addArtefact(@RequestBody Artefact artefact){
        Response response = new Response("ArtefactContraller.addArtefact", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            artefactService.addArtefact(artefact);
            response.setResult(true);
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefact")
    public ResponseEntity<Response> getArtefacts(){
        Response response = new Response("ArtefactContraller.getArtefacts", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            response.setResult(artefactService.getArtefacts());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/artefact/{name}")
    public ResponseEntity<Response> getArtefacts(@PathVariable String name){
        Response response = new Response("AccountController.getUser", LocalDateTime.now());

        HttpStatus status;

        try {
            response.setResult(artefactService.getArtefacts(name));
            status = HttpStatus.OK;
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

}
