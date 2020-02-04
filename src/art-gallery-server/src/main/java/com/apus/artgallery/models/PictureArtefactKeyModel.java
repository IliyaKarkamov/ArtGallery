package com.apus.artgallery.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class PictureArtefactKeyModel implements Serializable {
    @Column(name = "artefact_id")
    private Long artefactId;

    @Column(name = "picture_id")
    private Long pictureId;

    public Long getArtefactId() {
        return artefactId;
    }

    public Long getPictureId() {
        return pictureId;
    }
}
