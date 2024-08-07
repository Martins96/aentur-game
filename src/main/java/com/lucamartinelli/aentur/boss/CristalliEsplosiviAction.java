package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class CristalliEsplosiviAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[4];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 13) {
			action.setEffect("boss.action.explosiveglass.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 18) {
			action.setEffect("boss.action.explosiveglass.action2");
		} else {
			action.setEffect("boss.action.explosiveglass.action3");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-4-act";
	}

}
