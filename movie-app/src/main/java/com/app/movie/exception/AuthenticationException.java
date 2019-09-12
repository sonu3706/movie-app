package com.app.movie.exception;

public class AuthenticationException {

    public static class UserDoesNotExistException extends BaseException {
        public UserDoesNotExistException(String message) {
            super(message);
        }
    }

    public static class UserAlreadyExistsException extends BaseException {
        public UserAlreadyExistsException(String message) {
            super(message);
        }
    }
}
