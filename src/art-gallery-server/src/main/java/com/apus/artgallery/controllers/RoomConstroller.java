package com.apus.artgallery.controllers;

import com.apus.artgallery.models.Room;
import com.apus.artgallery.services.RoomService;
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
public class RoomConstroller {
    private final RoomService roomService;

    public RoomConstroller(RoomService roomService){
        this.roomService = roomService;
    }

    @PostMapping("/api/v1/room")
    public ResponseEntity<Response> addRoom(@RequestBody Room room){
        Response response = new Response("RoomConstroller.addRoom", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            roomService.addRoom(room);
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
    public ResponseEntity<Response> getAllRooms(){
        Response response = new Response("RoomConstroller.getAllRooms", LocalDateTime.now());

        HttpStatus status = HttpStatus.OK;

        try{
            response.setResult(roomService.getAllRooms());
        } catch (Exception e){
            response.addException(ResponseException.create(e));
            status = HttpStatus.BAD_REQUEST;
        }

        return ResponseEntity
                .status(status)
                .body(response);
    }
}
