package com.lucamartinelli.aentur.event.flamevolcano;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-fv-23")
@ApplicationScoped
public class FV implements EventAction {

	private final EventDTO event = new EventDTO("event-fv-23", 
			"""
			
			""",
			new String[] {"", ""});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return ImmutablePair.of(tunnelAction(rollD100, rollD12), null);
		case 2:
			return ImmutablePair.of(bridgeAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	
	private EventResponseVO tunnelAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100+rollD12)) {
				eventResultImage = "";
				eventResultMessage = "";
			} else {
				eventResultImage = "";
				eventResultMessage = "";
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (!percentTest(rollD100)) {
				if (!percentTest(rollD100+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "";
				} else {
					eventResultImage = "";
					eventResultMessage = "";
				}
			} else {
				eventResultImage = "";
				eventResultMessage = "";
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "";
				
			} else if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "";
			} else {
				eventResultImage = "";
				eventResultMessage = "";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO bridgeAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				if (percentTest((rollD100/2)+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "";
				} else {
					eventResultImage = "";
					eventResultMessage = "";
				}
			} else {
				eventResultImage = "";
				eventResultMessage = "";
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "";
			} else {
				eventResultImage = "";
				eventResultMessage = "";
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "";
			} else if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "";
			} else {
				eventResultImage = "";
				eventResultMessage = "";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
