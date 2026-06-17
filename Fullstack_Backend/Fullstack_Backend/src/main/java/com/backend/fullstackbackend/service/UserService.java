package com.backend.fullstackbackend.service;

import java.util.List;

import com.backend.fullstackbackend.entity.UserEntity;

public interface UserService {
	
	UserEntity saveUser(UserEntity newUser);
	
	List<UserEntity> getAllUser();
	
	UserEntity getUserById(Long id);
	
	UserEntity update(Long id,UserEntity updatedUser);
	
	void deleteUser(Long id);

}
