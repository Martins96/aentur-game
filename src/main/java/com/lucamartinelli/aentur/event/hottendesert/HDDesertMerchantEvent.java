package com.lucamartinelli.aentur.event.hottendesert;

import com.lucamartinelli.aentur.event.EventActionOld;
import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-hd-12")
@ApplicationScoped
public class HDDesertMerchantEvent implements EventActionOld {

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
		String eventResultMessage;
		String eventResultImage;
		
		if (percentTest(rollD100 + (rollD12*3))) {
			eventResultImage = "event-hd-12-ignore-1";
			eventResultMessage = "Ringrazi, ma rifiuti le offerte. <i>'Un vero peccato!'</i> ti parla deluso <i>'Avremmo potuto fare "
					+ "grandi affari noi due...'</i>";
			return eventResultMessage;
		} else {
			playerInventoryDB.removeGold(getRandomInt(8)+1);
			eventResultImage = "event-hd-12-ignore-2";
			eventResultMessage = "Ringrazi e rifiuti le offerte. Ma il beduino urla: <i>'Nessuno rifiuta le mie offerte, dammi il tuo "
					+ "oro, lo voglio tutto, e' mio!'</i>, il mercante ti aggredisce e ti ruba una quantita' imprecisata "
					+ "di monete, di risposta tu controbatti cercando di riprenderti le monete, la lotta inizia, ma "
					+ "l'avaro mercante lancia una pozione fumogena che alza un denso fumo, non vedi nulla e dopo qualche "
					+ "minuto l'effetto svanisce, proprio come il mercante che non vedi pi&ugrave;.";
			return eventResultMessage;
		}
	}

	private Object buyAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (playerInventoryDB.getGold() < 20) {
			eventResultImage = "event-hd-12-buy-1";
			eventResultMessage = "<i>'Eh eh, furbone, vuoi fare affari senza dei fondi? Non funziona cosi', mi dispiace, il nostro "
					+ "discorso si conclude qui'</i>. E con questa frase il mercante se ne va, non avevi abbastanza denaro "
					+ "per l'offerta";
			return eventResultMessage;
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
			item = ItemsListDB.getById(17);
		}
		playerInventoryDB.addItems(item);
		eventResultImage = "event-hd-12-buy-2";
		eventResultMessage = String.format("Consegni le 20 monete al mercante, ti cede il pacchetto ridendo. "
				+ "Con ansia apri la scatola e all'interno "
				+ "trovi l'oggetto: <b>%s</b>", item.getName());
		return eventResultMessage;
	}

	private Object playAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (playerInventoryDB.getGold() < 10L) {
			if (percentTest(rollD12*4+rollD100/2)) {
				eventResultImage = "event-hd-12-buy-1";
				eventResultMessage = "Accetti di giocare, ma quando ti chiede le 10 monete di scommessa tu non le hai.<br/>"
						+ "<i>'Hey, questi non erano gli accordi, se non hai denaro non farmi perdere tempo'</i>"
						+ "<br/>Scocciato se ne va.";
			} else {
				ItemDTO item = playerInventoryDB.getItems()
						.get(getRandomInt(playerInventoryDB.getItems().size()));
				eventResultImage = "event-hd-12-play-1";
				eventResultMessage = String.format("Accetti di giocare, ma la sua abilit&agrave; &egrave; nettamente superiore alla tua. Ti batte "
						+ "senza fare neppure troppe mosse. Al momento del pagamento ti accorgi di non avere il denaro "
						+ "sufficiente. Il mercante va su tutte le furie e urla: <i>'Ti sembra uno scherzo questo? "
						+ "'In una scommessa, quando uno perde deve pagare! Non hai soldi? Allora prender&ograve; "
						+ "questo!'</i>, di colpo affetta il tuo oggetto <i>'%s'</i> e se ne va", item.getName());
			}
			return eventResultMessage;
		}
		if (percentTest(rollD12*9)) {
			if (percentTest(rollD100)) {
				playerInventoryDB.addGold(10L);
				eventResultImage = "event-hd-12-play-2";
				eventResultMessage = "Mosse precise, logica infallibile e sguardo fermo ti consente di avere la meglio sul beduino. "
						+ "Si complimenta della giocata e ti consegna il denaro come da patti.";
			} else {
				eventResultImage = "event-hd-12-play-3";
				eventResultMessage = "La partita si svolge su mosse e contromosse, fino a che non rimanete in un punto morto in cui "
						+ "entrambi non riuscite n&egrave; a vincere n&egrave; a perdere. Dichiarate il risultato in parit&agrave; e "
						+ "nessuno perde denaro";
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "event-hd-12-play-3";
				eventResultMessage = "La partita inizia e si dilunga per minuti... ore... Siete entrambi stanchi e decidete di lasciar "
						+ "perdere. Annoiati annullate la scommessa";
			} else {
				playerInventoryDB.removeGold(10L);
				eventResultImage = "event-hd-12-play-4";
				eventResultMessage = "La partita inizia e l'avversario e' incredibilmente forte, nel giro di poche mosse ti mette alle "
						+ "strette. Dopo difficili mosse ti intrappola ed e' scacco matto. Perdi la scommessa.";
			}
		}
		return eventResultMessage;
	}

}
