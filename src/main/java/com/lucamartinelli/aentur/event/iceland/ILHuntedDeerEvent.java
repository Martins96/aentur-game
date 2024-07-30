package com.lucamartinelli.aentur.event.iceland;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-il-10")
@ApplicationScoped
public class ILHuntedDeerEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-il-10", 
			"Durante il cammino ti imbatti in un cervo ferito e morente, diverse frecce lo han ferito ed ora e' "
			+ "in fin di vita", 
			new String[] {"Ignora l'animale", "Cura l'animale", "Finisci l'animale e prendi la carne"});
	
	
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
			return ImmutablePair.of(cureAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(killAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (percentTest(rollD100+rollD12)) {
			eventResultImage = "event-il-10-ignore-1";
			eventResultMessage = "Ignori l'animale prima che arrivi chi o cosa gli aveva lanciato quelle frecce";
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-10-ignore-1";
				eventResultMessage = "Le grida del cervo diventano sempre pi&ugrave; deboli man mano che te ne vai, un po' scosso cerchi "
						+ "di dimenticare in fretta l'accaduto";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e i <b>test arma</b> sono diminuiti di 1");
				eventResultImage = "event-il-10-ignore-1";
				eventResultMessage = "Il grido di sofferenza di quel cervo ti rimane impresso nella mente, non riesci a darti "
						+ "pace e senti la tua forza di volont&agrave; venir meno.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO cureAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (percentTest(rollD12*8+5)) {
			if (percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono aumentati di 1");
				eventResultImage = "event-il-10-cure-1";
				eventResultMessage = "Curi il cervo con abilit&agrave;. L'animale si riprende velocemente e ti guarda per un lungo istante "
						+ "prima di andarsene. Senti nel cuore come una benedizione, la forza e la velocit&agrave; del cervo "
						+ "ti hanno colpito<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				eventResultImage = "event-il-10-cure-2";
				eventResultMessage = "Curi il cervo al meglio delle tue capacit&agrave;, questo si riprende velocemente dalle ferite medicate "
						+ "e non appena ha un po' di forza si mette in piedi. Con rapidit&agrave; fugge lontano e ti lascia "
						+ "indietro. Beh che ti aspettavi? Un grazie da un cervo?";
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-10-cure-3";
				eventResultMessage = "Tenti di curare il cervo, ma le ferite sono troppo gravi e le tue capacit&agrave; non sono abbastanza "
						+ "per salvarlo.";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-il-10-cure-4";
				eventResultMessage = "Mentre ti appresti a curare il cervo, premi su una ferita per bloccare l'emoragia. Quest'azione "
						+ "per&ograve; &egrave; dolorosa e il cervo d'istinto ti tira una zoccolata in petto che ti ferisce. "
						+ "Dopodiche scappa con le poche forze rimanenti";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO killAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (percentTest(rollD100+rollD12)) {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-il-10-cook-1";
				eventResultMessage = "Macelli con sucesso il cervo e ne ricavi della carne che cucini subito. Recuperi le forze";
			} else {
				eventResultImage = "event-il-10-cook-2";
				eventResultMessage = "Tenti di macellare il cervo, ma non hai le capacit&agrave; e conoscenze giuste per farlo, ricavi "
						+ "poca carne e di scarsa qualit&agrave;. Tenti di cucinarla ma met&agrave; brucia e met&agrave; rimane non "
						+ "cotta. Abbandoni l'idea di fare uno spuntino";
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-10-cook-3";
				eventResultMessage = "Appena inizi a macellare il cervo senti dei versi in lontananza, con rapidit&agrave; ti nascondi "
						+ "e poco dopo arrivano dei tipi loschi vestiti da tribali. Prendono il cervo e lo portano "
						+ "via";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-il-10-cook-4";
				eventResultMessage = "Mentre stai macellando il cervo, una freccia ti colpisce ad una gamba, senti un veleno "
						+ "scorrere nel sangue e vedi dei tizi vestiti da tribali correre verso di te, con tutta "
						+ "la tua forza corri via e ti nascondi. Il veleno per&ograve; fa effetto e ti rende sempre "
						+ "piu' debole<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
