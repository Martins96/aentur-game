package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class FrustataAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[3];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 8) {
			action.setEffect("La frusta e' velocissima e in pochi secondi ti colpisce piu' volte");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 14) {
			action.setEffect(" Con fatica riesci a schivare ogni colpo della frusta uscendone senza ferite");
		} else {
			action.setEffect("Dopo il primo colpo di frusta ti aggrappi ad essa e sfrutti il richiamo dell'arma"
					+ " come spinta per un affondo della tua arma colpendo il mostro con forza");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-3-act";
	}

}
