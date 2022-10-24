package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class OndataPipistrelliAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[14];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("La nube nera di pipistrelli si scaraventa contro di te, quelle piccole creature ti"
					+ " feriscono con artigli e denti");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("Riesci a bloccare l'attacco facendo breccia nel gruppo di pipistrelli, ne esci illesa");
		} else {
			action.setEffect("Con furbizia accendi una torcia e spaventi il gruppo di pipistrelli che torna indietro, "
					+ "Nella confuzione attacchi il mostro ferendolo");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-14-act";
	}

}
