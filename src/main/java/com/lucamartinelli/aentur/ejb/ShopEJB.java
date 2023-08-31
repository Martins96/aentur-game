package com.lucamartinelli.aentur.ejb;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@ApplicationScoped
public class ShopEJB {
	
	@Inject
	PlayerInventoryDB invDB;
	
	@Inject
	Logger log;
	
	
	public boolean sellItem(String id) {
		if (!StringUtils.isNumeric(id)) {
			log.errorf("Id %s is not a number", id);
			return false;
		}
		final int itemID = NumberUtils.toInt(id);
		
		final ItemDTO toRemove = ItemsListDB.ITEMS[itemID];
		
		if (toRemove == null) {
			log.errorf("Item with id %s not found in DB", id);
			return false;
		}
		final int goldGain = toRemove.getGoldValue() / 2;
		
		invDB.removeItems(toRemove);
		invDB.addGold(goldGain);
		return true;
	}
	
	public boolean buyItem(String id) {
		if (!StringUtils.isNumeric(id)) {
			log.errorf("Id %s is not a number", id);
			return false;
		}
		final int itemID = NumberUtils.toInt(id);
		
		final ItemDTO toAdd = ItemsListDB.ITEMS[itemID];
		
		if (toAdd == null) {
			log.errorf("Item with id %s not found in DB", id);
			return false;
		}
		if (!toAdd.isAvailableOnShop()) {
			log.errorf("Item with id %s not available for shop", id);
			return false;
		}
		if (toAdd.getGoldValue() > invDB.getGold()) {
			log.errorf("Item with id %s price is too high for the poor player", id);
			return false;
		}
		
		invDB.addItems(toAdd);
		invDB.removeGold(toAdd.getGoldValue());
		return true;
	}
	
	public List<ItemDTO> merchantItems() {
		List<ItemDTO> tradableItems = Arrays.stream(ItemsListDB.ITEMS)
				.filter(i -> i.isAvailableOnShop())
				.collect(Collectors.toList());
		
		Stream<Integer> itemIDs = new Random().ints(0, tradableItems.size()).limit(10).boxed();
		List<ItemDTO> shopShowcase = new ArrayList<>();
		itemIDs.forEach(id -> shopShowcase.add(tradableItems.get(id)));
		
		return shopShowcase;
		
	}
}
