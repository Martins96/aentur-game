package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class MazzataAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[1];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 3) {
			action.setEffect("L'enorme mazza e' troppo grande e veloce per essere schivata e ti colpisce "
					+ "completamente, i danni inflitti sono critici");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 11) {
			action.setEffect("Nonostante la tua velocita' schivi a malapena il colpo. La sua arma comunque "
					+ "riesce a beccare il tuo braccio ferendoti");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 17) {
			action.setEffect("Con protezza di riflessi capisci la traettoria del colpo e lo schivi senza"
					+ " particolari difficolta'");
		} else {
			action.setEffect("Corri verso i piedi del gigante destabilizzandolo, la mazzata direttaa te finisce"
					+ " invece sul suo alluce e te ne esci illesa");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-1-act";
	}

}
