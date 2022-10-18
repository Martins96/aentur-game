package com.lucamartinelli.aentur.services;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;

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
