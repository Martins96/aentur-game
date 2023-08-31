package com.lucamartinelli.aentur.event;

import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

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
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(ignoreAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(snowShelterAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(searchAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 9) {
			if (percentTest(rollD100-rollD12)) {
				return "Tenti di continuare, il freddo e' glaciale, ma con tenacia passi la zona cercando come puoi "
						+ "di ripararti e riprendere fiato dietro ad ogni roccia o albero. Comunque riesci a superare "
						+ "la tempesta incolume";
			} else {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				return "Tenti di proseguire il cammino, ma la tempesta e' forte e rende i tuoi passi sempre piu' difficili"
						+ ", la vista inizia ad annebiarsi e la neve ti avvolge. Perdi la strada e cadi a terra "
						+ "incoscente<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			return "Le tue conoscenze delle zone impervie e inospitali come questa tornano utili. Passando in zone "
					+ "riparate sottovento ed evitando di essere troppo esposta al gelo riesci a passare la tempesta "
					+ "senza particolari problemi";
		}
	}

	private Object snowShelterAction(int rollD100, int rollD12) {
		if (rollD12 < 8) {
			if (percentTest(rollD100)) {
				return "Crei un rifugio temporaneo per la bufera, non e' granche', ma sufficiente per proteggerti dal "
						+ "vento gelido.";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Crei un rifugio temporaneo per la bufera, ma appena ti ci infili crolla. Le tue capacita' non "
						+ "erano sufficienti per questo compito. Rimani ferita e superi la tempesta";
			}
		} else {
			if (percentTest(rollD100)) {
				adventureDB.increasePlayerHealth();
				return "Crei rapidamente un rifugio resistente con la neve in un posto contro vento, ti ci infili e ti "
						+ "proteggi dalla bufera. E' cosi' accogliente che fai anche un riposino e recuperi delle ferite";
			} else {
				eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
				return "Crei un rifugio temporaneo per la bufera. Ti protegge dalla bufera, ma e' cosi' stretto che la "
						+ "neve e' aderente al tuo corpo e una parte inizia a sciogliersi. L'acqua va a contatto con la "
						+ "tua armatura e la tua pelle raffreddandoti e rendendoti piu' debole<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}

	private Object searchAction(int rollD100, int rollD12) {
		final int d12percent = rollD12 * 9;
		if (percentTest(d12percent)) {
			if (percentTest(rollD100)) {
				final RewardDTO reward = rewardEJB.getReward(1);
				playerInventoryDB.addItems(reward.getItem());
				return "Inizi a cercare un rifugio e noti una piccola caverna poco distante, la raggiungi e, mentre "
						+ "attendi la fine della tempesta, provi ad esplorarla. Addentrandoti trovi un vecchio baule "
						+ "che contiene un oggetto: <b>" + reward.getItem().getName() + "</b>";
			} else {
				if (percentTest(d12percent-rollD12)) {
					adventureDB.increasePlayerHealth();
					return "Girovagando trovi una grotta con un bagliore al suo interno. Entri e trovi un giramondo "
							+ "davanti ad un falo'. Lui ti saluta dicendoti <i>'Oh che sorpresa, hai trovato riparo "
							+ "anche tu da questo tempaccio vedo, che ne dici di riposarti un po' qui davanti al "
							+ "fuoco?'</i>, accetti l'invito e ti rilassi chiaccerando con lo sconosciuto. Passi dei "
							+ "piacevoli minuti con lui e poi la tempesta si placa. Vi salutate e riprendete il viaggio";
				} else {
					eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
					adventureDB.decreasePlayerHealth();
					return "Trovi di fortuna una grotta, ma capisci che la fortuna scopare quando all'interno decine "
							+ "di pipistrelli vampiro ti accerchiano. Non riesci a difenderti e ti attaccano. Supbisci "
							+ "delle ferite e ti assorbono la forza vitale. Ma almeno la tempesta e' passata<br/>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100)) {
				return "Inizi a cercare un rifugio e noti una piccola caverna di ghiaccio poco distante. E' veramente "
						+ "piccola, ma bastera' per ripararti dal clima gelido";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Tenti invano di trovare un rifugio, ma tutto quello che c'e' attorno a te e' solo neve. A questo "
						+ "punto tenti di superare la tempesta e lo fai con molta difficolta'. Il freddo ti ferisce "
						+ "fino alle ossa.";
			}
		}
		
	}

}
