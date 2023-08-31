package com.lucamartinelli.aentur.event;

import com.lucamartinelli.aentur.vo.EventDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-il-8")
@ApplicationScoped
public class ILOldIdolEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-il-8", 
			"Mezzo sepolto dalla neve, trovi un'antica statuetta che raffigura una lince, alla base sembrano esserci delle "
			+ "scritte, ma non vedi benissimo cosa dicono", 
			new String[] {"Ignora la statua", "Ispeziona la statua"});
	
	private static final String IDOL_TEXT = "<i><b>'Alla divina lince, adorala e ti risparmiera' dal suo pasto'</b></i>";
	
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
			return Response.ok(inspectAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 5) {
			if (percentTest(rollD100+(rollD12*2))) {
				return "Noti che piu' ti avvicini piu' i suoi occhi iniziano a brillare di un rosso acceso, credi sia "
						+ "meglio andarsene di corsa da li'";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Con scarso interesse preferisci lasciare l'idolo a se', ma appena gli dai le spalle senti una voce "
						+ "<i>'Come osi non inginocchiarti davanti alla divinita' felina o sporco roditore! Sarai punito'"
						+ "</i>, Dopo questa frase un fulmine si scaglia su di te colpendoti e ferendoti";
			}
			
		} else {
			return "Decidi di ignorare l'idolo e lo lasci nella neve";
		}
	}

	private Object inspectAction(int rollD100, int rollD12) {
		if (rollD12 < 5) {
			if (percentTest(rollD100)) {
				return "Ti avvicini e leggi la scritta: " + IDOL_TEXT + ". Allora mostri "
						+ "rispetto. Chini la testa e quando la rialzi trovi davanti a te una lince bianca dal pelo folto "
						+ "che ti guarda. Dopo qualche istante di silenzio ti dice: <i>'Accetto la tua riverenza, puoi "
						+ "proseguire nel tuo cammino'</i>";
			} else {
				adventureDB.decreasePlayerHealth();
				return "Ti avvicini alla statua, ma la scritta e' rovinata dal gelo e non la riesci a decifrare. Dato che "
						+ "non trovi nulla di valore, la superi, ma appena fatti un paio di passi senti un ringhio alle "
						+ "spalle... <i>'Folle, come osi passare di qui senza adorare la regina del gelo?'</i>"
						+ "Ti giri e vedi una grossa lince con le fauci aperte. E' cosi' rapida che non ti accorgi "
						+ "neanche del suo movimento quando si lancia verso di te. Ti grafia e ti ferisce, ma riesci a "
						+ "sfuggire alle sue grinfie e scappare prima che faccia banchetto di te.";
			}
		} else if (rollD12 < 8) {
			if (percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono aumentati di 1");
				return "Ti avvicini e leggi la frase incisa ai piedi della statua: " + IDOL_TEXT + ". A quel punto "
						+ "ti inchini e senti all'improvviso una voce: <i>'Apprezzo il tuo gesto e benedico nel tuo "
						+ "cammino'</i>. Senti un'aura magica avvolgerti.<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono diminuiti di 1");
				return "Ti avvicini e leggi la frase incisa ai piedi della statua: " + IDOL_TEXT + ". Ridacchi pensando "
						+ "alle persone che han portato fino a qui una statua da chissa' dove. Ma questo tuo gesto sembra "
						+ "non piacere all'idolo che illumina i suoi occhi di rosso. Senti una voce: <i>'Ti prendi gioco "
						+ "di me? Pensi che non sia reale la mia presenza su questa terra? Ora sentirai come sono reale'"
						+ "</i>. Un'aura magica ti avvolge e ti preme su tutto il corpo. Ti senti frastornato<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			if (percentTest(rollD100)) {
				if (playerInventoryDB.getGold() > 0) {
					eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono diminuiti di 1");
					playerInventoryDB.removeGold(1L);
					return "Ti avvicini e leggi la frase incisa ai piedi della statua: " + IDOL_TEXT + ". Cerchi nella "
							+ "tua borsa una moneta d'oro e la offri alla statua. Un raggio di sole ti illumina e alle "
							+ "spalle senti una voce: <i>'Il tuo tributo e' apprezzato, ti benedico con la velocita' del "
							+ "forte felino, buona fortuna'</i>, ti volti e vedi una grande lince bianca con un bel pelo "
							+ "folto che ti guarda seduta in mezzo alla neve. Senti forza e velocita' scorrere in te."
							+ " Ringrazi e te ne vai.<br/>"
							+ "-Nuovo effetto attivo-";
				} else {
					playerInventoryDB.addGold(5L);
					return "Ti avvicini e leggi la frase incisa ai piedi della statua: " + IDOL_TEXT + ". Cerchi nella "
							+ "borsa qualche moneta da offrire, ma non possidi oro. Senti una voce: <i>'Apprezzo la tua "
							+ "volonta' nel farmi un tributo, la tua poverta' non e' essenziale ai miei occhi, prendi "
							+ "questo dono e prosegui nel tuo viaggio, buona fortuna la' fuori'</i>. Un colpo di vento "
							+ "solleva un po' di neve e vedi un sacchetto con 5 monete d'oro al suo interno. Ringrazi e "
							+ "te ne vai";
				}
			} else {
				return "Ti avvicini e leggi la frase incisa ai piedi della statua: " + IDOL_TEXT + ". Ti inchini, ma non "
						+ "succede nulla. Spolveri la statua dalla neve e ancora nulla. Provi a farle una linguaccia e "
						+ "continua a non succedere niente. Delusa te ne vai";
			}
		}
		
	}

}
