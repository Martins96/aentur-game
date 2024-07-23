package com.lucamartinelli.aentur.persistence;

import com.lucamartinelli.aentur.vo.AttackDTO;

public class MonsterAttacksListDB {
	
	
	public static final AttackDTO[] ATTACKS = new AttackDTO[] {
			new AttackDTO(0, "world.enemy.attack.name.bite", "world.enemy.attack.effect.bite", 
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(1, "world.enemy.attack.name.scratch", "world.enemy.attack.effect.scratch", 
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(2, "world.enemy.attack.name.scream", "world.enemy.attack.effect.scream", 
					1, new String[] {"world.enemy.actions.category.sound"}),
			new AttackDTO(3, "world.enemy.attack.name.strongbite", "world.enemy.attack.effect.strongbite",
					2, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(4, "world.enemy.attack.name.hit", "world.enemy.attack.effect.hit", 
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(5, "world.enemy.attack.name.cut", "world.enemy.attack.effect.cut",
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(6, "world.enemy.attack.name.icebreath", "world.enemy.attack.effect.icebreath", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(7, "world.enemy.attack.name.spark", "world.enemy.attack.effect.spark", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(8, "world.enemy.attack.name.hotair", "world.enemy.attack.effect.hotair",
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(9, "world.enemy.attack.name.icewave", "world.enemy.attack.effect.icewave", 
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(10, "world.enemy.attack.name.electrowave", "world.enemy.attack.effect.electrowave", 
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(11, "world.enemy.attack.name.hotwave", "world.enemy.attack.effect.hotwave",
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(12, "world.enemy.attack.name.stoned", "world.enemy.attack.effect.stoned", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(13, "world.enemy.attack.name.stoning", "world.enemy.attack.effect.stoning", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(14, "world.enemy.attack.name.clinging", "world.enemy.attack.effect.clinging", 
					1, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(15, "world.enemy.attack.name.acidspit", "world.enemy.attack.effect.acidspit", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(16, "world.enemy.attack.name.strongacidspit", "world.enemy.attack.effect.strongacidspit", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(17, "world.enemy.attack.name.magicwave", "world.enemy.attack.effect.magicwave", 
					3, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(18, "world.enemy.attack.name.drilling", "world.enemy.attack.effect.drilling", 
					2, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(19, "world.enemy.attack.name.fireball", "world.enemy.attack.effect.fireball", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(20, "world.enemy.attack.name.icesplinter", "world.enemy.attack.effect.icesplinter", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new AttackDTO(21, "world.enemy.attack.name.strongimpact", "world.enemy.attack.effect.strongimpact", 
					2, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(22, "world.enemy.attack.name.darkball", "world.enemy.attack.effect.darkball", 
					2, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(23, "world.enemy.attack.name.screech", "world.enemy.attack.effect.screech", 
					2, new String[] {"world.enemy.actions.category.sound"}),
			new AttackDTO(24, "world.enemy.attack.name.slash", "world.enemy.attack.effect.slash", 
					3, new String[] {"world.enemy.actions.category.phisical"}),
			new AttackDTO(25, "name", "effect", 1, new String[] {}),
			new AttackDTO(26, "name", "effect", 1, new String[] {}),
			new AttackDTO(27, "name", "effect", 1, new String[] {}),
			new AttackDTO(28, "name", "effect", 1, new String[] {}),
			new AttackDTO(29, "name", "effect", 1, new String[] {})
	};
	
	public static AttackDTO getAttackById(int id) {
		return ATTACKS[id].clone();
	}
	
}
