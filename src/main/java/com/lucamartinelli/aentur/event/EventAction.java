package com.lucamartinelli.aentur.event;

import java.util.Random;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.lang3.tuple.ImmutablePair;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.RewardEJB;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.EventEffectDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.EventDTO;
import com.lucamartinelli.aentur.vo.EventResponseVO;

import jakarta.enterprise.inject.spi.CDI;
import jakarta.ws.rs.client.Entity;
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
		if (percentMinThreshold < 1)
			return false;
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
	
	/**
	 * Returns a pseudorandom, uniformly distributed int value
	 * between 0 (inclusive) 
	 * and the specified bound (exclusive), 
	 */
	default long getRandomLong(long bound) {
		return new Random().nextLong(bound);
	}
	
	
	public abstract EventDTO getWelcomeMessage();
	
	public abstract ImmutablePair<EventResponseVO, Entry<Integer, String>> apply(int choice, int rollD100, int rollD12);
	
	default Response resolveEvent(int choice, int rollD100, int rollD12) {
		final  ImmutablePair<EventResponseVO, Entry<Integer, String>> eventResult = this.apply(choice, rollD100, rollD12);
		if (eventResult != null && eventResult.getLeft() != null) {
			return Response.ok(eventResult.getLeft()).build();
		} else if (eventResult != null && eventResult.getRight() != null) {
			Map.Entry<Integer, String> error = eventResult.getRight();
			return Response.status(error.getKey(), error.getValue()).build();
		} else {
			return Response.serverError().entity(Entity.text("Response null from server")).build();
		}
	}
	
}
