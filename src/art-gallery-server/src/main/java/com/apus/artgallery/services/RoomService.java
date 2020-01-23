package com.apus.artgallery.services;

import com.apus.artgallery.models.Room;
import com.apus.artgallery.repositories.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository){
        this.roomRepository = roomRepository;
    }

    public void addRoom(Room room){
        if (room.getGallery() == null)
            throw new IllegalArgumentException("No gallery specified for this room");

        if (roomRepository.findByNameIgnoreCase(room.getName()) != null)
            throw new IllegalArgumentException("Room with this name already exists.");

        roomRepository.save(room);
    }

    public List<Room> getAllRooms(){
        return roomRepository.findAll();
    }
}
