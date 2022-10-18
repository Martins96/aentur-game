package com.lucamartinelli.aentur.saves;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonValue;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;

import io.quarkus.arc.Unremovable;

@Unremovable
@ApplicationScoped
public class CreateSaveFile {
	
	@Inject
	Logger log;
	
	@Inject
	PlayerInventoryDB playerDB;
	
	public static void saveAdventure() {
		CDI.current().select(CreateSaveFile.class).get().save();
	}
	
	public void save() {
		try {
			generateSaveFileAndStore();
		} catch (IOException e) {
			log.error("Error create and store the saving file:", e);
		}
	}
	
	
	private void generateSaveFileAndStore() throws IOException {
		final File saveFile = new File("aenture.jsonsave");
		BufferedWriter writer = null;
		
		try {
			if (saveFile.exists()) {
				saveFile.delete();
			}
			saveFile.createNewFile();
			writer = new BufferedWriter(new FileWriter(saveFile));
			writer.write(createJsonSave());
			writer.close();
		} catch (IOException e) {
			log.error("Error saving file:", e);
			if (writer != null)
				writer.close();
			throw e;
		}
	}
	
	
	private String createJsonSave() {
		final JsonObjectBuilder root = Json.createObjectBuilder();
		final JsonObject playerJson = incapsulatePlayer();
		
		
		root.add("playerInventoryDB", playerJson);
		
		return root.build().toString();
	}
	
	
	private JsonObject incapsulatePlayer() {
		final JsonObjectBuilder bldr = Json.createObjectBuilder();
		JsonValue jsonValue;
		
		jsonValue = playerDB.getEquipedArmor() != null ? 
				Json.createValue(playerDB.getEquipedArmor().getId()) : JsonValue.NULL;
		bldr.add("equipedArmor", jsonValue);
		
		jsonValue = playerDB.getEquipedWeapon() != null ? 
				Json.createValue(playerDB.getEquipedWeapon().getId()) : JsonValue.NULL;
		bldr.add("equipedWeapon", jsonValue);
		
		jsonValue = playerDB.getEquipedTalisman() != null ? 
				Json.createValue(playerDB.getEquipedTalisman().getId()) : JsonValue.NULL;
		bldr.add("equipedTalisman", jsonValue);
		
		bldr.add("gold", playerDB.getGold());
		
		final JsonArrayBuilder arrBldr = Json.createArrayBuilder();
		if (playerDB.getItems() != null || playerDB.getItems().size() > 0) {
			playerDB.getItems().forEach(i -> {
				if (i != null)
					arrBldr.add(i.getId());
			});
		}
		bldr.add("items", arrBldr.build());
		
		
		return bldr.build();
	}

}
