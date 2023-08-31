package com.lucamartinelli.aentur.services;

import java.util.Map;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.CompletationListDB;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/completation")
@ApplicationScoped
public class Completation {
	
	@Inject
	CompletationListDB completationDB;
	@Inject
	Logger log;
	
	@GET
	@Path("/is-game-completed")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean isCompleted() {
		return completationDB.areAllCompeted();
	}
	
	@PUT
	@Path("/set-completed/{location}")
	public void setCompleted(@PathParam("location") final String loc) {
		switch (loc) {
		case "darkwood":
			completationDB.setDarkwoodCompleted();
			break;
		case "iceland":
			completationDB.setIcelandCompleted();
			break;
		case "frozenmountains":
			completationDB.setFrozenmountainsCompleted();
			break;
		case "crimsoncave":
			completationDB.setCrimsoncaveCompleted();
			break;
		case "flamevolcano":
			completationDB.setFlamevolcanoCompleted();
			break;
		case "hottendesert":
			completationDB.setHottendesertCompleted();
			break;

		default:
			log.warn("Cannot manage the location " + loc);
			break;
		}
	}
	
	@GET
	@Path("/list")
	@Produces(MediaType.APPLICATION_JSON)
	public Map<String, Boolean> getLocationList() {
		return completationDB.getList();
	}
	
	
}
