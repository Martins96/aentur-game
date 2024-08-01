package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Objects;

import com.lucamartinelli.aentur.persistence.ItemCategory;

import io.quarkus.runtime.annotations.RegisterForReflection;
import jakarta.json.Json;
import jakarta.json.JsonObject;

@RegisterForReflection
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

	public ItemDTO clone() {
		return new ItemDTO(this.id, this.name, this.category, this.effect, 
				this.rarity, this.availableOnShop, this.goldValue);
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(availableOnShop, category, effect, goldValue, id, name, rarity);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ItemDTO other = (ItemDTO) obj;
		return availableOnShop == other.availableOnShop && category == other.category
				&& Objects.equals(effect, other.effect) && goldValue == other.goldValue && id == other.id
				&& Objects.equals(name, other.name) && rarity == other.rarity;
	}

	@Override
	public String toString() {
		return "ItemDTO [id=" + id + ", name=" + name + ", category=" + category + ", effect=" + effect + ", rarity="
				+ rarity + ", availableOnShop=" + availableOnShop + ", goldValue=" + goldValue + "]";
	}

	public JsonObject toJsonObject() {
		return Json.createObjectBuilder()
				.add("id", this.id)
				.add("name", this.name)
				.add("category", this.category.toString())
				.add("effect", this.effect)
				.add("rarity", this.rarity)
				.add("availableOnShop", this.availableOnShop)
				.add("goldValue", this.goldValue)
				.build();
	}
	
	public String toJson() {
		return toJsonObject().toString();
	}



}
