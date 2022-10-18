package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class CodataAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[7];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("L'attacco e' talmente rapido che non hai neppure il tempo di scegliere la direzione "
					+ "per schivare il colpo, vieni schiacciata dalla grossa coda e subisci delle ferite");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("Con alta reattivita' schivi il colpo nemico e risci a rialzarti senza "
					+ "graffi");
		} else {
			action.setEffect("Con incredibile precisione schivi il colpo che si scaglia a pochi metri da te, questa "
					+ "vicinanza ti consente di infilare in colpo ben assestato nella code del mostro");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-7-act";
	}

}
