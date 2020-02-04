package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Style;
import com.apus.artgallery.services.StyleService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
public class StyleController {
    private final StyleService styleService;

    public StyleController(StyleService styleService) {
        this.styleService = styleService;
    }

    @GetMapping("/api/v1/style")
    public ResponseEntity<Response> getStyles() {
        Response response = new Response("StyleController.getStyles", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(styleService.getAll());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/style/active")
    public ResponseEntity<Response> getActiveStyles() {
        Response response = new Response("StyleController.getStyles", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(styleService.getAllActive());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PostMapping("/api/v1/style")
    public ResponseEntity<Response> AddStyle(@RequestBody Style style) {
        Response response = new Response("StyleController.AddStyle", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(styleService.addStyle(style));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
