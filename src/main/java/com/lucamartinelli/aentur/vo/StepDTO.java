package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

public class StepDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private int number;
	private String type;
	
	public StepDTO() {
		// TODO Auto-generated constructor stub
	}

	public StepDTO(int number, String type) {
		super();
		this.number = number;
		this.type = type;
	}

	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}

	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
	

}
