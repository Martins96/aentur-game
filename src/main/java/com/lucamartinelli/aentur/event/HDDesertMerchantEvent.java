package com.lucamartinelli.aentur.event;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-hd-12")
@ApplicationScoped
public class HDDesertMerchantEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-hd-12", 
			"In mezzo al deserto incontri un beduino mercante. Ti saluta in modo fin troppo amichevole. <i>'Ehi "
			+ "viandante, benvenuto al mio bazar ambulante, ho 2 offerte per te. Puoi comprare questo pacchetto chiuso "
			+ "senza vedere cosa ci sia al prezzo di 20 monete d'oro; sembra molto, ma potrebbe contenere anche qualcosa "
			+ "di molto utile. Oppure puoi sfidarmi a scacchi, scommettiamo 10 monete d'oro a testa, chi vince prende "
			+ "tutto. Cosa decidi?'</i>", 
			new String[] {"Ignora e ringrazia", "Compra il pacchetto", "Gioca a scacchi con lui"});

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
			return Response.ok(buyAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(playAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (percentTest(rollD100 + (rollD12*3))) {
			return "Ringrazi, ma rifiuti le offerte. <i>'Un vero peccato!'</i> ti parla deluso <i>'Avremmo potuto fare "
					+ "grandi affari noi due...'</i>";
		} else {
			playerInventoryDB.removeGold(getRandomInt(8)+1);
			return "Ringrazi e rifiuti le offerte. Ma il beduino urla: <i>'Nessuno rifiuta le mie offerte, dammi il tuo "
					+ "oro, lo voglio tutto, e' mio!'</i>, il mercante ti aggredisce e ti ruba una quantita' imprecisata "
					+ "di monete, di risposta tu controbatti cercando di riprenderti le monete, la lotta inizia, ma "
					+ "l'avaro mercante lancia una pozione fumogena che alza un denso fumo, non vedi nulla e dopo qualche "
					+ "minuto l'effetto svanisce, proprio come il mercante che non vedi piu'.";
		}
	}

	private Object buyAction(int rollD100, int rollD12) {
		if (playerInventoryDB.getGold() < 20) {
			return "<i>'Eh eh, furbone, vuoi fare affari senza dei fondi? Non funziona cosi', mi dispiace, il nostro "
					+ "discorso si conclude qui'</i>. E con questa frase il mercante se ne va, non avevi abbastanza denaro "
					+ "per l'offerta";
		}
		playerInventoryDB.removeGold(20L);
		final ItemDTO item;
		if (percentTest(rollD100+rollD12)) {
			if (percentTest((rollD100/2)+rollD12)) {
				if (percentTest((rollD100+rollD12)/2)) {
					item = rewardEJB.getBossReward().getItem();
				} else {
					item = rewardEJB.getReward(2).getItem();
				}
			} else {
				item = rewardEJB.getReward(1).getItem();
			}
		} else {
			item = ItemsListDB.ITEMS[17];
		}
		playerInventoryDB.addItems(item);
		return "Consegni le 20 monete al mercante, ti cede il pacchetto ridendo. Con ansia apri la scatola e all'interno "
				+ "trovi l'oggetto: <b>" + item.getName() + "</b>";
	}

	private Object playAction(int rollD100, int rollD12) {
		if (percentTest(rollD12*9)) {
			if (percentTest(rollD100)) {
				playerInventoryDB.addGold(10L);
				return "Mosse precise, logica infallibile e sguardo fermo ti consente di avere la meglio sul beduino. "
						+ "Si complimenta della giocata e ti consegna il denaro come da patti.";
			} else {
				return "La partita si svolge su mosse e contromosse, fino a che non rimanete in un punto morto in cui "
						+ "entrambi non riuscite ne' a vincere ne' a perdere. Dichiarate il risultato in parita' e "
						+ "nessuno perde denaro";
			}
		} else {
			if (percentTest(rollD100)) {
				return "La partita inizia e si dilunga per minuti... ore... Siete entrambi stanchi e decidete di lasciar "
						+ "perdere. Annoiati annullate la scommessa";
			} else {
				playerInventoryDB.removeGold(10L);
				return "La partita inizia e l'avversario e' incredibilmente forte, nel giro di poche mosse ti mette alle "
						+ "strette. Dopo difficili mosse ti intrappola ed e' scacco matto. Perdi la scommessa.";
			}
		}
	}

}
