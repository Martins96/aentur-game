package com.lucamartinelli.aentur.event.frozenmountains;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-fm-15")
@ApplicationScoped
public class FMMountainLogHouseEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-fm-15", 
			"Camminando nella neve ti imbatti in una baita fatta di pietra e tronchi. Accanto alla casa "
			+ "c'&egrave; una piccola legnaia.",
			new String[] {"Ignora il luogo", "Controlla la baita", "Controlla la legnaia"});
	
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
			return ImmutablePair.of(houseAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(cellarAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-15-ignore-1";
				eventResultMessage = "Noti che il terreno &egrave; disseminato di trappole ad inciampo e tagliole, meglio allontanarsi";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-15-ignore-2";
				eventResultMessage = "Decidi di ignorare la casa, ma appena fai un passo senti un filo tirarsi; hai attivato una trappola "
						+ "ad inciampo e un dardo ti colpisce ad un braccio, ferita e con molta attenzioni ti allontani dal "
						+ "posto";
			}
		} else {
			eventResultImage = "event-fm-15-ignore-3";
			eventResultMessage = "Ignori la casa e tutto quello che potrebbe esserci dentro, sia nel bene che nel male";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO houseAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-15-ignore-1";
				eventResultMessage = "Noti che il terreno davanti all'entrata &egrave; disseminato di tagliole per orsi,"
						+ " non riesci a trovare un modo per evitarle o disinnescarle meglio allontanarsi";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-15-ignore-1";
				eventResultMessage = "Decidi di esplorare la casa, ma avvicinandoti alla porta fai scattare una tagliola e ti ferisce "
						+ "ad una gamba. Con forza, apri la trappola e con la gamba ferita ti allontani";
			}
		} else if (rollD12 < 7) {
			if (percentTest(rollD100)) {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(5) + 2;
					playerInventoryDB.addGold(gold);
					eventResultImage = "event-fm-15-house-1";
					eventResultMessage = "Apri la porta della casa, sembra abbandonata da tempo e prensenta molti rottami marci. "
							+ "Tenti di trovare qualcosa di utile e nascosto nei mobili disfati della sala trovi un"
							+ " sacchetto di monete, credi che non servano pi&ugrave; a nessuno e cos&igrave; aggiungi " + gold 
							+ " al tuo borsello";
				} else {
					eventResultImage = "event-fm-15-house-2";
					eventResultMessage = "Apri la porta della casa, ma tutto quello che trovi sono solo stanze vuote, l'interno sembra "
							+ "essere stato bruciato da un incendio che &egrave; divampato dal camino. In qualche modo &egrave; stato "
							+ "spento, ma ora non c'&egrave; pi&ugrave; nulla di utile";
				}
			} else {
				if (percentTest(rollD100)) {
					eventResultImage = "event-fm-15-house-3";
					eventResultMessage = "Ti avvicini alla casa, ma la porta &egrave; chiusa. Il gelo l'ha sigillata, la settatura &egrave; diventata "
							+ "un blocco unico con lo stipite laterale della porta.";
				} else {
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-fm-15-house-4";
					eventResultMessage = "Ti avvicini alla casa, ma la porta &egrave; chiusa. Tenti di forzarla, ma all'improvviso si apre e "
							+ "da dentro esce un troll dei ghiacci. Non fai tempo a presentarti che con un calcio di spazza fuori "
							+ "dalla propriet&agrave;, con qualche insulto in una lingua poco chiara richiude la porta. Ferita "
							+ "te ne vai";
				}
			}
		} else if (rollD12 < 10) {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-fm-15-house-5";
				eventResultMessage = "Entri nella casa, sembra abbandonata da tempo, ma i mobili sono ancora integri. Trovi coperte e "
						+ "dei ceppi di legna vicino al camino. Accendi un fuoco e riposi. Ti curi una ferita.";
			} else {
				eventResultImage = "event-fm-15-house-6";
				eventResultMessage = "Entri nella casa, sembra abbandonata da tempo, i mobili sono danneggiati per&ograve; ancora integri. "
						+ "Qualche belva servaggia deve aver saccheggiato il posto, cerchi di accendere un fuoco con dei "
						+ "ceppi trovati vicino al camino, ma la legna umida non fa partire il fuoco. Inoltre le "
						+ "finestre rotte non consentono di ripararsi dal gelo. Continui per la tua strada";
			}
		} else {
			if (percentTest(rollD100)) {
				RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				reward.resolveItemLabels();
				eventResultImage = "event-fm-15-house-7";
				eventResultMessage = "Entri nella casa e trovi una famiglia di topolini, il padre si presenta, dice di chiamarsi Oliver e "
						+ "ti chiede se stai partecipando alla gara della regina, alla tua affermazione risponde: <i>'Sai, "
						+ "un tempo ero un avventuriero come te, ma ora la mia vera avventura &egrave; qui, in questa casa con la "
						+ "mia famiglia. Vedo per&ograve; una forza e una determinazione in te che mi ricorda i tempi di quando "
						+ "ero giovane, aspetta un momento, ho una cosa che voglio darti'</i>."
						+ "Si allontana qualche istante per tornare con un oggetto coperto da un panno.<br/>"
						+ "<i>'Ecco prendi, mi ha portato fortuna nelle mie avventure, ora desidero che lo usi tu, a me "
						+ "non serve pi&ugrave; oramai'</i>, ricevi " + reward.getItem().getName();
			} else {
				final int goldRequested = getRandomInt(4) + 2;
				eventResultImage = "event-fm-15-ignore-8";
				String eventMsg = "Entri nella casa e trovi quel che sembra proprio una locanda. Il barista ti guarda e ti dice: <i>'"
						+ "Ehil&agrave; straniera, vuoi mangiare qualcosa? Il piatto di oggi &egrave; formaggio alla griglia con zucchine "
						+ "e un bel t&egrave; caldo finale per scaldarti. Il tutto costa solo " + goldRequested + ", ti va?'<br/>";
				if (playerInventoryDB.getGold() < goldRequested) {
					eventResultMessage = eventMsg.concat("Guardi nelle tasche, ma non hai abbastanza denaro per permetterti il pasto. "
							+ "Sconsolata, lasci la locanda e prosegui");
				} else {
					adventureDB.increasePlayerHealth();
					adventureDB.increasePlayerHealth();
					eventResultMessage = eventMsg.concat("Paghi il pasto al locandiere e mangi dell'ottimo formaggio. Riscaldata e "
							+ "riposata, riprendi il cammino con la salute al massimo.");
				}
			}
		}
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO cellarAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-15-ignore-1";
				eventResultMessage = "Noti che il terreno davanti all'entrata &egrave; disseminato di trappole ad inciampo "
						+ "e tagliole, non riesci a trovare un modo per evitarle o disinnescarle meglio allontanarsi";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-15-cellar-1";
				eventResultMessage = "Decidi di esplorare la legnaia, ma appena prima di entrare sprofondi nella neve. C'era una buca "
						+ "scavata da chiss&agrave; chi che ti ha intrappolata completamente e la neve ti avvolge. In qualche "
						+ "modo ne esci, ma sei completamente raffreddata e bagnata. <br/>"
						+ "Per evitare altre brutte sorprese lasci perdere il luogo";
			}
		} else if (rollD12 < 8) {
			if (percentTest(rollD100+rollD12)) {
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono aumentati di 1");
				eventResultImage = "event-fm-15-cellar-2";
				eventResultMessage = "Trovi diverse pozioni magiche, sembra un vecchio magazzino di un mago invece che una "
						+ "legniaia. Bevi una pozione e senti la forza magica scorrere in te.<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					eventResultImage = "event-fm-15-cellar-3";
					eventResultMessage = "Solo puzza e vecchi legnetti ammuffiti, nulla di utile qui.";
				} else {
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-fm-15-cellar-4";
					eventResultMessage = "Entri nella legnaia, trovi diversi tronchetti e rami, provi a prenderne qualcuno per fare un "
							+ "fal&ograve;, ma questi erano la tana di numerosi insetti e appena smovi la legna si agitano e "
							+ "ti attaccano, subisci delle ferite prima di liberartene e fuggire.";
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.increasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
				eventResultImage = "event-fm-15-cellar-5";
				eventResultMessage = "Entri nella legnaia e trovi dell'ottima legna. In men che non si dica fai un fal&ograve; e ti scaldi "
						+ "dal clima gelido esterno. Ti senti riscaldata e riposata<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(4) + 1;
					eventResultImage = "event-fm-15-cellar-6";
					eventResultMessage = "Entri nella legnaia e vedi un po' di confusione, presumi che sia abbandonata da tempo e "
							+ "cerchi qualcosa di utile. Mentre smuovi della legna per vedere se puoi recuperare "
							+ "qualcosa, trovi una vecchia cassetta. La apri e all'interno trovi delle monete."
							+ " Ricevi " + gold + " di oro";
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					eventResultImage = "event-fm-15-cellar-7";
					eventResultMessage = "Entri nella legnaia e trovi della vecchia e legna color viola. Infreddolita, ne raccogli un po' "
							+ "per fare un fal&ograve;. Accendi il fuoco, ma dopo poco dei fumi si alzano dalla legna; ti "
							+ "inizia a girare la testa e ti viene la nausea, forse non &egrave; stata una buona idea.<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		}
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
