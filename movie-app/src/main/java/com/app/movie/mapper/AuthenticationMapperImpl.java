package com.app.movie.mapper;

import com.app.movie.model.User;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
public class AuthenticationMapperImpl implements AuthenticationMapper {

    @Override
    public User mapUser(User user) {
        user.setUserId(UUID.randomUUID().toString());
        user.setStatus("Active");
        user.setCreatedOn(new Date());
        return user;
    }
}
