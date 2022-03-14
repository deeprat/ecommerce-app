package com.ecommerce.app.payload.response;

import java.util.List;

import lombok.Data;

@Data
public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String id;
	private String firstname;
	private String lastname;
	private String email;
	private List<String> roles;

	public JwtResponse(String accessToken, String id, String email, String firstname, String lastname,
			List<String> roles) {
		this.token = accessToken;
		this.id = id;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;
		this.roles = roles;
	}
}
