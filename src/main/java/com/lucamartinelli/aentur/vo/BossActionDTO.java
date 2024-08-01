package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Objects;

import com.lucamartinelli.aentur.boss.BossAction;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class BossActionDTO implements Serializable {
	
	private static final long serialVersionUID = 6725328416339449903L;

	private int id;
	private String name;
	private BossAction action;
	
	public BossActionDTO() {
	}

	public BossActionDTO(int id, String name, BossAction action) {
		super();
		this.id = id;
		this.name = name;
		this.action = action;
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

	public BossAction getAction() {
		return action;
	}
	public void setAction(BossAction action) {
		this.action = action;
	}

	@Override
	public int hashCode() {
		return Objects.hash(action, id, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BossActionDTO other = (BossActionDTO) obj;
		return Objects.equals(action, other.action) && id == other.id && Objects.equals(name, other.name);
	}

	@Override
	public String toString() {
		return "BossActionDTO [id=" + id + ", name=" + name + ", action=" + action + "]";
	}

	
	
	
	
	
	
	
}
