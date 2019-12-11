package com.apus.artgallery.utils;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Response {
    private String operation;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime executedAt;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private Object result;

    @JsonInclude(JsonInclude.Include.NON_EMPTY)
    private List<ResponseException> exceptions = new ArrayList<>();

    public Response(String operation, LocalDateTime executedAt) {
        this.operation = operation;
        this.executedAt = executedAt;
    }

    public String getOperation() {
        return operation;
    }

    public LocalDateTime getExecutedAt() {
        return executedAt;
    }

    public Object getResult() {
        return result;
    }

    public void setResult(Object result) {
        this.result = result;
    }

    public List<ResponseException> getExceptions() {
        return exceptions;
    }

    public void addException(ResponseException exception) {
        this.exceptions.add(exception);
    }
}
