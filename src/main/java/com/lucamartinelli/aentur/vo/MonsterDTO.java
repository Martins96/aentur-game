package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

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
	
	

}
