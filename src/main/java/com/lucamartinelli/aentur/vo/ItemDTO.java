package com.lucamartinelli.aentur.vo;

import java.io.Serializable;

import com.lucamartinelli.aentur.persistence.ItemCategory;

public class ItemDTO implements Serializable {

	private static final long serialVersionUID = -5505975039695748130L;
	
	private int id;
	private String name;
	private ItemCategory category;
	private String effect;
	private int rarity;
	private boolean availableOnShop;
	private int goldValue;
	
	public ItemDTO() {
	}

	public ItemDTO(int id, String name, ItemCategory category, String effect, int rarity, boolean availableOnShop,
			int goldValue) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.effect = effect;
		this.rarity = rarity;
		this.availableOnShop = availableOnShop;
		this.goldValue = goldValue;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public ItemCategory getCategory() {
		return category;
	}
	public void setCategory(ItemCategory category) {
		this.category = category;
	}

	public String getEffect() {
		return effect;
	}
	public void setEffect(String effect) {
		this.effect = effect;
	}

	public int getRarity() {
		return rarity;
	}
	public void setRarity(int rarity) {
		this.rarity = rarity;
	}

	public boolean isAvailableOnShop() {
		return availableOnShop;
	}
	public void setAvailableOnShop(boolean availableOnShop) {
		this.availableOnShop = availableOnShop;
	}

	public int getGoldValue() {
		return goldValue;
	}
	public void setGoldValue(int goldValue) {
		this.goldValue = goldValue;
	}

	


}
