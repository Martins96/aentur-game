package com.lucamartinelli.aentur.ejb;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Optional;
import java.util.Properties;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.TextContentsSessionDB;
import com.lucamartinelli.aentur.vo.LanguagesVO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class LabelTextContentEJB {
	
	@Inject
	Logger log;
	
	@Inject
	TextContentsSessionDB textDB;
	
	private static Map.Entry<String, Properties> propertiesFileEntry = null;
	
	public void setLanguage(final String lang) {
		log.debug("Received change language request for lang: " + lang);
		final LanguagesVO language = LanguagesVO.convertStringToLanguage(lang);
		log.debug("Setting language: " + language);
		textDB.setLanguage(language);
	}
	
	public String getContent(final String key, final Optional<String> lang) throws IOException {
		final LanguagesVO language = getLanguageByPriority(lang);
		final Properties props = getPropertyFile(language);
		final String textValue = props.getProperty(key);
		if (textValue == null) 
			log.warnf("Unable to found text for key [%s]", key);
		return textValue;
	}
	
	
	
	private LanguagesVO getLanguageByPriority(final Optional<String> lang) {
		if(lang.isPresent() && lang.get() != null) {
			return LanguagesVO.convertStringToLanguage(lang.get());
		} else if (textDB.getLanguage() != null) {
			return textDB.getLanguage();
		} else {
			return LanguagesVO.getDefault();
		}
	}
	
	private Properties getPropertyFile(final LanguagesVO lang) throws IOException {
		if (lang == null)
			return null;
		
		if (propertiesFileEntry == null || !lang.fileSuffix.equals(propertiesFileEntry.getKey())) {
			final InputStream is = getClass().getClassLoader()
			 		.getResourceAsStream(String.format("META-INF/lang/contents-%s.properties", lang.fileSuffix));
			final Properties props = new Properties();
			try {
				props.load(is);
			} catch (IOException e) {
				log.errorf(e, "Error loading properties from 'META-INF/lang/contents-%s.properties'", lang.fileSuffix);
				throw e;
			}
			propertiesFileEntry = Map.entry(lang.fileSuffix, props);
		}
		
		return propertiesFileEntry.getValue();
	}
	
	
	
}
