package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class MagiaNeraAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[15];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 5) {
			action.setEffect("boss.action.blackmagic.action1");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 8) {
			action.setEffect("boss.action.blackmagic.action2");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 18) {
			action.setEffect("boss.action.blackmagic.action3");
		} else {
			action.setEffect("boss.action.blackmagic.action4");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-15-act";
	}

}
