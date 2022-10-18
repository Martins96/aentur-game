package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class LancioAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[12];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 9) {
			action.setEffect("Il lancio del nemico ti colpisce con precisione, subusci delle ferite");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 17) {
			action.setEffect("Rotolando riesci a schivare il colpo del nemico e non subire danni");
		} else {
			action.setEffect("Il tiro del nemico ha una scarsa precisione e ti lascia il tempo di avvicinarti "
					+ "e attaccare, riesci a ferire il nemico");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-12-act";
	}

}
