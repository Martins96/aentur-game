package com.lucamartinelli.aentur.persistence;

import java.io.Serializable;

import com.lucamartinelli.aentur.vo.LanguagesVO;

import jakarta.inject.Singleton;

@Singleton
public class TextContentsSessionDB implements Serializable {

	private static final long serialVersionUID = -8109466293996856696L;
	
	private LanguagesVO language = null;

	
	
	
	public LanguagesVO getLanguage() {
		return language;
	}
	public void setLanguage(LanguagesVO language) {
		this.language = language;
	}

	
}
