package com.lucamartinelli.aentur.services;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@ApplicationScoped
@Path("/adventure")
public class AdventureStats {
	
	@Inject
	AdventureStatsDB adventureStats;
	
	@GET
	@Path("/player-health")
	@Produces(MediaType.APPLICATION_JSON)
	public int getPlayerHealth() {
		return adventureStats.getPlayerHealth();
	}
	
	@GET
	@Path("/monster-health")
	@Produces(MediaType.APPLICATION_JSON)
	public int getMonsterHealth() {
		return adventureStats.getCurrentMonsterHealth();
	}
	
	@GET
	@Path("/boss-health")
	@Produces(MediaType.APPLICATION_JSON)
	public int getBossHealth() {
		return adventureStats.getCurrentBossHealth();
	}
	
	@GET
	@Path("/isfailed")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean isFailed() {
		return adventureStats.getPlayerHealth() < 1;
	}
	
	@GET
	@Path("/issuccess")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean isSuccess() {
		return adventureStats.getCurrentMonsterHealth() < 1;
	}
	
}
