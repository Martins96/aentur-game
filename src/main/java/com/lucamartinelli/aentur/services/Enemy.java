package com.lucamartinelli.aentur.services;

import java.io.IOException;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.apache.commons.lang3.math.NumberUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.EnemyEJB;
import com.lucamartinelli.aentur.ejb.RewardEJB;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.MonstersListDB;
import com.lucamartinelli.aentur.vo.AttackDTO;
import com.lucamartinelli.aentur.vo.DefenseDTO;
import com.lucamartinelli.aentur.vo.MonsterDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

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
		final MonsterDTO monster = MonstersListDB.MONSTERS[id];
		return monster;
		
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
