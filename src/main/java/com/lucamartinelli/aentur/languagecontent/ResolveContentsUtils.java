package com.lucamartinelli.aentur.languagecontent;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.services.LabelTextContentsService;
import com.lucamartinelli.aentur.vo.AttackDTO;
import com.lucamartinelli.aentur.vo.BossDTO;
import com.lucamartinelli.aentur.vo.DefenseDTO;
import com.lucamartinelli.aentur.vo.ItemDTO;
import com.lucamartinelli.aentur.vo.MonsterDTO;

public class ResolveContentsUtils {
	
	private static final Logger log = Logger.getLogger(ResolveContentsUtils.class);
	
	private static String resolveKey(final String key) {
		try {
			log.debugf("Loading key [%s]", key);
			final String content = LabelTextContentsService.getContent(key);
			log.debugf("resolved key [%s] with value [%s]", key, ""+content);
			return content;
		} catch (Exception e) {
			log.error("Error loading property key: " + key);
		}
		return null;
	}
	
	public static MonsterDTO resolveLabels(final MonsterDTO monster) {
		if (monster == null)
			return null;
		final MonsterDTO monsterNew = monster.clone();
		
		if (monsterNew.getName() != null) {
			monsterNew.setName(resolveKey(monsterNew.getName()));
		}
		if (monsterNew.getDescription() != null) {
			monsterNew.setDescription(resolveKey(monster.getDescription()));
		}
		
		
		return monsterNew;
	}
	
	
	public static AttackDTO resolveLabels(AttackDTO atkDto) {
		if (atkDto == null)
			return null;
		final AttackDTO attackNew = atkDto.clone();
		
		if (attackNew.getName() != null) {
			attackNew.setName(resolveKey(attackNew.getName()));
		}
		if (attackNew.getEffect() != null) {
			attackNew.setEffect(resolveKey(attackNew.getEffect()));
		}
		for(int i = 0; i < attackNew.getCategory().length; i++) {
			attackNew.getCategory()[i] = resolveKey(attackNew.getCategory()[i]);
		}
		
		return attackNew;
	}

	public static DefenseDTO resolveLabels(DefenseDTO defDto) {
		if (defDto == null)
			return null;
		final DefenseDTO defenseNew = defDto.clone();
		
		if (defenseNew.getName() != null) {
			defenseNew.setName(resolveKey(defenseNew.getName()));
		}
		if (defenseNew.getEffect() != null) {
			defenseNew.setEffect(resolveKey(defenseNew.getEffect()));
		}
		for(int i = 0; i < defDto.getCategory().length; i++) {
			defenseNew.getCategory()[i] = resolveKey(defenseNew.getCategory()[i]);
		}
		
		return defenseNew;
	}
	
	public static ItemDTO resolveLabels(ItemDTO itemDto) {
		if (itemDto == null)
			return null;
		final ItemDTO itemNew = itemDto.clone();
		
		if (itemNew.getName() != null) {
			itemNew.setName(resolveKey(itemNew.getName()));
		}
		if (itemNew.getEffect() != null) {
			itemNew.setEffect(resolveKey(itemNew.getEffect()));
		}
		
		return itemNew;
	}
	
	public static BossDTO resolveLabels(final BossDTO boss) {
		if (boss == null)
			return null;
		final BossDTO bossNew = boss.clone();
		
		if (bossNew.getName() != null) {
			bossNew.setName(resolveKey(bossNew.getName()));
		}
		if (bossNew.getDescription() != null) {
			bossNew.setDescription(resolveKey(bossNew.getDescription()));
		}
		
		
		return bossNew;
	}
	
}
