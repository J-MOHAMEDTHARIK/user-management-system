package com.backend.fullstackbackend.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name="users")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	@Column(name = "phone_number")
	private String phone;
	
}
