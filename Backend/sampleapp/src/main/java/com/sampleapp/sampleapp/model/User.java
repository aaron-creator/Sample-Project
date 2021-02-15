package com.sampleapp.sampleapp.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "users")

public class User {

  private String name;
  private String dob;
  private String classes;
  private String div;
  private String gender;

public String getName() {
	return name;
}
public String getDob() {
	return dob;
}
public String getClasses() {
	return classes;
}
public String getDiv() {
	return div;
}
public String getGender() {
	return gender;
}


}
