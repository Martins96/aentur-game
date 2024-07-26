package com.lucamartinelli.aentur.event.darkwood;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-dw-3")
@ApplicationScoped
public class DWTreeCrossEvent implements EventAction {
	
	private final EventDTO event = new EventDTO("event-dw-3", 
			"Mentre passi vicino ad un albero, noti un grande marchio inciso sulla corteccia. "
			+ "E' una croce che segna qualcosa, ma cosa?",
			new String[] {"Ignora il segno", "Ispeziona l'albero", "Scava nel terreno"});
	
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
			return ImmutablePair.of(searchAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(digAction(rollD100, rollD12), null);

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
				eventResultMessage = "Decidi di andartene, ma appena metti un piede tra le foglie scatta una piccola tagliola "
						+ "per orsi che ti ferisce al piede.<br/>"
						+ "Probabilmente il segno serviva ad identificare dove era stata posizionata";
			} else {
				eventResultImage = "event-dw-3-ignore-1";
				eventResultMessage = "Te ne vai, anche se giureresti di aver sentito un ghigno quando eri ad una certa distanza "
						+ "dall'albero";
			}
		} else {
			eventResultImage = "event-dw-3-ignore-1";
			eventResultMessage = "Decidi di ignorare il segno sull'albero, sembrava vecchio e probabilmente non indicava nulla "
					+ "di utile";
		}
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO searchAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (!percentTest(rollD100-15)) {
				adventureDB.decreasePlayerHealth();
				long gold = playerInventoryDB.getGold();
				final int goldSteal = getRandomInt(10) + 1;
				gold = gold - goldSteal;
				if (gold < 0)
					gold = 0L;
				playerInventoryDB.setGold(gold);
				eventResultImage = "event-dw-3-search-1";
				eventResultMessage = String.format("Inizi ad ispezionare l'albero fino a quando dalla sua chioma ti "
						+ "cade addosso un goblin armato."
						+ " Ti coglie di sorpresa e non puoi fare nulla, ti ferisce e ti ruba delle monete dalla borsa."
						+ " Monete perse: %d", goldSteal);
			} else {
				eventResultImage = "event-dw-3-search-1";
				eventResultMessage = "Mentre stai ispezionando l'albero noti qualcosa muoversi nella sua chioma, capisci immediatamente "
						+ "che &egrave; un goblin. Con rapidit&agrave; indietreggi prima che il mostro possa farti l'agguato. "
						+ "Lasci la zona e prosegui";
			}
		} else if (rollD12 < 8) {
			if (!percentTest(rollD100)) {
				eventResultImage = "event-dw-3-search-2";
				eventResultMessage = "Cerchi attorno all'albero, tra i buchi della corteccia, guardi la chioma e le radici, ma niente. "
						+ "Quel segno deve essere uno scherzo di qualcuno, oppure sei semplicemente arrivata troppo tardi";
			} else {
				final int gold = getRandomInt(10) + 1;
				playerInventoryDB.addGold(gold);
				eventResultImage = "event-dw-3-search-3";
				eventResultMessage = String.format("In un buco della corteccia vedi qualcosa scintillare, "
						+ "guardi meglio e trovi %d monete"
						+ " d'oro", gold);
			}
		} else {
			final int gold;
			if (!percentTest(rollD100)) {
				gold = getRandomInt(10) + 1;
			} else {
				gold = getRandomInt(20) + 1;
			}
			playerInventoryDB.addGold(gold);
			eventResultImage = "event-dw-3-search-3";
			eventResultMessage = String.format("Nascosto da una radice sbucata dal terreno, trovi un sacchetto di "
					+ "monete d'oro, il contenuto &egrave; di %d monete", gold);
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO digAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (!percentTest(rollD100 + 10)) {
			eventResultImage = "event-dw-3-dig-1";
			eventResultMessage = "Cerchi di scavare ai piedi dell'albero, ma il terreno &egrave; troppo duro "
					+ "e fallisci nel tuo intento";
			return new EventResponseVO(eventResultMessage, eventResultImage);
		}
		
		if (rollD12 == 1) {
			if (percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-3-dig-1";
				eventResultMessage = "Mentre scavi il terreno vicino all'albero, questo si anima e tenta di colpirti con le radici.<br/>"
						+ "Subisci una ferita";
			} else {
				adventureDB.decreasePlayerHealth();
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-3-dig-1";
				eventResultMessage = "Mentre scavi il terreno vicino all'albero, questo si anima e le radici si aggrovigliano su di te.";
			}
			return new EventResponseVO(eventResultMessage, eventResultImage);
		} else if (rollD12 < 5) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-dw-3-dig-1";
				eventResultMessage = "Cerchi di scavare ai piedi dell'albero, ma il terreno e' troppo duro e fallisci nel tuo intento";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-3-dig-1";
				eventResultMessage = "Cerchi di scavare ai piedi dell'albero, ma trovi solo dei cocci taglienti che ti feriscono "
						+ "durante lo scavo";
			}
			return new EventResponseVO(eventResultMessage, eventResultImage);
		} else {
			if (percentTest(rollD100+20)) {
				if (percentTest(rollD100+20)) {
					final RewardDTO reward = rewardEJB.getReward(1);
					playerInventoryDB.addItems(reward.getItem());
					eventResultImage = "event-dw-3-dig-1";
					eventResultMessage = String.format("Cercando nella terra ai piedi dell'albero trovi qualcosa sepolto da tempo, "
						+ " un vecchio baule custodisce un antico oggetto: "
						+ "ricevi un nuovo oggetto: <i>'&s'</i>", reward.getItem().getName());
				} else {
					adventureDB.increasePlayerHealth();
					eventResultImage = "event-dw-3-dig-1";
					eventResultMessage = "Scavi ai piedi dell'albero e trovi una cassa, all'interno trovi una pozione della vita, "
							+ "riesci a curare un punto ferita";
				}
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				eventResultImage = "event-dw-3-dig-1";
				eventResultMessage = "Scavi ai piedi dell'albero e trovi una cassa, ma quando la apri scopri che &egrave; vuota";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
		}
		
	}

}
