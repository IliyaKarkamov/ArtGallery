package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

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

    @ManyToOne
    private Era era;

    @ManyToOne
    private Style style;

    @ManyToOne
    private Exhibition exhibition;

    public Long getId() {
        return id;
    }
}
