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

@Named("event-fv-25")
@ApplicationScoped
public class FVPedestal implements EventAction {

	private final EventDTO event = new EventDTO("event-fv-25", 
			"""
			Proseguendo nella grotta vulcanica raggiungi una vasta camera dove il soffitto gocciola lava incandescente.<br/>
			Al centro della stanza un antico altare di ossidiana emana un bagliore rossastro. 
			Intorno all'altare sono disposti tre piedistalli con simboli diversi:<br> - una fiamma danzante<br/> - un martello spezzato<br/> - una spirale di fumo.<br/>
			L'aria vibra di energia antica e senti che interagire con questo luogo potrebbe portare conseguenze significative. 
			L'altare sembra aspettare una scelta.
			""",
			new String[] {"Tocca simbolo della fiamma", "Tocca simbolo del martello", "Tocca simbolo della spirale"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12) {
		return switch (choice) {
		case 1 -> ImmutablePair.of(fireAction(rollD100, rollD12), null);
		case 2 -> ImmutablePair.of(hammerAction(rollD100, rollD12), null);
		case 3 -> ImmutablePair.of(smokeAction(rollD100, rollD12), null);
		
		default -> ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		};
	}

	
	private EventResponseVO fireAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100+rollD12)) {
				eventResultImage = "event-fv-25-flame-1";
				eventResultMessage = "Il simbolo brilla debolmente e nulla accade.<br/>"
						+ "L'altare sembra accettare il tuo gesto ma non offre ricompense particolari.";
			} else {
				eventResultImage = "event-fv-25-flame-2";
				eventResultMessage = "Il fuoco esplode violentemente. "
						+ "Vieni bruciato e la tua armatura si danneggia per il calore eccessivo. "
						+ "Devi allontanarti rapidamente."
						+ "-Nuovo effetto attivo-";
						eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (!percentTest(rollD100)) {
				if (!percentTest(rollD100+rollD12)) {
					eventResultImage = "event-fv-25-flame-3";
					eventResultMessage = "Le fiamme eruttano improvvisamente scottandoti. "
							+ "Riesci ad allontanarti ma riporti ustioni alle mani.";
					adventureDB.decreasePlayerHealth();
				} else {
					eventResultImage = "event-fv-25-flame-4";
					eventResultMessage = "Premi il simbolo, ma non sembra succedere nulla. "
							+ "Forse non rimane pi&ugrave; mana in questo piedistallo?";
				}
			} else {
				eventResultImage = "event-fv-25-flame-6";
				eventResultMessage = "Le fiamme danzano attorno a te senza ferirti. "
						+ "Il tuo equipaggiamento assorbe l'energia vulcanica potenziandosi temporaneamente.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
			}
		} else {
			if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-25-flame-5";
				eventResultMessage = "Il simbolo maledice la tua presenza. Fiamme malevole ti attaccano causando "
						+ "un malus magico ai tuoi talismani.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>talismano</b> sono diminuiti di 1");
				
			} else if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-25-flame-7";
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultMessage = "Il simbolo si illumina violentemente e l'altare rivela un tesoro nascosto. <br/>"
						+ "Trovi '" + reward.getItem().getName() + "', inoltre "
						+ "le fiamme ti benedicono infondendo potere nel tuo equipaggiamento e guarendo le tue ferite.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
			
			} else {
				final RewardDTO reward = rewardEJB.getReward(2);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-25-flame-7";
				eventResultMessage = "L'energia del fuoco ti avvolge in modo benefico. "
						+ "Trovi un oggetto leggendario forgiato nella lava primordiale, ancora calda ma maneggiabile.<br/>"
						+ "Trovi: " + reward.getItem().getName();
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO hammerAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (!percentTest(rollD100)) {
				if (percentTest((rollD100/2)+rollD12)) {
					eventResultImage = "event-fv-25-hammer-1";
					eventResultMessage = "Il simbolo provoca un terremoto localizzato.<br/>"
							+ "Vieni colpito da detriti che ti feriscono e la tua arma viene danneggiata nell'impatto.";
					adventureDB.decreasePlayerHealth();
				} else {
					eventResultImage = "event-fv-25-hammer-3";
					eventResultMessage = "L'altare reagisce con violenza. "
							+ "Frammenti di ossidiana esplodono in ogni direzione ferendoti gravemente. "
							+ "Cerchi di scappare, ma perdi delle monete nella confusione.";
					final int goldToRemove = rewardEJB.getReward(1).getGold();
					adventureDB.decreasePlayerHealth();
					adventureDB.decreasePlayerHealth();
					playerInventoryDB.removeGold(goldToRemove);
				}
			} else {
				eventResultImage = "event-fv-25-hammer-2";
				eventResultMessage = "Non appena tocchi il simbolo senti una serie di cigolii.<br/>"
						+ "In pochi secondi il piedistallo si sgretola sotto la tua mano";
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-25-hammer-4";
				eventResultMessage = "Il martello fantasma di un antico fabbro appare e forgia per te "
						+ "un equipaggiamento interessante. Ottieni: " + reward.getItem().getName();
			} else {
				eventResultImage = "event-fv-25-hammer-5";
				eventResultMessage = "Il martello risuona una volta ma non succede altro.<br/>"
						+ "L'altare sembra dormiente e non risponde ulteriormente.";
			}
		} else {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(2);
				playerInventoryDB.addItems(reward.getItem().clone());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-25-hammer-8";
				eventResultMessage = " L'altare riconosce la tua forza. "
						+ "Si apre rivelando un'antica fucina con equipaggiamento leggendario e una pozza di "
						+ "lava curativa che rigenera le tue ferite.<br/>"
						+ "Ottieni: " + reward.getItem().getName();
				adventureDB.increasePlayerHealth();
			} else if (percentTest(rollD100)) {
				eventResultImage = "event-fv-25-hammer-7";
				eventResultMessage = "L'energia del simbolo rinforza il tuo equipaggiamento. "
						+ "Senti le tue armi diventare pi%ugrave; resistenti, come temprate nel fuoco.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
			} else {
				eventResultImage = "event-fv-25-hammer-6";
				eventResultMessage = "Il martello si abbatte invisibilmente su di te.<br/>"
						+ "Riporti delle fratture e l'energia maledetta corrompe i tuoi talismani."
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>talismano</b> sono diminuiti di 1");
				adventureDB.decreasePlayerHealth();
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	
	private EventResponseVO smokeAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (percentTest(rollD100)) {
				if (percentTest((rollD100/2)+rollD12)) {
					eventResultImage = "event-fv-25-smoke-1";
					eventResultMessage = "Fumi colorati emergono brevemente ma si dissolvono senza effetti.<br/>"
							+ "L'altare rimane inerte e silenzioso.";
				} else {
					int goldToRemove = rewardEJB.getReward(1).getGold();
					eventResultImage = "event-fv-25-smoke-2";
					eventResultMessage = "Fumi oscuri ti attaccano direttamente.<br/>"
							+ "Riporti danni da avvelenamento, perdi monete nella fuga confusa";
					adventureDB.decreasePlayerHealth();
					playerInventoryDB.removeGold(goldToRemove);
				}
			} else {
				eventResultImage = "event-fv-25-smoke-3";
				eventResultMessage = "La spirale ti benedice.<br/>"
						+ "Senti la tua mente espandersi e i tuoi talismani brillare di nuova potenza."
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>talismano</b> sono aumentare di 1");
			}
		} else if (!percentTest(rollD12*8+3)) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-fv-25-smoke-4";
				eventResultMessage = "Premi il simbolo, ma non sembra succedere nulla. "
						+ "Forse non rimane pi&ugrave; mana in questo piedistallo?";
			} else {
				eventResultImage = "event-fv-25-smoke-5";
				eventResultMessage = "I vapori risultano tossici.<br/>"
						+ "Inali qualcosa di nocivo che ti fa tossire e indebolisce la tua resistenza temporaneamente.<br/>"
						+ "-Nuovo effetto attivo-";
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
			}
		} else {
			if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-25-smoke-6";
				eventResultMessage = "La spirale rilascia gas velenosi. Lasci la stanza "
						+ "di corsa trattenendo il fiato.<br/>"
						+ "Riesci ad uscirne incolume.";
			} else if (!percentTest(rollD100)) {
				eventResultImage = "event-fv-25-smoke-7";
				eventResultMessage = " La spirale si trasforma in un vortice di energia che ti avvolge.<br/>"
						+ "La magia si posa sulle tue ferite e le cura completamente";
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
			} else {
				final RewardDTO reward = rewardEJB.getReward(2);
				playerInventoryDB.addItems(reward.getItem().clone());
				playerInventoryDB.addGold(reward.getGold());
				reward.resolveItemLabels();
				eventResultImage = "event-fv-25-smoke-8";
				eventResultMessage = "La spirale si anima trasportandoti in una dimensione nascosta con dei tesori.<br/>"
						+ "Trovi l'equipaggiamento '" + reward.getItem().getName() + "' e "
						+ reward.getGold() + " monete";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
