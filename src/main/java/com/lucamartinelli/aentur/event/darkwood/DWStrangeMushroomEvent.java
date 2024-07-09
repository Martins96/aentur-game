package com.lucamartinelli.aentur.event.darkwood;

import com.lucamartinelli.aentur.event.EventAction;
import com.lucamartinelli.aentur.vo.EventDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-dw-2")
@ApplicationScoped
public class DWStrangeMushroomEvent implements EventAction {
	
	private final EventDTO event = new EventDTO("event-dw-2", 
			"Camminando lungo il bosco trovi degli strani funghi, hanno un colore acceso e sembrano potenzialmente "
			+ "utili...<br/>"
			+ "Cosa vuoi fare?", 
			new String[] {"Ignorali, saranno inutili", "Saranno buoni? Cucinali", "Saranno velenosi? Cospargili sull'arma"});
	
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
				return Response.ok(cookAction(rollD100, rollD12)).build();
			case 3:
				return Response.ok(toWeaponAction(rollD100, rollD12)).build();
	
			default:
				return Response.status(400, "Invalid choice id").build();
		}
	}

	private String ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 4) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				return "Ti giri per andartene quando un fungo prende vita e ti attacca alla schiena. Ferita fuggi "
						+ "da quella zona";
			} else {
				return "Annusando i funghi senti una qualche specie di puzza, ti allontani con fretta dalla zona";
			}
		}
		return "Decidi di non rischiare e ignori i funghi. Continui lasciando il suolo intoccato";
	}
	
	private String cookAction(int rollD100, int rollD12) {
		if (rollD12 < 8) {
			if (!percentTest(rollD100)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri per <b>difesa</b> e i <b>test armatura</b> sono diminuiti di 1");
				return "Tenti di cucinare i funghi per avere un pasto rinvigorente, ma tutto quello che senti dopo "
						+ "averlo mangiato e' solo nausea e capogiri. I funghi dovevano essere velenosi e ti feriscono. "
						+ "Inoltre senti anche una pesantezza allo stomaco e giramenti di testa che ti indeboliscono<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				return "Tenti di cucinare i funghi, ma quello che crei e' solo una poltiglia puzzolente e poco invitante. "
						+ "Decidi saggiamente di non mangiarla dato il suo aspetto e passi oltre.";
			}
		} else if (rollD12 < 12) {
			if (!percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono diminuiti di 1");
				return "Cucini una zuppa fluorescente, dopo averla mangiata non senti niente di diverso, fino a quando "
						+ "senti la magia e la tua fortuna diminuire, in compenso hai la pelle leggermente fluorescente!<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e i <b>test armatura</b> sono aumentati di 1");
				return "Crei una zuppa gustosa degna di una taverna, dopo aver mangiato ti senti in forze e sei "
						+ "pronta per affrontare nuove avventure<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			adventureDB.increasePlayerHealth();
			adventureDB.increasePlayerHealth();
			return "Crei degli spiedini di funghi davvero ottimi, il gusto e' tanto buono quanto utile. Grazie a questo "
					+ "pasto le tue ferite sono guarite e ora puoi continuare il viaggio con tranquillita'";
		}
	}
	
	private String toWeaponAction(int rollD100, int rollD12) {
		if (rollD12 < 3) {
			if (!percentTest(rollD100/2)) {
				adventureDB.decreasePlayerHealth();
				return "Il solo contatto con il fungo ti irrita tutta la pelle. Le mani ti prudono e si formano dei "
						+ "piccoli graffi molto fastidiosi. Subisci un danno.";
			} else {
				return "I funghi si sbriciolano appena li sfiori, non sono adatti per questo tipo di impiego, "
						+ "lasci perdere e passi avanti.";
			}
		} else if (rollD12 < 7) {
			if (!percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e i <b>test arma</b> sono diminuiti di 1");
				return "Cospargi l'arma con il fungo, ma questo la rende solo piu' appiccicosa e difficile da usare.<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				return "Cospargi l'arma con il fungo, ma non sembra che abbia nessun effetto, forse e' leggermente piu'"
						+ "lucida ora? Nessun effetto utile viene aggiunto, ma anche nessun effetto negativo almeno.";
			}
		} else {
			if (!percentTest(rollD100-10)) {
				return "I funghi sono completamente secchi, non si riescono a spargere sulla tua arma, lasci perdere "
						+ "il processo e vai avanti";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e i <b>test arma</b> sono aumentati di 1");
				return "Con pazienza spalmi il fungo sulla tua arma, il fungo rilascia una tossina che la rende ancora "
						+ "piu' pericolosa, i nemici dovranno averne paura.<br/>"
						+ "-Nuovo effetto attivo-";
			}
		}
	}

}
