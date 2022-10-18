package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class ZampataAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[10];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 10) {
			action.setEffect("La zampa ti colpisce completamente causandoti un grosso graffio alla gamba");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 16) {
			action.setEffect("Riesci a assorbire il colpo con l'armatura e non subisci ferite");
		} else if (playerD20 < 18) {
			action.setEffect("Pari il colpo e sfutti la vicinanza per attaccare la mano del mostro "
					+ "infliggendogli una ferita");
			adventureDB.decreaseBossHealth();
		}else {
			action.setEffect("Appena la mano si alza in aria noti una vecchia ferita sul braccio, "
					+ "probabilmente di una battaglia passata, con astuzia pensi che sia un buon punto "
					+ "per attaccare. Rotoli in avanti per schivare il graffio e colpisci con precisione il punto"
					+ " debole infliggendo un danno critico al mostro");
			adventureDB.decreaseBossHealth();
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-10-act";
	}

}
