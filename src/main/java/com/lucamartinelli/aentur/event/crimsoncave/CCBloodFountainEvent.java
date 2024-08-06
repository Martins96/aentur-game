package com.lucamartinelli.aentur.event.crimsoncave;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;


@Named("event-cc-19")
@ApplicationScoped
public class CCBloodFountainEvent implements EventAction {
	
	private final EventDTO event = new EventDTO("event-cc-19", 
			"Dopo un piccolo cunicolo ti trovi in una stanza creata nella roccia. Al centro della stanza"
			+ "si trova una fontana. Lo stile mestoso &egrave; davvero interessante, ma la cosa ancor pi&ugrave;"
			+ "interessante e strana &egrave; che da questa zampilla un liquido rosso.<br/>"
			+ "Vuoi provare a bere dalla fonte?", 
			new String[] {"Ignora e vai avanti", "Bevi dalla fontana"});

	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return ImmutablePair.of(ignoreAction(rollD100, rollD12), null);
		case 2:
			return ImmutablePair.of(drinkAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
		
	}
	
	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (!percentTest(rollD100 + 20)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-19-ignore-1";
				eventResultMessage = "Decidi di ignorare la fontana, ma appena la oltrepassi senti che questa inizia a bollire.<br/>"
						+ "Ti volti per vedere cosa sta succedendo e di colpo vedi una demone che ti afferra e ti "
						+ "trascina nella fontana. Lotti con tutte le tue forze per liberarti e alla fine riesci ad "
						+ "uscire, anche se hai subito delle ferite,";
			} else {
				eventResultImage = "event-cc-19-ignore-2";
				eventResultMessage = "Appena lasci la zona senti strani rumori dal liquido rosso, &egrave; come se stesse ribollendo. In men"
						+ " che non si dica hai lasciato la stanza e tutto quello che stava accadendo l&agrave;";
			}
		} else {
			eventResultImage = "event-cc-19-ignore-2";
			eventResultMessage = "Decidi di ignorare la fontana, il colore non ti ispirava niente di buono";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
		
	}

	private EventResponseVO drinkAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 7) {
			if (!percentTest(rollD100/2)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-19-drink-1";
				eventResultMessage = "Stai per bere dalla fontana, quando un'ombra si forma nel liquido, non riesci neanche ad "
						+ "indietreggiare che vieni colpito da una magia oscura. Subisci una ferita";
			} else {
				eventResultImage = "event-cc-19-ignore-2";
				eventResultMessage = "Bevi dalla fontana... non sembra succedere nulla... Il non succede niente al gusto ciliegia";
			}
		} else if (rollD12 < 12) {
			if (!percentTest(rollD100 + rollD12)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-cc-19-drink-2";
				eventResultMessage = "Bevi l'acqua della fonte e a poco a poco inizi a sentirti debole, la sorgente "
						+ "e' maledetta da una magia vapirica. Subisci una ferita e il tuo corpo e' debole.<br/>"
						+ "-Nuovo effetto attivo-";
			} else if (!percentTest(rollD100 + 10)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-19-drink-3";
				eventResultMessage = "Dopo aver bevuto senti girare la testa, la fontana &egrave; avvelenata e subisci un danno";
			} else {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-cc-19-drink-4";
				eventResultMessage = "Bevi il liquido della fontana, &egrave; fresco e magico, questa breve pausa ti ha consentito di tirare "
						+ "il fiato per un momento, ti curi di una ferita";
			}
		} else {
			adventureDB.increasePlayerHealth();
			adventureDB.increasePlayerHealth();
			eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
			eventResultImage = "event-cc-19-drink-5";
			eventResultMessage = "La fontana sembra magica, appena bevi senti la forza scorrere dentro di te, la tua pelle"
					+ " diventa pi&ugrave; resistente e le ferite si rimarginano <br /> -Nuovo effetto attivo-";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
