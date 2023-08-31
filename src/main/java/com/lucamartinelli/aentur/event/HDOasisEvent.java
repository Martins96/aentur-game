package com.lucamartinelli.aentur.event;

import com.lucamartinelli.aentur.vo.EventDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;

@Named("event-hd-11")
@ApplicationScoped
public class HDOasisEvent implements EventAction {

	private final EventDTO event = new EventDTO("event-hd-11", 
			"Stai camminando sotto il sole cocente e le tue scorte di acqua stanno finendo. "
			+ "All'improvviso vedi in lontanaza qualcosa se sembra un laghetto con delle palme.", 
			new String[] {"Ignora il luogo e prosegui", "Avvicinati all'oasi"});

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
			return Response.ok(oasisAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 8) {
			if (percentTest(rollD100+rollD12)) {
				return "Ignori il posto, e' troppo distante e non credi sia reale. Il caldo forse ti sta dando troppo "
						+ "alla testa. Prosegui con determinazione e sai come razionalizzare l'acqua in modo efficente."
						+ " Fai fatica, ma ce la fai";
			} else {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono diminuiti di 1");
				return "Continui ignorando il luogo, ma dopo qualche metro ti senti stanchissima. Ormai l'acqua e' "
						+ "finita e soffri per la disidratazione che ti fersice e di indebolisce<br/>"
						+ "-Nuovo effetto attivo-";
			}
		} else {
			if (percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri di <b>attacco</b> e <b>test arma</b> sono aumentati di 1");
				return "Continui ignorando il luogo, ma dopo qualche metro vedi mezza sepolata dalla sabbia una "
						+ "borsa abbandonata. All'interno trovi una dissetante pozione della forza che bevi e "
						+ "ti carica, se tu avessi cambiato percorso per l'oasi non l'avresti mai trovata<br/>"
						+ "-Nuovo effetto attivo-";
			} else {
				return "Ignori il posto, Non ti serve fare soste, prosegui con determinazione e sai come "
						+ "razionalizzare l'acqua in modo efficente. Fai fatica, ma ce la fai";
			}
		}
	}

	private Object oasisAction(int rollD100, int rollD12) {
		if (rollD12 < 6) {
			if (percentTest(rollD100+rollD12)) {
				if (percentTest(rollD100)) {
					eventEffectDB.setActiveEffect("I tiri di per i <b>test talismano</b> sono aumentati di 1");
					return "Cammini fino all'oasi, ma questa e' proscoiugata. Gli alberi attorno sono secchi, ma "
							+ "trovi una vecchia borsa abbandonata, all'interno una dissetante pozione della magia"
							+ " minore. La bevi tutta d'un fiato e senti una leggera forza magica in te. Non e' molto "
							+ "ma almeno hai bevuto qualcosa.<br/>"
							+ "-Nuovo effetto attivo-";
				} else {
					eventEffectDB.setActiveEffect("I tiri di per i <b>test talismano</b> sono diminuiti di 1");
					return "Cammini fino all'oasi, ma questa e' proscoiugata. Gli alberi attorno sono secchi, ma "
							+ "trovi una vecchia borsa abbandonata, all'interno una dissetante pozione della magia "
							+ "minore. La bevi tutta d'un fiato, ma questa era vecchia e anche piena di sabbia. La "
							+ "magia scompare da te e .<br/>"
							+ "-Nuovo effetto attivo-";
				}
			} else {
				if (percentTest(rollD100)) {
					return "Provi ad avvicinarti all'oasi, ma dopo pochi passi questa si muove, sfreghi gli occhi e vedi "
							+ "che era solo un'illusione. Triste prosegui il cammino, ma almeno non hai fatto la strada "
							+ "fino a la'";
				} else {
					adventureDB.decreasePlayerHealth();
					return "Cammini verso l'oasi, ma passo dopo passo sembra sempre lontana, non riesci ad avvicinarti "
							+ "neppure un po', dopo decine di metri capisci che era un'allucinazione e che il sole ti "
							+ "sta disidratando. Hai fatto della strada inutile e il caldo ti ferisce.";
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				if (percentTest(rollD100)) {
					adventureDB.increasePlayerHealth();
					eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
					return "Raggiungi con gioia l'oasi, c'e' acqua, frutta di alcuni alberi e ombra. Bevi e mangi a "
							+ "sazieta'. Recuperi le ferite e il tuo fisico si rafforza per affrontare di nuovo il caldo."
							+ "<br/>"
							+ "-Nuovo effetto attivo-";
				} else {
					if (playerInventoryDB.getGold() > 4) {
						playerInventoryDB.removeGold(5);
						adventureDB.increasePlayerHealth();
						eventEffectDB.setActiveEffect("I tiri di <b>difesa</b> e <b>test armatura</b> sono aumentati di 1");
						return "Raggiungi con gioia l'oasi, ma e' controllata da dei beduini che chiedono del denaro per "
								+ "l'accesso. Estremamente assetata cedi 5 monete d'oro per accedere all'oasi."
								+ "C'e' acqua, frutta di alcuni alberi e ombra. Bevi e mangi a "
								+ "sazieta'. Recuperi le ferite e il tuo fisico si rafforza per affrontare di nuovo "
								+ "il caldo.<br/>"
								+ "-Nuovo effetto attivo-";
					} else {
						return "Raggiungi con gioia l'oasi, ma e' controllata da dei beduini che chiedono del denaro per "
								+ "l'accesso. Non hai abbastanza denaro e li preghi di farti passare. Ti negano l'accesso, "
								+ "ma per pieta' ti riempiono la borraccia per poter proseguire.";
					}
				}
			} else {
				if (percentTest(rollD100)) {
					return "Provi ad avvicinarti all'oasi, ma dopo pochi passi questa si muove, sfreghi gli occhi e vedi "
							+ "che era solo un'illusione. Triste prosegui il cammino, ma almeno non hai fatto la strada "
							+ "fino a la'";
				} else {
					adventureDB.decreasePlayerHealth();
					return "Raggiungi l'oasi, c'e' acqua e inizia a bere e riempire la borraccia. Mentre sei intenta a "
							+ "raccogliere acqua, non ti accorgi dei coccodrilli che si avvicinano a te. Ti accorgi della "
							+ "loro presenza solo quando uno ti morde. Con una ferita, ma almeno la borraccia piena, "
							+ "scappi dalla zona.";
				}
			}
		}
	}

}
