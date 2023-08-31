package com.lucamartinelli.aentur.event;

import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

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
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(ignoreAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(inspectAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 4) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				return "Decidi di passare oltre l'igloo, ma appena metti un piede in una zona nevosa scatta "
						+ "una piccola trappola per orsi che ti ferisce al piede.";
			}
			return "Appena lasci la zona senti strani rumori provvenire dal igloo, rapidamente "
					+ "te ne vai";
		} else {
			return "Decidi di ignorare l'igloo e lasci nella neve quella strana struttura";
		}
	}

	private Object inspectAction(int rollD100, int rollD12) {
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				return "Ti avvicini all'igloo, ma appena sei davanti alla porta, questo crolla e fortunatamente non "
						+ "eri ancora entrata";
			} else {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				return "Entri nell'igloo, ma non fai tempo a guardare in giro che questo crolla e vieni sepolta da "
						+ "una montagna di neve. Quasi congelata riesci ad uscire con qualche ferita, ma il freddo "
						+ "ti e' entrato fino alle ossa.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else if (rollD12 < 7) {
			if (percentTest(rollD100)) {
				if (percentTest(rollD100+rollD12)) {
					final int gold = getRandomInt(4) + 1;
					playerInventoryDB.addGold(gold);
					return "Entri nell'igloo. Appena dentro vedi un grosso orso bianco dormire. Ai piedi dell'orso ci sono "
							+ "delle monete d'oro di qualche avventuriero passato prima di te, ne raccogli " + gold;
				} else {
					return "Entri nell'igloo. Appena dentro vedi un grosso orso bianco dormire. Pensi che sia meglio uscire "
							+ "e non disturbarlo, cosi' senza fare rumore ti porti fuori dalla struttura e te ne vai";
				}
			} else {
				adventureDB.decreasePlayerHealth();
				return "Entri nell'igloo. Appena dentro vedi un grosso orso bianco dormire, cercando di usire pero' "
						+ "inciampi e svegli l'orso che ti morde di colpo. Con una ferita scappi dalla zona";
			}
		} else if (rollD12 < 10) {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				return "Entri nell'igloo. Sembra vuoto, l'unica cosa che trovi sono molte coperte. Sembra un buon "
						+ "posto dove riposare e stare un po' al caldo delle coperte, quindi decidi di dormire un po'<br/>"
						+ "Al risveglio ti senti meglio e delle tue ferite sono state curate";
			} else {
				if (percentTest(rollD100)) {
					eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
					return "Entri nell'igloo. Trovi delle vecchie pozioni. Una riporta la scritta <i>'Pozione corazza "
							+ "d'acciaio'</i>, curiosa e fiduciosa del risultato la bevi e senti una nuova forza nei "
							+ "tuoi muscoli.<br/>"
							+ "-Nuovo effetto attivo-";
				} else {
					eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
					return "Entri nell'igloo, Ci sono strane pozioni e fiori che sembrano fatti di ghiaccio. Nell'aria "
							+ "c'e' uno strano odore e ne sei assuefatta. Lasci in qualche modo la struttura, ma senti "
							+ "la testa pesante e la vista annebbiata.<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				return "Dentro alla struttura trovi un vecchio baule coperto di ghiaccio, con un colpo lo apri e trovi"
						+ " un vecchio oggetto: <b>" + reward.getItem().getName() + "</b>";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
				return "Entri nell'igloo e trovi diverse scorte di cibo ben conservato grazie al freddo della zona. "
						+ "Mangi qualcosa e recuperi le forze.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}

}
