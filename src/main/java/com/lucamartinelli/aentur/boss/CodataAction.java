	package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class CodataAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[7];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("boss.action.tailshot.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("boss.action.tailshot.action2");
		} else {
			action.setEffect("boss.action.tailshot.action3");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-7-act";
	}

}
