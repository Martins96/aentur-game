package com.lucamartinelli.aentur.event.iceland;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-il-6")
@ApplicationScoped
public class ILIglooEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-il-6", 
			"In mezzo alla neve vedi una strana struttura, avvicinandoti noti che e' igloo", 
			new String[] {"Ignora la struttura", "Ispeziona la struttura"});
	
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
			return ImmutablePair.of(inspectAction(rollD100, rollD12), null);

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
				eventResultImage = "event-il-6-ignore-1";
				eventResultMessage = "Decidi di passare oltre l'igloo, ma appena metti un piede in una zona nevosa scatta "
						+ "una piccola trappola per orsi che ti ferisce al piede.";
			} else {
				eventResultImage = "event-il-6-ignore-2";
				eventResultMessage = "Appena lasci la zona senti strani rumori provvenire dal igloo, rapidamente "
						+ "te ne vai";
			}
		} else {
			eventResultImage = "event-il-6-ignore-2";
			eventResultMessage = "Decidi di ignorare l'igloo e lasci nella neve quella strana struttura";
		}
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO inspectAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-6-inspect-1";
				eventResultMessage = "Ti avvicini all'igloo, ma appena sei davanti alla porta, questo crolla e fortunatamente non "
						+ "eri ancora entrata";
			} else {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-il-6-inspect-1";
				eventResultMessage = "Entri nell'igloo, ma non fai tempo a guardare in giro che questo crolla e vieni sepolta da "
						+ "una montagna di neve. Quasi congelata riesci ad uscire con qualche ferita, ma il freddo "
						+ "ti e' entrato fino alle ossa.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else if (rollD12 < 7) {
			if (percentTest(rollD100)) {
				if (percentTest(rollD100+rollD12)) {
					final int gold = getRandomInt(4) + 1;
					playerInventoryDB.addGold(gold);
					eventResultImage = "event-il-6-inspect-2";
					eventResultMessage = String.format("Entri nell'igloo. Appena dentro vedi un grosso orso bianco dormire. Ai piedi dell'orso ci sono "
							+ "delle monete d'oro di qualche avventuriero passato prima di te, ne raccogli %d", gold);
				} else {
					eventResultImage = "event-il-6-inspect-2";
					eventResultMessage = "Entri nell'igloo. Appena dentro vedi un grosso orso bianco dormire. Pensi che sia meglio uscire "
							+ "e non disturbarlo, cosi' senza fare rumore ti porti fuori dalla struttura e te ne vai";
				}
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-il-6-inspect-3";
				eventResultMessage = "Entri nell'igloo. Appena dentro vedi un grosso orso bianco dormire, cercando di usire per&ograve; "
						+ "inciampi e svegli l'orso che ti morde di colpo. Con una ferita scappi dalla zona";
			}
		} else if (rollD12 < 10) {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-il-6-inspect-4";
				eventResultMessage = "Entri nell'igloo. Sembra vuoto, l'unica cosa che trovi sono molte coperte. Sembra un buon "
						+ "posto dove riposare e stare un po' al caldo delle coperte, quindi decidi di dormire un po'<br/>"
						+ "Al risveglio ti senti meglio e delle tue ferite sono state curate";
			} else {
				if (percentTest(rollD100)) {
					eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
					eventResultImage = "event-il-6-inspect-5";
					eventResultMessage = "Entri nell'igloo. Trovi delle vecchie pozioni. Una riporta la scritta <i>'Pozione corazza "
							+ "d'acciaio'</i>, curiosa e fiduciosa del risultato la bevi e senti una nuova forza nei "
							+ "tuoi muscoli.<br/>"
							+ "-Nuovo effetto attivo-";
				} else {
					eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
					eventResultImage = "event-il-6-inspect-5";
					eventResultMessage = "Entri nell'igloo, Ci sono strane pozioni e fiori che sembrano fatti di ghiaccio. Nell'aria "
							+ "c'e' uno strano odore e ne sei assuefatta. Lasci in qualche modo la struttura, ma senti "
							+ "la testa pesante e la vista annebbiata.<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				reward.resolveItemLabels();
				eventResultImage = "event-il-6-inspect-6";
				eventResultMessage = "Dentro alla struttura trovi un vecchio baule coperto di ghiaccio, con un colpo lo apri e trovi"
						+ " un vecchio oggetto: <b>" + reward.getItem().getName() + "</b>";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
				eventResultImage = "event-il-6-inspect-7";
				eventResultMessage = "Entri nell'igloo e trovi diverse scorte di cibo ben conservato grazie al freddo della zona. "
						+ "Mangi qualcosa e recuperi le forze.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
