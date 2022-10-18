package com.lucamartinelli.aentur.ejb;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;
import com.lucamartinelli.aentur.vo.RewardBlueprintDTO;
import com.lucamartinelli.aentur.vo.RewardDTO;

@ApplicationScoped
public class RewardEJB {
	
	@Inject
	PlayerInventoryDB playerInv;
	
	private static final Random random = new Random();
	private static final RewardBlueprintDTO rewardBPLvl1 = new RewardBlueprintDTO(2, 3, 1, 2);
	private static final RewardBlueprintDTO rewardBPLvlSup = new RewardBlueprintDTO(3, 5, 2, 7);
	private static final RewardBlueprintDTO rewardBPBoss = new RewardBlueprintDTO(8, 8, 5, 9);
	private static final List<ItemDTO> itemsLvl1 = Arrays.stream(ItemsListDB.ITEMS)
			.filter(i -> i.getRarity() >= rewardBPLvl1.getMinLvlItem() && i.getRarity() <= rewardBPLvl1.getMaxBonusGold())
			.collect(Collectors.toList());
	private static final List<ItemDTO> itemsLvlSup = Arrays.stream(ItemsListDB.ITEMS)
			.filter(i -> i.getRarity() >= rewardBPLvlSup.getMinLvlItem() && i.getRarity() <= rewardBPLvlSup.getMaxBonusGold())
			.collect(Collectors.toList());
	private static final List<ItemDTO> itemsBoss = Arrays.stream(ItemsListDB.ITEMS)
			.filter(i -> i.getRarity() >= rewardBPBoss.getMinLvlItem() && i.getRarity() <= rewardBPBoss.getMaxBonusGold())
			.collect(Collectors.toList());
	
	
	public RewardDTO getReward(int monsterLvl) {
		if (monsterLvl == 1) {
			return getRewardLvl1();
		} else {
			return getRewardLvlSup();
		}
	}
	
	private RewardDTO getRewardLvl1() {
		final int gold = random.nextInt(rewardBPLvl1.getMaxBonusGold()+1) + rewardBPLvl1.getMinGold();
		final int itemNum = random.nextInt(itemsLvl1.size());
		final ItemDTO item = itemsLvl1.get(itemNum);
		
		return new RewardDTO(gold, item);
	}
	
	private RewardDTO getRewardLvlSup() {
		final int gold = random.nextInt(rewardBPLvlSup.getMaxBonusGold()+1) + rewardBPLvlSup.getMinGold();
		final int itemNum = random.nextInt(itemsLvlSup.size());
		final ItemDTO item = itemsLvlSup.get(itemNum);
		
		return new RewardDTO(gold, item);
	}
	
	public RewardDTO getBossReward() {
		
		final Random rand = new Random();
		final int selectedItem = rand.nextInt(itemsBoss.size());
		final int gold = rewardBPBoss.getMinGold() + random.nextInt(rewardBPBoss.getMaxBonusGold()+1);
		final RewardDTO reward = new RewardDTO(gold, itemsBoss.get(selectedItem));
		return reward;
	}
	
	
	
	public void assignReward(final RewardDTO reward) {
		playerInv.addGold(reward.getGold());
		playerInv.addItems(reward.getItem());
	}
	
	
}
