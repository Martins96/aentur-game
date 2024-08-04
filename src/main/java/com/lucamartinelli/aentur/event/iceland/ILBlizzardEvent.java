package com.lucamartinelli.aentur.event.iceland;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-il-7")
@ApplicationScoped
public class ILBlizzardEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-il-7", 
			"Mentre cammini senti l'aria che diventa piu' fredda, una tempesta di neve inizia a sollevarsi nella zona "
			+ "e devi decidere cosa fare", 
			new String[] {"Prosegui sulla strada", "Crea un rifugio sotto la neve", "Cerca un riparo in giro"});
	
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
			return ImmutablePair.of(snowShelterAction(rollD100, rollD12), null);
		case 3:
			return ImmutablePair.of(searchAction(rollD100, rollD12), null);

		default:
			return ImmutablePair.of(null, Map.entry(400, "Invalid choice id"));
		}
	}

	private EventResponseVO ignoreAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 9) {
			if (percentTest(rollD100-rollD12)) {
				eventResultImage = "event-il-7-ignore-1";
				eventResultMessage = "Tenti di continuare, il freddo e' glaciale, ma con tenacia passi la zona cercando come puoi "
						+ "di ripararti e riprendere fiato dietro ad ogni roccia o albero. Comunque riesci a superare "
						+ "la tempesta incolume";
			} else {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-il-7-ignore-2";
				eventResultMessage = "Tenti di proseguire il cammino, ma la tempesta e' forte e rende i tuoi passi sempre piu' difficili"
						+ ", la vista inizia ad annebiarsi e la neve ti avvolge. Perdi la strada e cadi a terra "
						+ "incoscente<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			eventResultImage = "event-il-7-ignore-1";
			eventResultMessage = "Le tue conoscenze delle zone impervie e inospitali come questa tornano utili. Passando in zone "
					+ "riparate sottovento ed evitando di essere troppo esposta al gelo riesci a passare la tempesta "
					+ "senza particolari problemi";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO snowShelterAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 8) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-7-shelter-1";
				eventResultMessage = "Crei un rifugio temporaneo per la bufera, non &egrave; granch&egrave;, "
						+ "ma sufficiente per proteggerti dal vento gelido.";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-il-7-shelter-2";
				eventResultMessage = "Crei un rifugio temporaneo per la bufera, ma appena ti ci infili crolla. Le tue capacita' non "
						+ "erano sufficienti per questo compito. Rimani ferita e superi la tempesta";
			}
		} else {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-il-7-shelter-1";
				eventResultMessage = "Crei rapidamente un rifugio resistente con la neve in un posto contro vento, ti ci infili e ti "
						+ "proteggi dalla bufera. E' cos&igrave; accogliente che fai anche un riposino e recuperi delle ferite";
			} else {
				eventResultImage = "event-il-7-shelter-3";
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultMessage = "Crei un rifugio temporaneo per la bufera. Ti protegge dalla bufera, ma &egrave; cos&igrave; stretto che la "
						+ "neve &egrave; aderente al tuo corpo e una parte inizia a sciogliersi. L'acqua va a contatto con la "
						+ "tua armatura e la tua pelle raffreddandoti e rendendoti pi&ugrave; debole<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO searchAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		final int d12percent = rollD12 * 9;
		if (percentTest(d12percent)) {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				reward.resolveItemLabels();
				eventResultImage = "event-il-7-search-1";
				eventResultMessage = String.format("Inizi a cercare un rifugio e noti una piccola caverna poco distante, la raggiungi e, mentre "
						+ "attendi la fine della tempesta, provi ad esplorarla. Addentrandoti trovi un vecchio baule "
						+ "che contiene un oggetto: <b>%s</b>", reward.getItem().getName());
			} else {
				if (percentTest(d12percent-rollD12)) {
					adventureDB.increasePlayerHealth();
					eventResultImage = "event-il-7-search-2";
					eventResultMessage = "Girovagando trovi una grotta con un bagliore al suo interno. Entri e trovi un giramondo "
							+ "davanti ad un fal&ograve;. Lui ti saluta dicendoti <i>'Oh che sorpresa, hai trovato riparo "
							+ "anche tu da questo tempaccio vedo, che ne dici di riposarti un po' qui davanti al "
							+ "fuoco?'</i>, accetti l'invito e ti rilassi chiaccerando con lo sconosciuto. Passi dei "
							+ "piacevoli minuti con lui e poi la tempesta si placa. Vi salutate e riprendete il viaggio";
				} else {
					eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-il-7-search-3";
					eventResultMessage = "Trovi di fortuna una grotta, ma capisci che la fortuna scopare quando all'interno decine "
							+ "di pipistrelli vampiro ti accerchiano. Non riesci a difenderti e ti attaccano. Supbisci "
							+ "delle ferite e ti assorbono la forza vitale. Ma almeno la tempesta e' passata<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "event-il-7-search-4";
				eventResultMessage = "Inizi a cercare un rifugio e noti una piccola caverna di ghiaccio poco distante. E' veramente "
						+ "piccola, ma baster&agrave; per ripararti dal clima gelido";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-il-7-search-5";
				eventResultMessage = "Tenti invano di trovare un rifugio, ma tutto quello che c'&egrave; attorno a "
						+ "te &egrave; solo neve. A questo "
						+ "punto tenti di superare la tempesta e lo fai con molta difficolt&agrave;. Il freddo ti ferisce "
						+ "fino alle ossa.";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

}
