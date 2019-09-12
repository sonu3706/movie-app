package com.app.movie.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.app.movie.model.User;

@Repository
public interface AuthenticationRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
