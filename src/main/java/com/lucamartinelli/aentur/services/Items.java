package com.lucamartinelli.aentur.services;

import java.io.IOException;
import java.util.Optional;

import org.apache.commons.lang3.math.NumberUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

@Path("/items")
@ApplicationScoped
public class Items {
	
	@Inject
	Logger log;
	
	@Context
	HttpServletResponse response;
	
	@Path("")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO[] getItems() {
		return ItemsListDB.ITEMS;
	}
	
	@Path("/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ItemDTO getItem(@PathParam("id") String idItem) {
		if (!NumberUtils.isCreatable(idItem)) {
			log.errorf("Id %s is not a number", idItem);
			setError(400, Optional.of(String.format("Id %s must be an integer", idItem)));
			return null;
		}
		final int id = NumberUtils.toInt(idItem);
		if (ItemsListDB.ITEMS.length <= id) {
			log.errorf("Id %s is too high", idItem);
			setError(400, Optional.of(String.format("Id %s to high", idItem)));
			return null;
		}
		return ItemsListDB.ITEMS[id];
	}
	
	
	
	
	
	
	
	private void setError(int error, Optional<String> msg) {
    	try {
    		if (msg == null || msg.isEmpty())
    			response.sendError(error);
    		else
    			response.sendError(error, msg.get());
		} catch (IOException e) {
			log.error(e);
			throw new RuntimeException(e);
		}
    }
	
	
}
