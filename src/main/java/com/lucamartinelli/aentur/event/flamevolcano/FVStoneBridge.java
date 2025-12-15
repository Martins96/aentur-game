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

@Named("event-fv-24")
@ApplicationScoped
public class FVStoneBridge implements EventAction {

	private final EventDTO event = new EventDTO("event-fv-23", 
			"""
			Mentre esplori i tunnel della grotta vulcanica, il calore diventa insopportabile. 
			Davanti a te un ponte di roccia attraversa un fiume di lava ribollente. <br/>
			Sul lato opposto intravedi qualcosa che luccica tra le rocce. 
			Il ponte sembra instabile e alcuni punti sembrano gi&agrave; cedere. 
			Vicino a te, un antico meccanismo di pietra potrebbe abbassare una piattaforma alternativa, 
			ma &egrave; coperto di ruggine e cristalli vulcanici. <br/>
			Devi decidere come procedere per raggiungere l'altro lato.
			""",
			new String[] {"Attraversa il ponte instabile", "Attiva il meccanismo antico", "Cerca un percorso alternativo"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return ImmutablePair.of(crossBridgeAction(rollD100, rollD12), null);
		case 2:
			return ImmutablePair.of(ancientMachineAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(alternativePathAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	
	private EventResponseVO crossBridgeAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100+rollD12)) {
				eventResultImage = "";
				eventResultMessage = "Non appena ti appresti all'attraversata, il pote crolla. Fortunatamente "
						+ "non avevi neanche iniziato e te ne vai pensando 'Tanto non lo volevo attraversare davvero'";
			} else {
				eventResultImage = "";
				eventResultMessage = "Il ponte crolla sotto i tuoi piedi. Ti aggrappi al bordo con difficolt&agrave;, "
						+ "riportando ferite. <br/>"
						+ "La tua armatura &egrave; danneggiata dal calore estremo.<br/>"
						+ "-Nuovo effetto attivo-";
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (!percentTest(rollD100)) {
				if (!percentTest(rollD100+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "Il ponte cede completamente. Riesci a saltare indietro ma cadi malamente, ferendoti gravemente. <br/>"
							+ "Il calore estremo danneggia la tua pelle e ti ustiona";
					adventureDB.decreasePlayerHealth();
					adventureDB.decreasePlayerHealth();
				} else {
					eventResultImage = "";
					eventResultMessage = "L'attraversamento &egrave; teso ma riesci. <br/>"
							+ "Dall'altra parte non trovi nulla di particolare ma almeno sei riuscito a passare senza incidenti.";
				}
			} else {
				final int gold = rewardEJB.getReward(2).getGold();
				eventResultImage = "";
				eventResultMessage = "Riesci ad attraversare senza problemi. "
						+ "Trovi " + gold + " monete abbandonate da precedenti avventurieri tra le rocce";
				playerInventoryDB.addGold(gold);
			}
		} else {
			if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				eventResultImage = "";
				eventResultMessage = "Attraversi con agilit&agrave; incredibile. "
						+ "Il ponte inizia a crollare proprio mentre arrivi dall'altra parte. <br/>"
						+ "Tra le rocce trovi un forziere dimenticato con tesori preziosi. <br/>"
						+ "Hai trovato '" + item.getName() + "' e alcune monete: " + (item.getGoldValue() - 1);
				playerInventoryDB.addGold(item.getGoldValue() - 1);
				playerInventoryDB.addItems(item);
			} else if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				eventResultImage = "";
				eventResultMessage = "Procedi con cautela testando ogni passo. <br/>"
						+ "Il ponte regge perfettamente e dall'altra parte trovi un'antica reliquia incastonata nella roccia vulcanica."
						+ "Hai trovato '" + item.getName() + "'";
				playerInventoryDB.addItems(item);
			} else {
				eventResultImage = "";
				eventResultMessage = "Il ponte scricchiola pericolosamente. "
						+ "Passi di corsa e alcune pietre ti colpiscono ferendoti, ma arrivi dall'altra parte.";
				adventureDB.decreasePlayerHealth();
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO ancientMachineAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				if (percentTest((rollD100/2)+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "Il meccanismo si attiva, ma collassa velocemente. Rimani con la leva d'attivazione"
							+ " in mano e davanti a te rimangono solo un mucchio di rottami.";
				} else {
					eventResultImage = "";
					eventResultMessage = "Il meccanismo esplode parzialmente emettendo vapori magici e tossici. "
							+ "Vieni avvolto e il tuo equipaggiamento subisce danni."
							+ "-Nuovo effetto attivo-";
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
				}
			} else {
				eventResultImage = "";
				eventResultMessage = "L'antico meccanismo rilascia gas vulcanici che ti avvelenano.<br/>"
						+ "La piattaforma si blocca e alcune monete cadono nella lava durante la tua fuga."
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono diminuiti di 1");
				int goldToRemove = rewardEJB.getReward(1).getGold();
				playerInventoryDB.removeGold(goldToRemove);
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(1).getItem();
				eventResultImage = "";
				eventResultMessage = "La piattaforma scende dolcemente permettendoti un attraversamento sicuro. <br/>"
						+ "Trovi un oggetto forgiato nel calore vulcanico, ancora perfettamente conservato. <br/>"
						+ "Ottieni: " + item.getName();
				playerInventoryDB.addItems(item);
			} else {
				eventResultImage = "";
				eventResultMessage = "La piattaforma si abbassa permettendoti di passare, ma dalla parte opposta non trovi nulla";
			}
		} else {
			if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				eventResultImage = "";
				eventResultMessage = "Il meccanismo si attiva perfettamente rivelando un passaggio segreto. <br/>"
						+ "Scopri una camera nascosta con tesori antichi e una fonte termale curativa.<br/>"
						+ "Tra i tesori noti una cosa di valore e la prendi con te: " + item.getName();
				adventureDB.increasePlayerHealth();
				playerInventoryDB.addItems(item);
			} else if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "Il meccanismo funziona dopo qualche tentativo. <br/>"
						+ "Attraversi senza problemi e l'energia del vulcano sembra potenziare temporaneamente il tuo equipaggiamento.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
			} else {
				eventResultImage = "";
				eventResultMessage = "Il meccanismo si inceppa a met&agrave;. "
						+ "Provi a saltare l'ultimo tratto, ma ti procuri qualche contusione nell'atterraggio.";
				adventureDB.decreasePlayerHealth();
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO alternativePathAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				if (percentTest((rollD100/2)+rollD12)) {
					eventResultImage = "";
					eventResultMessage = "Trovi un passaggio stretto ma praticabile.<br/>"
							+ "Attraversi senza problemi particolari arrivando sano e salvo dall'altra parte.";
				} else {
					eventResultImage = "";
					eventResultMessage = "Ti ritrovi in una zona instabile che crolla.<br/>"
							+ "Scampi per miracolo, ma nella fuga ti rendi conto di aver perso delle monete";
					int goldToRemove = rewardEJB.getReward(1).getGold();
					playerInventoryDB.removeGold(goldToRemove);
				}
			} else {
				eventResultImage = "";
				eventResultMessage = "Trovi un sentiero naturale sicuro costeggiando le pareti.<br/>"
						+ "Sembra andare tutto bene finché non capisci di essere in una zona di netto svantaggio "
						+ "per la battaglia contro il prossimo nemico che si mostra in tutta la sua forza.<br/>"
						+ "-Nuovo effetto attivo-";
						eventEffectDB.setActiveEffect("I tiri <b>arma</b> e per i <b>test arma</b> sono diminuiti di 1");
						eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				ItemDTO item = rewardEJB.getReward(1).getItem();
				eventResultImage = "";
				eventResultMessage = "Trovi un sentiero naturale sicuro costeggiando le pareti.<br/>"
						+ "Scopri un antico oggetto abbandonato da qualcuno, trovi: " + item.getName();
				playerInventoryDB.addItems(item);
			} else if (percentTest((rollD100/2)+rollD12)) {
				eventResultImage = "";
				eventResultMessage = "Il percorso alternativo &egrave; pi&ugrave; lungo ma sicuro.<br/>"
						+ "Ti senti stanco dopo la lunga camminata, ma trovi alcuni depositi minerali preziosi lungo il tragitto "
						+ "che venderai a buon prezzo<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
				int gold = rewardEJB.getReward(2).getGold();
				playerInventoryDB.addGold(gold);
			} else {
				eventResultImage = "";
				eventResultMessage = "Il percorso è accidentato. Ti procuri qualche ferita minore scivolando sulle rocce vulcaniche affilate.";
				adventureDB.decreasePlayerHealth();
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "Scopri un tunnel nascosto che conduce a una camera segreta con molto oro.<br/>"
						+ "Il percorso &egrave; sicuro e trovi anche cristalli vulcanici curativi.";
				int gold = rewardEJB.getReward(2).getGold();
				playerInventoryDB.addGold(gold);
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
			} else if (percentTest(rollD100)) {
				eventResultImage = "";
				eventResultMessage = "Il percorso scelto rivela essere un vicolo cieco. Sconsolata torni indietro";
			} else {
				eventResultImage = "";
				eventResultMessage = "Ti perdi nei tunnel laterali perdendo tempo ed energie. "
						+ "Il calore estremo ti debilita e ti senti stanco."
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
