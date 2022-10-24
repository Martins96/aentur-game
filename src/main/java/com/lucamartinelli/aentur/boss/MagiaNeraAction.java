package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class MagiaNeraAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[15];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 5) {
			action.setEffect("La sfera esplode appena ti tocca generando un'onda d'urto che ti ferisce gravemente, "
					+ "subisci danni critici");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 8) {
			action.setEffect("Schivi la sfera, ma il raggio d'azione dell'esplosione ti ferisce ugualmente");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 18) {
			action.setEffect("Riesci a bloccare la magia con la tua conoscenza difensiva magica "
					+ "ed evitare che la sfera esploda");
		} else {
			action.setEffect("Con forza e capacita' rifletti la sfera e la rispedisci all'evocatore causandogli una "
					+ "ferita");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-15-act";
	}

}
