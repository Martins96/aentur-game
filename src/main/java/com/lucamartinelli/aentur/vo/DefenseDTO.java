package com.lucamartinelli.aentur.vo;

import java.util.Arrays;
import java.util.Objects;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;

public class DefenseDTO {
	
	private int id;
	private String name;
	private String effect;
	private int difficulty;
	private String[] category;
	
	public DefenseDTO() {
	}

	public DefenseDTO(int id, String name, String effect, int difficulty, String[] category) {
		super();
		this.id = id;
		this.name = name;
		this.effect = effect;
		this.difficulty = difficulty;
		this.category = category;
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

	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}

	public int getDifficulty() {
		return difficulty;
	}
	public void setDifficulty(int difficulty) {
		this.difficulty = difficulty;
	}

	public String[] getCategory() {
		return category;
	}
	public void setCategory(String[] category) {
		this.category = category;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(category);
		result = prime * result + Objects.hash(difficulty, effect, id, name);
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
		DefenseDTO other = (DefenseDTO) obj;
		return Arrays.equals(category, other.category) && difficulty == other.difficulty
				&& Objects.equals(effect, other.effect) && id == other.id && Objects.equals(name, other.name);
	}
	
	public DefenseDTO clone() {
		return new DefenseDTO(this.id, this.name, this.effect, this.difficulty, this.category);
	}

	@Override
	public String toString() {
		return "DefenseDTO [id=" + id + ", name=" + name + ", effect=" + effect + ", difficulty=" + difficulty
				+ ", category=" + Arrays.toString(category) + "]";
	}
	
	public String toJson() {
		return toJsonObject().toString();
	}
	
	public JsonObject toJsonObject() {
		final JsonArray categoryJA = Json.createArrayBuilder(Arrays.asList(this.category)).build();
		return Json.createObjectBuilder()
				.add("id", this.id)
				.add("name", this.name)
				.add("effect", this.effect)
				.add("difficulty", this.difficulty)
				.add("category", categoryJA)
				.build();
	}
	
}
