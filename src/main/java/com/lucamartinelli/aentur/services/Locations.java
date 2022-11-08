package com.lucamartinelli.aentur.services;

import java.util.Random;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.EventEffectDB;

@Path("/location")
@ApplicationScoped()
public class Locations {
	
	private final Random random = new Random();
	private int[] darkwoodMonsterLV1 = new int[] {0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24};
	private int[] darkwoodMonsterLVSup = new int[] {1,25,26,27,28,29,30,31,32,33,34};
	private int[] icelandMonsterLV1 = new int[] {0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24};
	private int[] icelandMonsterLVSup = new int[] {1,25,26,27,28,29,30,31,32,33,34};
	private int[] frozenmountainsMonsterLV1 = new int[] {0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24};
	private int[] frozenmountainsMonsterLVSup = new int[] {1,25,26,27,28,29,30,31,32,33,34};
	private int[] flamevolcanoMonsterLV1 = new int[] {0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24};
	private int[] flamevolcanoMonsterLVSup = new int[] {26,27,28,29,30,31,32,33,34};
	private int[] crimsoncaveMonsterLV1 = new int[] {0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24};
	private int[] crimsoncaveMonsterLVSup = new int[] {1,26,27,28,29,30,31,32,33,34};
	private int[] hottendesertMonsterLV1 = new int[] {0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24};
	private int[] hottendesertMonsterLVSup = new int[] {26,27,28,29,30,31,32,33,34};
	

	
	@Inject()
	AdventureStatsDB adventureStats;
	@Inject
	EventEffectDB eventEffectDB;
	
	
	@GET
	@Path("/reset-adventure-stats")
	public void resetAdventureStats() {
		adventureStats.resetAllStats();
		eventEffectDB.reset();
	}
	
	@GET
	@Path("/increase-step-path")
	public void increaseStepPath() {
		adventureStats.increaseStep();
	}
	
	
	@GET
	@Path("/darkwood/list/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getDarkwoodMonsterLvl1() {
		return this.darkwoodMonsterLV1;
	}
	
	@GET
	@Path("/darkwood/list/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getDarkwoodMonsterLvlSup() {
		return this.darkwoodMonsterLVSup;
	}
	
	@GET
	@Path("/darkwood/random/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int getDarkwoodRandomLvl1() {
		final int randID = random.nextInt(this.darkwoodMonsterLV1.length);
		return this.darkwoodMonsterLV1[randID];
	}
	
	@GET
	@Path("/darkwood/random/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int getDarkwoodRandomLvlSup() {
		final int randID = random.nextInt(this.darkwoodMonsterLVSup.length);
		return this.darkwoodMonsterLVSup[randID];
	}
	
	@GET
	@Path("/iceland/list/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getIcelandMonsterLvl1() {
		return this.icelandMonsterLV1;
	}
	
	@GET
	@Path("/iceland/list/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getIcelandMonsterLvlSup() {
		return this.icelandMonsterLVSup;
	}
	
	@GET
	@Path("/iceland/random/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int getIcelandRandomLvl1() {
		final int randID = random.nextInt(this.icelandMonsterLV1.length);
		return this.icelandMonsterLV1[randID];
	}
	
	@GET
	@Path("/iceland/random/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int getIcelandRandomLvlSup() {
		final int randID = random.nextInt(this.icelandMonsterLVSup.length);
		return this.icelandMonsterLVSup[randID];
	}
	
	@GET
	@Path("/frozenmountains/list/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getFrozenMountainsMonsterLvl1() {
		return this.frozenmountainsMonsterLV1;
	}
	
	@GET
	@Path("/frozenmountains/list/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getFrozenMountainsMonsterLvlSup() {
		return this.frozenmountainsMonsterLVSup;
	}
	
	@GET
	@Path("/frozenmountains/random/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int getFrozenMountainsRandomLvl1() {
		final int randID = random.nextInt(this.frozenmountainsMonsterLV1.length);
		return this.frozenmountainsMonsterLV1[randID];
	}
	
	@GET
	@Path("/frozenmountains/random/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int getFrozenMountainsRandomLvlSup() {
		final int randID = random.nextInt(this.frozenmountainsMonsterLVSup.length);
		return this.frozenmountainsMonsterLVSup[randID];
	}
	
	@GET
	@Path("/flamevolcano/list/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getFlamevolcanoMonsterLvl1() {
		return this.flamevolcanoMonsterLV1;
	}
	
	@GET
	@Path("/flamevolcano/list/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getFlamevolcanoMonsterLvlSup() {
		return this.flamevolcanoMonsterLVSup;
	}
	
	@GET
	@Path("/flamevolcano/random/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int getFlamevolcanoRandomLvl1() {
		final int randID = random.nextInt(this.flamevolcanoMonsterLV1.length);
		return this.flamevolcanoMonsterLV1[randID];
	}
	
	@GET
	@Path("/flamevolcano/random/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int getFlamevolcanoRandomLvlSup() {
		final int randID = random.nextInt(this.flamevolcanoMonsterLVSup.length);
		return this.flamevolcanoMonsterLVSup[randID];
	}
	
	@GET
	@Path("/crimsoncave/list/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getCrimsoncaveMonsterLvl1() {
		return this.crimsoncaveMonsterLV1;
	}
	
	@GET
	@Path("/crimsoncave/list/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getCrimsoncaveMonsterLvlSup() {
		return this.crimsoncaveMonsterLVSup;
	}
	
	@GET
	@Path("/crimsoncave/random/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int getCrimsoncaveRandomLvl1() {
		final int randID = random.nextInt(this.crimsoncaveMonsterLV1.length);
		return this.crimsoncaveMonsterLV1[randID];
	}
	
	@GET
	@Path("/crimsoncave/random/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int getCrimsoncaveRandomLvlSup() {
		final int randID = random.nextInt(this.crimsoncaveMonsterLVSup.length);
		return this.crimsoncaveMonsterLVSup[randID];
	}
	
	@GET
	@Path("/hottendesert/list/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getHottendesertMonsterLvl1() {
		return this.hottendesertMonsterLV1;
	}
	
	@GET
	@Path("/hottendesert/list/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int[] getHottendesertMonsterLvlSup() {
		return this.hottendesertMonsterLVSup;
	}
	
	@GET
	@Path("/hottendesert/random/lvl1")
	@Produces(MediaType.APPLICATION_JSON)
	public int getHottendesertRandomLvl1() {
		final int randID = random.nextInt(this.hottendesertMonsterLV1.length);
		return this.hottendesertMonsterLV1[randID];
	}
	
	@GET
	@Path("/hottendesert/random/lvlsup")
	@Produces(MediaType.APPLICATION_JSON)
	public int getHottendesertRandomLvlSup() {
		final int randID = random.nextInt(this.hottendesertMonsterLVSup.length);
		return this.hottendesertMonsterLVSup[randID];
	}
	
	
	
}
