package com.lucamartinelli.aentur.persistence;

import com.lucamartinelli.aentur.boss.CaricaAction;
import com.lucamartinelli.aentur.boss.CodataAction;
import com.lucamartinelli.aentur.boss.CristalliEsplosiviAction;
import com.lucamartinelli.aentur.boss.DardoMagicoAction;
import com.lucamartinelli.aentur.boss.FendenteAction;
import com.lucamartinelli.aentur.boss.FrustataAction;
import com.lucamartinelli.aentur.boss.LancioAction;
import com.lucamartinelli.aentur.boss.MazzataAction;
import com.lucamartinelli.aentur.boss.MorsoVelenosoAction;
import com.lucamartinelli.aentur.boss.RaggioGelidoAction;
import com.lucamartinelli.aentur.boss.RuggitoPossenteAction;
import com.lucamartinelli.aentur.boss.SguardoLaserAction;
import com.lucamartinelli.aentur.boss.SoffioGlacialeAction;
import com.lucamartinelli.aentur.boss.ZampataAction;
import com.lucamartinelli.aentur.vo.BossActionDTO;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class BossActionListDB {
	
	public static final BossActionResultVO[] ACTION_TEMPLATES = new BossActionResultVO[] {
			new BossActionResultVO(0, "Carica", 
					"Il nemico ti carica con forza e peso, sposta ogni suo muscolo per schiantarsi "
					+ "completamente contro di te.", 
					null, null),
			new BossActionResultVO(1, "Mazzata", 
					"La grossa mazza del mostro si alza in aria e si ferma per qualche istante prima"
					+ " di scendere verso di te. Il nemico emette un forte urlo come per spigere ancora piu'"
					+ "forza nel colpo.", 
					null, null),
			new BossActionResultVO(2, "Sguardo inceneritore",
					"Improvvisamente l'occhio del nemico si illumina di un rosso intenso. Da esso esce un fascio"
					+ " di luce incendiaria che si scaglia repentinamente contro di te."
					, null, null),
			new BossActionResultVO(3, "Frustata",
					"Il nemico prende la sua frusta gigante dal fianco, esegue due giri sulla sua testa e schianta"
					+ " un colto su di te.",
					null, null),
			new BossActionResultVO(4, "Cristalli esplosivi",
					"Rapidamente il mostro toglie dalla tasca un piccolo sacchetto e raccoglie da esso una manciata "
					+ "cristalli magici altamente esplosivi. Te ne lancia contro circa una ventina.", 
					null, null),
			new BossActionResultVO(5, "Dardo magico", 
					"Il bastone o la bocca del mostro funge anche da rudimentale arma magica, non e' molto potente, ma sufficiente"
					+ " per generare un dardo magico tagliente e pericoloso.", 
					null, null),
			new BossActionResultVO(6, "Soffio glaciale", 
					"Il mostro ispira piu' aria che puo' e poi soffia con moltissima forza un aria gelida che trasforma"
					+ " il posto in una bufera glaciale.", 
					null, null),
			new BossActionResultVO(7, "Codata", 
					"Il nemico usa la coda per scagliare un attacco diretto con grande forza", 
					null, null),
			new BossActionResultVO(8, "Raggio gelido", 
					"Il nemico crea un enorme raggio magico che congela ogni cosa e lo punta contro di te", 
					null, null),
			new BossActionResultVO(9, "Morso velenoso", 
					"Il nemico apre le fauci, i suoi denti sono affilati e coperti da una sostanza velenosa", 
					null, null),
			new BossActionResultVO(10, "Zampata", 
					"La zampa del nemico si libra in aria, si vedono gli artigli affilati e letali. Pochi istanti dopo si scaglia contro di te", 
					null, null),
			new BossActionResultVO(11, "RuggitoPossente", 
					"Un ruggito frastornante e agghiacciante viene espanso per tutta la zona, il nemico emette un'onda fortissima", 
					null, null),
			new BossActionResultVO(12, "Lancio", 
					"Il nemico ti lancia con forza un masso, una lancia o qualcosa di simile", 
					null, null),
			new BossActionResultVO(13, "Fendente", 
					"Il nemico sguaina la sua lama affilata come un rasoio e lancia un fendente contro di te", 
					null, null)
	};
	
	public static final BossActionDTO[] ACTIONS = new BossActionDTO[] {
		new BossActionDTO(0, "Carica", new CaricaAction()),
		new BossActionDTO(1, "Mazzata", new MazzataAction()),
		new BossActionDTO(2, "Sguardo inceneritore", new SguardoLaserAction()),
		new BossActionDTO(3, "Frustata", new FrustataAction()),
		new BossActionDTO(4, "Cristalli esplosivi", new CristalliEsplosiviAction()),
		new BossActionDTO(5, "Dardo magico", new DardoMagicoAction()),
		new BossActionDTO(6, "Soffio glaciale", new SoffioGlacialeAction()),
		new BossActionDTO(7, "Codata", new CodataAction()),
		new BossActionDTO(8, "Raggio gelido", new RaggioGelidoAction()),
		new BossActionDTO(9, "Morso velenoso", new MorsoVelenosoAction()),
		new BossActionDTO(10, "Zampata", new ZampataAction()),
		new BossActionDTO(11, "RuggitoPossente", new RuggitoPossenteAction()),
		new BossActionDTO(12, "Lancio", new LancioAction()),
		new BossActionDTO(13, "Fendente", new FendenteAction())
	};

}
