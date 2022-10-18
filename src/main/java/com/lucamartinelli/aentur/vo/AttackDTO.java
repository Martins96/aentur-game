package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

public class AttackDTO implements Serializable {
	
	private static final long serialVersionUID = 1116102902132800140L;
	
	private int id;
	private String name;
	private String effect;
	private int difficulty;
	private String[] category;
	
	public AttackDTO() {
	}

	public AttackDTO(int id, String name, String effect, int difficulty, String[] category) {
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
	
	
	
}
