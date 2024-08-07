package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class FrustataAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[3];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 8) {
			action.setEffect("boss.action.whip.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 14) {
			action.setEffect("boss.action.whip.action2");
		} else {
			action.setEffect("boss.action.whip.action3");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-3-act";
	}

}
