package com.ecommerce.app.payload.request;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class SignupRequest {

	@NotBlank
	@Size(min = 3, max = 20)
	private String firstname;

	@NotBlank
	@Size(min = 3, max = 20)
	private String lastname;

	@NotBlank
	@Size(min = 6, max = 50)
	@Email
	private String email;

	private Set<String> roles;

	@NotBlank
	@Size(min = 6, max = 40)
	private String password;
}
