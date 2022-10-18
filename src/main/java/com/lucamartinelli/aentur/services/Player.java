package com.lucamartinelli.aentur.services;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.lucamartinelli.aentur.ejb.PlayerEJB;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;
import com.lucamartinelli.aentur.vo.StepDTO;

@Path("player")
@ApplicationScoped
public class Player {
	
	@Inject
	PlayerInventoryDB playerInventory;
	@Inject
	AdventureStatsDB adventureStats;
	
	@Inject
	PlayerEJB playerEJB;
	
	@Path("equiped-weapon")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getEquipedWeapon() {
		return playerInventory.getEquipedWeapon();
	}
	
	@Path("equiped-armor")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getEquipedArmor() {
		return playerInventory.getEquipedArmor();
	}
	
	@Path("equiped-talisman")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getEquipedTalisman() {
		return playerInventory.getEquipedTalisman();
	}
	
	@Path("inventory")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO[] getInventory() {
		return playerInventory.getItems().toArray(new ItemDTO[0]);
	}
	
	@Path("gold")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Long getGold() {
		return playerInventory.getGold();
	}
	
	@Path("equip/{id}")
	@POST
	public Response getEquip(@PathParam("id") String itemId) {
		final boolean result = playerEJB.equip(itemId);
		
		if (result)
			return Response.status(204).build();
		else
			return Response.status(503).entity("Error on equipment").build();
	}
	
	@Path("delete/{id}")
	@DELETE
	public Response deleteItem(@PathParam("id") String itemId) {
		final boolean result = playerEJB.remove(itemId);
		if (result)
			return Response.status(204).build();
		else
			return Response.status(503).entity("Error on delete").build();
	}
	
	@GET
	@Path("current-step")
	@Produces(MediaType.APPLICATION_JSON)
	public StepDTO getCurrentPathStep() {
		return adventureStats.getCurrentStep();
	}
	
	@GET
	@Path("increase-step")
	@Produces(MediaType.APPLICATION_JSON)
	public void increasePathStep() {
		adventureStats.increaseStep();
	}
	
	@GET
	@Path("decrease-health")
	@Produces(MediaType.APPLICATION_JSON)
	public void decreaseHealth() {
		adventureStats.decreasePlayerHealth();
	}
	
	@GET
	@Path("increase-health")
	@Produces(MediaType.APPLICATION_JSON)
	public void increaseHealth() {
		adventureStats.increasePlayerHealth();
	}
	
}
