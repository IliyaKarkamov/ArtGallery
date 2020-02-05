package com.apus.artgallery.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "artist")
public class Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String secondName;

    @NotBlank
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "alias")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String alias;

    @Column(name = "birth_date")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime birthDate;

    @Column(name = "birth_place")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String birthPlace;

    @Column(name = "short_bio")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String shortBio;

    @Column(name = "long_bio")
    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private String longBio;

    @Column(name = "active")
    private Boolean active = true;

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAlias() {
        return alias;
    }

    public String getSecondName() {
        return secondName;
    }

    public LocalDateTime getBirthDate() {
        return birthDate;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public String getShortBio() {
        return shortBio;
    }

    public String getLongBio() {
        return longBio;
    }

    public Boolean getActive() {
        return active;
    }
}
