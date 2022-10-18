package com.lucamartinelli.aentur.boss;

import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class SoffioGlacialeAction extends BossAction {

	private final BossActionResultVO action = BossActionListDB.ACTION_TEMPLATES[6];

	@Override
	public BossActionResultVO executeAction(int playerD20) {
		action.setImg(getImg());
		if (playerD20 < 2) {
			action.setEffect("Sei investita completamente dal gelo, senti i sangue congelare e non riesci a muoverti"
					+ " il dolore continua fino a che non finisce la bufera. Ora riesci di nuovo a muoverti, ma hai "
					+ "subito danni critici");
			adventureDB.decreasePlayerHealth();
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 8) {
			action.setEffect("I tuoi tentativi di fuggire sono inutili, ben presto il freddo ti rallenta al punto che"
					+ " non riesci piu' a muoverti. Piccole schegge di ghiaccio ti tagliano e causano danni");
			adventureDB.decreasePlayerHealth();
		} else if (playerD20 < 17) {
			action.setEffect("Ti ripari sotto la neve in modo da avere una coperta per quell'aria gelida. Riesci a"
					+ " sopportare il colpo senza danni");
		} else {
			action.setEffect("Saltando di roccia in roccia riesci ad avvicinarti al mostro coprendoti dalla bufera. "
					+ "Appena questa finisce, noti che il mostro deve recuperare fiato e in quel momento attacchi con "
					+ "successo");
			adventureDB.decreaseBossHealth();
		}
		return action;
	}

	@Override
	protected String getImg() {
		return adventureDB.getCurrentLocationSigle()+"-6-act";
	}

}
