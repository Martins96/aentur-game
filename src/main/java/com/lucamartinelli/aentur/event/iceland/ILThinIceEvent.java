package com.lucamartinelli.aentur.event.iceland;

import com.lucamartinelli.aentur.event.EventActionOld;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-il-9")
@ApplicationScoped
public class ILThinIceEvent implements EventActionOld {

	private final EventDTO event = new EventDTO("event-il-9", 
			"Mentre cammini nelle lande gelate senti uno scricchiolio provvenire dai tuoi piedi. Ti accorgi di essere "
			+ "su una lastra ghiacciata troppo sottile che inizia a incrinarsi, come affronti la situazione?", 
			new String[] {"Corri", "Procedi piano", "Abbandona un oggetto"});
	
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(runAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(slowAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(loseItemAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object runAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 8) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-9-run-1";
				eventResultMessage = "Breve, ma intenso? Beh con fortuna riesci a passare la zona ghiacciata velocemente";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-il-9-run-2";
				eventResultMessage = "Corri, ma dopo 2 passi il ghiaccio si rompe e sprofondi nelle acque gelide di quel fiume. "
						+ "Riesci in qualche modo a raggiungere la terra ferma, ma ti senti ferita";
			}
		} else {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-il-9-run-3";
				eventResultMessage = "Corri pi&ugrave; veloce che puoi, ma inciampi. Fortunatamente il ghiaccio non si rompe, anzi "
						+ "scivoli con poca fatica verso la fine della zona ghiacciata, e proprio l&igrave; vedi un povero "
						+ "pesce congelato in un cubetto di ghiaccio. Accendi un fuoco e cucini la fortunata 'pesca'. "
						+ "Recuperi dei punti ferita";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-il-9-run-2";
				eventResultMessage = "Corri pi&ugrave; veloce che puoi e sembra andare tutto bene, ma appena ti trovi a pochi passi dalla "
						+ "terra ferma, il ghiaccio si rompe e finisci con le gambe nell'acqua. Per fortuna non &egrave; "
						+ "profondo e ti bagni solo dalla vita in gi&ugrave;, ma il gelo si sente in tutto il corpo e "
						+ "ti rende pi&ugrave; lenta.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
		
		return eventResultMessage;
	}

	private Object slowAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 7) {
			if (percentTest(rollD100+rollD12)) {
				eventResultImage = "event-il-9-slow-1";
				eventResultMessage = "Passo dopo passo, scricchiolio dopo scricchiolio e soprattutto preghiera dopo preghiera; riesci "
						+ "a raggiungere la terra ferma senza cadere nell'acqua";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-il-9-run-2";
				eventResultMessage = "Tenti di affrontare con calma la situazione, ma il ghiaccio si rompe e "
						+ "sprofondi nelle acque gelide di quel fiume. "
						+ "Riesci in qualche modo a raggiungere la terra ferma, ma ti senti ferita";
			}
		} else {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				eventResultImage = "event-il-9-slow-2";
				eventResultMessage = "Cammini con calma per evitare di rompere il ghiaccio e sembra funzionare. In pi&ugrave; questo passo "
						+ "ti permette d'ispezionare meglio il terreno e la neve, infatti trovi un vecchio oggetto "
						+ "abbandonato da tempo: <b>" + reward.getItem() + "</b>";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-il-9-run-2";
				eventResultMessage = "Cammini lentamente e sembra andare tutto bene, ma appena ti trovi a pochi passi dalla "
						+ "terra ferma, il ghiaccio si rompe e finisci con le gambe nell'acqua. Per fortuna non &egrave; "
						+ "profondo e ti bagni solo dalla vita in gi&ugrave;, ma il gelo si sente in tutto il corpo e "
						+ "ti rende pi&ugrave; lenta.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
		
		return eventResultMessage;
	}

	private Object loseItemAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;

		eventResultImage = "event-il-9-lose-1";
		if (percentTest(rollD100+rollD12)) {
			eventResultMessage = "Abbandoni un oggetto equipaggiato in modo da diminuire il peso del tuo corpo e raggiungere la terra "
					+ "in sucurezza. Quando sei in una zona sicura pensi tristemente all'oggetto abbandonato, per&ograve; poi "
					+ "un vento lo fa scivolare sul ghiaccio fino a te. Un colpo di fortuna in questa giornata. Non "
					+ "perdi alcun oggetto";
			
			return eventResultMessage;
		}
		
		if (playerInventoryDB.getItems().size() > 0) {
			final ItemDTO item =playerInventoryDB.getItems().stream()
					.sorted((i1, i2) -> i1.getGoldValue() - i2.getGoldValue())
					.findFirst()
					.orElseGet(null);
			if (item == null) {
				eventResultMessage = "Vorresti abbandonare un oggetto o dell'oro, ma non possiedi nulla, per questo motivo sei leggero "
						+ "e riesci a raggiungere la terra senza problemi";
				return eventResultMessage;
			}
			playerInventoryDB.removeItems(item);
			eventResultMessage = "Abbandoni un oggetto per essere pi&ugrave; leggero ed evitare di rompere il ghiaccio. Quindi butti a terra "
					+ item.getName() + " e continui senza problemi. Il tuo sacrificio ti salva la pelle.";
		} else if (playerInventoryDB.getGold() > 5L) {
			playerInventoryDB.removeGold(5L);;
			eventResultMessage = "Abbandoni un po' d'oro per alleggerirti, butti a terra 5 monete e il tuo sacrificio ti consente di "
					+ "raggiungere la terra ferma";
		} else {
			eventResultMessage = "Vorresti abbandonare un oggetto o dell'oro, ma non possiedi nulla, per questo motivo sei leggero "
					+ "e riesci a raggiungere la terra senza problemi";
		}
		
		return eventResultMessage;
	}

}
