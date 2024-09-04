package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class RuggitoPossenteAction extends BossAction {

private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[11];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 5) {
			action.setEffect("boss.action.mightyroar.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 11) {
			action.setEffect("boss.action.mightyroar.action2");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("boss.action.mightyroar.action3");
		} else {
			action.setEffect("boss.action.mightyroar.action4");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-11-act";
	}

}
