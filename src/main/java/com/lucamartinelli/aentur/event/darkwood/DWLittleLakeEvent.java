package com.lucamartinelli.aentur.event.darkwood;

import java.util.Map;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;


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
	public ImmutablePair<EventResponseVO, Map.Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return ImmutablePair.of(ignoreAction(rollD100, rollD12), null);
		case 2:
			return ImmutablePair.of(drinkAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(searchAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
		
	}
	
	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-1-ignore-1";
				eventResultMessage = "Decidi di andartene, ma appena metti un piede tra le foglie scatta una piccola trappola "
						+ "per orsi che ti ferisce al piede.";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
			eventResultImage = "event-dw-1-ignore-2";
			eventResultMessage = "Appena lasci la zona senti strani rumori provvenire dalle rocce della sorgente, rapidamente "
					+ "te ne vai";
			return new EventResponseVO(eventResultMessage, eventResultImage);
		} else {
			eventResultImage = "event-dw-1-ignore-2";
			eventResultMessage = "Decidi di ignorare la pozza e lasci alla natura quel posto apparentemente rilassante";
			return new EventResponseVO(eventResultMessage, eventResultImage);
		}
		
	}

	private EventResponseVO drinkAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 7) {
			if (!percentTest(rollD100/2)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-1-drink-1";
				eventResultMessage = "Stai per bere dalla sorgente, quando un grosso granchio della sabbia che si era"
						+ " mimetizzato fra le rocce ti colpisce con la chela e ti procura una ferita.";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				eventResultImage = "event-dw-1-drink-1";
				eventResultMessage = "Avvicinandoti alla sorgente vedi dei piccoli movimenti tra le rocce, capisci subito "
						+ "che il posto e' un nido di granchi della sabbia. Indietreggi e ignori la sorgente "
						+ "pericolosa.";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
		} else if (rollD12 < 12) {
			if (rollD100 < 11) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-dw-1-drink-2";
				eventResultMessage = "Bevi l'acqua della sorgente e a poco a poco inizi a sentirti debole, la sorgente "
						+ "e' maledetta e inizi a vomitare. Subisci una ferita e il tuo corpo e' debole.<br/>"
						+ "-Nuovo effetto attivo-";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else if (!percentTest(rollD100 + 10)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-1-drink-2";
				eventResultMessage = "Dopo aver bevuto senti girare la testa, la fonte e' avvelenata e subisci un danno";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-dw-1-drink-2";
				eventResultMessage = "Bevi dell'acqua fresca e incontaminata, questa breve pausa ti ha consentito di tirare "
						+ "il fiato per un momento, ti curi di una ferita";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
		} else {
			adventureDB.increasePlayerHealth();
			adventureDB.increasePlayerHealth();
			eventResultImage = "event-dw-1-drink-2";
			eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
			eventResultMessage = "La fonte sembra magica, appena bevi senti la forza scorrere dentro di te, la tua pelle"
					+ " diventa piu' resistente e le ferite si rimarginano -Nuovo effetto attivo-";
			return new EventResponseVO(eventResultMessage, eventResultImage);
		}
	}

	private EventResponseVO searchAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 5) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-1-search-1";
				eventResultMessage = "Un grosso pesce salta fuori dall'acqua appena metti il muso sopra. Con dei denti affilati "
						+ "ti provoca una ferita";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				eventResultImage = "event-dw-1-search-1";
				eventResultMessage = "Cerchi sotto la superficie dell'acqua, quando un grosso pesce salta fuori e cerca di morderti. "
						+ "Con riflessi pronti schivi il mostro e spaventato, ma incolume, te ne vai";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
		} else if (rollD12 < 12) {
			if (rollD100 < 40) {
				eventResultImage = "event-dw-1-search-2";
				eventResultMessage = "Cerchi nel lago, ma trovi solo sabbia. Delusa, te ne vai";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				if (!percentTest(rollD100/2)) {
					final int gold = getRandomInt(6) + 1;
					playerInventoryDB.addGold(gold);
					eventResultImage = "event-dw-1-search-3";
					eventResultMessage = "Vedi qualcosa brillare sul fondo del lago, sono monete d'oro. Metti in tasca "
							+ gold + " monete.";
					return new EventResponseVO(eventResultMessage, eventResultImage);
				} else {
					final RewardDTO reward = rewardEJB.getReward(1);
					playerInventoryDB.addItems(reward.getItem());
					if (!percentTest(rollD100)) {
						adventureDB.decreasePlayerHealth();
						eventResultImage = "event-dw-1-drink-1";
						eventResultMessage = "Trovi nel lago un vecchio oggetto, ma quando lo sollevi dall'acqua scopri che era "
								+ "una copertura per un grosso granchio della sabbia che ti colpisce. Nonostante il danno"
								+ " ricevi comunque un nuovo oggetto: " + reward.getItem().getName();
						return new EventResponseVO(eventResultMessage, eventResultImage);
					} else {
						eventResultImage = "event-dw-1-search-4";
						eventResultMessage = String.format("Cercando nel lago trovi qualcosa abbandonato da tempo, "
								+ "lo sollevi dall'acqua e ricevi un nuovo oggetto <i>'%s'</i> ", reward.getItem().getName());
						return new EventResponseVO(eventResultMessage, eventResultImage);
					}
				}
			}
		} else {
			final RewardDTO reward = rewardEJB.getReward(1);
			playerInventoryDB.addItems(reward.getItem());
			eventResultImage = "event-dw-1-search-5";
			eventResultMessage = String.format("Noti subito qualcosa sotterrato nella sabbia dentro al lago, "
					+ "lo sollevi dall'acqua e ricevi un nuovo oggetto: <i>'%s'</i>", reward.getItem().getName());
			return new EventResponseVO(eventResultMessage, eventResultImage);
		}
	}

}
