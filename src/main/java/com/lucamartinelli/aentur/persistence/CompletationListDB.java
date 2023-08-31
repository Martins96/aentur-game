package com.lucamartinelli.aentur.persistence;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import jakarta.inject.Singleton;

@Singleton
public class CompletationListDB implements Serializable {
	
	
	private static final long serialVersionUID = -8887058626894529464L;

	private boolean darkwood = false;
	private boolean iceland = false;
	private boolean frozenmountains = false;
	private boolean flamevolcano = false;
	private boolean crimsoncave = false;
	private boolean hottendesert = false;
	
	private final static String DARKWOOD_NAME = "darkwood";
	private final static String ICELAND_NAME = "iceland";
	private final static String FROZENMOUNTAINS_NAME = "frozenmountains";
	private final static String FLAMEVOLCANO_NAME = "flamevolcano";
	private final static String CRIMSONCAVE_NAME = "crimsoncave";
	private final static String HOTTERDESERT_NAME = "hottendesert";
	
	public CompletationListDB() {
	}
	
	public void setComplete(final String location) {
		if (location == null)
			return;
			
		switch (location.toLowerCase()) {
		case DARKWOOD_NAME:
			darkwood = true;
			return;
		case ICELAND_NAME:
			iceland = true;
			return;
		case FROZENMOUNTAINS_NAME:
			frozenmountains = true;
			return;
		case FLAMEVOLCANO_NAME:
			flamevolcano = true;
			return;
		case CRIMSONCAVE_NAME:
			crimsoncave = true;
			return;
		case HOTTERDESERT_NAME:
			hottendesert = true;
			return;
			
		default:
			return;
		}
	}
	
	public void setUncomplete(final String location) {
		if (location == null)
			return;
			
		switch (location.toLowerCase()) {
		case DARKWOOD_NAME:
			darkwood = false;
			return;
		case ICELAND_NAME:
			iceland = false;
			return;
		case FROZENMOUNTAINS_NAME:
			frozenmountains = false;
			return;
		case FLAMEVOLCANO_NAME:
			flamevolcano = false;
			return;
		case CRIMSONCAVE_NAME:
			crimsoncave = false;
			return;
		case HOTTERDESERT_NAME:
			hottendesert = false;
			return;
			
		default:
			return;
		}
	}

	public boolean isDarkwoodCompleted() {
		return darkwood;
	}
	public void setDarkwoodCompleted() {
		this.darkwood = true;
	}
	public void setDarkwoodUnompleted() {
		this.darkwood = false;
	}

	public boolean isIcelandCompleted() {
		return iceland;
	}
	public void setIcelandCompleted() {
		this.iceland = true;
	}
	public void setIcelandUncompleted() {
		this.iceland = false;
	}

	public boolean isFrozenmountainsCompleted() {
		return frozenmountains;
	}
	public void setFrozenmountainsCompleted() {
		this.frozenmountains = true;
	}
	public void setFrozenmountainsUnompleted() {
		this.frozenmountains = false;
	}
	
	public boolean isFlamevolcanoCompleted() {
		return flamevolcano;
	}
	public void setFlamevolcanoCompleted() {
		this.flamevolcano = true;
	}
	public void setFlamevolcanoUncompleted() {
		this.flamevolcano = false;
	}

	public boolean isCrimsoncaveCompleted() {
		return crimsoncave;
	}
	public void setCrimsoncaveCompleted() {
		this.crimsoncave = true;
	}
	public void setCrimsoncaveUncompleted() {
		this.crimsoncave = false;
	}

	public boolean isHottendesertCompleted() {
		return hottendesert;
	}
	public void setHottendesertCompleted() {
		this.hottendesert = true;
	}
	public void setHottendesertUncompleted() {
		this.hottendesert = false;
	}
	
	
	public boolean areAllCompeted() {
		return this.darkwood  &&
				this.iceland  &&
				this.frozenmountains  &&
				this.crimsoncave  &&
				this.flamevolcano  &&
				this.hottendesert;
	}
	
	public Map<String, Boolean> getList() {
		final Map<String, Boolean> locations = new HashMap<>();
		locations.put(DARKWOOD_NAME, this.darkwood);
		locations.put(ICELAND_NAME, this.iceland);
		locations.put(FROZENMOUNTAINS_NAME, this.frozenmountains);
		locations.put(CRIMSONCAVE_NAME, this.crimsoncave);
		locations.put(FLAMEVOLCANO_NAME, this.flamevolcano);
		locations.put(HOTTERDESERT_NAME, this.hottendesert);
		return locations;
	}
	
}
