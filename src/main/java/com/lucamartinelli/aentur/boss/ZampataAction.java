package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class ZampataAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[10];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("boss.action.paw.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("boss.action.paw.action2");
		} else if (playerD20 < 18) {
			action.setEffect("boss.action.paw.action3");
			adventureDB.decreaseBossHealth();
		}else {
			action.setEffect("boss.action.paw.action4");
			adventureDB.decreaseBossHealth();
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-10-act";
	}

}
