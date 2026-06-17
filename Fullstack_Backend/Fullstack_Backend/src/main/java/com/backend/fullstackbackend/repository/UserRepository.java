package com.backend.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.fullstackbackend.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}