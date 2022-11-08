package com.lucamartinelli.aentur.persistence;

import java.io.Serializable;

import javax.inject.Singleton;

@Singleton
public class EventEffectDB implements Serializable {

	private static final long serialVersionUID = -572455777800276381L;
	
	private String activeEffect;

	public EventEffectDB() {
		
	}
	
	public String getActiveEffect() {
		return activeEffect;
	}
	public void setActiveEffect(String activeEffect) {
		this.activeEffect = activeEffect;
	}
	
	
	
	
	
	
	
	
	public void reset() {
		this.activeEffect = null;
	}
	
}
