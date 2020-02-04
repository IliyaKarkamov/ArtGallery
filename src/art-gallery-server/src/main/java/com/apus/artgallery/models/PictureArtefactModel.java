package com.apus.artgallery.models;

import javax.persistence.*;

@Entity
public class PictureArtefactModel {
    @EmbeddedId
    PictureArtefactKeyModel id;

    @ManyToOne
    @MapsId("artefact_id")
    @JoinColumn(name = "artefact_id")
    Artefact artefact;

    @ManyToOne
    @MapsId("picture_id")
    @JoinColumn(name = "picture_id")
    Picture picture;
}
