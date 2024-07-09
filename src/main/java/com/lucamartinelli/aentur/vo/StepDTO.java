package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Objects;

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

	
	@Override
	public int hashCode() {
		return Objects.hash(number, type);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		StepDTO other = (StepDTO) obj;
		return number == other.number && Objects.equals(type, other.type);
	}
	
	
	

}
