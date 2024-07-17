package com.lucamartinelli.aentur.languagecontent;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.services.LabelTextContentsService;
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
	
	public static MonsterDTO resolveLabels(final MonsterDTO monDto) {
		if (monDto == null)
			return null;
		
		if (monDto.getName() != null) {
			monDto.setName(resolveKey(monDto.getName()));
		}
		if (monDto.getDescription() != null) {
			monDto.setDescription(resolveKey(monDto.getDescription()));
		}
		
		
		return monDto;
	}
	
	
}
