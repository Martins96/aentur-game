package com.lucamartinelli.aentur.services;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.EventEffectDB;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/active-effect")
@ApplicationScoped
public class Effect {
	
	
	@Inject
	Logger log;
	
	@Inject
	EventEffectDB effectDB;
	
	
	@Path("/get")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public String getActiveEffect() {
		return effectDB.getActiveEffect();
	}
	
	@Path("/reset")
	@GET
	@Produces(MediaType.TEXT_HTML)
	public void resetActiveEffect() {
		effectDB.reset();
	}
	
	@Path("/set")
	@POST
	@Produces(MediaType.TEXT_HTML)
	@Consumes(MediaType.TEXT_HTML)
	public void setActiveEffect(String effect) {
		effectDB.setActiveEffect(effect);
	}
	
}
