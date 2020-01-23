package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Data
@Entity
@Table(name = "era")
public class Era {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @Column(name = "active")
    private Boolean active = true;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @Column(name = "descriprion")
    private String description;

    public String getName() {
        return name;
    }
}
