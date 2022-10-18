package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class RuggitoPossenteAction extends BossAction {

private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[11];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 5) {
			action.setEffect("Il forte rumore e' cosi' forte da causarti dei danni senza nemmeno toccarti");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 11) {
			action.setEffect("Cerchi di ripararti da suono, ma ne rimani stordito per qualche secondo, il "
					+ "nemico ne approfitta per attaccarti e ti ferisce");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("Coprendoti le orecchie con le mani riesci a sopportare il rumore e uscirne senza"
					+ " conseguenze");
		} else {
			action.setEffect("Prendi due grosse foglie e in un attimo crei due tappi per le orecchie. Sono rudimentali"
					+ " ma funzionano e ti lasciano la liberta' di attaccare il nemico senza preoccuparti del rumore");
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-11-act";
	}

}
