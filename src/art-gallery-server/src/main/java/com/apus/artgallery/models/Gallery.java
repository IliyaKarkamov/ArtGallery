package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name = "gallery")
public class Gallery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "address")
    private String address;

    @Column(name = "longitude")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private Float longitude;

    @Column(name = "latitude")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private Float latitude;

    @Column(name = "description")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String description;

    @Column(name = "active")
    private Boolean active = true;

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public Float getLongitude() {
        return longitude;
    }

    public Float getLatitude() {
        return latitude;
    }

    public String getDescription() {
        return description;
    }

    public Boolean getActive() {
        return active;
    }
}
