package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class CristalliEsplosiviAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[4];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 13) {
			action.setEffect("I cristalli ti circondano ed esplodono ferendoti senza possibilita' di "
					+ "fuggire da alcuna parte");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 18) {
			action.setEffect("Ti abbassi e lasci che i cristalli vadano dietro e lontano da te evitando"
					+ " che ti colpiscano");
		} else {
			action.setEffect("Con grande precisione rispedisci alcuni cristalli al mittente schivando gli altri"
					+ " l'esplosione danneggia il mostro");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-4-act";
	}

}
