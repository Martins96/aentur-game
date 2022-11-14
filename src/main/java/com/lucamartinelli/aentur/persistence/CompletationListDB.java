package com.lucamartinelli.aentur.persistence;

import javax.inject.Singleton;

@Singleton
public class CompletationListDB {
	
	
	private boolean darkwood = false;
	private boolean iceland = false;
	private boolean frozenmountains = false;
	private boolean flamevolcano = false;
	private boolean crimsoncave = false;
	private boolean hottendesert = false;
	
	
	public void setComplete(final String location) {
		if (location == null)
			return;
			
		switch (location.toLowerCase()) {
		case "darkwood":
			darkwood = true;
			return;
		case "iceland":
			iceland = true;
			return;
		case "frozenmountains":
			frozenmountains = true;
			return;
		case "flamevolcano":
			flamevolcano = true;
			return;
		case "crimsoncave":
			crimsoncave = true;
			return;
		case "hottendesert":
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
		case "darkwood":
			darkwood = false;
			return;
		case "iceland":
			iceland = false;
			return;
		case "frozenmountains":
			frozenmountains = false;
			return;
		case "flamevolcano":
			flamevolcano = false;
			return;
		case "crimsoncave":
			crimsoncave = false;
			return;
		case "hottendesert":
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
	
	
}
