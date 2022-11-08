package com.lucamartinelli.aentur.services;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Instance;
import javax.enterprise.inject.literal.NamedLiteral;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.persistence.EventEffectDB;
import com.lucamartinelli.aentur.persistence.EventListDB;
import com.lucamartinelli.aentur.vo.EventChoiceDTO;
import com.lucamartinelli.aentur.vo.EventDTO;

import static com.lucamartinelli.aentur.persistence.LocationSigleListDB.locationSigle;

import java.util.Random;

@ApplicationScoped
@Path("event")
public class Event {
	
	@Inject
	Logger log;
	
	@Inject
	EventEffectDB eventEffectDB;
	
	@Inject
	Instance<EventAction> eventActionCDI;
	
	
	@Path("active-effect")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getActiveEffect() {
		final String activeEff = eventEffectDB.getActiveEffect();
		if (activeEff == null || activeEff.isEmpty()) {
			return Response.status(204).build();
		} else {
			return Response.ok(activeEff).build();
		}
	}
	
	@Path("get-random-event/{location}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public EventDTO getActiveEffect(@PathParam("location") String location) {
		final String locSigle = locationSigle(location);
		log.debug("Selected location for event " + locSigle);
		if (locSigle == null)
			return null;
		
		final Random rand = new Random();
		final int[] eventIDs = EventListDB.eventList.get(locSigle);
		if (eventIDs == null || eventIDs.length == 0)
			return null;
		
		final int eventIndex = rand.nextInt(eventIDs.length);
		final int eventID = eventIDs[eventIndex];
		log.debugf("Selected id for event " + eventID);
		final String qualifierName = "event-"+locSigle+"-"+eventID;
		log.debugf("Searching qualifier named [%s]", qualifierName);
		
		// Load dynamically different beans selected by @Named annotation
		// All beans implements the same interface
		EventAction eventAction = eventActionCDI.select(NamedLiteral.of(qualifierName)).get();

		return eventAction.getWelcomeMessage();
	}
	
	@Path("apply-effect")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response applyEffect(EventChoiceDTO playerChoice) {
		if (playerChoice == null ||
				playerChoice.getEventID() == null ||
				playerChoice.getEventID().isEmpty() ||
				playerChoice.getRollD12() > 12 ||
				playerChoice.getRollD100() > 100 ||
				playerChoice.getRollD12() < 1 ||
				playerChoice.getRollD100() < 1 ||
				playerChoice.getChoice() < 1) {
			log.warn("Input is not valid: " + playerChoice);
			return Response.status(400, "Invalid input").build();
		}
		
		final Instance<EventAction> eventActionInstance = eventActionCDI
				.select(NamedLiteral.of(playerChoice.getEventID()));
		
		if (eventActionInstance.isUnsatisfied()) {
			return Response.status(400, "Invalid ID " + playerChoice.getEventID()).build();
		}
		
		return eventActionInstance.get()
				.apply(playerChoice.getChoice(), playerChoice.getRollD100(), playerChoice.getRollD12());
	}
	
	
	
}
