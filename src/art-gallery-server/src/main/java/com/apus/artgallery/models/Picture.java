package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

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
    private String storedName;

//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "artefact_id")
//    //@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//    @JsonManagedReference
//    private Artefact artefact;

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
}
