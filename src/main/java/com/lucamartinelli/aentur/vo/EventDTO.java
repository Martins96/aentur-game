package com.lucamartinelli.aentur.vo;

import java.util.Arrays;
import java.util.Objects;

public class EventDTO {
	
	private String eventID;
	private String eventMessage;
	private String[] playerChoices;
	
	public EventDTO() {
		
	}

	public EventDTO(String eventID, String eventMessage, String[] playerChoices) {
		super();
		this.eventID = eventID;
		this.eventMessage = eventMessage;
		this.playerChoices = playerChoices;
	}

	public String getEventID() {
		return eventID;
	}

	public void setEventID(String eventID) {
		this.eventID = eventID;
	}
	public String getEventMessage() {
		return eventMessage;
	}

	public void setEventMessage(String eventMessage) {
		this.eventMessage = eventMessage;
	}

	public String[] getPlayerChoices() {
		return playerChoices;
	}
	public void setPlayerChoices(String[] playerChoices) {
		this.playerChoices = playerChoices;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(playerChoices);
		result = prime * result + Objects.hash(eventID, eventMessage);
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
		EventDTO other = (EventDTO) obj;
		return eventID == other.eventID && Objects.equals(eventMessage, other.eventMessage)
				&& Arrays.equals(playerChoices, other.playerChoices);
	}

	@Override
	public String toString() {
		return "EventDTO [eventID=" + eventID + ", eventMessage=" + eventMessage + ", playerChoices="
				+ Arrays.toString(playerChoices) + "]";
	}

	
}
