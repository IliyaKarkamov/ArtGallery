package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name = "pictures")
@JsonIgnoreProperties({ "artefact", "storedName" })
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "stored_name")
    @JsonProperty("storedName")
    private String storedName;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "artefact_id")
    @JsonManagedReference
    @JsonProperty("artefact")
    private Artefact artefact;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStoredName() {
        return storedName;
    }

    public void setStoredName(String storedName) {
        this.storedName = storedName;
    }

    public Artefact getArtefact() {
        return artefact;
    }
}
