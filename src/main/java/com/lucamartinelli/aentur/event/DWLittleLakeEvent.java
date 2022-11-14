package com.lucamartinelli.aentur.event;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import javax.ws.rs.core.Response;

import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;


@Named("event-dw-1")
@ApplicationScoped
public class DWLittleLakeEvent implements EventAction {
	
	private final EventDTO event = new EventDTO("event-dw-1", 
			"In mezzo al bosco trovi un piccolo laghetto, da un lato una fonte"
			+ " sgorga dalle rocce e fa scivolare l'acqua dentro alla pozza.<br/>"
			+ "L'acqua del lago sembra calma e limpida, il silenzio del posto e' quasi spaventoso.<br/>"
			+ "Cosa vuoi fare?", 
			new String[] {"Ignora e vai avanti", "Bevi dalla sorgente", "Guarda il fondo e cerca oggetti"});

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
			return Response.ok(drinkAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(searchAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
		
	}
	
	private String ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 4) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				return "Decidi di andartene, ma appena metti un piede tra le foglie scatta una piccola trappola "
						+ "per orsi che ti ferisce al piede.";
			}
			return "Appena lasci la zona senti strani rumori provvenire dalle rocce della sorgente, rapidamente "
					+ "te ne vai";
		} else {
			return "Decidi di ignorare la pozza e lasci alla natura quel posto apparentemente rilassante";
		}
		
	}

	private String drinkAction(int rollD100, int rollD12) {
		if (rollD12 < 7) {
			if (!percentTest(rollD100/2)) {
				adventureDB.decreasePlayerHealth();
				return "Stai per bere dalla sorgente, quando un grosso granchio della sabbia che si era"
						+ " mimetizzato fra le rocce ti colpisce con la chela e ti procura una ferita.";
			} else {
				return "Avvicinandoti alla sorgente vedi dei piccoli movimenti tra le rocce, capisci subito "
						+ "che il posto e' un nido di granchi della sabbia. Indietreggi e ignori la sorgente "
						+ "pericolosa.";
			}
		} else if (rollD12 < 12) {
			if (rollD100 < 11) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				return "Bevi l'acqua della sorgente e a poco a poco inizi a sentirti debole, la sorgente "
						+ "e' maledetta e inizi a vomitare. Subisci una ferita e il tuo corpo e' debole.<br/>"
						+ "-Nuovo effetto attivo-";
			} else if (!percentTest(rollD100 + 10)) {
				adventureDB.decreasePlayerHealth();
				return "Dopo aver bevuto senti girare la testa, la fonte e' avvelenata e subisci un danno";
			} else {
				adventureDB.increasePlayerHealth();
				return "Bevi dell'acqua fresca e incontaminata, questa breve pausa ti ha consentito di tirare "
						+ "il fiato per un momento, ti curi di una ferita";
			}
		} else {
			adventureDB.increasePlayerHealth();
			adventureDB.increasePlayerHealth();
			eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
			return "La fonte sembra magica, appena bevi senti la forza scorrere dentro di te, la tua pelle"
					+ " diventa piu' resistente e le ferite si rimarginano -Nuovo effetto attivo-";
		}
	}

	private String searchAction(int rollD100, int rollD12) {
		if (rollD12 < 5) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				return "Un grosso pesce salta fuori dall'acqua appena metti il muso sopra. Con dei denti affilati "
						+ "ti provoca una ferita";
			} else {
				return "Cerchi sotto la superficie dell'acqua, quando un grosso pesce salta fuori e cerca di morderti. "
						+ "Con riflessi pronti schivi il mostro e spaventato, ma incolume, te ne vai";
			}
		} else if (rollD12 < 12) {
			if (rollD100 < 40) {
				return "Cerchi nel lago, ma trovi solo sabbia. Delusa, te ne vai";
			} else {
				if (!percentTest(rollD100/2)) {
					final int gold = getRandomInt(6) + 1;
					playerInventoryDB.addGold(gold);
					return "Vedi qualcosa brillare sul fondo del lago, sono monete d'oro. Metti in tasca "
							+ gold + " monete.";
				} else {
					final RewardDTO reward = rewardEJB.getReward(1);
					playerInventoryDB.addItems(reward.getItem());
					if (!percentTest(rollD100)) {
						adventureDB.decreasePlayerHealth();
						return "Trovi nel lago un vecchio oggetto, ma quando lo sollevi dall'acqua scopri che era "
								+ "una copertura per un grosso granchio della sabbia che ti colpisce. Nonostante il danno"
								+ " ricevi comunque un nuovo oggetto: " + reward.getItem().getName();
					} else {
						return "Cercando nel lago trovi qualcosa abbandonato da tempo, lo sollevi dall'acqua e"
								+ " ricevi un nuovo oggetto: " + reward.getItem().getName();
					}
				}
			}
		} else {
			final RewardDTO reward = rewardEJB.getReward(1);
			playerInventoryDB.addItems(reward.getItem());
			return "Noti subito qualcosa sotterrato nella sabbia dentro al lago, lo sollevi dall'acqua e"
					+ " ricevi un nuovo oggetto: " + reward.getItem().getName();
		}
	}

}
