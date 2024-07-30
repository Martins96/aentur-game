package com.lucamartinelli.aentur.ejb;

import java.util.Random;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.boss.BossAction;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.BossActionListDB;
import com.lucamartinelli.aentur.persistence.BossListDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;
import com.lucamartinelli.aentur.vo.BossDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.core.Response;

import static com.lucamartinelli.aentur.persistence.LocationSigleListDB.locationSigle;

@ApplicationScoped
public class BossEJB {
	
	@Inject
	Logger log;
	
	@Inject
	AdventureStatsDB adventureDB;
	
	private final Random random = new Random();

	public BossActionResultVO selectAndExecuteAction(int rollD20) {
		final BossDTO currentBoss = BossListDB.getById(adventureDB.getCurrentBossId());
		log.debug("Using current boss: " + currentBoss.getName());
		final int actionSize = currentBoss.getActions().length;
		final int currentActionIndx = random.nextInt(actionSize);
		final int currentActionId = currentBoss.getActions()[currentActionIndx];
		log.debug("Selected random action ID: " + currentActionId);
		final BossAction currentAction = BossActionListDB.ACTIONS[currentActionId].getAction();
		return currentAction.executeAction(rollD20);
		
	}

	public Response init(String location) {
		final BossDTO currentBoss = BossListDB.BOSSES.get(location);
		if (currentBoss == null) {
			log.errorf("Boss for location %s not found", location);
			return Response.status(400).entity("Wrong location in input").build();
		}
		
		adventureDB.setCurrentBossHealth(3);
		adventureDB.setCurrentBossId(currentBoss.getId());
		adventureDB.setCurrentLocationSigle(locationSigle(location));
		
		return Response.ok().build();
	}

	public BossDTO getBoss(String bossLocation) {
		log.debug("Getting boss by location: " + bossLocation);
		final BossDTO boss = BossListDB.getByLocation(bossLocation);
		if (boss == null)
			log.warnf("Boss is null for location [%s]", bossLocation);
		else
			log.debugf("Boss for location [%s] loaded, ID=%d - NAME=%s", 
					bossLocation, boss.getId(), boss.getName());
		return boss;
	}
	
	
	
	
	
	
}
