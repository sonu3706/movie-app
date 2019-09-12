package com.app.movie.service;

import com.app.movie.exception.AuthenticationException;
import com.app.movie.model.User;

public interface AuthenticationService {
    User register(User user) throws AuthenticationException.UserAlreadyExistsException;
    User login(String email, String password);
}
