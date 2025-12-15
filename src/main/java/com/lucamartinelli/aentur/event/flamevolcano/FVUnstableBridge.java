package com.lucamartinelli.aentur.event.flamevolcano;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-fv-23")
@ApplicationScoped
public class FVUnstableBridge implements EventAction {

	private final EventDTO event = new EventDTO("event-fv-23", 
			"""
			Dopo aver attraversato un cunicolo ti trovi in una grande stanza ricavata presumibilmente da 
			crolli causati da terremoti.<br/>Da un lato si trova il prosieguo del cunicolo che 
			stavi seguendo, dall'altra invece &egrave; presente un crepaccio con sotto della lava.<br/>
			Oltre al crepaccio si vede chiaramente il sentiero principale e questo potrebbe farti 
			risparmiare molta strada. Il crepaccio pu&ograve; essere superato usando un vecchio ponte 
			che sembra un po' pericolante.<br/>Puoi sempre continuare sulla strada che stavi gi&agrave; 
			seguendo.<br/>
			Cosa decidi di fare?
			""",
			new String[] {"Continua nel cunicolo", "Attraversa il ponte pericolante"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return ImmutablePair.of(tunnelAction(rollD100, rollD12), null);
		case 2:
			return ImmutablePair.of(bridgeAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	
	private EventResponseVO tunnelAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100+rollD12)) {
				eventResultImage = "";
				eventResultMessage = "Decidi di continuare per il cunicolo ritenendolo il percorso pi&ugrave; sicuro. "
						+ "Ad un tratto senti le pareti e il terreno tremare. Dall'alto iniziano a cadere grossi sassi, "
						+ "ma con agilit&agrave; li schivi e ti affretti a continuare sul percorso.";
			} else {
				eventResultImage = "";
				eventResultMessage = "Decidi di continuare per il cunicolo ritenendolo il percorso pi&ugrave; sicuro. "
						+ "Ad un tratto senti le pareti e il terreno tremare. Dall'alto iniziano a cadere grossi sassi, "
						+ "tenti di correre verso la fine del tunnel, ma numerose rocce ti colpiscono e lacerano.<br>"
						+ "Subisci alcune ferite.";
				adventureDB.decreasePlayerHealth();
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (!percentTest(rollD100)) {
				if (!percentTest(rollD100+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "Segui il cunicolo ritenendolo pi&ugrave; sicuro. In effetti la strada &egrave "
							+ "tranquilla per un pezzo, poi dal soffitto vedi cadere alcune gocce di roccia fusa.<br/>"
							+ "Improvvisamente queste gocce diventano sempre pi&ugrave; fino a formare fiumiciattoli "
							+ "alle pareti. Il soffitto si screpa e da l&igrave; cade liquido magmatico.<br/>"
							+ "Inizi a correre, ma fai inevitabilmente una doccia di lava. Riporti delle ferite e "
							+ "le scottature ti faranno male per un po'.<br/>"
							+ "-Nuovo effetto attivo-";
					adventureDB.decreasePlayerHealth();
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
				} else {
					eventResultImage = "";
					eventResultMessage = "Segui il cunicolo ritenendolo pi&ugrave; sicuro. In effetti la strada &egrave "
							+ "tranquilla per un pezzo, poi dal soffitto vedi cadere alcune gocce di roccia fusa.<br/>"
							+ "Spaventa un po', ma non sembra succedere niente di pi&ugrave;. Finisci il percorso e "
							+ "ti ritrovi nella nuova stanza del dungeon.";
				}
			} else {
				eventResultImage = "";
				eventResultMessage = "Segui il cunicolo ritenendolo pi&ugrave; sicuro. In effetti la strada &egrave "
						+ "tranquilla e il cammino prosegue senza intoppi.<br/>";
			}
		} else {
			if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(1).getItem();
				eventResultImage = "";
				eventResultMessage = "Cuntinui sulla strada principale, attraversando il cunicolo e ti rendi conto che "
						+ "hai fatto una scelta eccellente. Infatti trovi un vecchio forziere di metallo scrostato dal calore "
						+ "del luogo. Lo apri e trovi un oggetto vecchio, ma ancora utilizzabile: '" + item.getName() + "'.<br/>"
						+ "Continui poi sulla tua strada.";
				playerInventoryDB.addItems(item);
				
			} else if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "Imbocchi il cunicolo considerandolo pi&ugrave; sicuro, in effetti &egrave; proprio "
						+ "cos&igrave;. In pi&ugrave, non &egrave; neppure molto lungo, infatti in poco tempo ti trovi "
						+ "dalla parte opposta del ponte senza aver dovuto rischiare l'attraversata.";
			} else {
				eventResultImage = "";
				eventResultMessage = "Continui per il cunicolo dato che il ponte non ti dava molta sicurezza.<br/>"
						+ "La strada &egrave; comoda anche se un po' lunga. Cammini per un bel po', la strada in effetti "
						+ "&egrave; lunga... Decisamente luuuuuuunga...<br/>"
						+ "Dopo quasi due ore di cammino termini finalmente il sentiero, non hai incontrato pericoli, "
						+ "ma la stanchezza di questa interminabile camminata si fa sentire.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO bridgeAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				if (percentTest((rollD100/2)+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "Attaversi il ponte, sembra andare tutto bene, ma all'improvviso le assi "
							+ "di legno vecchio iniziano a sgretolarsi.<br/>"
							+ "Corri il pi&ugrave; velocemente che puoi e per salvarti e raggiungere la parte opposta "
							+ "e ce la fai proprio per un pelo."
							+ "<br/>Spaventata, ma salva ti trovi dalla sponda opposta "
							+ "del crepaccio.";
				} else {
					eventResultImage = "";
					eventResultMessage = "Attaversi il ponte, sembra andare tutto bene, ma all'improvviso le assi "
							+ "di legno vecchio iniziano a sgretolarsi.<br/>"
							+ "Corri con tutta la forza che hai, ma non riesci a raggiungere la parte opposta e cadi.<br/>"
							+ "Afferri una corda del ponte che ti fa oscillare e colpire la parete rocciosa. L'impatto &egrave; "
							+ "forte e ti procuri delle ferite gravi.";
					adventureDB.decreasePlayerHealth();
					adventureDB.decreasePlayerHealth();
				}
			} else {
				eventResultImage = "";
				eventResultMessage = "Attaversi il ponte, sembra andare tutto bene, ma all'improvviso le assi "
						+ "di legno vecchio iniziano a sgretolarsi.<br/>"
						+ "Corri con tutta la forza che hai, ma per poco non raggiungi la parte opposta.<br/>"
						+ "Lo slancio ti fa arrivare sulla parete rocciosa sotto al ponte. L'impatto &egrave; stato "
						+ "forte e ti ha procurato qualche graffio. Fortunatamente, riesci a scalare la parete e a raggiungere "
						+ "la parte opposta del ponte.";
				adventureDB.decreasePlayerHealth();
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "Attraversi il ponte per far prima, in effetti in un attimo sei dalla parte opposta e senza "
						+ "molti problemi.<br/>"
						+ "Ti rendi conto che hai anche tempo per accamparti, riposare e mangiare qualcosa.<br/>"
						+ "Dopo questa sosta ti senti completamente rigenerata"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
				adventureDB.increasePlayerHealth();
			} else {
				eventResultImage = "";
				eventResultMessage = "Attraversi il ponte, ma non puoi andare molto veloce. Fai passi brevi e lenti, ma riesci a "
						+ "raggiungere la parte opposta. Forse alla fine non hai risparmiato molto tempo...";
			}
		} else {
			if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				eventResultImage = "";
				eventResultMessage = "Attraversi il ponte e scopri che non era la strada principale, ma una stanza separata.<br/>"
						+ "La stanza contiene un bellissimo baule d'oro che al suo interno custodiva '" + item.getName() + "'.<br/>"
						+ "Lo prendi e torni indietro per proseguire sulla sentiero principale.";
				playerInventoryDB.addItems(item);
			} else if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "Attraversi il ponte per far prima, in effetti in un attimo sei dalla parte opposta e senza "
						+ "molti problemi.<br/>"
						+ "Ti rendi conto che hai anche tempo per accamparti, riposare e mangiare qualcosa.<br/>"
						+ "Dopo questa sosta ti senti completamente rigenerata"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
				adventureDB.increasePlayerHealth();
			} else {
				eventResultImage = "";
				eventResultMessage = "Attraversi il ponte e proprio quando sei nel mezzo vedi un'oscura figura incappucciata "
						+ "dalla parte opposta. La figura armeggia con un coltello e ti urla: 'Ehi tu! Lanciami l'oro che hai "
						+ "con te se non vuoi finire sul fondo del crepaccio'.<br/>";
				if (playerInventoryDB.getGold() >= 5L) {
					final long goldToRemove;
					if (playerInventoryDB.getGold() >= 10L) {
						goldToRemove = 10L;
					} else {
						goldToRemove = 5L;
					}
					eventResultMessage += "Il losco individuo fa sul serio, prendi un sacchetto con " + Long.toString(goldToRemove) 
							+ " monete dallo zaino e lo lanci. "
							+ "La figura incappucciata corre a prenderlo e tu ne approfitti per metterti in salvo."
							+ "<br/>Intanto che tu raggiungevi la terra ferma, la figura incappucciata si prendeva i soldi e "
							+ "spariva.";
					playerInventoryDB.removeGold(goldToRemove);
				} else {
					eventResultMessage += "Non possiedi abbastanza oro per poter soddisfare la richiesta del losco individuo "
							+ "e quindi vedi il coltello tagliare le funi del ponte. Nonostante lo scatto che provi a fare, non "
							+ "raggiungi la sponda opposta, ma ti lanci contro la parete rocciosa. L'impatto &egrave; stato "
							+ "forte e ti ha procurato qualche graffio. Fortunatamente, riesci a scalare la parete e a raggiungere "
							+ "la parte opposta del ponte, ma la figura incappuciata &egrave; sparita.";
					adventureDB.decreasePlayerHealth();
				}
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
