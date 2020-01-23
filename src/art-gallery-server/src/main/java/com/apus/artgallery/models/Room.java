package com.apus.artgallery.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "location")
    private String location;

    public String getName() {
        return name;
    }
}
