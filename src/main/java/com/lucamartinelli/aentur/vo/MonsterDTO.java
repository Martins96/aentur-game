package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Objects;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;

public class MonsterDTO implements Serializable{

	private static final long serialVersionUID = 970594455387206982L;
	
	private int id;
	private String name;
	private String description;
	private int difficulty;
	private Integer[] attacks;
	private Integer[] defences;
	
	public MonsterDTO() {
	}

	public MonsterDTO(int id, String name, String description, int difficulty, Integer[] attacks, Integer[] defences) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.difficulty = difficulty;
		this.attacks = attacks;
		this.defences = defences;
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

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public int getDifficulty() {
		return difficulty;
	}
	public void setDifficulty(int difficulty) {
		this.difficulty = difficulty;
	}

	public Integer[] getAttacks() {
		return attacks;
	}
	public void setAttacks(Integer[] attacks) {
		this.attacks = attacks;
	}

	public Integer[] getDefences() {
		return defences;
	}
	public void setDefences(Integer[] defences) {
		this.defences = defences;
	}
	
	public MonsterDTO clone() {
		return new MonsterDTO(this.id, this.name, this.description, this.difficulty, 
				this.attacks, this.defences);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(attacks);
		result = prime * result + Arrays.hashCode(defences);
		result = prime * result + Objects.hash(description, difficulty, id, name);
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
		MonsterDTO other = (MonsterDTO) obj;
		return Arrays.equals(attacks, other.attacks) && Arrays.equals(defences, other.defences)
				&& Objects.equals(description, other.description) && difficulty == other.difficulty && id == other.id
				&& Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "MonsterDTO [id=" + id + ", name=" + name + ", description=" + description + ", difficulty=" + difficulty
				+ ", attacks=" + Arrays.toString(attacks) + ", defences=" + Arrays.toString(defences) + "]";
	}
	
	public String toJson() {
		return toJsonObject().toString();
	}
	
	public JsonObject toJsonObject() {
		final JsonArray atkList = Json.createArrayBuilder(Arrays.asList(attacks)).build();
		final JsonArray defList = Json.createArrayBuilder(Arrays.asList(defences)).build();
		return Json.createObjectBuilder()
				.add("id", this.id)
				.add("name", this.name)
				.add("description", this.description)
				.add("difficulty", this.difficulty)
				.add("attacks", atkList)
				.add("defences", defList)
				.build();
	}
	
}
