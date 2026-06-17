package com.backend.fullstackbackend.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.fullstackbackend.entity.UserEntity;
import com.backend.fullstackbackend.repository.UserRepository;
import com.backend.fullstackbackend.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService service;
	
	@PostMapping("/user")
	public UserEntity saveUser(@RequestBody UserEntity newUser) 
		
	{
	
		return service.saveUser(newUser);
	}
	
	@GetMapping("/users")
	public List<UserEntity> getAllUser() 
	{
		return service.getAllUser();
	}
	
	@GetMapping("/user/{id}")
	public UserEntity getUserById(@PathVariable Long id) {
		return service.getUserById(id);
	}
	
	@PutMapping("/user/{id}")
	public UserEntity updateUser(@PathVariable Long id,
	                             @RequestBody UserEntity updateUser) {
	    return service.update(id, updateUser);
	}
	

	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable Long id)
	{
	    service.deleteUser(id);
	    return "User deleted successfully";
	}

}
