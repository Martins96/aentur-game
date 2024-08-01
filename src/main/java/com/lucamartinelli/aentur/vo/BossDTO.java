package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Objects;

import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;

@RegisterForReflection
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
	
	public BossDTO clone() {
		return new BossDTO(this.id, this.location, this.name, this.description, this.actions);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(actions);
		result = prime * result + Objects.hash(description, id, location, name);
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BossDTO other = (BossDTO) obj;
		return Arrays.equals(actions, other.actions) && Objects.equals(description, other.description) && id == other.id
				&& Objects.equals(location, other.location) && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "BossDTO [id=" + id + ", location=" + location + ", name=" + name + ", description=" + description
				+ ", actions=" + Arrays.toString(actions) + "]";
	}
	
	public JsonObject toJsonObject() {
		JsonArray actionArr = Json.createArrayBuilder(Arrays.asList(this.actions)).build();
		return Json.createObjectBuilder()
				.add("id", this.id)
				.add("location", this.location)
				.add("name", this.name)
				.add("description", this.description)
				.add("actions", actionArr)
				.build();
	}
	
	public String toJson() {
		return toJsonObject().toString();
	}
	
}
