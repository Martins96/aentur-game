package com.lucamartinelli.aentur.event.hottendesert;

import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

@Named("event-hd-13")
@ApplicationScoped
public class HDSandStormEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-hd-13", 
			"Mentre cammini senti il vento alzarsi e in poco tempo una tempesta di sabbia si crea dal nulla", 
			new String[] {"Prosegui sulla strada", "Crea un rifugio Con del tessuto", "Cerca un riparo in giro"});
	
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
			return ImmutablePair.of(shelterAction(rollD100, rollD12), null);
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
				eventResultImage = "event-hd-13-ignore-1";
				eventResultMessage = "Tenti di continuare, la sabbia ti avvolge, ma con tenacia passi la zona cercando come puoi "
						+ "di ripararti e riprendere fiato dietro ad ogni roccia o quel che trovi."
						+ " Comunque riesci a superare la tempesta incolume";
			} else {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-hd-13-ignore-2";
				eventResultMessage = "Tenti di proseguire il cammino, ma la tempesta &egrave; forte e rende i tuoi passi sempre pi&ugrave; difficili"
						+ ", la vista inizia ad annebiarsi e la sabbia ti avvolge. Perdi la strada e cadi a terra "
						+ "incoscente<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			eventResultImage = "event-hd-13-ignore-1";
			eventResultMessage = "Le tue conoscenze delle zone impervie e inospitali come questa tornano utili. Passando in zone "
					+ "riparate sottovento ed evitando di essere troppo esposta al vento riesci a passare la tempesta "
					+ "senza particolari problemi";
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
	}

	private EventResponseVO shelterAction(int rollD100, int rollD12) {
		String eventResultMessage;
		String eventResultImage;
		
		if (rollD12 < 8) {
			if (percentTest(rollD100)) {
				eventResultImage = "event-hd-13-shelter-1";
				eventResultMessage = "Crei un rifugio temporaneo per la tempesta, non &egrave; granch&egrave;, ma sufficiente per proteggerti dal "
						+ "vento e da tutto quello che trasporta.";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-hd-13-shelter-2";
				eventResultMessage = "Crei un rifugio temporaneo per superare questo clima, ma appena ti ci infili crolla. "
						+ "Le tue capacit&agrave; non erano sufficienti per questo compito. Rimani ferita, "
						+ "ma superi la tempesta";
			}
		} else {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				eventResultImage = "event-hd-13-shelter-3";
				eventResultMessage = "Crei rapidamente un rifugio resistente con la tessuti e dei rametti che trovi in giro e lo "
						+ "posizioni in un posto contro vento, ti ci infili e ti proteggi dalla tempesta di sabbia. "
						+ "E' cos&igrave; accogliente che fai anche un riposino e recuperi delle ferite";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				eventResultImage = "event-hd-13-shelter-4";
				eventResultMessage = "Crei un rifugio temporaneo. Ti protegge dalla tempesta di sabbia, ma &egrave; cos&igrave; stretto e con "
						+ "spifferi che la sabbia entra comunque. Si infila ovunque danneggiando la tua armatura e la "
						+ "tua pelle. Finita la tempesta ti senti pi&ugrave; debole<br/>"
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
				eventResultImage = "event-hd-13-search-1";
				eventResultMessage = String.format("Inizi a cercare un rifugio e noti una piccola caverna poco distante, la raggiungi e, mentre "
						+ "attendi la fine della tempesta, provi ad esplorarla. Addentrandoti trovi un vecchio baule "
						+ "che contiene un oggetto: <b>%s</b>", reward.getItem().getName());
			} else {
				if (percentTest(d12percent-rollD12)) {
					adventureDB.increasePlayerHealth();
					eventResultImage = "event-hd-13-search-2";
					eventResultMessage = "Girovagando trovi una grotta con un bagliore al suo interno. Entri e trovi un giramondo "
							+ "davanti ad un fal&ograve;. Lui ti saluta dicendoti <i>'Oh che sorpresa, hai trovato riparo "
							+ "anche tu da questo tempaccio vedo, che ne dici di riposarti un po' qui davanti al "
							+ "fal&ograve;?'</i>, accetti l'invito e ti rilassi chiaccerando con lo sconosciuto. Passi dei "
							+ "piacevoli minuti con lui e poi la tempesta si placa. Vi salutate e riprendete il viaggio";
				} else {
					eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
					adventureDB.decreasePlayerHealth();
					eventResultImage = "event-hd-13-search-3";
					eventResultMessage = "Trovi di fortuna una grotta, ma capisci che la fortuna scopare quando all'interno decine "
							+ "di pipistrelli vampiro ti accerchiano. Non riesci a difenderti e ti attaccano. Subisci "
							+ "delle ferite e ti assorbono la forza vitale. Ma almeno la tempesta e' passata<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100)) {
				eventResultImage = "event-hd-13-search-4";
				eventResultMessage = "Inizi a cercare un rifugio e noti una piccola caverna di ardesia poco distante. E' veramente "
						+ "piccola, ma baster&agrave; per ripararti dal clima gelido";
			} else {
				adventureDB.decreasePlayerHealth();
				eventResultImage = "event-hd-13-ignore-2";
				eventResultMessage = "Tenti invano di trovare un rifugio, ma tutto quello che c'&egrave; attorno a te &egrave; solo sabbia. A questo "
						+ "punto tenti di superare la tempesta e lo fai con molta difficolt&agrave;. La sabbia ti ferisce "
						+ "e ti entra nei polmoni.";
			}
		}
		
		return new EventResponseVO(eventResultMessage, eventResultImage);
		
	}

}
