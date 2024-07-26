package com.lucamartinelli.aentur.event.darkwood;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-dw-4")
@ApplicationScoped
public class DWOldWomanEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-dw-4", 
			"Un'anziana donna con un lungo mantello nero e un cappuccio sul capo si mostra davanti a te. "
			+ "Tutto quello che riesci a vedere &egrave; la sua bocca storta con un ghigno quasi inquietante. <br/>"
			+ "<i>'Ehi tu, viaggi molto in cerca di avventure vero? Qui sotto al mantello ho una cosa che potrebbe "
			+ "interessarti, ma per averla potrei richiederti qualcosa come prezzo da pagare. Tutto dipende dal "
			+ "colore della perlina che pescherai da questo sacchetto'</i>"
			+ "L'anziana allunga una mano raggrinzita dal mantello e ti porge un sacchetto",
			new String[] {"Ringrazia e rifiuta", "Accetta la scommessa"});
	
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
			return ImmutablePair.of(betAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 6) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-dw-4-ignore-1";
				eventResultMessage = "Un po' spaventata dalla sua posa cupa e dall'aura apparentemente malvagia della donna preferisci "
						+ "non tentare la sorte e ringraziandola te ne vai. <i>'Peccato, avremmo potuto divertirci...'</i> "
						+ "sussurra mentre ti allontani";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-4-ignore-2";
				eventResultMessage = "Ringrazi e te ne vai, quando senti un ringhio alle spalle: <i>'Nessuno rifiuta le mie offerte "
						+ "senza essere punito!'</i>, appena ti giri vedi un demone sotto a quel mantello che con un "
						+ "fendente ti ferisce. <br/>Terrorizzata fuggi e lo semini";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
		} else {
			eventResultImage = "event-dw-4-ignore-1";
			eventResultMessage = "Ringrazi cortsemente la signora e prosegui. <i>'Va bene, poteva tornarti utile forse, "
					+ "ma come vuoi tu'</i> ti risponde mentre te ne vai";
			return new EventResponseVO(eventResultMessage, eventResultImage);
		}
	}
	
	private EventResponseVO betAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		String response = "Incuriosita tenti la sorte pescando una perlina dal sacchetto... ";
		if (rollD12 < 2) {
			if (percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
				eventResultImage = "event-dw-4-bet-1";
				eventResultMessage = response + " Appena infili la mano senti strane cose molli che si muovono, sfili la zampa e vedi che "
						+ "il sacchetto e' pieno di vermi, inorridita guardi la donna che inizia a gridare: <i>'Sei caduta "
						+ "nella mia trappola sciocca mortale, adesso prosciugher&ograve; la tua energia!'</i>, la donna &egrave; "
						+ "un demone che lancia una magia di assorbimento su di te. La magia ti ferisce e senti la tua "
						+ "forza svanire<br/>"
						+ "-Nuovo effetto attivo-";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				eventResultImage = "event-dw-4-bet-2";
				eventResultMessage = response + "Ma non appena ti avvicini vedi degli occhi rossi e dei denti da vampiro nel suo ghigno. "
						+ "Corn rapidita' spingi la donna e scappi velocemente. <i>Sei stato furbo questa volta, la sorte "
						+ "ti e' stata favorevole'</i>";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			}
		} else if (!percentTest(rollD12 * 8)) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-dw-4-bet-3";
				eventResultMessage = response + "Infili la mano e peschi una perlina viola con un teschio sopra. <i>'Oh, hai vinto "
						+ "una pozione velenosa, non ti preoccupare &egrave; gratis'</i>. Di colpo, la donna ti lancia "
						+ "boccetta con un liquido nero e fumi ti avvolgono e ti feriscono";
				return new EventResponseVO(eventResultMessage, eventResultImage);
			} else {
				if (percentTest(rollD100)) {
					eventResultImage = "event-dw-4-bet-4";
					eventResultMessage = response + "Infili una mano e peschi una perlina di vetro trasparente. <i>'Oh guarda, una "
							+ "perlina vuota, mi sa che per questa volta non vinci niente, buona fortuna per il futuro'"
							+ "</i> La donna sembra piu' delusa di te e se ne va";
					return new EventResponseVO(eventResultMessage, eventResultImage);
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					eventResultImage = "event-dw-4-bet-5";
					eventResultMessage = response + "Infili la mano e peschi una perlina nera. <i>'Eheh, abbiamo la vincitrice di una pozione, "
							+ "eccoti qui il tuo premio'</i>. La donna ti mostra una boccetta con un liquido grigio e da "
							+ "questa escono dei fumi che ti avvolgono, sembra che ti entrino nella pelle e nelle ossa. "
							+ "Ti senti debole e le ossa ti fanno male<br/>"
							+ "-Nuovo effetto attivo-";
					return new EventResponseVO(eventResultMessage, eventResultImage);
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				final RewardDTO reward;
				if (percentTest(rollD100)) {
					reward = rewardEJB.getReward(2);
				} else {
					reward = rewardEJB.getReward(1);
				}
				int gold = (reward.getGold()-1)*2;
				if (playerInventoryDB.getGold() < gold) {
					if (percentTest(rollD100)) {
						gold = gold / 2;
						if (playerInventoryDB.getGold() < gold) {
							eventResultImage = "event-dw-4-bet-6";
							eventResultMessage = response + "Peschi una perlina blu, l'anziana ti chiede " + gold + " monete d'oro. "
									+ "Purtroppo le dici di non avere abbastanza denaro. <i>'Un altro poveraccio, "
									+ "allora smetti di farmi perdere tempo, avevo una cosa sicuramente utile, e' un vero "
									+ "peccato...'</i>. Un po' arrabbiata la donna se ne va borbottando.";
							return new EventResponseVO(eventResultMessage, eventResultImage);
						} else {
							playerInventoryDB.removeGold(gold);
							eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
							eventResultImage = "event-dw-4-bet-6";
							eventResultMessage = response + "Peschi una perlina blu, l'anziana ti chiede " + gold + " monete d'oro. "
									+ "Porgi le monete e lei ti fa bere una pozione di un blu intenso, senti la pelle "
									+ "indurirsi e le ossa rafforzarsi, la tua protezione e' aumentata<br/>"
									+ "-Nuovo effetto attivo-";
							return new EventResponseVO(eventResultMessage, eventResultImage);
						}
					} else {
						eventResultImage = "event-dw-4-bet-7";
						eventResultMessage = response + "Peschi una perlina verde, l'anziana ti chiede 100000 monete d'oro. "
								+ "Purtroppo le dici di che &egrave; un prezzo assurdo. <i>'Un altro poveraccio, "
								+ "allora smetti di farmi perdere tempo, avevo un oggetto fantastico per te, &egrave; un vero "
								+ "peccato...'</i>. Un po' arrabbiata la donna se ne va borbottando.";
						return new EventResponseVO(eventResultMessage, eventResultImage);
					}
					
				} else {
					playerInventoryDB.removeGold(gold);
					playerInventoryDB.addItems(reward.getItem());
					eventResultImage = "event-dw-4-bet-7";
					eventResultMessage = response + "Peschi una perlina verde, l'anziana ti chiede " + gold + " monete d'oro. "
							+ "Porgi le monete e lei ti mostra un oggetto che nascondeva sotto il mantello. E' un "
							+ reward.getItem().getName()
							+ ", ringrazi e prosegui. <br/>Senti l'anziana parlare fra se' e se' <i>'Finalmente mi sono "
							+ "librata di quel peso e ci ho anche guadagnato qualche moneta!'</i>";
					return new EventResponseVO(eventResultMessage, eventResultImage);
				}
				
				
			} else {
				final int gold = (rollD12-1)*2;
				if (playerInventoryDB.getGold() < gold) {
					playerInventoryDB.removeGold(gold);
					eventResultImage = "event-dw-4-bet-8";
					eventResultMessage = response + "Peschi una perlina rossa, l'anziana ti chiede " + gold + " monete d'oro. Purtroppo "
							+ "dici di non avere abbastanza denaro. <i>'Un altro poveraccio, allora smetti di farmi "
							+ "perdere tempo e levati dalla mia strada'</i>. Un po' arrabbiata la donna se ne va "
							+ "borbottando.";
					return new EventResponseVO(eventResultMessage, eventResultImage);
				} else {
					if (adventureDB.getPlayerHealth() == 3) {
						playerInventoryDB.removeGold(gold);
						eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
						eventResultImage = "event-dw-4-bet-8";
						eventResultMessage = response + "Peschi una perlina rossa, l'anziana ti chiede " + gold + " monete d'oro. Come da "
								+ "accordi, le consegni alla donna e lei ti dice: <i>'Avrei dovuto darti una pozione della salute "
								+ "per curare delle ferite, ma a quanto vedo stai bene, quindi ti daro' questo...'</i>, la donna "
								+ "ti fa bere una pozione color rosso intenso, dopo pochi secondi questa pozione ti inonda di nuova "
								+ "forza, le tue braccia e i tuoi muscoli sono piu' attivi e vigorosi<br/>"
								+ "-Nuovo effetto attivo-";
						return new EventResponseVO(eventResultMessage, eventResultImage);
					} else {
						adventureDB.increasePlayerHealth();
						playerInventoryDB.removeGold(gold);
						eventResultImage = "event-dw-4-bet-8";
						eventResultMessage = response + "Peschi una perlina rossa, l'anziana ti chiede " + gold + " monete d'oro. Come da "
								+ "accordi, le consegni alla donna e lei ti consegna ua pozione della salute che bevi. Viene "
								+ "curata una ferita. <i>'Nulla e' piu' importante della salute, dico bene?'</i>. Con questa "
								+ "frase ti saluta e se ne va";
						return new EventResponseVO(eventResultMessage, eventResultImage);
					}
				}
			}
		}
	}

}
