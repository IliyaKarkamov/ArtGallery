package com.apus.artgallery.utils;

import java.util.ArrayList;
import java.util.List;

public class ResponseExceptionBuilder {
    private List<ResponseException> exceptions = new ArrayList<>();

    public void addException(ResponseException exception) {
        exceptions.add(exception);
    }

    public List<ResponseException> getExceptions() {
        return exceptions;
    }
}
