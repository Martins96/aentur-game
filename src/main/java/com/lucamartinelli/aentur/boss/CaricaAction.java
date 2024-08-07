package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class CaricaAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[0];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 5) {
			action.setEffect("boss.action.charge.action1");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 12) {
			action.setEffect("boss.action.charge.action2");
		} else if (playerD20 < 19) {
			action.setEffect("boss.action.charge.action3");
			adventureDB.decreaseBossHealth();
		} else {
			action.setEffect("boss.action.charge.action4");
			adventureDB.decreaseBossHealth();
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-0-act";
	}
	
	

}
