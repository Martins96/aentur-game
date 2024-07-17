package com.lucamartinelli.aentur.services;

import java.io.IOException;
import java.util.Optional;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.LabelTextContentEJB;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.spi.CDI;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.client.Entity;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@ApplicationScoped
@Path("/content")
public class LabelTextContentsService {
	
	@Inject
	Logger log;
	
	@Inject
	LabelTextContentEJB ltcEJB;
	
	@GET
	@Path("/get")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getContentAPI(@QueryParam("key") final String key, @QueryParam("lang") final String lang) {
		
		log.debugf("Retriving content with key '%s' on language '%s'", key, lang);
		try {
			final String label = getContent(key, Optional.ofNullable(lang));
			
			if (label == null || label.isEmpty()) {
				return Response.status(400).build();
			}
			
			return Response.ok(Entity.text(label)).build();
		} catch (final IOException e) {
			log.errorf("Error reading properties file: %s", e.getMessage());
			return Response.serverError().entity(Entity.text(e.getMessage())).build();
		} catch (final Exception e) {
			log.errorf(e, "Exception retrieving content %s ", key);
			return Response.serverError().entity(Entity.text(e.getMessage())).build();
		}
	}
	
	@GET
	@Path("/setlanguage/{lang}")
	public void setLanguage(@PathParam("lang") String lang) {
		this.ltcEJB.setLanguage(lang);
	}
	
	
	public static String getContent(final String key, final Optional<String> lang) throws IOException {
		final LabelTextContentEJB ltcEJB = CDI.current().select(LabelTextContentEJB.class).get();
		return ltcEJB.getContent(key, lang);
	}
	
	public static String getContent(final String key) throws IOException {
		return getContent(key, Optional.empty());
	}
	
	
	
}
