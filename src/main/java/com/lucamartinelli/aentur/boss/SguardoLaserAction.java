package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class SguardoLaserAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[2];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("Lo sguardo inceneritore del mostro ti colpisce prima che tu possa accorgertene, "
					+ "ti provoca diverse ustioni attraverso la tua armatura");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("Rapidamente ti ripari dietro un masso e l'attacco del mostro risulta nullo");
		} else {
			action.setEffect("Con un pezzo di metallo rifletti il raggio e lo rispedisci nell'occhio del "
					+ "mostro accecandolo momentaneamente, giusto per darti il tempo di affondare un tuo attacco");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-2-act";
	}

}
