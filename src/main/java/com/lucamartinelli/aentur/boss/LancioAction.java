package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class LancioAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[12];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 9) {
			action.setEffect("boss.action.throwing.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 17) {
			action.setEffect("boss.action.throwing.action2");
		} else {
			action.setEffect("boss.action.throwing.action3");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-12-act";
	}

}
