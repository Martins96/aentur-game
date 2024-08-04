package com.lucamartinelli.aentur.event.crimsoncave;

import com.lucamartinelli.aentur.event.EventActionOld;
import com.lucamartinelli.aentur.languagecontent.ResolveContentsUtils;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;


@Named("event-cc-22")
@ApplicationScoped
public class CCBloodRitualEvent implements EventActionOld {
	
	private final EventDTO event = new EventDTO("event-cc-22", 
			"Entri in una stanza oscura e ti imbatti i alcune candele, sul terreno ci sono disegnati "
			+ "due cerchi con un qualche liquido rosso. A lato vedi un leggio con un libro consunto aperto. "
			+ "Sembra una qualche sorta di rituale. Sul libro c'&egrave; la procedura per eseguire completamente"
			+ " il rituale. Al momento &egrave; mancherebbero pochi passaggi.<br />Cosa vuoi fare?", 
			new String[] {"Ignora la stanza", "Distruggi il cerchio e il libro", 
					"Leggi e completa il rituale"});

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
			return Response.ok(destroyAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(completeAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
		
	}
	
	private String ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (!percentTest(rollD12*5+20)) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventResultMessage = "Stai per ignorare il luogo, quando tutte le candele si spengono contemporaneamente, alcune figure "
						+ "incappucciate entrano nella stanza. Sei circondata, sguaini l'arma un po' tremante.<br />"
						+ "Uno dei tizi inizia a parlare: <i>'Bene, stavamo proprio aspettando il nostro sacrificio "
						+ "per il rituale. Ora abbiamo tutto'</i> e subito dopo ti attacca con un pugnale. Inizia una lotta "
						+ "in cui ti difendi al meglio che puoi. Subisci delle ferite, ma riesci a difenderti e scappare.";
			} else {
				eventResultMessage = "Ti allontani in fretta dal luogo del rituale, mentre te ne vai senti un canto provvenire da l&agrave;. "
						+ "Accelleri il passo impaurita e ti allontani il pi&ugrave; in fretta possibile.";
			}
		} else {
			eventResultMessage = "Lasci la stanza misteriosa, meglio non averci niente a che fare.";
		}
		
		return eventResultMessage;
	}

	private String completeAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 7) {
			if (!percentTest(rollD100/2)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultMessage = "Tenti goffamente di completare il rituale, ma sbagli diversi passaggi e questo non &egrave; "
						+ "per niente una cosa buona. Ad un certo punto dal centro della stanza si alza un vortice "
						+ "di magia oscura che ti assorbe.<br />Vieni scaraventato qua e l&agrave; con forza e "
						+ "perdi i sensi. Ti risvegli poco dopo ferita e debole. Per oggi meglio lasciar stare "
						+ "altri rituali.<br />"
						+ "-Nuovo effetto attivo-";
			} else {
				eventResultMessage = "Tenti goffamente di completare il rituale, ma alcuni passaggi sono poco chiari e non "
						+ "descritti bene. Provi a fare quello che pensi di aver capito, ma non accade nulla.<br />"
						+ "Lasci perdere e te ne vai";
			}
		} else if (rollD12 < 12) {
			if (!percentTest(rollD100 + rollD12)) {
				String response = "Segui i passaggi descritti nel libro e come per magia il cerchio inizia a prendere "
						+ "fuoco. Una figura oscura si alza nel centro e ti guarda. <br />Con voce solenne ti parla: "
						+ "<i>'Tu che mi hai risvegliato, offrimi dell'oro come tributo'</i>.<br />";
				if (playerInventoryDB.getGold() > 10L) {
					playerInventoryDB.removeGold(10L);
					eventResultMessage = response + "Sborsi subito <b>10 monete</b> al demone e questo risponde: <i>'Il tuo tributo "
							+ "&egrave; stato accettato, ora posso andare'</i>. Il demone si dissolve come le tue monete";
				} else {
					eventEffectDB.setActiveEffect("Tutti i tuoi tiri sono diminuiti di 1");
					eventResultMessage = response + "Dici di non possedere molto oro e il demone risponde con tono arrabbiato.<br />"
							+ "<i>'Tu insulso, come osi evocare il grande Totec e non avere oro?!? Dovrai subire "
							+ "la mia maledizione!'</i> Con un forte suono il demone alza un polverone. Vieni investita "
							+ "da una forza oscura che ti infonde magia nera<br />"
							+ "-Nuovo effetto attivo-";
				}
			} else if (!percentTest(rollD100 + 10)) {
				eventResultMessage = "Segui i passaggi descritti nel libro come una ricetta di cucina, ma alla fine non accade niente.<br />"
						+ "Non capisci dove hai sbagliato, rileggi il libro, ma continui a non spiegarti il motivo del "
						+ "mancato funzionamento. Delusa te ne vai";
			} else {
				String response = "Segui i passaggi descritti nel libro e come ultima azione &egrave; richisto il tributo di "
						+ "50 grammi d'oro. Sono circa 6 monete.<br />";
				if (playerInventoryDB.getGold() > 6L) {
					playerInventoryDB.removeGold(6L);
					final ItemDTO item = rewardEJB.getReward(2).getItem();
					playerInventoryDB.addItems(item);
					eventResultMessage = response.concat(String.format("Posizioni le monete al centro del cerchio e queste iniziano a fondere sprigionando un "
							+ "denso fumo. Da questo fumo compare una strana figura che si presenta: <i>'Mortale, hai evocato "
							+ "il grande Huitzilo, so che sei una forte guerriera. Pendi questo oggetto direttamente dalla "
							+ "mia armeria divina. Ti aiuter&agrave; nelle tue battaglie'</i><br />"
							+ "Davanti a te compare <b>%s</b>, ringrazi e la figura scompare", item.getName()));
				} else {
					eventResultMessage = response.concat("Controlli nelle tasche, ma non trovi oro sufficiente... Tristemente abbandoni "
							+ "l'idea di attivare il rituale");
				}
			}
		} else {
			if (!percentTest(rollD100 + rollD12) && !percentTest(rollD100 - rollD12)) {
				eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono aumentati di 1");
				eventResultMessage = "Attivi il portale con facilit&agrave;. Posizioni come ultima cosa una candela e questa inizia "
						+ "a bruciare completamente diventando una palla infuocata. Le fiamme poi si affievoliscono "
						+ "mostrando una volpe infuocata. Non parla, ma sembra avere intenzione di aiutarti per un po'. "
						+ "riprendi quindi il cammino con un nuovo famiglio.<br />"
						+ "-Nuovo effetto attivo-";
			} else {
				final int itemlvl = getRandomInt(2)+1;
				ItemDTO item = rewardEJB.getReward(itemlvl).getItem();
				playerInventoryDB.addItems(item.clone());
				item = ResolveContentsUtils.resolveLabels(item);
				eventResultMessage = String.format("Attivi il portale con facilit&agrave;. Posizioni come ultima cosa una candela "
						+ "al centro del cerchio e questa inizia a brillare, dopo un lampo accecante vedi che al "
						+ "suo posto &egrave; comparso un forziere. Lo apri e trovi un oggetto <b>%s</b>", item.getName());
			}
		}
		
		return eventResultMessage;
	}
	
	private String destroyAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 7 && !percentTest(rollD12*4)) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				adventureDB.decreasePlayerHealth();
				eventResultMessage = "Attacchi subito il libro, ma appena lo colpisci questo esplode. E di conseguenza grosse rocce "
						+ "cadono dal soffitto, sei investita dalla frana e vieni ferita gravemente";
			} else {
				eventResultMessage = "Attacchi subito il libro, ma appena lo colpisci questo esplode. Con agilit&agrave; ti copri dal "
						+ "danno esplosivo, e fuggi prima che la situazione degeneri";
			}
		} else if (rollD12 < 12) {
			if (percentTest(rollD100 + rollD12)) {
				eventEffectDB.setActiveEffect("I tiri di <b>test talismano</b> sono aumentati di 1");
				eventResultMessage = "Attacchi il rituale, ma questo esplode in un onda di energia oscura che ti infonde una "
						+ "maledizione magica.<br />"
						+ "-Nuovo effetto attivo-";
			} else if (percentTest(rollD100 + 10)) {
				adventureDB.decreasePlayerHealth();
				eventResultMessage = "Distruggi il rituale. Appena hai finito vedi dei loschi figuri incappucciati arrivare. "
						+ "<i>'Ha distrutto tutto!'</i>, <i>'&egrave; un eretico!'</i>, <i>'Deve pagare!'</i>, "
						+ "<i>'Prendetelo!'</i> urlano in gruppo. Di colpo sguainano dei pugnali e ti attaccano.<br/>"
						+ "Ti difendi al meglio delle tue capacit&agrave;, subisci qualche ferita, ma riesci a lasciare "
						+ "la stanza e seminare il gruppo.";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
				eventResultMessage = "Distruggi il leggio e il rituale. Quando hai finito una magia oscura si libera in aria e si dissolve. "
						+ "capisci di aver distrutto un legame tra la forza oscura e i mostri di quest'area. Ora quelle "
						+ "bestie faranno molta pi&ugrave; fatica a colpirti ora.<br />"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			if (!percentTest(rollD100+rollD12)) {
				eventResultMessage = "Attacchi il rituale e distruggi ogni cosa. Qualunque cosa stessero facendo qui, ora non la potranno "
						+ "pi&ugrave; fare";
			} else {
				adventureDB.increasePlayerHealth();
				adventureDB.increasePlayerHealth();
				eventResultMessage = "Attacchi il rituale e distruggi ogni cosa. Questo libera delle anime imprigionate nel cerchio "
						+ "maledetto. Ti senti sollevato, le tue ferite si rimarginano e vieni curata completamente.<br />"
						+ "Con queste nuove forze sei carica per affrontare altre sfide";
			}
		}
		
		return eventResultMessage;
	}

}
