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

    @GetMapping("/api/v1/styles")
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

    @GetMapping("/api/v1/styles/id/{id}")
    public ResponseEntity<Response> getStyleById(@PathVariable Long id) {
        Response response = new Response("StyleController.getStyleById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(styleService.get(id));
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

    @PutMapping("/api/v1/styles/id/{id}")
    public ResponseEntity<Response> editStyleById(@RequestBody Style style, @PathVariable Long id) {
        Response response = new Response("AccountController.editStyleById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            styleService.edit(id, style);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @DeleteMapping("/api/v1/styles/id/{id}")
    public ResponseEntity<Response> deactivateStyleById(@PathVariable Long id) {
        Response response = new Response("AccountController.deactivateStyleById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            styleService.deactivate(id);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PostMapping("/api/v1/styles")
    public ResponseEntity<Response> addStyle(@RequestBody Style style) {
        Response response = new Response("StyleController.addStyle", LocalDateTime.now());

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
