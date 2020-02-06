package com.apus.artgallery.services;

import com.apus.artgallery.models.Room;
import com.apus.artgallery.repositories.GalleryRepository;
import com.apus.artgallery.repositories.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {
    private final RoomRepository roomRepository;
    private final GalleryRepository galleryRepository;

    public RoomService(RoomRepository roomRepository, GalleryRepository galleryRepository) {
        this.roomRepository = roomRepository;
        this.galleryRepository = galleryRepository;
    }

    public Room addRoom(Room room) {
        if (room.getGallery() == null)
            throw new IllegalArgumentException("No gallery specified for this room");

        if (roomRepository.findByNameIgnoreCase(room.getName()) != null)
            throw new IllegalArgumentException("Room with this name already exists.");

        roomRepository.save(room);
        return room;
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Room getById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Style with the given id doesnt exists!"));
    }

    public void editById(Long id, Room room) {
        if (roomRepository.existsByNameAndIdIsNot(room.getName(), id))
            throw new IllegalArgumentException("Name already exist!");
        else if (room.getGallery() != null && !galleryRepository.findById(room.getGallery().getId()).isPresent())
            throw new IllegalArgumentException("Gallery does not exist!");

        roomRepository.saveById(room.getName(), room.getLocation(), room.getGallery(), room.getActive(), id);
    }

    public void deactivate(Long id, Boolean active) {
        roomRepository.activate(active, id);
    }

    public List<Room> getAllFromGallery(Long galleryId){
        return roomRepository.findByActiveTrueAndGallery_Id(galleryId);
    }
}
