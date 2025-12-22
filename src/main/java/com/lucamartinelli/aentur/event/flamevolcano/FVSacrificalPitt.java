package com.lucamartinelli.aentur.event.flamevolcano;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-fv-26")
@ApplicationScoped
public class FVSacrificalPitt implements EventAction {

	private final EventDTO event = new EventDTO("event-fv-26", 
			"""
			In una camera appartata della grotta vulcanica scopri un antico pozzo sacrificale circondato da catene di ferro fuso.<br/>
			Sul bordo sono incisi avvertimenti in lingue dimenticate. Dal fondo risale un bagliore dorato ipnotico accompagnato 
			da sussurri incomprensibili.<br/>
			Intorno al pozzo giacciono resti di offerte: monete fuse, armi spezzate e gioielli anneriti.<br/>
			Una voce eterea sembra chiamarti, promettendo potere in cambio di sacrifici. 
			L'aria &egrave; densa di magia antica e pericolosa.
			""",
			new String[] {"Offri monete", "Offri la tua energia", "Ignora il pozzo"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		return switch (choice) {
			case 1 -> ImmutablePair.of(moneyAction(rollD100, rollD12), null);
			case 2 -> ImmutablePair.of(bloodAction(rollD100, rollD12), null);
			case 3 -> ImmutablePair.of(ignoreAction(rollD100, rollD12), null);
			
			default -> ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		};
	}

	
	private EventResponseVO moneyAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (playerInventoryDB.getGold() == 0) {
			eventResultImage = "event-fv-26-money-1";
			eventResultMessage = "Non possiedi alcuna moneta, gli spiriti si arrabbiano e si indignano di fronte "
					+ "alla tua povert&agrave;. Vieni punito con una maledizione."
					+ "-Nuovo effetto attivo-";
			eventEffectDB.setActiveEffect("I tiri <b>attacco</b>, <b>difesa</b>, <b>test arma</b> e per i <b>test armatura</b> sono diminuiti di 1");
		} else if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fv-26-money-2";
				eventResultMessage = "Appoggi le monete che possiedi, ma non succede nulla.<br/>"
						+ "Alla fine deve essere solo un buco con della lava dentro, nulla di pi&ugrave;.<br/>"
						+ "Le riprendi e te ne vai.";
			} else if (playerInventoryDB.getGold() > 9) {
				final RewardDTO reward = rewardEJB.getReward(2);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-26-money-3";
				eventResultMessage = "Le monete si trasformano in energia pura.<br/>"
						+ "Dal pozzo emerge un oggetto forgiato dagli spiriti antichi, trovi: '"
						+ reward.getItem().getName() + "'";
			} else {
				eventResultImage = "event-fv-26-money-4";
				eventResultMessage = "Gli spiriti rigettano l'offerta con disprezzo.<br/>"
						+ "Le monete ritornano infuocate e fuse colpendoti come meteoriti. Riporti ustioni dolorose.";
				adventureDB.decreasePlayerHealth();
				playerInventoryDB.removeGold(10L);
				}
		} else {
			if (percentTest(rollD100)) {
				if (playerInventoryDB.getGold() > 9) {
					final RewardDTO reward = rewardEJB.getReward(1);
					playerInventoryDB.addItems(reward.getItem().clone());
					reward.resolveItemLabels();
					eventResultImage = "event-fv-26-money-3";
					eventResultMessage = "Il pozzo accetta il sacrificio con gioia. "
							+ "Lanci&ograve; dal fondo: tesori, energia curativa e benedizioni che potenziano "
							+ "il tuo equipaggiamento magnificamente.<br/>"
							+ "Trovi: '" + reward.getItem().getName() + "'<br/>"
							+ "-Nuovo effetto attivo-";
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
					adventureDB.increasePlayerHealth();
					playerInventoryDB.removeGold(10L);
				} else {
					eventResultImage = "event-fv-26-money-5";
					eventResultMessage = "Non hai molto, ma offri le monete che possiedi. Gli spiriti accettano "
							+ "comunque il sacrificio e ti offrono una benedizione magica"
							+ "-Nuovo effetto attivo-";
					eventEffectDB.setActiveEffect("I tiri <b>talismano</b> sono aumentati di 1");
					playerInventoryDB.removeGold(playerInventoryDB.getGold());
				}
			} else {
				if (playerInventoryDB.getGold() > 9) {
					eventResultImage = "event-fv-26-money-5";
					eventResultMessage = "Il sacrificio viene accettato. Luce dorata ti avvolge potenziando arma e curando le ferite.<br/>"
							+ "Senti il favore degli spiriti su di te."
							+ "-Nuovo effetto attivo-";
					eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
					adventureDB.increasePlayerHealth();
					adventureDB.increasePlayerHealth();
					playerInventoryDB.removeGold(10L);
				} else {
					eventResultImage = "event-fv-26-money-6";
					eventResultMessage = "Le monete si fondono e si traformano in vapori che ti curano,"
							+ " ma ti rendono pi&ugrave; debole.<br/>"
							+ "-Nuovo effetto attivo-";
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					adventureDB.increasePlayerHealth();
					playerInventoryDB.removeGold(10L);
				}
				
				
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO bloodAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		adventureDB.decreasePlayerHealth();
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fv-26-blood-1";
				eventResultMessage = "Spiriti malevoli emergono dal pozzo, ma riesci velocemente a fuggire "
						+ "rimanendone illesa";
			} else {
				eventResultImage = "event-fv-26-blood-2";
				eventResultMessage = "Spiriti malevoli emergono dal pozzo nutrendosi voracemente delle tue energie.<br/>"
						+ "Ti lasciano devastato, con ferite critiche e le tue armi corrotte dall'energia oscura.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
				adventureDB.decreasePlayerHealth();
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				final long goldToAdd = rewardEJB.getReward(2).getGold();
				eventResultImage = "event-fv-26-blood-3";
				eventResultMessage = "Doni la tua energia a degli spiriti che la trasformano in delle monete d'oro.<br/>"
						+ "Ottieni " + goldToAdd + " monete d'oro";
				playerInventoryDB.addGold(goldToAdd);
			} else {
				eventResultImage = "event-fv-26-blood-2";
				eventResultMessage = "Doni la tua energia a degli spiriti, ma si rivelano ingannevoli e dei ladri. Approfittano del momento di "
						+ "debolezza temporanea per derubarti di alcune monete";
				playerInventoryDB.removeGold(rewardEJB.getReward(2).getGold());
			}
		} else {
			if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-26-blood-4";
				eventResultMessage = " Offri la tua energia al pozzo con un piccolo taglio, ma non risponde."
						+ "La ferita si rimargina lentamente senza problemi e non ricevi alcuna ricompensa particolare.<br/>"
						+ "Forse non hai offerto abbastanza energia.";
				adventureDB.increasePlayerHealth();
			} else if (!percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(2);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-26-blood-5";
				eventResultMessage = "Tocchi il pozzo e spriti magici trasformano la tua energia in un oggetto incantato."
						+ " Trovi: '" + reward.getItem().getName() + "'";
			} else {
				final long gold = rewardEJB.getReward(2).getGold();
				eventResultImage = "event-fv-26-blood-6";
				eventResultMessage = "Tocchi il pozzo e offri la tua energia che risveglia antichi spiriti benevoli.<br/>"
						+ "Ti ricompensano generosamente guarendo le tue ferite, "
						+ "donandoti tesori immensi e benedicendo tutto il tuo equipaggiamento.<br/>"
						+ "Ottieni " + gold + " monete d'oro.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
				playerInventoryDB.addGold(gold);
				adventureDB.increasePlayerHealth();
				
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fv-25-ignore-1";
				eventResultMessage = "Senti come delle risate provvenire dal pozzo, decidi di allontanarti velocemente.";
			} else {
				final long goldToRemove = rewardEJB.getReward(1).getGold();
				eventResultImage = "event-fv-26-ignore-2";
				eventResultMessage = "Gli spiriti ti maledicono per il rifiuto.<br/>"
						+ "Energie oscure ti perseguitano e predi delle monete nella confusione e corruzione dell'arma. Perdi " + goldToRemove + " monete.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
				playerInventoryDB.removeGold(goldToRemove);
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fv-26-ignore-1";
				eventResultMessage = "Lasci la zona e eviti ogni possibile magia di quell'oscuro pozzo";
			} else {
				eventResultImage = "event-fv-26-ignore-3";
				eventResultMessage = "Il pozzo si infuria per l'insulto. Proietta fiamme spirituali che ti inseguono bruciandoti.";
				adventureDB.decreasePlayerHealth();
			}
		} else {
			if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-26-ignore-1";
				eventResultMessage = "Lasci la zona e eviti ogni possibile magia di quell'oscuro pozzo";
			} else if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-26-ignore-4";
				eventResultMessage = "Senti dell'energia malvagia uscire dal pozzo, corri via e la magia si dissipa "
						+ "e trovi alcune monete perse da qualcuno passato prima di te.";
			} else {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-26-ignore-5";
				eventResultMessage = "La tua saggezza viene premiata.<br/>"
						+ "Ignorando la tentazione scopri un passaggio nascosto che conduce "
						+ "a tesori sicuri e una fonte termale rigenerante.<br/>"
						+ "Trovi: '" + reward.getItem().getName() + "'";
				adventureDB.increasePlayerHealth();
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
