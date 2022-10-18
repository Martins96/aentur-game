package com.lucamartinelli.aentur.boss;

import javax.enterprise.inject.spi.CDI;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;

public abstract class BossAction {
	
	protected final Logger log = Logger.getLogger(getClass());
	protected final AdventureStatsDB adventureDB = CDI.current().select(AdventureStatsDB.class).get();
	
	
	public abstract BossActionResultVO executeAction(int playerD20);
	
	protected abstract String getImg();
	
}
