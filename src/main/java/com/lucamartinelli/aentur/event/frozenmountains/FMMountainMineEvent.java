package com.lucamartinelli.aentur.event.frozenmountains;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.event.EventActionOld;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-fm-16")
@ApplicationScoped
public class FMMountainMineEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-fm-16", 
			"Lungo la strada scorgi una caverna che rientra nella montagna. Ti avvicini e "
			+ "vedi che e' una vecchia miniera. All'ingresso c'e' ancora il forno fusorio pronto "
			+ "all'uso. Vedi inoltre delle lampade da miniera che possono tornare utili per "
			+ "esplorarla.",
			new String[] {"Ignora la miniera", "Estrai minerali e prova a fonderli", "Esplora le profondita'"});
	
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
			return ImmutablePair.of(extractAndForgeAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(exploreAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	

	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-16-ignore-1";
				eventResultMessage = "Noti che sul terreno ci sono vecchie ossa. Sembra che qualche animale possa aver fatto di "
						+ "questa caverna la sua tana, meglio allontanarsi senza rischi";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-16-ignore-2";
				eventResultMessage = "Decidi di ignorare la miniera, ma appena ti volti senti un gran frastuono sopra di "
						+ "te e vedi che una valanga da sopra la miniera sta scendendo gi&ugrave;. Non fai tempo a "
						+ "fuggire che vieni investita dalla neve. Subisci una ferita";
			}
		} else {
			eventResultImage = "event-fm-16-ignore-3";
			eventResultMessage = "Ignori la miniera e tutto quello che potrebbe esserci dentro, sia nel bene che nel male";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO extractAndForgeAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-16-forge-1";
				eventResultMessage = "Con determinazione colpisci il muro con un vecchio piccone che hai trovato. Il colpo "
						+ "scalfisce la parete e intravedi qualcosa brillare. Con felicit&agrave; dai un altro colpo"
						+ " ben assestato, ma questo, oltre a ropere la parete, fa crepare la struttura del "
						+ "tunnel. Il soffitto inizia a cedere e fuggi prima che la miniera crolli completamente";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-16-forge-1";
				eventResultMessage = "Con determinazione colpisci il muro con un vecchio piccone che hai trovato. Il colpo "
						+ "scalfisce la parete e intravedi qualcosa brillare. Con felicit&agrave; dai un altro colpo "
						+ "ben assestato, ma questo, oltre a ropere la parete, indebolisce il soffitto della "
						+ "grotta. In un attimo crollano i rinforzi del tunnel e vieni travolta da massi e polvere"
						+ ". Ferita ti liberi e te ne vai";
			}
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				final int gold = getRandomInt(6) + 2;
				playerInventoryDB.addGold(gold);
				eventResultImage = "event-fm-16-forge-2";
				eventResultMessage = "Trovi un buon posto per l'estrazione. Con calma impieghi del tempo per estrarre dell'oro "
						+ "grezzo dalla parete. Ti avvicini al forno e fondi l'oro forgiando delle monete.<br/>"
						+ "Guadagni " + gold + " monete d'oro";
			} else {
				if (percentTest(rollD100)) {
					final RewardDTO reward = rewardEJB.getReward(1);
					playerInventoryDB.addItems(reward.getItem());
					reward.resolveItemLabels();
					eventResultImage = "event-fm-16-forge-3";
					eventResultMessage = "Trovi della roccia luccicante e la estrai spendendo del tempo. &Egrave; del mithril e "
							+ "ti appresti subito a fonderlo per formare un buon equipaggiamento. Purtroppo "
							+ "le tue doti di forgiatura non sono elevate e riesci a produrre solo dell'"
							+ "attrezzatura di bassa qualit&agrave;. Produci <b>" + reward.getItem().getName() + "</b>";
				} else {
					final int gold = getRandomInt(1) + 1;
					playerInventoryDB.addGold(gold);
					adventureDB.decreasePlayerHealth();
					String mOro = gold == 1 ? " moneta d'oro" : " monete d'oro";
					eventResultImage = "event-fm-16-forge-4";
					eventResultMessage = "Mentre estrai dell'oro grezzo da una parete, pensi che sia la tua giornata fortunata "
							+ "e che riuscirai a fare un bel bottino, ma non ti accorgi del grosso orso che si "
							+ "avvicina alle tue spalle. Quando senti il suo ringhio e' troppo tardi e vieni "
							+ "colpita da una zampata potente. Ti ferisce, ma riesci a fuggire con pochissimo oro"
							+ "<br/>Ricevi una ferita, ma anche " + gold + mOro;
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				final RewardDTO reward = rewardEJB.getReward(2);
				playerInventoryDB.addItems(reward.getItem());
				reward.resolveItemLabels();
				eventResultImage = "event-fm-16-forge-5";
				eventResultMessage = "Estrai dell'ottimo ferro blu e del carbonio, ideale per una lega d'acciaio blu."
						+ "Accendi forno fusorio e mentre si scalda trovi dei progetti di equipaggiamento "
						+ "lasciati tra le cose dei minatori. Provi a seguirne uno e con molta fortuna "
						+ "produci un bel pezzo di equipaggiamento: <b>" + reward.getItem().getName() + "</b>";
			} else {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(6) + 2;
					playerInventoryDB.addGold(gold);
					eventResultImage = "event-fm-16-forge-2";
					eventResultMessage = "Trovi un buon posto per l'estrazione. Con calma impieghi del tempo per estrarre dell'oro "
							+ "grezzo dalla parete. Ti avvicini al forno e fondi l'oro forgiando delle monete.<br/>"
							+ "Guadagni " + gold + " monete d'oro";
				} else {
					eventResultImage = "event-fm-16-forge-6";
					eventResultMessage = "Estrai del buon ferro rosso dalla miniera, ma fonderlo non &egrave; semplice. Non riesci ad avere "
							+ "temperatura adeguata e la colata presenta molti grumi. Il risultato non si pu&ograve; certo "
							+ "chiamare un pezzo di equipaggiamento... Beh hai creato un ferma porta bizzarro...<br/>"
							+ "Abbandoni l'idea di forgiare e lasci la miniera";
				}
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO exploreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-16-explore-1";
				eventResultMessage = "Prendi una lanterna e l'accendi, ma non parte. Beh ne provi un'altra ma anche questa non va."
						+ "Controlli il livello di carburante e noti che sono tutte scariche. Non vedendo niente "
						+ "per riempirle abbandoni l'idea dell'esplorazione e continui sulla tua strada";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-16-explore-2";
				eventResultMessage = "Pronta per l'esplorazione prendi una lanterna e l'accendi. Deve essere difettosa visto che "
						+ "appena l'accendi questa esplode in una fiammata. Vieni investita dall'esplosione e "
						+ "rimani ferita.";
			}
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-fm-16-explore-3";
				eventResultMessage = "Accendi la lanterna e ti avventuri nei cunicoli della minera. Vaghi per decine di minuti nel "
						+ "tunnel senza trovare niente, fino a quando arrivi in una stanza che sembra proprio la "
						+ "dispensa dei minatori. Ci sono ancora vasetti di cibo intatto e ben conservato. Ne "
						+ "approfitti per mangiare e recuperare le forze. Non sembra esserci altro di utile, quindi "
						+ "te ne vai";
			} else {
				if (percentTest(rollD100)) {
					eventResultImage = "event-fm-16-explore-1";
					eventResultMessage = "Vaghi per minuti senza trovare nulla, poi la lanterna si affievolisce e ti affretti a tornare "
							+ "all'ingresso. Appena raggiungi l'entrata della miniera la lampada si spegne. Te ne vai cos&igrave; "
							+ "a zampe vuote";
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					eventResultImage = "event-fm-16-explore-4";
					eventResultMessage = "Vaghi per minuti senza trovare nulla, poi la lanterna si affievolisce e ti affretti a tornare "
							+ "all'ingresso, ma non fai in tempo a raggiungerlo che questa si spegne e cala il buio. "
							+ "A tentoni cerchi di trovare l'uscita ricordando la strada fatta, con estrema difficolt&agrave; "
							+ "alla fine vedi la luce dell'uscita e la raggiungi. Questa esperienza per&ograve; ti ha segnato "
							+ "e non smetti di tremare dalla paura.<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				final int gold = getRandomInt(2) + 2;
				adventureDB.increasePlayerHealth();
				playerInventoryDB.addGold(gold);
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
				eventResultImage = "event-fm-16-explore-5";
				eventResultMessage = "Accendi la lanterna e ti avventuri nei cunicoli della minera. Vaghi per decine di minuti nel "
						+ "tunnel fino a che non trovi una stanza con un vecchio baule impolverato. Lo apri e all'interno "
						+ "trovi " + gold + " monete, una pozione rossa e una lettera che dice: 'Caro Reginald, ti ringrazio "
						+ "per l'ultimo carico. Ti lascio questo premio e una pozione se qualcuno dei tuoi si dovesse sentire stanco.'"
						+ "<br/>Dato che <i>Reginald</i> non &egrave; nei paraggi decidi di prendere il contenuto e bere la "
						+ "pozione per alleggerire la tua stanchezza. Ti senti improvvisamente rinato e in piene forze.<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
					eventResultImage = "event-fm-16-explore-6";
					eventResultMessage = "Accendi la lanterna e ti avventuri nei cunicoli della minera. Dopo diverso tempo di cammino "
							+ "vedi una luce in lontananza. La raggiungi e scopri che &egrave; un'uscita secondaria. Da qui "
							+ "hai una buona visibilit&agrave; della strada da percorrere e sei certa che hai anche risparmiato "
							+ "tempo di percorso. Inoltre vedi il tuo prossimo avversario e questo ti da un vantaggio "
							+ "strategico.<br/>"
							+ "-Nuovo effetto attivo-";
				} else {
					eventResultImage = "event-fm-16-explore-1";
					eventResultMessage = "Accendi la lanterna e ti avventuri nella miniera, ma la tua esplorazione dura gran poco perch&eacute; "
							+ "trovi la strada bloccata da un vecchio crollo. &Egrave; impossibile continuare.";
				}
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
