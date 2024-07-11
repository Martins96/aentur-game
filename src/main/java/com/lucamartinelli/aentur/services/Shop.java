package com.lucamartinelli.aentur.services;

import com.lucamartinelli.aentur.ejb.ShopEJB;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/shop")
@ApplicationScoped
public class Shop {
	
	@Inject
	ShopEJB shopEJB;
	
	@POST
	@Path("/sell/{id}")
	public Response sellItem(@PathParam("id") String id) {
		final boolean result = shopEJB.sellItem(id);
		
		if (result)
			return Response.status(204).build();
		else
			return Response.status(503).entity("Error on sell equipment").build();
		
	}
	
	@POST
	@Path("/buy/{id}")
	public Response buyItem(@PathParam("id") String id) {
		final boolean result = shopEJB.buyItem(id);
		
		if (result)
			return Response.status(204).build();
		else
			return Response.status(503).entity("Error on buy equipment").build();
		
	}
	
	@GET
	@Path("/items")
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO[] items() {
		return shopEJB.merchantItems().toArray(new ItemDTO[0]);
		
	}

}
