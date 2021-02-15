package com.sampleapp.sampleapp.resource;

import java.util.Arrays;
import java.util.List;

import com.sampleapp.sampleapp.model.User;
import com.sampleapp.sampleapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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
        Boolean valid =true;
        String valName = user.getName();
        String reg = "^([A-Z][a-z]*((\s)))+[A-Z][a-z]*$";
        String[] validclasses = {"I", "II", "III", "IV","V","VI","VII","VIII","IX","X","XI","XII"};
        String[] valDiv = {"A", "B", "C"};
        String[] valGender = {"Male", "Female"};

        if(!valName.matches(reg))
        {
            valid =false;
        }

        Boolean isvalidclass=false;
        String validClass=user.getClasses();
        for(int i= 0;i<12;i++){
            if(validclasses[i].equals(validClass)){
                isvalidclass =true;
                break;   
            }
        }
        Boolean isvalidDiv=false;
        String Div=user.getDiv();
        for(int i= 0;i<3;i++){
            if(valDiv[i].equals(Div)){
                isvalidDiv =true;
                break;   
            }
        }

        Boolean isvalidGender=false;
        String Gender=user.getGender();
        for(int i= 0;i<2;i++){
            if(valGender[i].equals(Gender)){
                isvalidGender =true;
                break;   
            }
        }
        if(!isvalidDiv || !isvalidGender || !isvalidclass){
            valid = false;
        }
        if(!valid){
            return "invalid Input";
        }
        else{
            repository.save(user);
            return user.getName();
        }
        
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findAllUsers")
    public List<User> getAllUser(){
        return repository.findAll(Sort.by(Sort.Direction.ASC, "Name"));
    }
    

}