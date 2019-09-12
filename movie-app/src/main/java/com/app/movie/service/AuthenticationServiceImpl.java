package com.app.movie.service;

import com.app.movie.exception.AuthenticationException;
import com.app.movie.mapper.AuthenticationMapper;
import com.app.movie.model.User;
import com.app.movie.repository.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private AuthenticationRepository authenticationRepository;
    private AuthenticationMapper authenticationMapper;

    @Autowired
    public AuthenticationServiceImpl(AuthenticationRepository authenticationRepository,
                                     AuthenticationMapper authenticationMapper) {
        this.authenticationRepository = authenticationRepository;
        this.authenticationMapper = authenticationMapper;
    }

    @Override
    public User register(User user) throws AuthenticationException.UserAlreadyExistsException {
        if (authenticationRepository.findByEmail(user.getEmail()) == null) {
            User mappedUser = authenticationMapper.mapUser(user);
            user = authenticationRepository.save(mappedUser);
        } else {
            throw new AuthenticationException.UserAlreadyExistsException("User already exists");
        }
        return user;
    }

    @Override
    public User login(String email, String password) {
        User fetchedUser = new User();
        if (authenticationRepository.findByEmail(email) == null) {
            //TODO "User Not found exception to be thrown"
        } else {
            fetchedUser = authenticationRepository.findByEmail(email);
            if (fetchedUser.getPassword().equals(password)) {
                return fetchedUser;
            }
        }

        return null;
    }
}
