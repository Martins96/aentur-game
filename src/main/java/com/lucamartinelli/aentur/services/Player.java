package com.lucamartinelli.aentur.services;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.PlayerEJB;
import com.lucamartinelli.aentur.languagecontent.ResolveContentsUtils;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;
import com.lucamartinelli.aentur.vo.StepDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("player")
@ApplicationScoped
public class Player {
	
	@Inject
	PlayerInventoryDB playerInventory;
	@Inject
	AdventureStatsDB adventureStats;
	
	@Inject
	PlayerEJB playerEJB;
	
	@Inject
	Logger log;
	
	@Path("equiped-weapon")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getEquipedWeapon() {
		final ItemDTO item = playerInventory.getEquipedWeapon();
		log.debug("Player weapon equiped: " + item);
		return ResolveContentsUtils.resolveLabels(item);
	}
	
	@Path("equiped-armor")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getEquipedArmor() {
		final ItemDTO item = playerInventory.getEquipedArmor();
		log.debug("Player weapon equiped: " + item);
		return ResolveContentsUtils.resolveLabels(item);
	}
	
	@Path("equiped-talisman")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getEquipedTalisman() {
		return ResolveContentsUtils.resolveLabels(playerInventory.getEquipedTalisman());
	}
	
	@Path("inventory")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO[] getInventory() {
		return playerInventory.getItems().stream()
				.map(i -> ResolveContentsUtils.resolveLabels(i))
				.toArray(size -> new ItemDTO[size]);
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
