package com.lucamartinelli.aentur.persistence;

import com.lucamartinelli.aentur.boss.CaricaAction;
import com.lucamartinelli.aentur.boss.CodataAction;
import com.lucamartinelli.aentur.boss.CristalliEsplosiviAction;
import com.lucamartinelli.aentur.boss.DardoMagicoAction;
import com.lucamartinelli.aentur.boss.FendenteAction;
import com.lucamartinelli.aentur.boss.FrustataAction;
import com.lucamartinelli.aentur.boss.LancioAction;
import com.lucamartinelli.aentur.boss.MagiaNeraAction;
import com.lucamartinelli.aentur.boss.MazzataAction;
import com.lucamartinelli.aentur.boss.MorsoVelenosoAction;
import com.lucamartinelli.aentur.boss.OndataPipistrelliAction;
import com.lucamartinelli.aentur.boss.RaggioGelidoAction;
import com.lucamartinelli.aentur.boss.RuggitoPossenteAction;
import com.lucamartinelli.aentur.boss.SguardoLaserAction;
import com.lucamartinelli.aentur.boss.SoffioGlacialeAction;
import com.lucamartinelli.aentur.boss.ZampataAction;
import com.lucamartinelli.aentur.vo.BossActionDTO;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public class BossActionListDB {
	
	public static final BossActionResultVO[] ACTION_TEMPLATES = new BossActionResultVO[] {
			new BossActionResultVO(0, "boss.action.charge.title", 
					"boss.action.charge.description", 
					null, null),
			new BossActionResultVO(1, "boss.action.blow.title", 
					"boss.action.blow.description", 
					null, null),
			new BossActionResultVO(2, "boss.action.heatvision.title",
					"boss.action.heatvision.description"
					, null, null),
			new BossActionResultVO(3, "boss.action.whip.title",
					"boss.action.whip.description",
					null, null),
			new BossActionResultVO(4, "boss.action.explosiveglass.title",
					"boss.action.explosiveglass.description", 
					null, null),
			new BossActionResultVO(5, "boss.action.magicdart.title", 
					"boss.action.magicdart.description", 
					null, null),
			new BossActionResultVO(6, "boss.action.frozenbreath.title", 
					"boss.action.frozenbreath.description", 
					null, null),
			new BossActionResultVO(7, "boss.action.tailed.title", 
					"boss.action.tailed.description", 
					null, null),
			new BossActionResultVO(8, "boss.action.icebeam.title", 
					"boss.action.icebeam.description", 
					null, null),
			new BossActionResultVO(9, "boss.action.poisonbite.title", 
					"boss.action.poisonbite.description", 
					null, null),
			new BossActionResultVO(10, "boss.action.paw.title", 
					"boss.action.paw.description", 
					null, null),
			new BossActionResultVO(11, "boss.action.mightyroar.title", 
					"boss.action.mightyroar.description", 
					null, null),
			new BossActionResultVO(12, "boss.action.throw.title", 
					"boss.action.throw.description", 
					null, null),
			new BossActionResultVO(13, "boss.action.slash.title", 
					"boss.action.slash.description", 
					null, null),
			new BossActionResultVO(14, "boss.action.batsflock.title", 
					"boss.action.batsflock.description", 
					null, null),
			new BossActionResultVO(15, "boss.action.darkmagic.title", 
					"boss.action.darkmagic.description", 
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
		new BossActionDTO(13, "Fendente", new FendenteAction()),
		new BossActionDTO(14, "Ondata di Pipistrelli", new OndataPipistrelliAction()),
		new BossActionDTO(15, "Magia Nera", new MagiaNeraAction())
	};

}
