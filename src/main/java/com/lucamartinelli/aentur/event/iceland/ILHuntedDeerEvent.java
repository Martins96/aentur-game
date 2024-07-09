package com.lucamartinelli.aentur.event.iceland;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

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
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(ignoreAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(cureAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(killAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (percentTest(rollD100+rollD12)) {
			return "Ignori l'animale prima che arrivi chi o cosa gli aveva lanciato quelle frecce";
		} else {
			if (percentTest(rollD100)) {
				return "Le grida del cervo diventano sempre piu' deboli man mano che te ne vai, un po' scosso cerchi "
						+ "di dimenticare in fretta l'accaduto";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e i <b>test arma</b> sono diminuiti di 1");
				return "Il grido di sofferenza di quel cervo ti rimane impresso nella mente, non riesci a darti "
						+ "pace e senti la tua forza di volonta' venir meno.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}

	private Object cureAction(int rollD100, int rollD12) {
		if (percentTest(rollD100+rollD12)) {
			if (percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono aumentati di 1");
				return "Curi il cervo con abilita'. L'animale si riprende velocemente e ti guarda per un lungo istante "
						+ "prima di andarsene. Senti nel cuore come una benedizione, la forza e la velocita' del cervo "
						+ "ti hanno colpito<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				return "Curi il cervo al meglio delle tue capacita', questo si riprende velocemente dalle ferite medicate "
						+ "e non appena ha un po' di forza si mette in piedi. Con rapidita' fugge lontano e ti lascia "
						+ "indietro. Beh che ti aspettavi? Un grazie da un cervo?";
			}
		} else {
			if (percentTest(rollD100)) {
				return "Tenti di curare il cervo, ma le ferite sono troppo gravi e le tue capacita' non sono abbastanza "
						+ "per salvarlo.";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Mentre ti appresti a curare il cervo, premi su una ferita per bloccare l'emoragia. Quest'azione "
						+ "pero' e' dolorosa e il cervo d'istinto ti tira una zoccolata in petto che ti ferisce. "
						+ "Dopodiche scappa con le poche forze rimanenti";
			}
		}
	}

	private Object killAction(int rollD100, int rollD12) {
		if (percentTest(rollD100+rollD12)) {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
				return "Macelli con sucesso il cervo e ne ricavi della carne che cucini subito. Recuperi le forze";
			} else {
				return "Tenti di macellare il cervo, ma non hai le capacita' e conoscenze giuste per farlo, ricavi "
						+ "poca carne e di scarsa qualita'. Tenti di cucinarla ma meta' brucia e meta' rimane non "
						+ "cotta. Abbandoni l'idea di fare uno spuntino";
			}
		} else {
			if (percentTest(rollD100)) {
				return "Appena inizi a macellare il cervo senti dei versi in lontananza, con rapidita' ti nascondi "
						+ "e poco dopo arrivano dei tipi loschi vestiti da tribali. Prendono il cervo e lo portano "
						+ "via";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono diminuiti di 1");
				return "Mentre stai macellando il cervo, una freccia ti colpisce ad una gamba, senti un veleno "
						+ "scorrere nel sangue e vedi dei tizi vestiti da tribali correre verso di te, con tutta "
						+ "la tua forza corri via e ti nascondi. Il veleno pero' fa effetto e ti rende sempre "
						+ "piu' debole<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}

}
