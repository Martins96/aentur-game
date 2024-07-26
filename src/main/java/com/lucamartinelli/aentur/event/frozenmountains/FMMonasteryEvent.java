package com.lucamartinelli.aentur.event.frozenmountains;

import com.lucamartinelli.aentur.event.EventActionOld;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.ws.rs.core.Response;


@Named("event-fm-18")
@ApplicationScoped
public class FMMonasteryEvent implements EventActionOld {

	private final EventDTO event = new EventDTO("event-fm-18", 
			"Affronti una faticosa salita durante il cammino, alla fine di questa ti ritrovi in uno spiazzo "
			+ "abbastanza soleggiato e con al centro un monastero in pietra. Sembra antico, ma ben "
			+ "mantenuto. Tutt'attorno ci sono piccole capanne per attrezzi con piante e quello che "
			+ "sembra a tutti gli effetti un orto, ma una staccionata copre la vista e non riesci a capire "
			+ "in che stato sia messo",
			new String[] {"Bussa e controlla il monastero", "Cerca nell'orto e nelle capanne", 
					"Ignora il luogo e prosegui"});
	
	@Override
	public EventDTO getWelcomeMessage() {
		eventEffectDB.setActiveEffect(null);
		return event;
	}

	@Override
	public Response apply(int choice, int rollD100, int rollD12) {
		switch (choice) {
		case 1:
			return Response.ok(runCheckMonasteryAction(rollD100, rollD12)).build();
		case 2:
			return Response.ok(runCheckBackyardAction(rollD100, rollD12)).build();
		case 3:
			return Response.ok(ignoreAction(rollD100, rollD12)).build();

		default:
			return Response.status(400, "Invalid choice id").build();
		}
	}

	

	private Object runCheckMonasteryAction(int rollD100, int rollD12) {
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				return "Bussi alla porta, ma nessuno risponde. Apri la porta e vedi un'ampia sala con al "
						+ "centro strani simboli disegnati sul pavimento. Un tonfo rompe il silenzio del "
						+ "momento. Da una stanza laterale entrano loschi individui incappucciati con un "
						+ "mantello rosso scuro. Si avvicinano al centro della stanza e iniziano a "
						+ "farfugliare frasi sconnesse. Uno di loro mostra da sotto un mantello un'anfora "
						+ "nella quale butta una polvere grigia. In men che non si dica il vaso inizia ad "
						+ "emanare un fumo denso che avvolge il gruppo.<br>"
						+ "In pochi secondi non vedi più le figure nella stanza, e sempre in pochi secondi "
						+ "il fumo si dissolve. Il gruppo di strani tizi non c'e' piu', come i disegni che "
						+ "avevi visto all'inizio.<br>"
						+ "Resti un po' turbata e decidi di non investigare oltre. Lasci il monastero e il "
						+ "suo strano avvenimento";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
				return "Bussi alla porta, ma nessuno risponde. Apri la porta e vedi un'ampia sala apparente"
						+ "mente deserta. Ti avvicini al centro cercando qualcosa di utile o qualcuno, quando "
						+ "la porta di ingresso sbatte violentemente. Ti volti e intorno a te iniziano ad "
						+ "accendersi magicamente delle candele. Una voce rieccheggia \"<i>Fratelli, gli spititi "
						+ "ci hanno ascoltato, una preda è entrata nel nostro tempio e ora e' nostra!</i>\"<br>"
						+ "Forze oscure si sollevano dal pavimento e ti circondano. Tenti di fuggire, ma ombre "
						+ "ti lanciano sfere oscure che tagliano come lame. Subisci diverse ferite fino a quando "
						+ "riesci ad aprire la porta. Hai appena messo un piede fuori dal monastero, quando un "
						+ "fumo ti avvolge e risucchia le tue forze.<br>"
						+ "Con uno scatto disperato, fuggi dalla cortina che ti imprigionava e lasci la zona.<br>"
						+ "-Nuovo effetto attivo-";
			}
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				return "Bussi alla porta, ma nessuno risponde. Apri la porta e vedi un'ampia sala deserta. Guardi "
						+ "attorno per vedere se e' rimasto qualcosa di utile o qualcuno, ma quello che trovi "
						+ "e' solamente vecchie pergamente e mobili malandati. Il posto deve essere abbandonato da "
						+ "molto tempo.";
			} else {
				final String preMsg = "Bussi alla porta, ma nessuno risponde. Apri la porta e vedi un'ampia sala con al centro "
						+ "uno strano topolino. Ti avvicini salutando, quando lui ti zittisce: \"<i>Ssh! Porta "
						+ "rispetto in un luogo sacro, se sei qui per pregare o meditare prendi posto nella sala"
						+ "</i>\".<br>Segui le sue indicazioni prendendo parte al rito. Passano minuti di "
						+ "contemplazione e meditazione fino al momento della richiesta di un offerta.<br>";
				if (playerInventoryDB.getGold() > 4L) {
					playerInventoryDB.removeGold(5L);
					return preMsg + "Togli dal borsello 5 monete d'oro e le doni al sacerdote.<br>"
							+ "\"<i>Grazie infinite</i>\", disse con il sorriso sulla faccia \"<i>Questa offerta "
							+ "e' davvero gradita agli spiriti. Grazie di aver partecipato alla funzione, spero "
							+ "che la tua anima ne sia felice</i>\". Saluti formalmente il monaco e riprendi la "
							+ "strada piu' leggero, non sai se e' la redenzione divina o solo la diminuzione di "
							+ "oro nelle tasche";
				} else if (playerInventoryDB.getGold() > 0L){
					final long offer = playerInventoryDB.getGold();
					playerInventoryDB.removeGold(offer);
					return preMsg + "Mostri che non hai molto denaro con te, il monaco inizialmente fa una "
							+ "faccia offesa, poi si riprende e seriamente ti dice: \"<i>Gli spiriti sono grati "
							+ "anche per offerte cosi' misere, in fondo hai dato tutto cio' che avevi.</i>\".<br>"
							+ "Posi " + offer + (offer > 1 ? " monete" : " moneta") + " nel cesto del sacerdote e"
							+ " lasci il luogo sacro. Riprendi la tua "
							+ "strada piu' leggero, non sai se e' la redenzione divina o solo la diminuzione di "
							+ "oro nelle tasche";
				} else {
					return preMsg + "Mostri di non avere denaro e con faccia delusa ti dice: \"<i>Prega "
							+ "che gli spiriti di donino la forza e la fortuna in futuro e ricorda "
							+ "di ringraziarli quando sara' il tempo.</i>\". Credevi che la spiritualita' "
							+ "fosse anche abbandonare i desideri materiali, ma forse ti sbagliavi. "
							+ "Saluti formalmente il monaco e riprendi la strada";
				}
			}
		} else {
			if (percentTest(rollD100)) {
				eventEffectDB.setActiveEffect("I tiri per i <b>test talismano</b> sono aumentati di 1");
				adventureDB.increasePlayerHealth();
				return "Bussi alla porta e vieni accorlto da un vecchio monaco. Ti sorride e ti invita ad entrare. "
						+ "Si presenta con il nome di Miki e ti chiede dove sei diretta. Gli spieghi la tua storia "
						+ "e lo lasci molto colpito. Ti invita a questo punto a pregare per la tua incolumita'.<br>"
						+ "Restate piu' di un'ora a pregare e meditare, tanto che il sole inizia a tramontare.<br>"
						+ "\"<i>Resta qui per la notte, non e' sicuro andare in giro con il buio</i>\", disse "
						+ "il monaco, \"<i>Per sdebitarmi della compagnia voglio offrirti una cena. Sai, sono "
						+ "in questo luogo da eremita da anni e mi ero dimenticato quanto fosse bello e caldo "
						+ "avere una discussione con qualcuno.</i>\".<br>"
						+ "Aiuti a preparare la cena, il pasto e' buonissimo e le verdure arrivano direttamente "
						+ "dal cortile del monastero. Pasi una notte tranquilla e al risveglio ti senti rinata.<br>"
						+ "Saluti il simpatico monaco e ricaricata parti per la tua strada<br>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100+rollD12)) {
					final String preMsg = "Bussi alla porta, ma nessuno risponde. Apri la porta e vedi un'ampia sala con al centro "
							+ "uno strano topolino. Ti avvicini salutando, quando lui ti zittisce: \"<i>Ssh! Porta "
							+ "rispetto in un luogo sacro, se sei qui per pregare o meditare prendi posto nella sala"
							+ "</i>\".<br>Segui le sue indicazioni prendendo parte al rito. Passano minuti di "
							+ "contemplazione e meditazione fino al momento della richiesta di un offerta.<br>",
							lastMsg;
					if (playerInventoryDB.getGold() > 5L){
						playerInventoryDB.removeGold(5L);
						eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono aumentati di 1");
						lastMsg = "Posi 5 monete d'oro, il sacerdote ti ringrazia e ti benedice. Finita la funzione "
								+ "saluti formalmente e te ne vai.<br>"
								+ "-Nuovo effetto attivo-";
					} else if (playerInventoryDB.getGold() > 0L){
						final long offer = playerInventoryDB.getGold();
						playerInventoryDB.removeGold(offer);
						lastMsg = "Mostri che non hai molto denaro con te, il monaco inizialmente fa una "
								+ "faccia offesa, poi si riprende e seriamente ti dice: \"<i>Gli spiriti sono grati "
								+ "anche per offerte cosi' misere, in fondo hai dato tutto cio' che avevi.</i>\".<br>"
								+ "Posi " + offer + (offer > 1 ? " monete" : " moneta") + " nel cesto del sacerdote e"
								+ " lasci il luogo sacro. Riprendi la tua "
								+ "strada piu' leggero, non sai se e' la redenzione divina o solo la diminuzione di "
								+ "oro nelle tasche";
					} else {
						lastMsg = "Mostri di non avere denaro e con faccia delusa ti dice: \"<i>Prega "
								+ "che gli spiriti di donino la forza e la fortuna in futuro e ricorda "
								+ "di ringraziarli quando sara' il tempo.</i>\". Credevi che la spiritualita' "
								+ "fosse anche abbandonare i desideri materiali, ma forse ti sbagliavi. "
								+ "Saluti formalmente il monaco e riprendi la strada";
					}
					return preMsg + lastMsg;
				} else {
					if (percentTest(rollD100-rollD12)) {
						return "Bussi alla porta, ma nessuno risponde. Apri la porta e vedi un'ampia sala con al "
								+ "centro statue antiche. L'atmosfera e' suggestiva e senti quasi la forza divina "
								+ "che protegge questo luogo. D'un tratto una voce nella tua testa rimbomba.<br>"
								+ "\"<i>Oscuri presagi dovevano accaderti, ma questa volta siamo immensamente "
								+ "buoni e ti doniamo protezione. Si' grato agli spiriti</i>\".<br>"
								+ "Confusa, lasci la zona e prosegui sulla tua strada";
					} else {
						adventureDB.increasePlayerHealth();
						final String preMsg = "Bussi alla porta e vieni accorlto da un monaco. "
								+ "Ti sorride e ti invita ad entrare. Si presenta con il nome di padre Jack e ti chiede "
								+ "di fargli un po' di compagnia e ti offre di passare la notte qui. Un po' turbata dalla "
								+ "sua insistenza, accetti e ti addormenti nel letto che ti ha preparato.<br>",
								postMsg;
						if (playerInventoryDB.getItems().size() > 0) {
							final int lostItemPos = getRandomInt(playerInventoryDB.getItems().size());
							final ItemDTO itemLost = playerInventoryDB.getItems().get(lostItemPos);
							playerInventoryDB.removeItems(itemLost);
							postMsg = "Ti risvegli ben riposata e... piu' leggera! Dalla tua borsa e' spatito l'oggetto "
									+ "'<b>" + itemLost.getName() + "</b>'! Cerchi padre Jack per delle spiegazioni, ma "
									+ "sembra essere sparito... Alla fine ti rendi conto di essere stata imbrogliata e "
									+ "che quello non era un monaco, ma un furfante. Perdi l'oggetto, ma almeno hai "
									+ "passato una notte al caldo e ti senti riposata";
						} else if (playerInventoryDB.getGold() > 0) {
							final int lostGold = (int) Math.ceil(playerInventoryDB.getGold() / 3);
							playerInventoryDB.removeGold(lostGold);
							postMsg = "Ti risvegli ben riposata e... piu' leggera! Dalla tua borsa e' sparito " + lostGold
									+ "d'oro! Cerchi padre Jack per delle spiegazioni, ma "
									+ "sembra essere sparito anche lui... Alla fine ti rendi conto di essere stata imbrogliata e "
									+ "che quello non era un monaco, ma un furfante. Perdi dell'oro, ma almeno hai "
									+ "passato una notte al caldo e ti senti riposata";
						} else {
							postMsg = "Ti svegli al mattino, riposata e carica per affrontare nuove avventure. Cerchi "
									+ "padre Jack per salutarlo, ma sembra sparito. Confusa lasci il monastero chiedendoti "
									+ "dove sia finito quel bizzarro individuo";
						}
						return preMsg + postMsg;
					}
				}
			}
		}
	}
	
	private Object runCheckBackyardAction(int rollD100, int rollD12) {
		if (rollD12 < 3) {
			if (percentTest(rollD100)) {
				return "Ti dirigi verso l'orto, ma appena apri il cancello dello steccato noti che tutto il "
						+ "giardino e' stato bruciato da un incendio. Non resta altro che cenere e pezzi di "
						+ "legno carbonizzati. Lasci la zona devastata e continui sulla tua strada.";
			} else {
				adventureDB.decreasePlayerHealth();
				adventureDB.decreasePlayerHealth();
				return "Entri nel cortile del monastero in cerca di qualcosa di utile. La vegetazione e' fitta "
						+ "e l'orto e' rigoglioso. Tutto questo grazie alla serra costruita per proteggere dal "
						+ "freddo. All'interno cerchi qualche pianta che possa darti del cibo o qualcosa di utile"
						+ ", ma improvvisamente vieni colpito da un'enorme pianta carnivora che ti ferisce con "
						+ "liane spinose. Subisci gravi danni";
			}
		} else if (rollD12 < 9) {
			if (percentTest(rollD100+rollD12)) {
				adventureDB.decreasePlayerHealth();
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono aumentati di 1");
				return "Entri nel cortile del monastero in cerca di qualcosa di utile. La vegetazione e' fitta "
						+ "e l'orto e' rigoglioso. Tutto questo grazie alla serra costruita per proteggere dal "
						+ "freddo. All'interno cerchi qualche pianta che possa darti del cibo o qualcosa di utile"
						+ ".<br>Trovi delle strane foglie e mentre le ispezioni senti le mani iniziare a bruciare."
						+ " Le foglie sono altamente velenose e ti feriscono, ma cogli l'occasione per avvelenare "
						+ "la tua arma e rendere i tuoi colpi piu' efficaci<br>"
						+ "-Nuovo effetto attivo-";
			} else {
				if (percentTest(rollD100)) {
					return "Entri nel cortile del monastero in cerca di qualcosa di utile. Osservando pero' noti "
							+ "solo vecchie rovine e neve. L'orto e le capanne di attrezzi che un tempo erano "
							+ "ricche e utili, ora sono soltanto rottami inutili.";
				} else {
					eventEffectDB.setActiveEffect("I tiri <b>difesa</b> e per i <b>test armatura</b> sono diminuiti di 1");
					return "Entri nel cortile del monastero in cerca di qualcosa di utile, quando il cielo inizia "
							+ "ad oscurarsi. Una voce rompe la quiete del posto: \"<i>Tu, ladro! Osi rubare "
							+ "in un luogo sacro? Preparati a subire la fine che spetta ad un miserabile come "
							+ "te!</i>\". Le ombre iniziano ad avvolgerti e la tua pelle raggrinzisce, la forza "
							+ "inizia ad abbandonarti. A fatica fuggi sotto al peso della tua attrezzatura.<br>"
							+ "-Nuovo effetto attivo-";
				}
			}
		} else {
			if (percentTest(rollD100+rollD12)) {
				ItemDTO item = rewardEJB.getReward(2).getItem();
				return "Ti avvicini al cortile, quando incontri un topino che rinvasa alcune piante. Ti presenti "
						+ "e lui risponde di essere Miki, un sacerdote eremita che vive ormai da anni in questa "
						+ "zona remota.<br>"
						+ "Gli racconti la tua storia e ne rimane colpito. \"<i>Sai, prima di diventare sacerdote "
						+ "ero anche iu un avventuriero, ma dopo anni di esplorazioni sentivo che non era quello "
						+ "che volevo fare, poi ho trovato questo posto e qui ho sentito una luce nel mio cuore. "
						+ "Da quel momento ho capito la mia vera vocazione.</i>\", disse il sacerdote, \"<i>Senti, "
						+ "la tua storia mi ha colpito e voglio regalarti questo oggetto. Prendilo, per me sara' "
						+ "come aver chiuso con la mia vecchia vita e aver iniziato definitivamente con la via della "
						+ "carita'</i>\". Dalle sua mani compare '<b>" + item.getName() + "</b>' che ti dona con "
						+ "il sorriso. Ringrazi cordialmente e riprendi la tua strada";
			} else {
				if (percentTest(rollD100)) {
					String preMsg = "Ti avvicini al cortile, quando incontri un topino che rinvasa alcune piante. Ti presenti "
							+ "e lui risponde di essere Miki, un sacerdote eremita che vive ormai da anni in questa "
							+ "zona remota.<br>";
					if (playerInventoryDB.getGold() > 5) {
						playerInventoryDB.removeGold(6);
						adventureDB.increasePlayerHealth();
						return preMsg + "Ti offre della frutta fresca, ma ti invita anche a dare un'offerta alla sua "
								+ "missione spirituale: \"<i>Per me non e' facile vivere qui e se come da usanze "
								+ "potessi fare un'offerta te ne sarei infinitamente grato</i>\". Doni 6 monete "
								+ "al sacerdote, il quale ti offre dell'ottima frutta fresca che ti consente di "
								+ "riprenderti dalle fatiche del viaggio. Dopo dei saluti formali, riprendi la tua "
								+ "strada nella neve";
					} else {
						return preMsg + "Ti chiede un'offerta per la sua missione, ma purtroppo fai notare di non "
								+ "avere denaro con te. Un po' triste ti augura buona fortuna e, dopo dei saluti "
								+ "formali, riprendi la tua strada";
					}
				} else {
					return "Ti avvicini al cortile, quando incontri un topino che rinvasa alcune piante. Ti presenti "
							+ "e lui risponde di essere Miki, un sacerdote eremita che vive ormai da anni in questa "
							+ "zona remota.<br>"
							+ "Rimani qualche minuto a parlare con il sacerdote che ti mostra i suoi lavori. Dopo "
							+ "la visita vi scambiate un saluto formale e riprendi la tua strada.";
				}
			}
		}
	}
	
	private Object ignoreAction(int rollD100, int rollD12) {
		if (rollD12 < 5) {
			if (percentTest(rollD100)) {
				return "Ti avvicini al monastero quando senti un'oscura presenza. Dal monastero si accendono "
						+ "luci rosse e viola e un aura spettrale fuoriesce dalle fessure delle finestre e "
						+ "della porta del monastero. L'edificio e' maledetto e te la dai a gambe ringraziando "
						+ "il fatto di non esserti avvicinata troppo";
			} else {
				eventEffectDB.setActiveEffect("I tiri <b>attacco</b> e per i <b>test arma</b> sono diminuiti di 1");
				adventureDB.decreasePlayerHealth();
				return String.format("Ignori il monastero, ma appena gli dai le spalle senti una voce dietro "
						+ "di te: \"<i>Tu, infedele! Come osi ignorare un luogo sacro e non partare i tuoi omaggi "
						+ "ai grandi spiriti?! Ti daro' io un'opportunita' per ripensare alle tue azioni "
						+ "da miscredente!</i>\".<br>"
						+ "In quel momento ti senti colpito da una forza misteriosa che ti ferisce nello "
						+ "spirito e ti provoca danni. Inoltre senti le forze fisiche scomparire dal "
						+ "tuo corpo.<br>"
						+ "-Nuovo effetto attivo-");
			}
		} else {
			if (percentTest(rollD100-rollD12)) {
				playerInventoryDB.addGold(5);
				return "Decidi di passare oltre all'edificio senza investigare oltre, quando su un'albero "
						+ "vedi un cartello che recita \"<i>Avventurieri! Queste offerte sono per voi che "
						+ "protegette queste terre dal male e dalle creature feroci, prendete un sacchetto "
						+ "da qui sotto</i>\". Sotto al cartello c'e' una cesta con dentro diversi sacchetti "
						+ "di stoffa.<br>"
						+ "Ne prendi uno e ricominci a camminare. Mentre te ne vai apri il sacchetto e trovi "
						+ "5 monete d'oro";
			} else {
				return "Ignori semplicemente l'edificio senza appurare cosa ci sia all'interno o se ci sia "
						+ "qualcuno. Beh, forse ti sei evitata delle brutte sorprese";
			}
		}
	}

}
