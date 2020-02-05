package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name = "location")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String location;

    @Column(name = "active")
    private Boolean active = true;

    @ManyToOne
    private Gallery gallery;

    public String getName() {
        return name;
    }

    public Gallery getGallery() {
        return gallery;
    }

    public Long getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public Boolean getActive() {
        return active;
    }
}
