package com.lucamartinelli.aentur.services;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.lucamartinelli.aentur.ejb.ShopEJB;
import com.lucamartinelli.aentur.vo.ItemDTO;

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
			return Response.status(503).entity("Error on equipment").build();
		
	}
	
	@POST
	@Path("/buy/{id}")
	public Response buyItem(@PathParam("id") String id) {
		final boolean result = shopEJB.buyItem(id);
		
		if (result)
			return Response.status(204).build();
		else
			return Response.status(503).entity("Error on equipment").build();
		
	}
	
	@GET
	@Path("/items")
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO[] items(@PathParam("id") String id) {
		return shopEJB.merchantItems().toArray(new ItemDTO[0]);
		
	}

}
