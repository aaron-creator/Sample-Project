package com.sampleapp.sampleapp.resource;

import java.util.List;

import com.sampleapp.sampleapp.model.User;
import com.sampleapp.sampleapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @Autowired
    private UserRepository repository;
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/reg")
    public String registerUser(@RequestBody User user){
        repository.save(user);
        return "Registered with id : "+user;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findAllUsers")
    public List<User> getAllUser(){
        return repository.findAll();
    }
    

}