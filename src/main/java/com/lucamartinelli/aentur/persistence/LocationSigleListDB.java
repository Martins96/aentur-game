package com.lucamartinelli.aentur.persistence;

public class LocationSigleListDB {
	
	
	public static String locationSigle(String location) {
		switch (location) {
		case "darkwood":
			return "dw";
		case "iceland":
			return "il";
		case "frozenmountains":
			return "fm";
		case "flamevolcano":
			return "fv";
		case "crimsoncave":
			return "cc";
		case "hottendesert":
			return "hd";
			
		default:
			return null;
		}
	}
	
	
}
