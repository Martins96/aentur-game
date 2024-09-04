package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class MorsoVelenosoAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[9];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 3) {
			action.setEffect("boss.action.poisonbite.action1");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 9) {
			action.setEffect("boss.action.poisonbite.action2");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 14) {
			action.setEffect("boss.action.poisonbite.action3");
		}else {
			action.setEffect("boss.action.poisonbite.action4");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-9-act";
	}

}
