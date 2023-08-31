package com.lucamartinelli.aentur.saves;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;

import io.quarkus.arc.Unremovable;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.spi.CDI;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonValue;

@Unremovable
@ApplicationScoped
public class CreateSaveFile {
	
	@Inject
	Logger log;
	
	@Inject
	PlayerInventoryDB playerDB;
	
	private boolean enableSaving;
	
	public CreateSaveFile() {
		enableSaving = true;
	}
	
	public static void saveAdventure() {
		CDI.current().select(CreateSaveFile.class).get().save();
	}
	
	public void save() {
		try {
			if (this.enableSaving)
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
	
	public void setEnableSaving(final boolean enable) {
		this.enableSaving = enable;
	}

}
