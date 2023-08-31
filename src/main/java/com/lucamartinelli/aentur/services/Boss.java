package com.lucamartinelli.aentur.services;

import org.apache.commons.lang3.math.NumberUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.ejb.BossEJB;
import com.lucamartinelli.aentur.ejb.RewardEJB;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.vo.BossActionResultVO;
import com.lucamartinelli.aentur.vo.BossDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("boss")
@ApplicationScoped
public class Boss {
	
	@Inject
	Logger log;
	
	@Inject
	AdventureStatsDB adventureDB;
	@Inject
	BossEJB bossEJB;
	@Inject
	RewardEJB rewardEJB;
	
	
	@Path("get-by-location/{location}")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public BossDTO getBoss(@PathParam("location") String location) {
		return bossEJB.getBoss(location);
	}
	
	@Path("init/{location}")
	@GET
	public Response init(@PathParam("location") String location) {
		return bossEJB.init(location);
	}
	
	@Path("is-failed")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public boolean isFailed() {
		return adventureDB.getPlayerHealth() < 1;
	}
	
	@Path("is-success")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public boolean isSuccess() {
		return adventureDB.getCurrentBossHealth() < 1;
	}
	
	@Path("action")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	@POST
	public BossActionResultVO action(String rollD20) {
		if (rollD20 == null || rollD20.isEmpty()) {
			log.error("Input is null");
			return null;
		}
		if (NumberUtils.toInt(rollD20, -1) < 1 ||
				NumberUtils.toInt(rollD20, -1) > 20) {
			log.error("Input must be a number in range 1-20");
			return null;
		}
		
		return bossEJB.selectAndExecuteAction(NumberUtils.toInt(rollD20));
	}
	
	@Path("reward")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public RewardDTO assignRewardAndGet() {
		if (!this.isSuccess()) {
			log.debug("The boss is not defeated yet, reward is not assignable");
			return null;
		}
		final RewardDTO reward = rewardEJB.getBossReward();
		rewardEJB.assignReward(reward);
		
		return reward;
		
	}
	
	@Path("health")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public int getHealth() {
		return adventureDB.getCurrentBossHealth();
	}
	
	
	
	
	
}
