package com.lucamartinelli.aentur.ejb;

import java.util.Random;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.MonsterAttacksListDB;
import com.lucamartinelli.aentur.persistence.MonsterDefencesListDB;
import com.lucamartinelli.aentur.persistence.MonstersListDB;
import com.lucamartinelli.aentur.vo.AttackDTO;
import com.lucamartinelli.aentur.vo.DefenseDTO;
import com.lucamartinelli.aentur.vo.MonsterDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class EnemyEJB {
	
	private final Random random = new Random();
	
	@Inject
	Logger log;
	
	
	
	public int getRandomId() {
		int monsterNumber = MonstersListDB.MONSTERS.length;
		return random.nextInt(monsterNumber);
	}
	
	public AttackDTO getRandomEnemyAttack(MonsterDTO monster) {
		if(monster == null) {
			return null;
		}
		final Integer[] attacks = monster.getAttacks();
		final int arrayPoint = random.nextInt(attacks.length);
		final int id = attacks[arrayPoint];
		
		return MonsterAttacksListDB.getAttackById(id);
	}
	
	public DefenseDTO getRandomEnemyDefence(MonsterDTO monster) {
		if(monster == null) {
			return null;
		}
		final Integer[] defence = monster.getDefences();
		final int arrayPoint = random.nextInt(defence.length);
		final int id = defence[arrayPoint];
		
		return MonsterDefencesListDB.getAttackById(id);
	}
	
	
}
