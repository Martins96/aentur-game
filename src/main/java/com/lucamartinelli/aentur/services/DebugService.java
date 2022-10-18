package com.lucamartinelli.aentur.services;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.StepDTO;


@Path("debug")
@RequestScoped
public class DebugService {
	
	@Inject
	AdventureStatsDB advDB;
	@Inject
	PlayerInventoryDB playerDB;
	@Inject
	
	
	@Path("dump")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public JsonObject dump() {
		final JsonObjectBuilder rootBldr = Json.createObjectBuilder();
		final JsonObjectBuilder adventureBldr = Json.createObjectBuilder();
		final JsonObjectBuilder playerBldr = Json.createObjectBuilder();
		
		if (advDB != null) {
			if (advDB.getCurrentLocationSigle() != null)
				adventureBldr.add("CurrentLocationSigle", advDB.getCurrentLocationSigle());
			else
				adventureBldr.add("CurrentLocationSigle", JsonValue.NULL);
			adventureBldr.add("CurrentBossId", advDB.getCurrentBossId());
			adventureBldr.add("CurrentBossHealth", advDB.getCurrentBossHealth());
			adventureBldr.add("CurrentMonsterHealth", advDB.getCurrentMonsterHealth());
			adventureBldr.add("PlayerHealth", advDB.getPlayerHealth());
			final StepDTO stepDTO = advDB.getCurrentStep();
			if (stepDTO != null) {
				final JsonObjectBuilder bldr = Json.createObjectBuilder();
				bldr.add("Number", stepDTO.getNumber());
				
				if (stepDTO.getType() != null)
					bldr.add("Type", stepDTO.getType());
				else
					bldr.add("Type", JsonValue.NULL);
				
				adventureBldr.add("StepVO", bldr.build());
			} else {
				adventureBldr.add("StepVO", JsonValue.NULL);
			}
			
		}
		rootBldr.add("AdventureStatsDB", adventureBldr.build());
		if (playerDB != null) {
			playerBldr.add("Gold", playerDB.getGold());
			
			JsonObjectBuilder bldr = Json.createObjectBuilder();
			if (playerDB.getEquipedWeapon() != null) {
				
				bldr.add("Id",  playerDB.getEquipedWeapon().getId());
				if (playerDB.getEquipedWeapon() != null)
					bldr.add("Effect",  playerDB.getEquipedWeapon().getEffect());
				else
					bldr.add("Effect", JsonValue.NULL);
				bldr.add("GoldValue",  playerDB.getEquipedWeapon().getGoldValue());
				bldr.add("Rarity",  playerDB.getEquipedWeapon().getRarity());
				if (playerDB.getEquipedWeapon().getCategory() != null)
					bldr.add("Category", playerDB.getEquipedWeapon().getCategory().toString());
				else
					bldr.add("Category", JsonValue.NULL);
				playerBldr.add("EquipedWeapon", bldr.build());
				
			} else {
				playerBldr.add("EquipedWeapon", JsonValue.NULL);
			}
			
			bldr = Json.createObjectBuilder();
			if (playerDB.getEquipedArmor() != null) {
				
				bldr.add("Id",  playerDB.getEquipedArmor().getId());
				if (playerDB.getEquipedArmor() != null)
					bldr.add("Effect",  playerDB.getEquipedArmor().getEffect());
				else
					bldr.add("Effect", JsonValue.NULL);
				bldr.add("GoldValue",  playerDB.getEquipedArmor().getGoldValue());
				bldr.add("Rarity",  playerDB.getEquipedArmor().getRarity());
				if (playerDB.getEquipedArmor().getCategory() != null)
					bldr.add("Category", playerDB.getEquipedArmor().getCategory().toString());
				else
					bldr.add("Category", JsonValue.NULL);
				playerBldr.add("EquipedArmor", bldr.build());
				
			} else {
				playerBldr.add("EquipedArmor", JsonValue.NULL);
			}
			bldr = Json.createObjectBuilder();
			if (playerDB.getEquipedTalisman() != null) {
				bldr.add("Id",  playerDB.getEquipedTalisman().getId());
				if (playerDB.getEquipedTalisman() != null)
					bldr.add("Effect",  playerDB.getEquipedTalisman().getEffect());
				else
					bldr.add("Effect", JsonValue.NULL);
				bldr.add("GoldValue",  playerDB.getEquipedTalisman().getGoldValue());
				bldr.add("Rarity",  playerDB.getEquipedTalisman().getRarity());
				if (playerDB.getEquipedTalisman().getCategory() != null)
					bldr.add("Category", playerDB.getEquipedTalisman().getCategory().toString());
				else
					bldr.add("Category", JsonValue.NULL);
				playerBldr.add("EquipedTalisman", bldr.build());
				
			} else {
				playerBldr.add("EquipedTalisman", JsonValue.NULL);
			}
			final JsonArrayBuilder bldrArr = Json.createArrayBuilder();
			playerDB.getItems().forEach(i -> {
				if (i != null) {
					final JsonObjectBuilder bldrItem = Json.createObjectBuilder();
					bldrItem.add("Id", i.getId());
					if (i.getEffect() != null)
						bldrItem.add("Effect", i.getEffect());
					else
						bldrItem.add("Effect",  JsonValue.NULL);
					bldrItem.add("GoldValue",  i.getGoldValue());
					bldrItem.add("Rarity",  i.getRarity());
					if (i.getCategory() != null)
						bldrItem.add("Category", i.getCategory().toString());
					else
						bldrItem.add("Category", JsonValue.NULL);
					
					bldrArr.add(bldrItem.build());
				}
			});
			playerBldr.add("Items", bldrArr.build());
		}
		rootBldr.add("PlayerInventoryDB", playerBldr.build());
		
		return rootBldr.build();
		
	}
}
