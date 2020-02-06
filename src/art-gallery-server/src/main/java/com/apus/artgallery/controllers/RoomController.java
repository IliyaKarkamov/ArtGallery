package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Room;
import com.apus.artgallery.services.RoomService;
import com.apus.artgallery.utils.Response;
import com.apus.artgallery.utils.ResponseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@Controller
public class RoomController {
    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping("/api/v1/rooms")
    public ResponseEntity<Response> addRoom(@RequestBody Room room) {
        Response response = new Response("RoomController.addRoom", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(roomService.addRoom(room));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/rooms")
    public ResponseEntity<Response> getAllRooms() {
        Response response = new Response("RoomController.getAllRooms", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(roomService.getAllRooms());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/rooms/gallery/{galleryId}")
    public ResponseEntity<Response> getRoomsFromGallery(@PathVariable Long galleryId) {
        Response response = new Response("RoomController.getRoomsFromGallery", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(roomService.getAllFromGallery(galleryId));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/rooms/active")
    public ResponseEntity<Response> getActiveRooms() {
        Response response = new Response("RoomController.getActiveRooms", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(roomService.getAllActive());
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @GetMapping("/api/v1/rooms/{id}")
    public ResponseEntity<Response> getRoomById(@PathVariable Long id) {
        Response response = new Response("RoomController.getRoomById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            response.setResult(roomService.getById(id));
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/rooms/edit/{id}")
    public ResponseEntity<Response> editRoomById(@RequestBody Room room, @PathVariable Long id) {
        Response response = new Response("RoomController.editRoomById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            roomService.editById(id, room);
            response.setResult(true);
        } catch (Exception e) {
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }

    @PutMapping("/api/v1/rooms/deactivate/{id}")
    public ResponseEntity<Response> deactivateById(@RequestParam Boolean active, @PathVariable Long id) {
        Response response = new Response("RoomController.deactivateById", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try {
            roomService.deactivate(id, active);
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
