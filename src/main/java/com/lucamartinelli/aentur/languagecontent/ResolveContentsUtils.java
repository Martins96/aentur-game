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
		
		if (monster.getName() != null) {
			monster.setName(resolveKey(monster.getName()));
		}
		if (monster.getDescription() != null) {
			monster.setDescription(resolveKey(monster.getDescription()));
		}
		
		
		return monster;
	}
	
	
	public static AttackDTO resolveLabels(AttackDTO atkDto) {
		if (atkDto == null)
			return null;
		
		if (atkDto.getName() != null) {
			atkDto.setName(resolveKey(atkDto.getName()));
		}
		if (atkDto.getEffect() != null) {
			atkDto.setEffect(resolveKey(atkDto.getEffect()));
		}
		for(int i = 0; i < atkDto.getCategory().length; i++) {
			atkDto.getCategory()[i] = resolveKey(atkDto.getCategory()[i]);
		}
		
		return atkDto;
	}

	public static DefenseDTO resolveLabels(DefenseDTO defDto) {
		if (defDto == null)
			return null;
		
		if (defDto.getName() != null) {
			defDto.setName(resolveKey(defDto.getName()));
		}
		if (defDto.getEffect() != null) {
			defDto.setEffect(resolveKey(defDto.getEffect()));
		}
		for(int i = 0; i < defDto.getCategory().length; i++) {
			defDto.getCategory()[i] = resolveKey(defDto.getCategory()[i]);
		}
		
		return defDto;
	}
	
	public static ItemDTO resolveLabels(ItemDTO itemDto) {
		if (itemDto == null)
			return null;
		
		if (itemDto.getName() != null) {
			itemDto.setName(resolveKey(itemDto.getName()));
		}
		if (itemDto.getEffect() != null) {
			itemDto.setEffect(resolveKey(itemDto.getEffect()));
		}
		
		return itemDto;
	}
	
	public static BossDTO resolveLabels(final BossDTO boss) {
		if (boss == null)
			return null;
		
		if (boss.getName() != null) {
			boss.setName(resolveKey(boss.getName()));
		}
		if (boss.getDescription() != null) {
			boss.setDescription(resolveKey(boss.getDescription()));
		}
		
		
		return boss;
	}
	
}
