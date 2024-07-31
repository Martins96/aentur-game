package com.lucamartinelli.aentur.event.crimsoncave;

import com.lucamartinelli.aentur.event.EventActionOld;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;


@Named("event-cc-21")
@ApplicationScoped
public class CCCrossroadsEvent implements EventActionOld {
	
	private final EventDTO event = new EventDTO("event-cc-21", 
			"Dopo un corridoio roccioso ti trovi in una piccola stanza. Davanti a te ci sono "
			+ "tre porte da cui partono tre lunghi corridoi.<br />"
			+ "In quella di sinistra vedi una scia di liquido rosso ancora fresco, sembra sangue<br/>"
			+ "In quella centrale il passaggio &egrave; battuto, come se molti avessero percorso quel"
			+ "corridoio.<br/>"
			+ "In quella di destra, invece, non vedi nulla di particolare, ma senti un rumore in "
			+ "lontananza, come uno scorrere di acqua.<br/>"
			+ "Cosa intendi fare?", 
			new String[] {"Prendi la porta di sinistra", "Prendi la porta centrale", "Prendi la porta di destra"});

	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(leftAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(centralAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(rightAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
		
	}
	
	private String leftAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-cc-21-left-1";
				eventResultMessage = "Apri la porta e segui il corridoio, piano piano il liquido rosso scompare fino a sparire. Segui "
						+ "la strada che ti porta alla prossima stanza";
			} else {
				long goldMax = playerInventoryDB.getGold();
				long goldLost = getRandomLong(goldMax / 2) + 1;
				playerInventoryDB.removeGold(goldLost);
				eventResultImage = "event-cc-21-left-2";
				eventResultMessage = String.format("Entri nel corridoio, le pareti sono imbrattate di liquido rosso, dopo qualche passo vedi un "
						+ "goblin che sta mangiando un cosciotto crudo di qualcosa che sembra essere stata una mucca. Appena ti "
						+ "avverte inizia ad attaccarti senza piet&agrave;. Riesci a parare facilmente i suoi attacchi, ma "
						+ "ben presto ti rendi conto che il suo obiettivo non era ferirti, ma derubarti. Il goblin afferra "
						+ "una manciata di monete d'oro dal tuo borsello e fugge. Hai perso <i>%d</i> monete", goldLost);
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-cc-21-left-3";
				eventResultMessage = "Entri nel corridoio e segui la scia di liquido a terra. Dopo qualche metro entri in una stanza con"
						+ " al centro un pentolone in ebollizione. Per quanto sia strano che dal calderone continui a "
						+ "traboccare liquido all'infinito, non succede niente. Continui per la tua strada";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>talismano</b> sono diminuiti di 1");
				eventResultImage = "event-cc-21-left-3";
				eventResultMessage = "Entri nel corridoio e segui la scia di liquido a terra. Dopo qualche metro entri in una stanza con"
						+ " al centro un pentolone in ebollizione. Il liquido trovato per terra sembra terminare proprio ai "
						+ "piedi del calderone e questo continua a bollire e traboccare di liquido, come se non finisse mai."
						+ "<br/>Mentre esamini il pentolone, vedi che il liquido bolle sempre pi&ugrave; e d'un tratto ti "
						+ "schizza addosso ricoprendoti.<br/>"
						+ "Senti il tuo spirito indebolirsi e una forza oscura ti pervade. Sei stato maledetto da quel "
						+ "liquido e non serve a niente togliertelo di dosso.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			if (percentTest(rollD100)) {
				final ItemDTO itemFound = rewardEJB.getReward(1).getItem();
				playerInventoryDB.addItems(itemFound);
				eventResultImage = "event-cc-21-left-4";
				eventResultMessage = String.format("Entri nel corridoio e segui la scia di liquido rosso. Arrivi in una stanza dove si deve essere "
						+ "consumata una battaglia tempo fa. Tutto &egrave; in disordine e a pezzi, ma nel macello trovi "
						+ "qualcosa di utile: <i>'%s'</i>", itemFound.getName());
			} else if (percentTest(rollD100)) {
				final long gold = getRandomInt(3) + 2;
				playerInventoryDB.addGold(gold);
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
				eventResultImage = "event-cc-21-left-5";
				eventResultMessage = String.format("Entri nel corridoio e segui la scia di liquido rosso fino a raggiungere la fonte delle tracce. Vedi un "
						+ "topino ferito accasciato a terra. Immediatamente cerchi di aiutarlo applicando delle bende sulla "
						+ "ferita, la disinfetti, fai bere il topino e dopo qualche minuto la situazione si stabilizza.<br/>"
						+ "Il topino piano piano si riprende e inizia a parlarti: <i>'Grazie per avermi salvato!'</i>, ti dice "
						+ "con una voce ancora sofferente, <i>'Mi chiamo Kaj&egrave;, sono un geologo e stvo studiando "
						+ "alcuni minerali di questa grotta, ma sono stato attaccato da qualche strana creatura e sono "
						+ "fuggito solo per miracolo. Non &egrave; molto, ma ti prego, prendi queste <b>%d monete</b> come "
						+ "segno di gratitudine. Inoltre fammi lucidare la tua armatura con questo olio speciale creato da "
						+ "me'</i><br/>Il topino spalma e lustra la tua armatura con un olio minerale speciale che ti "
						+ "aumenta temporaneamente la durezza della corazza senza aumentare peso.<br/>"
						+ "-Nuovo effetto attivo-", gold);
			} else {
				eventResultImage = "event-cc-21-left-5";
				eventResultMessage = "Entri nel corridoio e segui la scia di liquido rosso fino a raggiungere la fonte delle tracce. Vedi un "
						+ "topino ferito accasciato a terra. Immediatamente cerchi di aiutarlo applicando delle bende sulla "
						+ "ferita, ma nonostante i tuoi sforzi non riesci a salvarlo. Tristemente seppelisci il corpo e dopo "
						+ "un momento di silenzio te ne vai";
			}
		}
		
		return eventResultMessage;
	}

	private String centralAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 6) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-cc-21-central-1";
				eventResultMessage = "Entri nel corridoio con la strada battuta. Il corridoio &egrave; largo e comodo da percorrere.<br/>"
						+ "Incredibilmente non trovi nessuna minaccia, ma solo una strada sgombra. Continui per la tua via.";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-21-central-2";
				eventResultMessage = "Entri nel corridoio con la strada battuta. Percorri un comodo sentiero che ti porta in una stanza "
						+ "oscura. Illumini la stanza con la lanterna, ma svegli uno stormo di pipistrelli dormienti che "
						+ "si agita e ti assale, corri in preda alla paura e finisci in una pozza d'acqua poco lontano. "
						+ "L'acqua ti protegge dai volatili e questi se ne vanno. Esci e ti esamini. Hai subito delle ferite "
						+ "causate dai loro artigli";
			}
		} else if (rollD12 < 12) {
			if (percentTest(rollD100 + rollD12)) {
				eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono aumentati di 1");
				eventResultImage = "event-cc-21-central-3";
				eventResultMessage = "Entri nel corridoio con la strada battuta. Lungo il corridoio trovi una stanza che funge da "
						+ "magazzino. Tra le varie cianfrusaglie di poco valore trovi una mola in perfetto stato e "
						+ "funzionante. Ne approfitti per affilare e sistemare al meglio la tua arma."
						+ "-Nuovo effetto attivo-";
			} else if (percentTest(rollD100 + 10)) {
				eventResultImage = "event-cc-21-central-1";
				eventResultMessage = "Entri nel corridoio con la strada battuta. Il corridoio &egrave; largo e comodo da percorrere.<br/>"
						+ "Incredibilmente non trovi nessuna minaccia, ma solo una strada sgombra. Continui per la tua via.";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
				eventResultImage = "event-cc-21-central-3";
				eventResultMessage = "Entri nel corridoio con la strada battuta. Lungo il corridoio trovi una stanza che funge da "
						+ "magazzino. Tra le varie cianfrusaglie di poco valore trovi una mola. Cerchi di sistemare e fare della "
						+ "manutenzione alla tua arma, ma finisci per sporcarla e danneggiarla."
						+ "-Nuovo effetto attivo-";
			}
		} else {
			if (percentTest(rollD100 + rollD12)) {
				ItemDTO item = rewardEJB.getReward(1).getItem();
				playerInventoryDB.addItems(item);
				eventResultImage = "event-cc-21-central-4";
				eventResultMessage = String.format("Entri nel corridoio con la strada battuta. Dopo qualche metro ti ritrovi in una stanza buia, con la luce "
						+ "fioca della lampada controlli in giro e capisci di essere circondata da vampiri. Fortunatamente stanno "
						+ "dormendo tutti. Con passo silenzioso attraversi la stanza senza fare alcun rumore. Vicino ad uno "
						+ "dei vampiri vedi un oggetto interessante: <i>'%s'</i>, in modo furtivo lo rubi e te ne vai",
						item.getName());
			} else {
				final long gold = getRandomInt(2) + 2;
				playerInventoryDB.addGold(gold);
				eventResultImage = "event-cc-21-central-4";
				eventResultMessage = String.format("Entri nel corridoio con la strada battuta. Dopo qualche metro ti ritrovi in una stanza buia, con la luce "
						+ "fioca della lampada controlli in giro e capisci di essere circondata da vampiri. Fortunatamente stanno "
						+ "dormendo tutti. Con passo silenzioso attraversi la stanza senza fare alcun rumore. Vicino ad uno "
						+ "dei vampiri vedi un sacchetto con <i>%d monete</i>, in modo furtivo le rubi e te ne vai",
						gold);
			}
		}
		
		return eventResultMessage;
	}
	
	private String rightAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100*2-10)) {
				eventResultImage = "event-cc-21-right-1";
				eventResultMessage = "Entri nel corridoio, &egrave; stretto e lungo. Man mano cammini senti il rumore dello scorrere "
						+ "d'acqua attorno a te. Illumini le pareti con la lanterna e vedi che ci sono tante piccole fessure "
						+ "da cui sgorga dell'acqua fangosa. Continui senza problemi per la tua strada muovendoti per il "
						+ "cunicolo umido.";
			} else {
				adventureDB.decreasePlayerHealth();
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-21-right-2";
				eventResultMessage = "Entri nel corridoio, &egrave; stretto e lungo. Man mano cammini senti il rumore dello scorrere "
						+ "dell'acqua sempre pi&ugrave; forte. Ad un certo punto guardi intorno a te per capire meglio "
						+ "la fonte del rumore, quando da una parete vedi un getto di acqua che sta smuovendo le pietre.<br/>"
						+ "Non fai tempo a girarti che l'acqua sfonda la parete e un flusso ti travolge. Sei tracinata per "
						+ "tutto il corridoio sbattendo in ogni roccia. Perdi i sensi e quando ti risvegli ti rendi "
						+ "conto di aver subito diverse ferite gravi";
			}
		} else {
			if (percentTest(rollD100+rollD12/2)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				playerInventoryDB.addItems(item);
				eventResultImage = "event-cc-21-right-3";
				eventResultMessage = String.format("Percorri il corridoio, che non &egrave; poi tanto lungo, arrivi in una stanza con "
						+ "un laghetto in mezzo e una cascatina sgorga dalla parete.<br/>"
						+ "Il tuo intuito ti fa controllare dietro la cascata e infatti spostando qualche pietra trovi "
						+ "un vecchio, ma bellissimo forziere. Lo apri e riveli un prezioso artefatto. Guadagni "
						+ "<i>'%s'</i>", item.getName());
			} else {
				if (percentTest(rollD100+rollD12)) {
					if (percentTest(rollD100+rollD12)) {
						adventureDB.increasePlayerHealth();
						eventResultImage = "event-cc-21-right-3";
						eventResultMessage = "Percorri il corridoio, che non &egrave; poi tanto lungo, arrivi in una stanza con "
								+ "un laghetto in mezzo e una cascatina sgorga dalla parete.<br/>"
								+ "Approfitti della tranquillit&agrave; per riposare e rinfrescarti con l'acqua della "
								+ "pozza. Ripristini della vita.";
					} else {
						eventResultImage = "event-cc-21-right-3";
						eventResultMessage = "Percorri il corridoio, che non &egrave; poi tanto lungo, arrivi in una stanza con "
								+ "un laghetto in mezzo e una cascatina sgorga dalla parete.<br/>"
								+ "Osservi la stanza, ma non vedi nulla di particolare, eccetto la strada per continuare "
								+ "per il tuo percorso. Riprendi il cammino serena che non sia successo niente di male";
					}
				} else {
					if (!percentTest(rollD100+rollD12)) {
						adventureDB.decreasePlayerHealth();
						eventResultImage = "event-cc-21-right-4";
						eventResultMessage = "Percorri il corridoio e noti che attorno a te c'&egrave; del liquido che sgorga dalle "
								+ "rocce delle pareti. Mentre cammini senti la pelle bruciare, il liquido delle pareti "
								+ "ti schizza addosso e ti provoca delle ustioni. Immediatamente capisci che il liquido "
								+ "&egrave; una sorta di acido e inizi a correre per superare la zona.<br/>"
								+ "Fortunatamente il corridoio non &egrave; molto lungo e lo superi velocemente, ma le "
								+ "ustioni riportate a causa dell'acido non sono leggere e ti hanno fatto subire una ferita";
					} else {
						eventResultImage = "event-cc-21-right-3";
						eventResultMessage = "Percorri il corridoio, che non &egrave; poi tanto lungo, arrivi in una stanza con "
								+ "un laghetto in mezzo e una cascatina sgorga dalla parete.<br/>"
								+ "Osservi la stanza, ma non vedi nulla di particolare, eccetto la strada per continuare "
								+ "per il tuo percorso. Riprendi il cammino serena che non sia successo niente di male";
					}
					
				}
			}
		}
		
		return eventResultMessage;
	}

}
