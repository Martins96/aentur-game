package com.lucamartinelli.aentur.persistence;

import java.io.Serializable;

import javax.inject.Singleton;

import com.lucamartinelli.aentur.vo.StepDTO;

@Singleton
public class AdventureStatsDB implements Serializable {

	private static final long serialVersionUID = -7535240381402530241L;
	
	private int playerHealth;
	private int currentMonsterHealth;
	private int currentBossHealth;
	private int currentBossId;
	private String currentLocationSigle;
	private StepDTO currentStep;
	
	public AdventureStatsDB() {
	}

	public int getPlayerHealth() {
		return playerHealth;
	}
	public void setPlayerHealth(int playerHealth) {
		this.playerHealth = playerHealth;
	}
	public void increasePlayerHealth() {
		if (playerHealth == 3)
			return;
		this.playerHealth++;
	}
	public void decreasePlayerHealth() {
		if (playerHealth == 0)
			return;
		this.playerHealth--;
	}

	public int getCurrentMonsterHealth() {
		return currentMonsterHealth;
	}
	public void setCurrentMonsterHealth(int currentMonsterHealth) {
		this.currentMonsterHealth = currentMonsterHealth;
	}
	public void increaseMonsterHealth() {
		if (currentMonsterHealth == 2)
			return;
		this.currentMonsterHealth++;
	}
	public void decreaseMonsterHealth() {
		if (currentMonsterHealth == 0)
			return;
		this.currentMonsterHealth--;
	}
	
	public int getCurrentBossHealth() {
		return currentBossHealth;
	}
	public void setCurrentBossHealth(int currentBossHealth) {
		this.currentBossHealth = currentBossHealth;
	}
	public void increaseBossHealth() {
		this.currentBossHealth++;
	}
	public void decreaseBossHealth() {
		this.currentBossHealth--;
	}
	
	public int getCurrentBossId() {
		return currentBossId;
	}
	public void setCurrentBossId(int currentBossId) {
		this.currentBossId = currentBossId;
	}
	
	public String getCurrentLocationSigle() {
		return currentLocationSigle;
	}
	public void setCurrentLocationSigle(String currentLocationSigle) {
		this.currentLocationSigle = currentLocationSigle;
	}

	public StepDTO getCurrentStep() {
		return currentStep;
	}
	public void setCurrentStep(StepDTO currentStep) {
		this.currentStep = currentStep;
	}
	public void increaseStep() {
		resetInfoForNextStep();
		final int newStepNum = this.currentStep.getNumber() + 1;
		final StepDTO newStep = new StepDTO(newStepNum, getTypeByStepID(newStepNum));
		this.setCurrentStep(newStep);
	}
	
	
	
	
	
	public void resetInfoForNextStep() {
		this.currentMonsterHealth = 2;
	}
	
	public void resetAllStats() {
		this.currentMonsterHealth = 2;
		this.currentBossHealth = 3;
		this.playerHealth = 3;
		this.currentStep = new StepDTO(1, getTypeByStepID(1));
	}
	
	private String getTypeByStepID(int stepNum) {
		switch (stepNum) {
		case 1:
		case 3:
			return "ENEMY";
		case 2:
		case 4:
			return "EVENT";
		case 5:
			return "BOSS";

		default:
			return null;
		}
	}
}
