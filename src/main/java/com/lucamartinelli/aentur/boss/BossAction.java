package com.lucamartinelli.aentur.boss;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

import jakarta.enterprise.inject.spi.CDI;

public abstract class BossAction {
	
	protected final Logger log = Logger.getLogger(getClass());
	protected final AdventureStatsDB adventureDB = CDI.current().select(AdventureStatsDB.class).get();
	
	
	public abstract BossActionResultVO executeAction(int playerD20);
	
	protected abstract String getImg();
	
}
