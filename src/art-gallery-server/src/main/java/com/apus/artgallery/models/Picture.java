package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Data
@Entity
@Table(name = "pictures")
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "stored_name")
    @JsonIgnore
    private String StoredName = UUID.randomUUID().toString();

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStoredName() {
        return StoredName;
    }
}
