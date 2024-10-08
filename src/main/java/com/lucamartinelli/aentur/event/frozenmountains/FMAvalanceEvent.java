package com.lucamartinelli.aentur.event.frozenmountains;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.languagecontent.ResolveContentsUtils;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-fm-17")
@ApplicationScoped
public class FMAvalanceEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-fm-17", 
			"Il paesaggio &egrave; silenzioso durante la tua camminata tra la neve e sotto il sole."
			+ " Ad un tratto senti un rombo lontano, ti giri verso la vetta del monte e vedi che una "
			+ "costa di neve si sta staccando. Sta per crollare una valanga e viene proprio nella tua direzione",
			new String[] {"Corri a lato", "Corri verso valle", "Cerca rifugio"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return ImmutablePair.of(runForwardAction(rollD100, rollD12), null);
		case 2:
			return ImmutablePair.of(runDownAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(exploreAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	

	private EventResponseVO runForwardAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 5 && !percentTest(rollD100/2)) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fm-17-run-1";
				eventResultMessage = "Corri il pi&ugrave; velocemente che puoi lungo la tua strada, ma vedi che la grandezza "
						+ "della valanga &egrave; troppo ampia e non riuscirai a sfuggire in lunghezza. Quando "
						+ "per&ograve; sembrava tutto perduto, vedi la forza della neve affievolirsi e che la "
						+ "valanga piano piano si sta fermando. Dopo qualche istante la neve si arres completamente "
						+ "e il disasto rimane ben lontano da te. Con questo colpo di fortuna riesci "
						+ "a proseguire il tuo percorso normalmente";
			} else {
				final int lostGold = getRandomInt(4) + 2;
				adventureDB.decreasePlayerHealth();
				playerInventoryDB.removeGold(lostGold);
				eventResultImage = "event-fm-17-run-2";
				eventResultMessage = String.format("Tenti la fuga, ma la valanga non perdona, ti trascina a valle colpendoti con "
						+ "detriti della montagna, subisci ferite e perdi dell'oro nell'impatto (perdi "
						+ "%d monete)", lostGold);
			}
		} else {
			if (!percentTest(rollD100-(rollD100/3))) {
				eventResultImage = "event-fm-17-run-1";
				eventResultMessage = "Corri il pi&ugrave; velocemente che puoi lungo la tua strada, ma vedi che la grandezza "
						+ "della valanga &egrave; troppo ampia e non riuscirai a sfuggire in lunghezza. Quando "
						+ "per&ograve; sembrava tutto perduto, vedi la forza della neve affievolirsi e che la "
						+ "valanga piano piano si sta fermando. Dopo qualche istante la neve si arres completamente "
						+ "e il disasto rimane ben lontano da te. Con questo colpo di fortuna riesci "
						+ "a proseguire il tuo percorso normalmente";
			} else {
				ItemDTO item = rewardEJB.getReward(1).getItem();
				playerInventoryDB.addItems(item);
				item = ResolveContentsUtils.resolveLabels(item);
				eventResultImage = "event-fm-17-run-3";
				eventResultMessage = "Corri avanti per la tua strada nel modo pi&ugrave; rapido che puoi. La valanga era iniziata "
						+ "lontano e questo ti da del tempo per lasciare la zona d'impatto. Infatti, la vedi "
						+ "passare a qualche metro da dove sei ora e scampi al disastro senza problemi. In pi&ugrave; "
						+ "dopo il passaggio del fiume di neve, vedi che qualcosa nel manto smosso brilla. Ti "
						+ "avvicini con attenzione e trovi un oggetto abbandonato: " + item.getName();
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO runDownAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3 && percentTest(rollD100/3)) {
			if (percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-17-run-1";
				eventResultMessage = "Tenti di scendere verso valle per guadagnare tempo, allontanarti dalla "
						+ "valanga e magari trovare qualche posto sicuro, ma questo allunga solo "
						+ "di poco il tempo prima dell'impatto. Alla fine la valanga ti colpisce, "
						+ "ma almeno la sua furia si e' affievolita di poco e quasto ti procura "
						+ "qualche ferita, ma non ti sballottola e sbatte troppo forte e lontano";
			} else {
				adventureDB.decreasePlayerHealth();
				final int playerItems = playerInventoryDB.getItems().size();
				if (playerItems == 0) {
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-fm-17-run-1";
					eventResultMessage = "Cerchi di scendere verso valle per allontanarti dal disastro, ma senza successo"
							+ ". La valanga non perdona e ti colpisce con una forza senza precedenti causandoti "
							+ "delle gravi ferite e contusioni";
				}
				final int lostItem = getRandomInt(playerItems);
				final String lostItemName = playerInventoryDB.getItems().remove(lostItem).getName();
				
				eventResultImage = "event-fm-17-run-1";
				eventResultMessage = "Cerchi di scendere verso valle per allontanarti dal disastro, ma senza successo"
						+ ". La valanga non perdona e ti colpisce con una forza senza precedenti. Ti "
						+ "ferisce e la spinta di fa anche perdere un oggetto dal tuo inventario. "
						+ "Hai perso: " + lostItemName;
			}
			
			return new EventResponseVO(eventResultMessage, eventResultImage);
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.decreasePlayerHealth();
				final int gold = getRandomInt(2) + 1;
				ItemDTO item = rewardEJB.getReward(1).getItem();
				playerInventoryDB.addItems(item);
				item = ResolveContentsUtils.resolveLabels(item);
				eventResultImage = "event-fm-17-run-4";
				eventResultMessage = "Scendi verso valle con la speranza di scampare alla neve, quando senti delle urla "
						+ "dietro di te. Un altro topino pi&ugrave; in alto dalla tua posizione sta scendendo "
						+ "con quello che sembra uno slittino. Arriva velocemente da te, ma anche la valanga "
						+ "vi raggiunge non lasciandovi scampo. Venite sbalzati e compiti da detriti, ma "
						+ "fortunatamente non siete stati sepolti dalla neve. Vi alzate un po' doloranti e "
						+ "gardando in giro notate che tra la neve c'&egrave; un vecchio baule chiuso. Lo straniero"
						+ " si propone di aiutati ad aprirlo a patto che facciate a met&agrave; del contenuto. Accetti "
						+ "e all'interno trovate dell'oro e un antico oggetto. '<i>Non sono interessato a quell'"
						+ "artefatto, prendo solo l'oro</i>' dice lo straniero. Dividete le monete e tieni l'oggetto."
						+ " (guadagni " + gold + " oro e " + item.getName() + ", ma resti ferita)";
			} else {
				if (percentTest(rollD100)) {
					eventResultImage = "event-fm-17-run-4";
					eventResultMessage = "Scendi verso valle con la speranza di scampare alla neve, quando senti delle urla "
							+ "dietro di te. Un altro topino pi&ugrave; in alto dalla tua posizione sta scendendo "
							+ "con quello che sembra uno slittino. Arriva velocemente da te e cerchi di "
							+ "saltare sul mezzo in corsa, ma e' troppo veloce e non riesci a salire in "
							+ "tempo rimanendo nella neve. Ormai la valanga ti ha raggiunto e ti sommerge. "
							+ "Resci sotto la neve per qualche minuto prima di essere trovata dallo straniero "
							+ "con lo slittino. Hai diverse ferite gravi e un principio di ipotermia, ma lo "
							+ "sciatore straniero ha delle capacita' mediche incredibili e ti sistema ogni ferita "
							+ "in modo professionale e poi dice: 'Beh sei fortunata ad aver trovato una guardia "
							+ "del soccorso alpino. Vedrai che tra un attimo sara' come se non fosse successo "
							+ "niente.'. Infatti dopo qualche medicazione e un te' caldo preparato al momento"
							+ " torni in piedi e dimentichi la valanga. Saluti la guardia alpina e continui "
							+ "il tuo viaggio";
				} else {
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-fm-17-run-4";
					eventResultMessage = "Scendi verso valle con la speranza di scampare alla neve, quando senti delle urla "
							+ "dietro di te. Un altro topino pi&ugrave; in alto dalla tua posizione sta scendendo "
							+ "con quello che sembra uno slittino. Arriva velocemente da te e cerchi di "
							+ "saltare sul mezzo in corsa, ma e' troppo veloce e non riesci a salire in "
							+ "tempo rimanendo nella neve. Ormai la valanga ti ha raggiunto e ti sommerge. "
							+ "Resci sotto la neve per qualche minuto prima di essere trovata dallo straniero "
							+ "con lo slittino. Hai diverse ferite gravi e un principio di ipotermia, lui cerca "
							+ "di curarti il meglio che puo', ma alcune ferite rimangono doloranti. Lo straniero "
							+ "sciatore si scusa e dopo aver fatto il possibile se ne va, sicuramente senza di "
							+ "lui sarebbe andata molto peggio";
				}
			}
			
			return new EventResponseVO(eventResultMessage, eventResultImage);
			
		} else {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-fm-17-run-4";
				eventResultMessage = "Scendi verso valle con la speranza di scampare alla neve, quando senti delle urla "
						+ "dietro di te. Un altro topino pi&ugrave; in alto dalla tua posizione sta scendendo "
						+ "con quello che sembra uno slittino. Arriva velocemente da te e con un salto "
						+ "agilissimo riesci a montare sullo slittino in corsa guadagnando un passaggio "
						+ "dallo sconosciuto. Scampate al pericolo e il topino sciatore ti spiega: 'Mi "
						+ "dispiace amico, &egrave; stata colpa mia. La valanga intendo, stavo slittando quando "
						+ "il manto di neve &egrave; ceduto e sono scappato di corsa, ti ho messo in pericolo, "
						+ "perdonami. Permettimi di offrirti una zuppa calda e un te', ho con me tutto "
						+ "il necessario per costruire un accampamento'. Cosi' in un attimo mont&ograve; una tenda "
						+ "accese un fuoco e fece bollire delle verdure dall'aria invitante. Mangi la zuppa e "
						+ "bevi il t&egrave; offerto recuperando le forze. Il topino ti saluta e ti augura buona "
						+ "fortuna";
			} else {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(6) + 1;
					eventResultImage = "event-fm-17-run-5";
					eventResultMessage = "Inizi a scendere verso valle, quando ti accorgi che non serve poich&eacute; la valanga "
							+ "perde la sua intensit&agrave; subito. Ti volti e guardi la neve smossa, quando noti "
							+ "delle cose brillare; sono delle pepite d'oro! Raccogli pepite per il valore di"
							+ " " + gold + " monet" + (gold == 1 ? 'a' : 'e') + "d'oro";
				} else {
					eventResultImage = "event-fm-17-run-1";
					eventResultMessage = "Inizi a scendere verso valle, quando ti accorgi che non serve poich&egrave; la valanga "
							+ "perde la sua intensit&agrave; subito. Ti volti e guardi la neve smossa, quando noti "
							+ "delle cose brillare; sono delle pepite d'oro! Inizi a raccogliere le pepite "
							+ "quando ti accorgi che non &egrave; oro, ma solo della prietra gialla e sporca. Lasci i "
							+ "sassi senza valore e continui il tuo viaggio";
				}
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO exploreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				final int playerItems = playerInventoryDB.getItems().size();
				if (playerItems == 0) {
					final int lostGold = getRandomInt(6) + 2;
					playerInventoryDB.removeGold(lostGold);
					eventResultImage = "event-fm-17-run-2";
					eventResultMessage = "Cerchi un rifugio nella zona, ma in vano. In poco tempo la valanga ti raggiunge "
							+ "e non ti lascia scampo, subisci delle ferite e l'impatto ti fa perdere dalla "
							+ "borsa " + lostGold + " di oro";
				}
				final int nObjInventory = playerInventoryDB.getItems().size();
				final ItemDTO lostItem = playerInventoryDB.getItems().get(getRandomInt(nObjInventory));
				playerInventoryDB.removeItems(lostItem);
				eventResultImage = "event-fm-17-run-2";
				eventResultMessage = "Cerchi un rifugio nella zona, ma in vano. In poco tempo la valanga ti raggiunge "
						+ "e non ti lascia scampo, subisci delle ferite e l'impatto ti fa perdere dalla "
						+ "borsa l'oggetto: '" + lostItem.getName() + '\'';
			} else {
				final int lostGold = getRandomInt(6) + 2;
				playerInventoryDB.removeGold(lostGold);
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-fm-17-explore-1";
				eventResultMessage = "Durante la ricerca perdi la tua borsa con le monete d'oro, fortunatamente trovi "
						+ "una grande roccia che funge da bariera per mitigare la valanga, ma la tua "
						+ "borsa viene sommersa dalla neve. <br>La roccia ti protegge dai danni piu' gravi,"
						+ " ma subisci comunque qualche ferita.<br>"
						+ "Finita la valanga ti metti a cercarla, ci vogliono ore prima di trovarla, "
						+ "ma alla fine la recuperi, anche se l'impatto "
						+ "ti ha fatto perdere " + lostGold + " monete";
			}
			
			return new EventResponseVO(eventResultMessage, eventResultImage);
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				eventResultImage = "event-fm-17-explore-2";
				eventResultMessage = "Tenti velocemente di trovare un rifugio correndo lungo la tua strada e improvvisamente "
						+ "trovi un vecchio capanno di pietra. Entri rapidamente e sbarri la porta e le finestre."
						+ "<br>La valanga passa e la baita di pietra regge il colpo. Quando la situazione si calma "
						+ "riapri la porta e ti ritrovi un muro di neve. Con una pala trovata nel capanno inizi a"
						+ " ripulire l'entrata e riesci ad uscire senza problemi";
			} else {
				if (percentTest(rollD100)) {
					final int gold = getRandomInt(3) + 2;
					playerInventoryDB.addGold(gold);
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-fm-17-explore-3";
					eventResultMessage = "Cerchi un rivogio, ma sembra proprio che non ci sia nulla nella zona. Quando ormai "
							+ "le speranze si stavano spegnendo, trovi un tronco concavo di un grosso albero. "
							+ "Non &egrave; il massimo, ma meglio di niente. Ti ripari e agganci al tronco sperando in "
							+ "bene. L'impatto con la valanga &egrave; violento, ma attenuato dall'albero. Subisci qualche "
							+ "danno da schegge, sassi e detriti trasportati dalla valanga.<br>"
							+ "Quando il fiume di neve &egrave; ormai passato riapri gli occhi e noti che all'interno del "
							+ "tronco ormai spezzato c'&egrave; un sacchetto di monete nascosto da chissa' chi.<br>"
							+ "Guadagni " + gold + " monete d'oro";
				} else {
					adventureDB.decreasePlayerHealth();
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-fm-17-run-2";
					eventResultMessage = "Cerchi un rifugio nella zona, ma in vano. In poco tempo la valanga ti raggiunge "
							+ "e non ti lascia scampo, subisci delle ferite gravi e passa diverso tempo "
							+ "prima che tu riesca a riprenderti e liberarti dalla neve";
				}
			}
			
			return new EventResponseVO(eventResultMessage, eventResultImage);
		} else {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-fm-17-explore-4";
				eventResultMessage = "Trovi velocemente una grotta ben riparata. All'interno ci sono anche dei vecchi "
						+ "sacchi a pelo, qualche padella e una postazione per il fuoco da campo. Mentre aspetti che "
						+ "la situazioni si stabilizzi, accendi un fuoco e inizi a preparare uno spuntino caldo.<br>"
						+ "Dopo il pasto ti stendi a riposare un momento e al tuo risveglio il peggio e' "
						+ "passato. Ricominci il tuo viaggio piena di energie";
			} else {
				if (percentTest(rollD100)) {
					ItemDTO item = rewardEJB.getReward(1).getItem();
					playerInventoryDB.addItems(item);
					item = ResolveContentsUtils.resolveLabels(item);
					eventResultImage = "event-fm-17-explore-1";
					eventResultMessage = "Trovi una piccola grotta, ma e' un riparo perfetto per scampare alla valanga."
							+ "<br>Mentre attendi la fine, noti una vecchia borsa un po' rammendata. La "
							+ "apri e trovi '" + item.getName() + "'.<br>Finita la valanga riparti con il "
									+ "tuo nuovo oggetto";
				} else {
					eventResultImage = "event-fm-17-explore-2";
					eventResultMessage = "Trovi un rifugio di fortuna tra le rovine di quella che doveva essere una vecchia baita "
							+ "di montagna. Miracolosamente riesci a scampare alla valanga e quando il fiume di "
							+ "neve passa, te ti rialzi illesa. Riprendi le tue cose e ricominci a camminare per "
							+ "la tua strada";
				}
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
