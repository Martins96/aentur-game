package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class SoffioGlacialeAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[6];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 2) {
			action.setEffect("boss.action.frozenbreath.action1");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 8) {
			action.setEffect("boss.action.frozenbreath.action2");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 17) {
			action.setEffect("boss.action.frozenbreath.action3");
		} else {
			action.setEffect("boss.action.frozenbreath.action4");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-6-act";
	}

}
