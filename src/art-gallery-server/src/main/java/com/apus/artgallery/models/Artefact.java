package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
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
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt = LocalDate.now();

    @Column(name = "price", columnDefinition = "real2 default 0")
    private Float price;

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

    @Column(name = "active")
    private Boolean active = true;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "artefact")
    @JsonBackReference
    private Set<Picture> pictures;

    public Long getId() {
        return id;
    }

    public Artist getArtist() {
        return artist;
    }

    public Set<Picture> getPictures() {
        return pictures;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public Float getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public Era getEra() {
        return era;
    }

    public Style getStyle() {
        return style;
    }

    public Exhibition getExhibition() {
        return exhibition;
    }

    public Boolean getActive() {
        return active;
    }
}
