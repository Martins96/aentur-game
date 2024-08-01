package com.lucamartinelli.aentur.vo;

import java.util.Objects;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class EventChoiceDTO {
	
	private String location;
	private String eventID;
	private int choice;
	private int rollD100;
	private int rollD12;
	
	public EventChoiceDTO() {
		
	}

	public EventChoiceDTO(String location, String eventID, int choice, int rollD100, int rollD12) {
		super();
		this.location = location;
		this.eventID = eventID;
		this.choice = choice;
		this.rollD100 = rollD100;
		this.rollD12 = rollD12;
	}

	public String getEventID() {
		return eventID;
	}
	public void setEventID(String eventID) {
		this.eventID = eventID;
	}

	public int getChoice() {
		return choice;
	}
	public void setChoice(int choice) {
		this.choice = choice;
	}

	public int getRollD100() {
		return rollD100;
	}
	public void setRollD100(int rollD100) {
		this.rollD100 = rollD100;
	}

	public int getRollD12() {
		return rollD12;
	}
	public void setRollD12(int rollD12) {
		this.rollD12 = rollD12;
	}

	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "EventChoiceDTO [location=" + location + ", eventID=" + eventID + ", choice=" + choice + ", rollD100="
				+ rollD100 + ", rollD12=" + rollD12 + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(choice, eventID, location, rollD100, rollD12);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EventChoiceDTO other = (EventChoiceDTO) obj;
		return choice == other.choice && eventID == other.eventID && Objects.equals(location, other.location)
				&& rollD100 == other.rollD100 && rollD12 == other.rollD12;
	}
	
	
	
	
}
