package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Artefact;
import com.apus.artgallery.models.Exhibition;
import com.apus.artgallery.services.ExhibitionService;
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
public class ExhibitionController {
    private final ExhibitionService exhibitionService;

    public ExhibitionController(ExhibitionService exhibitionService){
        this.exhibitionService = exhibitionService;
    }

    @PostMapping("/api/v1/exhibition")
    public ResponseEntity<Response> addExhibition(@RequestBody Exhibition exhibition){
        Response response = new Response("ExhibitionController.addExhibition", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            exhibitionService.addExhibition(exhibition);
            response.setResult(true);
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/exhibition")
    public ResponseEntity<Response> getAllExhibitions(){
        Response response = new Response("ExhibitionController.getAllExhibitions", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            response.setResult(exhibitionService.getExhibitions());
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/exhibition/active")
    public ResponseEntity<Response> getActiveExhibitions(){
        Response response = new Response("ExhibitionController.getActiveExhibitions", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            response.setResult(exhibitionService.getActiveExhibitions());
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }


}
