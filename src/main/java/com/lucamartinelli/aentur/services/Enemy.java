package com.lucamartinelli.aentur.services;

import java.io.IOException;

import org.apache.commons.lang3.math.NumberUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.EnemyEJB;
import com.lucamartinelli.aentur.ejb.RewardEJB;
import com.lucamartinelli.aentur.languagecontent.ResolveContentsUtils;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.MonstersListDB;
import com.lucamartinelli.aentur.vo.AttackDTO;
import com.lucamartinelli.aentur.vo.DefenseDTO;
import com.lucamartinelli.aentur.vo.MonsterDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

@Path("/enemy")
@ApplicationScoped
public class Enemy {
	
	
	@Context
	HttpServletResponse response;
	
	@Inject
	Logger log;
	
	@Inject
	EnemyEJB enemyEJB;
	
	@Inject
	RewardEJB rewardEJB;
	
	@Inject
	AdventureStatsDB adventureStats;
	
	
	@Path("/random-id")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public int getRandomId() {
		return enemyEJB.getRandomId();
	}
	
	@Path("/enemy-by-id/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public MonsterDTO getEnemyByID(
			@PathParam("id") String monsterId) {
		if (!NumberUtils.isCreatable(monsterId)) {
			log.errorf("Id %s is not a number", monsterId);
			setError(400);
			return null;
		}
		
		final int id = NumberUtils.toInt(monsterId);
		final int monstersNumber = MonstersListDB.MONSTERS.length;
		if (id >= monstersNumber) {
			log.errorf("Id %s is too high", monsterId);
			setError(400);
			return null;
		}
		log.debugf("Loading monster with id: %d", id);
		// This because the DB must be immutable
		final MonsterDTO monster = MonstersListDB.MONSTERS[id].clone();
		return ResolveContentsUtils.resolveLabels(monster);
		
	}
	
	@Path("/attack/random-for-monster/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public AttackDTO getRandomEnemyAttack(@PathParam("id") String monsterId) {
		final MonsterDTO monster = getEnemyByID(monsterId);
		return enemyEJB.getRandomEnemyAttack(monster);
	}
	
	@Path("/defence/random-for-monster/{id}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public DefenseDTO getRandomEnemyDefence(@PathParam("id") String monsterId) {
		final MonsterDTO monster = getEnemyByID(monsterId);
		return enemyEJB.getRandomEnemyDefence(monster);
	}
	
	@GET
	@Path("decrease-health")
	@Produces(MediaType.APPLICATION_JSON)
	public void decreaseHealth() {
		adventureStats.decreaseMonsterHealth();
	}
	
	@GET
	@Path("increase-health")
	@Produces(MediaType.APPLICATION_JSON)
	public void increaseHealth() {
		adventureStats.increaseMonsterHealth();
	}
	
	@GET
	@Path("reward/assign-and-get/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public RewardDTO assignRewardAndGet(@PathParam("id") String id) {
		 final MonsterDTO monster = getEnemyByID(id);
		 if (monster == null) {
			 log.error("Monster not found, wrong input id " + id);
			 setError(400);
			 return null;
		 }
		 final RewardDTO reward = rewardEJB.getReward(monster.getDifficulty());
		 if (reward == null) {
			 log.error("reward not found");
			 setError(500);
			 return null;
		 }
		 
		 rewardEJB.assignReward(reward);
		 
		 return reward;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	private void setError(int error) {
		setError(error, null);
    }
	private void setError(int error, String msg) {
    	try {
    		if (msg == null)
    			response.sendError(error);
    		else
    			response.sendError(error, msg);
		} catch (IOException e) {
			log.error(e);
			throw new RuntimeException(e);
		}
    }
	
	
}
