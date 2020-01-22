package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.services.ArtefactService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/api/v1/artefact/{name}/{id}")
    public ResponseEntity<Response> getArtefacts(@PathVariable(required = false) String name,
                                                 @PathVariable(required = false) Long id){
        Response response = new Response("ArtefactContraller.getArtefactseeee", LocalDateTime.now());

        HttpStatus status;

        try {
            if (name != null)
                response.setResult(artefactService.getArtefacts(name));
            else if(id != null)
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

    @PutMapping("/api/v1/artefact/")
    public ResponseEntity<Response> updateArtefact(@RequestBody Artefact artefact){
        Response response = new Response("ArtefactContraller.updateArtefact", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            artefactService.updateArtefact(artefact);
            response.setResult(true);
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

//    @GetMapping("/api/v1/artefact/exh/{id}")
//    public ResponseEntity<Response> getArtefactsFromExhibition(@PathVariable Long id){
//        Response response = new Response("ArtefactContraller.getArtefactsFromExhibition", LocalDateTime.now());
//
//        HttpStatus status;
//
//        try {
//            response.setResult(artefactService.getArtefactFromExhibition(id));
//            status = HttpStatus.OK;
//        } catch (Exception e) {
//            response.addException(ResponseException.create(e));
//            status = HttpStatus.BAD_REQUEST;
//        }
//
//        return ResponseEntity
//                .status(status)
//                .body(response);
//    }
}
