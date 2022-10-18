package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class FendenteAction extends BossAction {

private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[13];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 9) {
			action.setEffect("Il tagliente attacco ti provoca una ferita, la tua armatura non e' stata in grado"
					+ " di proteggerti a sufficienza");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("Blocchi l'attacco con forza e non subisci ferite, solo tante scintille nello scontro");
		} else {
			action.setEffect("Schivi in velocita' il colpo e approfitti dell'arma del nemico, che era rimasta infilzata"
					+ " nel terreno, per attaccare il mostro con successo");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-13-act";
	}

}
