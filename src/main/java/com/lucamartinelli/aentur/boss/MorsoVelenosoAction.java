package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class MorsoVelenosoAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[9];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 3) {
			action.setEffect("Il morso non solo ti fa del danno, ma anche il veleno inizia a fare effetto "
					+ "e presto senti la testa girare, hai subito danni critici");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 9) {
			action.setEffect("Il nemico riesce a morderti di striscio, ma il suo veleno non fa in tempo ad agire,"
					+ " superi tutto con una piccola ferita");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 14) {
			action.setEffect("Respingi con forza l'attacco del mostro che non e' in grado di affondare i denti "
					+ "contro di te");
		}else {
			action.setEffect("Schivi il morso con agilita' e colpisci al fianco il nemico che subisce una ferita");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-9-act";
	}

}
