package com.lucamartinelli.aentur.services;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.CompletationListDB;

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
	
	
}
