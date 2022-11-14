package com.lucamartinelli.aentur.event;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import javax.ws.rs.core.Response;

import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

@Named("event-hd-14")
@ApplicationScoped
public class HDQuicksandsEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-hd-14", 
			"Ti imbatti in antiche rovine di qualche civilt' perduta, mentre le esplori ti trovi ad essere risucchiato "
			+ "da delle sabbie mobili. Stai sprofondando", 
			new String[] {"Dimenati e cerca di fuggire", "Mantieni la calma e osserva"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}
	

	@Override
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(fastAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(slowAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}


	private Object fastAction(int rollD100, int rollD12) {
		if (rollD12 < 6) {
			if (percentTest(rollD100)) {
				return "Ti dimeni con tutta la forza, ma le sabbie ti stanno inghiottendo. Quando ormai sei stata "
						+ "sepolta fino al collo riesci in qualche modo a nuotare in questa sabbia e mangiandone un "
						+ "po' te ne liberi. Anche se hai fatto un pasto a base di sabbia e polvere, ne esci illesa";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Ti dimeni per uscire, ma continui a sprofondare. Vieni completamente sommersa e ti manca il fiato. "
						+ "Quando ormai pensavi che non ci fossero speranze, senti il flusso della sabbia fermarsi. "
						+ "Spingi con tutta la tua forza e ne esci. Sei ferita, hai sabbia nei polmoni, ma sei viva";
			}
		} else {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				return "Appena le sabbie ti si muovono sotto ai piedi, fai un balzo all'indietro ed eviti il problema. "
						+ "Non contenta di questo pero', afferri un ramo che trovi nelle rovine e lo usi per ispezionare "
						+ "il terreno in modo da farti una strada sicura e cercare sotto la sabbia. Incredibilmente "
						+ "trovi una pozione della vita in buono stato e ne trai beneficio. Ti curi di alcune ferite.";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				return "Con forza ti fai strada tra le sabbie e con difficolta' ne esci, pero' la sabbia ha danneggiato "
						+ "la tua armatura e ne risente.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}


	private Object slowAction(int rollD100, int rollD12) {
		if (rollD12 < 9) {
			if (percentTest(rollD100)) {
				return "Controlli con sangue freddo il posto, non trovi nulla di utile. Ma la calma rallenta la discesa. "
						+ "Come ultima speranza fai un fischio per chiedere aiuto. Fortunatamente uno strano tizio ti "
						+ "lancia una corda e ti salva. <i>'Sei stata fortunata oggi ragazza. Mi chiamo Jerry. Abito "
						+ "in questo posto da molto tempo e non vedo molti stranieri. Stai attenta la prossima volta. "
						+ "Le sabbie mobili nascono in posti casuali e differenti ogni giorno'</i>. Ringrazi lo straniero "
						+ "e te ne vai";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Mantieni la calma e controlli la zona, ma continui a sprofondare. Non trovi nulla di utile."
						+ "Vieni completamente sommersa e ti manca il fiato. "
						+ "Quando ormai pensavi che non ci fossero speranze, senti il flusso della sabbia fermarsi. "
						+ "Spingi con tutta la tua forza e ne esci. Sei ferita, hai sabbia nei polmoni, ma sei viva";
			}
		} else {
			if (percentTest(rollD100)) {
				final String response = "Mentre vieni inghiottita ti guardi in giro nella speranza di trovare qualcosa. "
						+ "Sul muro di una rovina leggi <i>Mantieni la calma e scendi. Il coraggio ti premiera'</i>. "
						+ "Non avendo molte altre scelte, fai un lungo respiro e ti lasci sommergere. Dopo pochi secondi "
						+ "ti ritrovi in una grotta sommersa dove l'entrata era proprio un muro di sabbia. Esplori la zona "
						+ "e trovi un vecchio forziere. Lo apri e all'interno trovi ";
				if (percentTest(rollD100-rollD12)) {
					final RewardDTO reward;
					if (percentTest((rollD100+rollD12)/2)) {
						reward = rewardEJB.getReward(2);
					} else {
						reward = rewardEJB.getReward(1);
					}
					playerInventoryDB.addItems(reward.getItem());
					return response.concat("un antico oggetto: <b>" + reward.getItem() + "</b>");
				} else {
					final int gold = getRandomInt(5)+1;
					playerInventoryDB.addGold(gold);
					return "qualche moneta d'oro, aggiungi alla tua borsa " + gold;
				}
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				return "Osservi la zona con attenzione e vedi un vecchio ramo mezzo sepolto, ma che non sprofonda."
						+ "Ti aggrappi al ramo e ti fai strada tra le sabbie e con difficolta' ne esci, "
						+ "pero' la sabbia ha danneggiato la tua armatura e ne risente.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}

}
