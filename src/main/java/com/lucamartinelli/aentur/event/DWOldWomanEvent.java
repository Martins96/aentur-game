package com.lucamartinelli.aentur.event;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import javax.ws.rs.core.Response;

import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

@Named("event-dw-4")
@ApplicationScoped
public class DWOldWomanEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-dw-4", 
			"Un'anziana donna con un lungo mantello nero e un cappuccio sul capo si mostra davanti a te. "
			+ "Tutto quello che riesci a vedere e' la sua bocca storta con un ghigno quasi inquietante. <br/>"
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
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(ignoreAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(betAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 6) {
			if (percentTest(rollD100)) {
				return "Un po' spaventata dalla sua posa cupa e dall'aura apparentemente malvagia della donna preferisci "
						+ "non tentare la sorte e ringraziandola te ne vai. <i>'Peccato, avremmo potuto divertirci...' "
						+ "sussurra mentre ti allontani";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Ringrazi e te ne vai, quando senti un ringhio alle spalle: <i>'Nessuno rifiuta le mie offerte "
						+ "senza essere punito!'</i>, appena ti giri vedi un demone sotto a quel mantello che con un "
						+ "fendente ti ferisce. <br/>Terrorizzata fuggi e lo semini";
			}
		} else {
			return "Ringrazi cortsemente la signora e prosegui. <i>'Va bene, poteva tornarti utile forse, "
					+ "ma come vuoi tu'</i> ti risponde mentre te ne vai";
		}
	}
	
	private Object betAction(int rollD100, int rollD12) {
		String response = "Incuriosita tenti la sorte pescando una perlina dal sacchetto... ";
		if (rollD12 < 2) {
			if (percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
				return response + " Appena infili la mano senti strane cose molli che si muovono, sfili la zampa e vedi che "
						+ "il sacchetto e' pieno di vermi, inorridita guardi la donna che inizia a gridare: <i>'Sei caduta "
						+ "nella mia trappola sciocca mortale, adesso prosciughero' la tua energia!'</i>, la donna e' "
						+ "un demone che lancia una magia di assorbimento su di te. La magia ti ferisce e senti la tua "
						+ "forza svanire<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				return response + "Ma non appena ti avvicini vedi degli occhi rossi e dei denti da vampiro nel suo ghigno. "
						+ "Corn rapidita' spingi la donna e scappi velocemente. <i>Sei stato furbo questa volta, la sorte "
						+ "ti e' stata favorevole'</i>";
			}
		} else if (rollD12 < 8) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				return response + "Infili la mano e peschi una perlina viola con un teschio sopra. <i>'Oh, hai vinto "
						+ "una pozione velenosa, non ti preoccupare e' gratis'</i>. Di colpo, la donna ti lancia "
						+ "boccetta con un liquido nero e fumi ti avvolgono e ti feriscono";
			} else {
				if (percentTest(rollD100)) {
					return response + "Infili una mano e peschi una perlina di vetro trasparente. <i>'Oh guarda, una "
							+ "perlina vuota, mi sa che per questa volta non vinci niente, buona fortuna per il futuro'"
							+ "</i> La donna sembra piu' delusa di te e se ne va";
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					return response + " Appena infili la mano senti strane cose molli che si muovono, sfili la zampa e vedi che "
							+ "Infili la mano e peschi una perlina nera. <i>'Eheh, abbiamo la vincitrice di una pozione, "
							+ "eccoti qui il tuo premio'</i>. La donna ti mostra una boccetta con un liquido grigio e da "
							+ "questa escono dei fumi che ti avvolgono, sembra che ti entrino nella pelle e nelle ossa. "
							+ "Ti senti debole e le ossa ti fanno male<br/>"
							+ "-Nuovo effetto attivo-";
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
							return response + "Peschi una perlina blu, l'anziana ti chiede " + gold + " monete d'oro. "
									+ "Purtroppo le dici di non avere abbastanza denaro. <i>'Un altro poveraccio, "
									+ "allora smetti di farmi perdere tempo, avevo una cosa sicuramente utile, e' un vero "
									+ "peccato...'</i>. Un po' arrabbiata la donna se ne va borbottando.";
						} else {
							playerInventoryDB.removeGold(gold);
							eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
							return response + "Peschi una perlina blu, l'anziana ti chiede " + gold + " monete d'oro. "
									+ "Porgi le monete e lei ti fa bere una pozione di un blu intenso, senti la pelle "
									+ "indurirsi e le ossa rafforzarsi, la tua protezione e' aumentata<br/>"
									+ "-Nuovo effetto attivo-";
						}
					} else {
						return response + "Peschi una perlina verde, l'anziana ti chiede " + gold + " monete d'oro. "
								+ "Purtroppo le dici di non avere abbastanza denaro. <i>'Un altro poveraccio, "
								+ "allora smetti di farmi perdere tempo, avevo un oggetto fantastico per te, e' un vero "
								+ "peccato...'</i>. Un po' arrabbiata la donna se ne va borbottando.";
					}
					
				} else {
					playerInventoryDB.removeGold(gold);
					playerInventoryDB.addItems(reward.getItem());
					return response + "Peschi una perlina verde, l'anziana ti chiede " + gold + " monete d'oro. "
							+ "Porgi le monete e lei ti mostra un oggetto che nascondeva sotto il mantello. E' un "
							+ reward.getItem().getName()
							+ ", ringrazi e prosegui. <br/>Senti l'anziana parlare fra se' e se' <i>'Finalmente mi sono "
							+ "librata di quel peso e ci ho anche guadagnato qualche moneta!'</i>";
				}
				
				
			} else {
				final int gold = (rollD12-1)*2;
				if (playerInventoryDB.getGold() < gold) {
					playerInventoryDB.removeGold(gold);
					return response + "Peschi una perlina rossa, l'anziana ti chiede " + gold + " monete d'oro. Purtroppo "
							+ "dici di non avere abbastanza denaro. <i>'Un altro poveraccio, allora smetti di farmi "
							+ "perdere tempo e levati dalla mia strada'</i>. Un po' arrabbiata la donna se ne va "
							+ "borbottando.";
				} else {
					if (adventureDB.getPlayerHealth() == 3) {
						playerInventoryDB.removeGold(gold);
						eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
						return response + "Peschi una perlina rossa, l'anziana ti chiede " + gold + " monete d'oro. Come da "
						+ "accordi, le consegni alla donna e lei ti dice: <i>'Avrei dovuto darti una pozione della salute "
						+ "per curare delle ferite, ma a quanto vedo stai bene, quindi ti daro' questo...'</i>, la donna "
						+ "ti fa bere una pozione color rosso intenso, dopo pochi secondi questa pozione ti inonda di nuova "
						+ "forza, le tue braccia e i tuoi muscoli sono piu' attivi e vigorosi<br/>"
						+ "-Nuovo effetto attivo-";
					} else {
						adventureDB.increasePlayerHealth();
						playerInventoryDB.removeGold(gold);
						return response + "Peschi una perlina rossa, l'anziana ti chiede " + gold + " monete d'oro. Come da "
								+ "accordi, le consegni alla donna e lei ti consegna ua pozione della salute che bevi. Viene "
								+ "curata una ferita. <i>'Nulla e' piu' importante della salute, dico bene?'</i>. Con questa "
								+ "frase ti saluta e se ne va";
					}
				}
			}
		}
	}

}
