package com.lucamartinelli.aentur.services;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.EventEffectDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.StepDTO;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;


@Path("debug")
@RequestScoped
public class DebugService {
	
	@Inject
	AdventureStatsDB advDB;
	@Inject
	PlayerInventoryDB playerDB;
	@Inject
	EventEffectDB eventEffectDB;
	
	
	@Path("dump")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public JsonObject dump() {
		final JsonObjectBuilder rootBldr = Json.createObjectBuilder();
		final JsonObjectBuilder adventureBldr = Json.createObjectBuilder();
		final JsonObjectBuilder playerBldr = Json.createObjectBuilder();
		final JsonObjectBuilder eventBldr = Json.createObjectBuilder();
		
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
		if (eventEffectDB != null) {
			if (eventEffectDB.getActiveEffect() != null)
				eventBldr.add("ActiveEffect", eventEffectDB.getActiveEffect());
		}
		rootBldr.add("EventEffectDB", eventBldr.build());
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
