package com.lucamartinelli.aentur.event;

import java.util.Random;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.RewardEJB;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.EventEffectDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.EventDTO;

import jakarta.enterprise.inject.spi.CDI;
import jakarta.ws.rs.core.Response;


public interface EventAction {
	
	Logger log=Logger.getLogger(EventAction.class);

	EventEffectDB eventEffectDB=CDI.current().select(EventEffectDB.class).get();
	PlayerInventoryDB playerInventoryDB=CDI.current().select(PlayerInventoryDB.class).get();
	AdventureStatsDB adventureDB=CDI.current().select(AdventureStatsDB.class).get();
	RewardEJB rewardEJB=CDI.current().select(RewardEJB.class).get();
	
	/**
	 * Check if the % test is passed, if the test is passed, the return will be <code>true</code>.
	 * <br><i>Example:</i><br>
	 * For input <b>20</b> means a test on 20% of success. The code generate a random 1-100 number
	 * and compare if the input is greater or equals to the generated one.<br><br>
	 * <code>(random(1,100)) <= input;</code>
	 * 
	 * @param percentMinThreshold as number (1-100)
	 * @return a boolean, that will indicate if the test is passed or not
	 */
	default boolean percentTest(final int percentMinThreshold) {
		if (percentMinThreshold > 99)
			return true;
		return (new Random().nextInt(100) + 1) <= percentMinThreshold;
	}
	
	/**
	 * Returns a pseudorandom, uniformly distributed int value
	 * between 0 (inclusive) 
	 * and the specified bound (exclusive), 
	 */
	default int getRandomInt(int bound) {
		return new Random().nextInt(bound);
	}
	
	
	public abstract EventDTO getWelcomeMessage();
	
	public abstract Response apply(int choice, int rollD100, int rollD12);
	
}
