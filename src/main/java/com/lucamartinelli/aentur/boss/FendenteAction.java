package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class FendenteAction extends BossAction {

private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[13];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 9) {
			action.setEffect("boss.action.slash.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("boss.action.slash.action2");
		} else {
			action.setEffect("boss.action.slash.action3");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-13-act";
	}

}
