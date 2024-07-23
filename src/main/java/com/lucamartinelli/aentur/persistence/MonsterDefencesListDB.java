package com.lucamartinelli.aentur.persistence;

import com.lucamartinelli.aentur.vo.DefenseDTO;

public class MonsterDefencesListDB {
	
	
	public static final DefenseDTO[] DEFENCES = new DefenseDTO[] {
			new DefenseDTO(0, "world.enemy.defense.name.weakpoint", "world.enemy.defense.effect.weakpoint"
					, 1, new String[] {"world.enemy.actions.category.phisical"}),
			new DefenseDTO(1, "world.enemy.defense.name.thickfur", "world.enemy.defense.effect.thickfur", 
					1, new String[] {"world.enemy.actions.category.skin"}),
			new DefenseDTO(2, "world.enemy.defense.name.agile", "world.enemy.defense.effect.agile",
					1, new String[] {"world.enemy.actions.category.agility"}),
			new DefenseDTO(3, "world.enemy.defense.name.thickskin", "world.enemy.defense.effect.thickskin", 
					2, new String[] {"world.enemy.actions.category.skin"}),
			new DefenseDTO(4, "world.enemy.defense.name.lightarmored", "world.enemy.defense.effect.lightarmored", 
					2, new String[] {"world.enemy.actions.category.armor"}),
			new DefenseDTO(5, "world.enemy.defense.name.varyagile", "world.enemy.defense.effect.varyagile", 
					2, new String[] {"world.enemy.actions.category.agility"}),
			new DefenseDTO(6, "world.enemy.defense.name.armored", "world.enemy.defense.effect.armored", 
					3, new String[] {"world.enemy.actions.category.armor"}),
			new DefenseDTO(7, "world.enemy.defense.name.frostedlayer", "world.enemy.defense.effect.frostedlayer",
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(8, "world.enemy.defense.name.steamshell", "world.enemy.defense.effect.steamshell", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(9, "world.enemy.defense.name.waterskin", "world.enemy.defense.effect.waterskin", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(10, "world.enemy.defense.name.lightvest", "world.enemy.defense.effect.lightvest", 
					1, new String[] {"world.enemy.actions.category.armor"}),
			new DefenseDTO(11, "world.enemy.defense.name.lightscalesskin", "world.enemy.defense.effect.lightscalesskin", 
					1, new String[] {"world.enemy.actions.category.skin"}),
			new DefenseDTO(12, "world.enemy.defense.name.mudarmor", "world.enemy.defense.effect.mudarmor", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(13, "world.enemy.defense.name.slow", "world.enemy.defense.effect.slow", 
					1, new String[] {"world.enemy.actions.category.agility"}),
			new DefenseDTO(14, "world.enemy.defense.name.minormagicshell", "world.enemy.defense.effect.minormagicshell",
					1, new String[] {"world.enemy.actions.category.magic"}),
			new DefenseDTO(15, "world.enemy.defense.name.slimy", "world.enemy.defense.effect.slimy", 
					1, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(16, "world.enemy.defense.name.majormagicshell", "world.enemy.defense.effect.majormagicshell", 
					2, new String[] {"world.enemy.actions.category.magic"}),
			new DefenseDTO(17, "world.enemy.defense.name.slippery", "world.enemy.defense.effect.slippery", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(18, "world.enemy.defense.name.rockyarmor", "world.enemy.defense.effect.rockyarmor", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(19, "world.enemy.defense.name.fireskin", "world.enemy.defense.effect.fireskin", 
					2, new String[] {"world.enemy.actions.category.elemental"}),
			new DefenseDTO(20, "world.enemy.defense.name.scalesskin", "world.enemy.defense.effect.scalesskin", 
					2, new String[] {"world.enemy.actions.category.phisical"}),
			new DefenseDTO(21, "world.enemy.defense.name.delusive", "world.enemy.defense.effect.delusive", 
					3, new String[] {"world.enemy.actions.category.agility"}),
			new DefenseDTO(22, "nome", "eff", 
					1, new String[] {}),
			new DefenseDTO(23, "nome", "eff", 
					1, new String[] {})
	};
	
	public static DefenseDTO getAttackById(int id) {
		return DEFENCES[id].clone();
	}
	
}
