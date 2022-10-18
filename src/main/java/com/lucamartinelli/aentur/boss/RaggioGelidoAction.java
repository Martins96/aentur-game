package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class RaggioGelidoAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[8];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 2) {
			action.setEffect("Il colpo ti congela completamente, il freddo e' cosi' intenso che sembra "
					+ "bruciare, la tua pelle subisce ferite critiche");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 9) {
			action.setEffect("Il freddo ti danneggia, anche se l'armatura limita il danno, ne esci solo"
					+ " con qualche ferita");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 14) {
			action.setEffect("Con grande velocita' ti rifugi dietro una roccia e schivi senza problemi "
					+ "il raggio magico del mostro");
		} else if (playerD20 < 18) {
			action.setEffect("Correndo in tondo confondi il nemico e schivi l'attacco, appena il mostro finisce "
					+ " di lanciare la magia, ti scaraventi contro e l attacchi con successo");
			adventureDB.decreaseBossHealth();
		} else {
			action.setEffect("Raccogli un grosso pezzo di giaccio e lo usi come scudo, incredibilmente il raggio gelido"
					+ " non ha effetto su qualcosa gia' gelato, questo ti consente di avvicinarti alla testa del mostro"
					+ " e infliggere una grossa ferita critica");
			adventureDB.decreaseBossHealth();
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-8-act";
	}

}
