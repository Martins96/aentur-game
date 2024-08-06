package com.lucamartinelli.aentur.event.crimsoncave;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;


@Named("event-cc-20")
@ApplicationScoped
public class CCCoffinEvent implements EventAction {
	
	private final EventDTO event = new EventDTO("event-cc-20", 
			"In una stretta insenatura trovi una bara in legno con attorno delle candele."
			+ " Sembra molto antica e il contesto &egrave; estremamente macabro.<br />"
			+ "Cosa intendi fare?", 
			new String[] {"Ignora l'insenatura", "Distruggi la bara", "Saccheggia la bara"});

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
			return ImmutablePair.of(destroyAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(scavageAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
		
	}
	
	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 4) {
			if (!percentTest(rollD100 + 50)) {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-20-ignore-1";
				eventResultMessage = "Volti le spalle alla bara, ma questa improvvisamente si spalanca e una forza oscura ti afferra,"
						+ " ti immobilizza in un istante per poi trascinarti dentro. Il portello si chiude e ti senti "
						+ "soffocare. Lotti con tutte le tue forze fino a quando, con una ginocchiata, risci a riaprire "
						+ "il sarcofago in legno e a fuggire.<br />"
						+ "Subisci una ferita e un grosso spavento.";
			} else {
				eventResultImage = "event-cc-21-central-1";
				eventResultMessage = "Ignori la bara, quando senti dei rumori provvenire dall'interno. Velocemente sposti un masso davanti "
						+ "all'insenatura per guadagnare tempo e fuggi da l&igrave;";
			}
		} else {
			eventResultImage = "event-cc-21-central-1";
			eventResultMessage = "Decidi di ignorare la bara e qualsiasi cosa contenga";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO destroyAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 6) {
			if (!percentTest(rollD100)) {
				final int itemSize = playerInventoryDB.getItems().size();
				final ItemDTO itemLost = playerInventoryDB.getItems().get(getRandomInt(itemSize));
				playerInventoryDB.removeItems(itemLost);
				eventResultImage = "event-cc-20-destroy-1";
				eventResultMessage = String.format("Sfoderi la tua arma e ti appresti a colpire la bara in modo da eliminare ogni"
						+ " male che si nasconde all'interno. Appena la colpisci, per&ograve;, senti una magia "
						+ "arcana colpire un tuo oggetto. La magia &egrave; quella del legame e appena la bara "
						+ "si sgretola, anche il tuo equipaggiamento <i>'%s'</i> subisce la stessa sorte...<br/>"
						+ "Perdi cos&igrave; un tuo oggetto.", itemLost.getName());
			} else {
				eventResultImage = "event-cc-20-destroy-2";
				eventResultMessage = "Sfoderi la tua arma e ti appresti a colpire la bara in modo da eliminare ogni"
						+ " male che si nasconde all'interno. Non appena la colpisci, per&ograve;, scopri che il "
						+ "legno era solo il rivestimento di un sarcofago in acciaio molto resistente. A questo punto "
						+ "abbandoni l'idea di distruggerla e te ne vai.";
			}
		} else if (rollD12 < 12) {
			if (!percentTest(rollD100 + rollD12)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-cc-20-destroy-3";
				eventResultMessage = "Rompi la bara, ma da questa si sprigiona un gas velenoso che ti indebolisce"
						+ "-Nuovo effetto attivo-";
			} else if (!percentTest(rollD100 + 10)) {
				final long gold = playerInventoryDB.getGold();
				eventResultImage = "event-cc-20-destroy-4";
				StringBuffer msg = new StringBuffer("Distruggi la bara con un colpo ben piazzato della tua arma, quando alle tue spalle "
						+ "compare un topolino barbuto. <i>'Ma che diavolo hai fatto?!? Quello era un'altare sacro!'</i>.<br/>"
						+ "Ti spiega che lui qui venera un'antica e strana religione e che gli altari devono essere a forma "
						+ "di bara. <i>'Questo serve a ricordarti che questo mondo &egrave; solo di passaggio e che la nostra "
						+ "unica fine &egrave; quella.'</i>. Sbraita altre strane regole religiose e ti chiede un pegno di 10 "
						+ "monete d'oro per ripagare il male fatto alla divinit&agrave; e a riparare l'altare.<br/>");
				if (gold > 9L) {
					playerInventoryDB.removeGold(10L);
					msg = msg.append("Consegni le 10 monete d'oro e ti scusi con il topolino.");
				} else if (gold > 3L) {
					final long availableGold = playerInventoryDB.getGold();
					msg = msg.append(String.format("Ti scusi con il topolino e dici di non avere denaro sufficiente. Tutto "
							+ "quello che possiedi sono %s monete. Il topolino sbuffa e prende quel poco che hai. <i>'I soliti "
							+ "nullatenenti...'</i>. Ti scusi ancora con il topolino e te ne vai.",
							Long.toString(availableGold)));
					playerInventoryDB.removeGold(availableGold);
				} else {
					final int itemSize = playerInventoryDB.getItems().size();
					final ItemDTO itemLost = playerInventoryDB.getItems().get(getRandomInt(itemSize));
					playerInventoryDB.removeItems(itemLost);
					msg = msg.append(String.format("Ti scusi con il topolino e dici di non avere denaro sufficiente. Lui borbotta qualcosa "
							+ "che non capisci e poi afferra il tuo oggetto <i>'%s'</i>. Con un tono quasi onnipotente ti dice: "
							+ "<i>'Questo oggetto andr&agrave; bene. La divinit&agrave; sar&agrave; ripagata per il torto "
							+ "subito. Considera il tuo peccato espirato.'</i> Sconcertata da quanto accaduto, stai per "
							+ "riprendere il tuo equipaggiamento con la forza, quando il topolino si mette a pregare e inginochciarsi "
							+ "di fronte alla bara distrutta. Provi un po' di pena e te ne vai.",
							itemLost.getName()));
				}
				eventResultMessage = msg.toString();
			} else {
				final int itemLvl;
				if (percentTest(rollD100)) {
					itemLvl = 2;
				} else {
					itemLvl = 1;
				}
				final ItemDTO itemFound = rewardEJB.getReward(itemLvl).getItem();
				playerInventoryDB.addItems(itemFound);
				eventResultImage = "event-cc-20-destroy-5";
				eventResultMessage = String.format("Utilizzi le candele vicino alla bara per innescare un fal&ograve; e distruggere il sarcofago. "
						+ "Il legno prende fuoco rapidamente e in pochi minuti brucia completamente. Quando il fuoco "
						+ "si spegne, uno spirito lucente si materializza dalle ceneri. La luce emette una voce che "
						+ "rimbomba nella stanza: <i>'Tu mi hai liberato, sono secoli che mi avevano rinchiuso in quella "
						+ "bara maledetta... Ora finalmente posso riposare in pace. In segno di ringraziamento ti prego "
						+ "di accettare l'oggetto che troverai nascosto dietro l'insenatura della bara. Grazie ancora'</i>."
						+ "<br/>La luce scompare e, guardando dietro la bara bruciata trovi: <i>'%s'</i>", itemFound.getName());
			}
		} else {
			adventureDB.increasePlayerHealth();
			eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
			eventResultImage = "event-cc-20-destroy-1";
			eventResultMessage = "Sollevi una roccia e la scaraventi contro la bara. Scintille partono dal suo interno. "
					+ "Vedi delle ombre fuoriuscire e e contorcersi al contatto dell'aria e della luce. "
					+ "Dopo qualche istante queste ombre e capisci di aver appena distrutto un sigillo di magia "
					+ "nera. L'area viene quindi liberata dal male e nuova forza si infonde a te. Senti la tua energia "
					+ "rigenerarsi e una protezione mistica avvolgerti.<br />"
					+ " -Nuovo effetto attivo-";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}
	
	private EventResponseVO scavageAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-cc-20-destroy-2";
				eventResultMessage = "Apri la bara, ma nonostante i tuoi sforzi, non riesci a sollevare il coperchio... Sembra sigillata "
						+ "da tempo e forse solo un fabbro potrebbe aprirla. Lasci la bara cos&igrave; com'&egrave;";
			} else {
				adventureDB.decreasePlayerHealth();
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-cc-20-scavange-1";
				eventResultMessage = "Apri la bara con la forza e all'interno trovi un tizio che stava dormendo. I suoi occhi si spalancano "
						+ "e sono rossi come il fuoco. Ti attacca senza esitazione graffiandoti ripetutamente. Cadi a terra e "
						+ "in quel momento afferri un po' di ghiaia e polvere da suolo, gli lanci lo sporco raccolto accecandolo "
						+ "per qualche istante, giusto il tempo per dileguarti.<br/>"
						+ "Hai subito diverse ferite.";
			}
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
				eventResultImage = "event-cc-20-scavange-2";
				eventResultMessage = "Tenti di aprire la bara, ma questo fa scattare una trappola che ti colpisce con un dardo alla "
						+ "gamba. La neutralizzi e termini l'apertura. Trovi all'interno una pozione della forza.<br>"
						+ "Hai subito una ferita, ma in compenso la tua forza &egrave; aumentata.<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					eventResultImage = "event-cc-20-scavange-3";
					eventResultMessage = "Apri la bara, ma tutto quello che contiene sono polvere e ragnatele. Sembra che non abbia mai "
							+ "contenuto nulla, per il momento...";
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					eventResultImage = "event-cc-20-destroy-3";
					eventResultMessage = "Apri la bara e liberi un fumo denso che ti avvolge. La testa inizia a girare e cerchi di fuggire "
							+ "da quella cortina. Lasci la stanza, ma ti senti molto debole."
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100-10-rollD12)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				playerInventoryDB.addItems(item);
				eventResultImage = "event-cc-20-scavange-4";
				eventResultMessage = String.format("Con forza apri la bara e all'interno trovi un antico artefatto. Guadagni "
						+ "<i>'%s'</i>", item.getName());
			} else {
				if (percentTest(rollD100)) {
					ItemDTO item = rewardEJB.getReward(1).getItem();
					playerInventoryDB.addItems(item);
					eventResultImage = "event-cc-20-scavange-4";
					eventResultMessage = String.format("Con forza apri la bara e all'interno trovi un antico artefatto. Guadagni "
							+ "<i>'%s'</i>", item.getName());
				} else if (percentTest(rollD100 + rollD12)) {
					final long gold = getRandomInt(5) + 3;
					playerInventoryDB.addGold(gold);
					eventResultImage = "event-cc-20-scavange-4";
					eventResultMessage = String.format("La bara &egrave; gi&agrave; semi-aperta. Guardi dentro e trovi "
							+ "<i>%s</i> monete d'oro", Long.toString(gold));
				} else {
					eventResultImage = "event-cc-20-scavange-5";
					eventResultMessage = "La bara &egrave; talmente secca e marcia che appena la tocchi si disintegra. Deve essere rimasta "
							+ "l&igrave; per parecchio tempo. Tutto quello che conteneva era polvere e segatura di tarli.";
				}
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
