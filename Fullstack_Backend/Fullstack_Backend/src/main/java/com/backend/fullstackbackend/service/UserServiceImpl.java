package com.backend.fullstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.fullstackbackend.entity.UserEntity;
import com.backend.fullstackbackend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public UserEntity saveUser(UserEntity newUser) {
		// TODO Auto-generated method stub
		return userRepo.save(newUser);
	}

	@Override
	public List<UserEntity> getAllUser() {
		
		return userRepo.findAll();
	}

	@Override
	public UserEntity getUserById(Long id) {
		
		return userRepo.findById(id).get();
	}

	@Override
	public UserEntity update(Long id, UserEntity updatedUser) {

	    UserEntity exist = userRepo.findById(id).orElse(null);

	    if (exist != null) {
	        exist.setName(updatedUser.getName());
	        exist.setEmail(updatedUser.getEmail());
	        exist.setPhone(updatedUser.getPhone());

	        return userRepo.save(exist);
	    }

	    return null;
	}

	@Override
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
		
	}
	
	

}
