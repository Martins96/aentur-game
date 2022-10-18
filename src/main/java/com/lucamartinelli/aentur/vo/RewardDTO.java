package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

public class RewardDTO implements Serializable {

	private static final long serialVersionUID = 683888223052012511L;
	
	private int gold;
	private ItemDTO item;
	
	public RewardDTO() {
	}

	public RewardDTO(int gold, ItemDTO item) {
		super();
		this.gold = gold;
		this.item = item;
	}

	public int getGold() {
		return gold;
	}
	public void setGold(int gold) {
		this.gold = gold;
	}

	public ItemDTO getItem() {
		return item;
	}
	public void setItem(ItemDTO item) {
		this.item = item;
	}
	
	
	
	
	

}
