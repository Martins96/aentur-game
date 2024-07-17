package com.lucamartinelli.aentur.vo;

public enum LanguagesVO {
	
	ITALIAN("it"),
	ENGLISH("en");
	
	public String fileSuffix;
	
	private LanguagesVO(final String fileSuffix) {
		this.fileSuffix = fileSuffix;
	}
	
	public static LanguagesVO convertStringToLanguage(final String lang) {
		if (lang == null)
			throw new IllegalArgumentException("Input cannot be null");
		
		switch (lang.toUpperCase()) {
		case "ITALIAN": 
		case "IT": 
			return LanguagesVO.ITALIAN;
		case "ENGLISH": 
		case "EN": 
			return LanguagesVO.ENGLISH;
		default:
			throw new IllegalArgumentException("Unsupported lang value: " + lang);
		}
	}
	
	public static LanguagesVO getDefault() {
		return ITALIAN;
	}
	
}
