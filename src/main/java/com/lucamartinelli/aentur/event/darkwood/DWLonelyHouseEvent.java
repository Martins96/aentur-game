package com.lucamartinelli.aentur.event.darkwood;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-dw-5")
@ApplicationScoped
public class DWLonelyHouseEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-dw-5", 
			"Durante il cammino ti imbatti in una casetta apparentemente abbandonata e solitaria nel bosco. Ha un ingresso "
			+ "per l'abitazione e uno per una cantina esterna",
			new String[] {"Ignora e prosegui", "Entra nella casa", "Entra nella cantina esterna"});
	
	
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
			return Response.ok(houseAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(cellarAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				return "Noti che il terreno e' disseminato di trappole ad inciampo e tagliole, meglio allontanarsi";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Decidi di ignorare la casa, ma appena fai un passo senti un filo tirarsi; hai attivato una trappola "
						+ "ad inciampo e un dardo ti colpisce ad un braccio, ferita e con molta attenzioni ti allontani dal "
						+ "posto";
			}
		} else {
			return "Ignori la casa e tutto quello che potrebbe esserci dentro, sia nel bene che nel male";
		}
	}

	private Object houseAction(int rollD100, int rollD12) {
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				return "Noti che il terreno davanti all'entrata e' disseminato di trappole ad inciampo "
						+ "e tagliole, non riesci a trovare un modo per evitarle o disinnescarle meglio allontanarsi";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Decidi di esplorare la casa, ma avvicinandoti alla porta fai scattare una tagliola e ti ferisce "
						+ "ad una gamba. Con forza, apri la trappola e con la gamba ferita ti allontani";
			}
		} else if (rollD12 < 7) {
			if (percentTest(rollD100)) {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(5) + 2;
					playerInventoryDB.addGold(gold);
					return "Apri la porta della casa, sembra abbandonata da tempo e prensenta molti rottami marci. "
							+ "Tenti di trovare qualcosa di utile e nascosto nei mobili disfati della sala trovi un"
							+ " sacchetto di monete, credi che non servano piu' a nessuno e cos' aggiungi " + gold 
							+ " al tuo borsello";
				} else {
					return "Apri la porta della casa, ma tutto quello che trovi sono solo stanze vuote";
				}
			} else {
				if (percentTest(rollD100)) {
					return "Ti avvicini alla casa, ma la porta e' chiusa. Tenti di forzarla, ma e' estremamente resistente "
							+ "e abbandoni l'idea di entrare";
				} else {
					adventureDB.decreasePlayerHealth();
					return "Ti avvicini alla casa, ma la porta e' chiusa. Tenti di forzarla, ma all'improvviso si apre e "
							+ "da dentro esce un troll. Non fai tempo a presentarti che con un calcio di spazza fuori "
							+ "dalla proprieta', con qualche insulto in una lingua poco chiara richiude la porta. Ferita "
							+ "te ne vai";
				}
			}
		} else if (rollD12 < 10) {
			if (percentTest(rollD100)) {
				final int gold = getRandomInt(8) + 3;
				playerInventoryDB.addGold(gold);
				return "Entri nella casa, sembra abbandonata da tempo, ma i mobili sono ancora integri. Non sembra esserci "
						+ "nessuno e ti prendi la liberta' di guardare in giro, in un cassetto della cucina trovi " + gold
						+ " monete d'oro, le metti nel borsello e te ne vai";
			} else {
				return "Entri nella casa, sembra abbandonata da tempo, ma i mobili sono ancora integri. Ma all'improvviso "
						+ "senti degli stani rumori e ululati. Di colpo le candele si accendono e un fantasma compare davanti "
						+ "al caminetto. Spaventatissima lasci la casa prima che le cose si mettano male";
			}
		} else {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				return "Entri nella casa e trovi una famiglia di topolini, il padre si presenta, dice di chiamarsi Mickey e "
						+ "ti chiede se stai partecipando alla gara della regina, alla tua affermazione risponde: <i>'Sai, "
						+ "un tempo ero un avventuriero come te, ma ora la mia vera avventura e' qui, in questa casa con la "
						+ "mia famiglia. Vedo pero' una forza e una determinazione in te che mi ricorda i tempi di quando "
						+ "ero giovane, aspetta un momento, ho una cosa che voglio darti'</i>."
						+ "Si allontana qualche istante per tornare con un oggetto coperto da un panno.<br/>"
						+ "<i>'Ecco prendi, mi ha portato fortuna nelle mie avventure, ora desidero che lo usi tu, a me "
						+ "non serve piu' oramai'</i>, ricevi " + reward.getItem().getName();
			} else {
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
				return "Entri nella casa e trovi una famiglia di topolini seduti ad una tavola imbandita, il padre "
						+ "si presenta, dice di chiamarsi Mickey e ti dice: <i>'Oh un ospite, non riceviamo molte "
						+ "visite qui nella foresta, ti prego, unisciti a noi per il pranzo, abbiamo delle ottime "
						+ "verdure al vapore cucinate da mia moglie'</i>, ti sieti al tavolo e partecipi al pranzo "
						+ "con la famiglia, tra racconti e risate finisci il pasto e ti senti ricaricato. Le tue ferite"
						+ " sono state curate. Ringrazi la famiglia che ti augura buona fortuna nella tua impresa";
			}
		}
	}

	private Object cellarAction(int rollD100, int rollD12) {
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				return "Noti che il terreno davanti all'entrata e' disseminato di trappole ad inciampo "
						+ "e tagliole, non riesci a trovare un modo per evitarle o disinnescarle meglio allontanarsi";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Decidi di esplorare la cantina in cerca di qualcosa, ma aprendo la porta fai scattare una "
						+ "trappola e un dardo ti ferisce ad una gamba. "
						+ "Abbandoni l'idea di esplorare il posto per paura di altre trappole";
			}
		} else if (rollD12 < 8) {
			if (percentTest(rollD100+rollD12)) {
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono aumentati di 1");
				return "Trovi diverse pozioni magiche, ne bevi una e senti la forza magica scorrere in te.<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					return "Solo puzza e vecchi vasetti ammuffiti, nulla di utile qui.";
				} else {
					adventureDB.decreasePlayerHealth();
					return "Entri nella cantina, ma dentro trovi un grosso orco che ti cattura. Con le sue mani ti "
							+ "stritola e ti ferisce, ma non appena molla un po' la presa riesci a scivolare fuori da "
							+ "quelle zampe e fuggire.";
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.increasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
				return "Entri nella cantina e trovi tantissimo cibo fresco. Data l'enorme quantita' nessuno notera' "
						+ "se qualcosina manca e ti servi un bel pranzetto. Alla fine del pasto ti senti riposata e "
						+ "piena<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(4) + 1;
					return "Entri nella cantina e vedi un po' di confusione, presumi che sia abbandonata da tempo e "
							+ "cerchi qualcosa di utile. In un vasetto sotto ad una montagna di polvere trovi delle "
							+ "monete. Ricevi " + gold + " di oro";
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					return "Entri nella cantina e trovi delle strane pozioni magiche. Incuriosita ne provi una, ma ti "
							+ "inizia a girare la testa e ti viene la nausea, forse non e' stata una buona idea.<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		}
	}

}
