package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
public class RewardBlueprintDTO implements Serializable {

	private static final long serialVersionUID = 1412232081648697116L;
	
	private int minGold;
	private int maxBonusGold;
	private int minLvlItem;
	private int maxLvlItem;
	
	public RewardBlueprintDTO() {
	}

	public RewardBlueprintDTO(int minGold, int maxBonusGold, int minLvlItem, int maxLvlItem) {
		super();
		this.minGold = minGold;
		this.maxBonusGold = maxBonusGold;
		this.minLvlItem = minLvlItem;
		this.maxLvlItem = maxLvlItem;
	}

	public int getMinGold() {
		return minGold;
	}
	public void setMinGold(int minGold) {
		this.minGold = minGold;
	}

	public int getMaxBonusGold() {
		return maxBonusGold;
	}
	public void setMaxBonusGold(int maxBonusGold) {
		this.maxBonusGold = maxBonusGold;
	}

	public int getMinLvlItem() {
		return minLvlItem;
	}
	public void setMinLvlItem(int minLvlItem) {
		this.minLvlItem = minLvlItem;
	}
	
	public int getMaxLvlItem() {
		return maxLvlItem;
	}
	public void setMaxLvlItem(int maxLvlItem) {
		this.maxLvlItem = maxLvlItem;
	}
	
	

}
