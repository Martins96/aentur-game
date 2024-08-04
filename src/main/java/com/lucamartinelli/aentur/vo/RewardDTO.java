package com.lucamartinelli.aentur.vo;

import java.io.Serializable;
import java.util.Objects;

import com.lucamartinelli.aentur.languagecontent.ResolveContentsUtils;

import io.quarkus.runtime.annotations.RegisterForReflection;

@RegisterForReflection
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

	@Override
	public int hashCode() {
		return Objects.hash(gold, item);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RewardDTO other = (RewardDTO) obj;
		return gold == other.gold && Objects.equals(item, other.item);
	}

	@Override
	public String toString() {
		return "RewardDTO [gold=" + gold + ", item=" + item + "]";
	}
	
	public void resolveItemLabels() {
		item = ResolveContentsUtils.resolveLabels(item);
	}
	
	
	
	

}
