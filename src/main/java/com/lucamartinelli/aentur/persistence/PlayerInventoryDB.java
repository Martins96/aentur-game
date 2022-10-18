package com.lucamartinelli.aentur.persistence;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Singleton;

import com.lucamartinelli.aentur.saves.CreateSaveFile;
import com.lucamartinelli.aentur.vo.ItemDTO;

@Singleton
public class PlayerInventoryDB implements Serializable {

	private static final long serialVersionUID = 3219819969161738167L;
	
	private long gold=0L;
	private List<ItemDTO> items = new ArrayList<>(0);
	private ItemDTO equipedWeapon = null;
	private ItemDTO equipedArmor = null;
	private ItemDTO equipedTalisman = null;
	
	public PlayerInventoryDB() {
	}
	
	public PlayerInventoryDB(long gold, List<ItemDTO> items, ItemDTO equipedWeapon, ItemDTO equipedArmor,
			ItemDTO equipedTalisman) {
		super();
		this.gold = gold;
		this.items = items;
		this.equipedWeapon = equipedWeapon;
		this.equipedArmor = equipedArmor;
		this.equipedTalisman = equipedTalisman;
	}


	public long getGold() {
		return gold;
	}
	public void setGold(long gold) {
		this.gold = gold;
	}
	public void addGold(long gold) {
		this.gold = this.gold + gold;
	}
	public void removeGold(long gold) {
		this.gold = this.gold - gold;
	}
	public List<ItemDTO> getItems() {
		return items;
	}
	public void setItems(List<ItemDTO> items) {
		this.items = items;
		CreateSaveFile.saveAdventure();
	}
	public void addItems(ItemDTO... items) {
		if (this.items == null)
			this.items = new ArrayList<>(0);
		this.items.addAll(Arrays.asList(items));
		CreateSaveFile.saveAdventure();
	}
	public void removeItems(ItemDTO item) {
		if (this.items == null) {
			this.items = new ArrayList<>(0);
			return;
		}
		this.items.remove(item);
		CreateSaveFile.saveAdventure();
	}
	
	public ItemDTO getEquipedWeapon() {
		return equipedWeapon;
	}
	public void setEquipedWeapon(ItemDTO equipedWeapon) {
		this.equipedWeapon = equipedWeapon;
	}
	public ItemDTO getEquipedArmor() {
		return equipedArmor;
	}
	public void setEquipedArmor(ItemDTO equipedArmor) {
		this.equipedArmor = equipedArmor;
	}
	public ItemDTO getEquipedTalisman() {
		return equipedTalisman;
	}
	public void setEquipedTalisman(ItemDTO equipedTalisman) {
		this.equipedTalisman = equipedTalisman;
	}
	
	

}
