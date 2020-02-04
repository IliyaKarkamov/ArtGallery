package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.Set;

@Data
@Entity
@Table(name = "artefact")
public class Artefact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "created_at")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "price")
    private Float price = 0.0f;

    @NotBlank
    @Column(name = "name")
    private String name;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @ManyToOne
    private Era era;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @ManyToOne
    private Style style;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @ManyToOne
    private Exhibition exhibition;

    @ManyToOne
    private Artist artist;

    @OneToMany(mappedBy = "artefact")
    Set<PictureArtefactModel> pictures;

    public Long getId() {
        return id;
    }

    public Artist getArtist() {
        return artist;
    }
}
