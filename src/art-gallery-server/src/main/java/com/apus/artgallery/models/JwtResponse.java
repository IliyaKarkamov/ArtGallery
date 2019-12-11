package com.apus.artgallery.models;

import java.io.Serializable;

public class JwtResponse implements Serializable {

    private final String jwtToken;

    public JwtResponse(String jwttoken) {
        this.jwtToken = jwttoken;
    }

    public String getJwtToken() {
        return jwtToken;
    }
}
