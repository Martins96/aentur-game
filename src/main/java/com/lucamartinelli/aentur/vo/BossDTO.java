package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

public class BossDTO implements Serializable {
	
	
	private static final long serialVersionUID = 1180381619080360294L;
	
	private int id;
	private String location;
	private String name;
	private String description;
	private int[] actions;
	
	public BossDTO() {
	}

	public BossDTO(int id, String location, String name, String description, int[] actions) {
		super();
		this.id = id;
		this.location = location;
		this.name = name;
		this.description = description;
		this.actions = actions;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public int[] getActions() {
		return actions;
	}
	public void setActions(int[] actions) {
		this.actions = actions;
	}
	
	
	
	
}
