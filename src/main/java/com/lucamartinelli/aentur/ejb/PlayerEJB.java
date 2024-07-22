package com.lucamartinelli.aentur.ejb;

import java.util.Objects;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class PlayerEJB {
	
	@Inject
	Logger log;
	
	@Inject
	PlayerInventoryDB invDB;

	public boolean equip(String id) {
		if (!StringUtils.isNumeric(id)) {
			log.errorf("Id %s is not a number", id);
			return false;
		}
		final int itemID = NumberUtils.toInt(id);
		
		final boolean isInInventory = invDB.getItems().stream()
				.anyMatch(el -> Objects.equals(el.getId(), itemID));
		if (!isInInventory) {
			log.errorf("Id %s is not in player inventory", id);
		}
		final ItemDTO equipableItem = ItemsListDB.getById(itemID);
		
		if (equipableItem == null) {
			log.errorf("Item with id %s not found in DB");
			return false;
		}
		final ItemDTO oldEquipedItem;
		switch (equipableItem.getCategory()) {
		case WEAPON:
			oldEquipedItem = invDB.getEquipedWeapon();
			invDB.setEquipedWeapon(equipableItem);
			break;
		case ARMOR:
			oldEquipedItem = invDB.getEquipedArmor();
			invDB.setEquipedArmor(equipableItem);
			break;
		case TALISMAN:
			oldEquipedItem = invDB.getEquipedTalisman();
			invDB.setEquipedTalisman(equipableItem);
			break;
		default:
			log.error("Category for item not correct: " + equipableItem.getCategory());
			return false;
		}
		
		if (oldEquipedItem != null && oldEquipedItem.getId() > -1)
			invDB.addItems(oldEquipedItem);
		
		remove(id);
		
		log.debug("Item equiped: " + equipableItem.getName());
		return true;
	}
	
	public boolean remove(String id) {
		if (!StringUtils.isNumeric(id)) {
			log.errorf("Id %s is not a number", id);
			return false;
		}
		final int itemID = NumberUtils.toInt(id);
		
		final ItemDTO toRemove = ItemsListDB.getById(itemID);
		
		if (toRemove == null) {
			log.errorf("Item with id %s not found in DB",id);
			return false;
		}
		
		invDB.removeItems(toRemove);
		return true;
	}
	
	
	
}
