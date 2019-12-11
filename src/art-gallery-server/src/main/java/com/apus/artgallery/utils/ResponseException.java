package com.apus.artgallery.utils;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;

public class ResponseException {
    private String name;
    private String message;

    public ResponseException(String name, String message) {
        this.name = name;
        this.message = message;
    }

    public static ResponseException create(Exception exception) {
        assert exception != null;

        if (exception instanceof ConstraintViolationException) {
            ConstraintViolationException constraintViolationException = (ConstraintViolationException) exception;
            StringBuilder errorMessage = new StringBuilder();

            for (ConstraintViolation<?> constraintViolations : constraintViolationException.getConstraintViolations()) {
                errorMessage.append(String.format("Validation error for field %s: %s \n",
                        constraintViolations.getPropertyPath().toString(),
                        constraintViolations.getMessage()));
            }

            return new ResponseException(ConstraintViolation.class.getSimpleName(), errorMessage.toString());
        }

        return new ResponseException(exception.getClass().getSimpleName(), exception.getMessage());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
