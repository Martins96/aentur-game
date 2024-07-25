package com.lucamartinelli.aentur.vo;

import java.util.Objects;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class EventResponseVO {
	
	private String eventResult;
	private String imageResultName;
	
	public EventResponseVO() {
	}

	public EventResponseVO(String eventResult, String imageResultName) {
		super();
		this.eventResult = eventResult;
		this.imageResultName = imageResultName;
	}

	public String getEventResult() {
		return eventResult;
	}
	public void setEventResult(String eventResult) {
		this.eventResult = eventResult;
	}

	public String getImageResultName() {
		return imageResultName;
	}
	public void setImageResultName(String imageResultName) {
		this.imageResultName = imageResultName;
	}

	@Override
	public int hashCode() {
		return Objects.hash(eventResult, imageResultName);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EventResponseVO other = (EventResponseVO) obj;
		return Objects.equals(eventResult, other.eventResult) && Objects.equals(imageResultName, other.imageResultName);
	}

	@Override
	public String toString() {
		return "EventResponseVO [eventResult=" + eventResult + ", imageResultName=" + imageResultName + "]";
	}
	
	public JsonObject toJsonObject() {
		return Json.createObjectBuilder()
				.add("eventResult", this.eventResult)
				.add("imageResultName", this.imageResultName)
				.build();
	}
	
	
}
