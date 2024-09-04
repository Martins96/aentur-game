package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class RaggioGelidoAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[8];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 2) {
			action.setEffect("boss.action.icebeam.action1");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 9) {
			action.setEffect("boss.action.icebeam.action2");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 14) {
			action.setEffect("boss.action.icebeam.action3");
		} else if (playerD20 < 18) {
			action.setEffect("boss.action.icebeam.action4");
			adventureDB.decreaseBossHealth();
		} else {
			action.setEffect("boss.action.icebeam.action5");
			adventureDB.decreaseBossHealth();
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-8-act";
	}

}
