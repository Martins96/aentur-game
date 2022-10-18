package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class DardoMagicoAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[5];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("Il dardo magico ti colpisce in pieno tagliandoti, la tua corazza sembra non aver"
					+ " attutito la forza magica del colpo");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 19) {
			action.setEffect("Riesci ad assorbire il colpo senza subire danni, la magia sparisce e resti incolume");
		} else {
			action.setEffect("Con velocita' noti che il mostro dopo aver lanciato la magia deve riposare un momento."
					+ " Schivi rapidamente il colpo e sfrutti la debolezza per attaccare il nemico");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-5-act";
	}

}
