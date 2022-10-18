package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class CaricaAction extends BossAction {
	
	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[0];
	
	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 5) {
			action.setEffect("La furia del mostro ti travolge scaraventandoti a metri di distanza "
					+ "con pesanti ferite");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 12) {
			action.setEffect("Con rapidita' riesci a schivare la carica del mostro evitando di subire "
					+ "danni");
		} else if (playerD20 < 19) {
			action.setEffect("Di ingegno corri verso una grande roccia, il mostro ti carica e tu schivi"
					+ " pochi istanti prima che ti colpisca. Il nemico non ha tempo per fermare la sua corsa"
					+ " e si schianta contro l'enorme roccia rimanendo ferito.");
			adventureDB.decreaseBossHealth();
		} else {
			action.setEffect("Con enorme maestria salti sulla testa del mostro in corsa. con la tua arma "
					+ "infilzi il nemico al collo per scivolare per tutta la sua schiena creando un'enorme"
					+ " ferita critica");
			adventureDB.decreaseBossHealth();
			adventureDB.decreaseBossHealth();
		}
		
		
		return action;
	}
	
	
	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-0-act";
	}
	
	

}
