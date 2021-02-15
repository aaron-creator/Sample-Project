package com.sampleapp.sampleapp.repository;
import java.util.List;
import java.util.Optional;

import com.sampleapp.sampleapp.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, Integer> {
    Optional<User> findById(Integer id);
    List<User> findByNameContaining(String name);
    List<User> findByDob(String name);
    List<User> findByClass(String classes);
    List<User> findByDiv(String div);
    List<User> findByGender(String gender);
    List<User> findAllByOrderByName(String name);
}