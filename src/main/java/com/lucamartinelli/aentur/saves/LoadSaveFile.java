package com.lucamartinelli.aentur.saves;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;

import io.quarkus.arc.Unremovable;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.spi.CDI;
import jakarta.inject.Inject;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonNumber;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import jakarta.json.JsonStructure;
import jakarta.json.JsonValue;
import jakarta.json.JsonValue.ValueType;

import static com.lucamartinelli.aentur.persistence.ItemsListDB.ITEMS;

@Unremovable
@ApplicationScoped
public class LoadSaveFile {
	
	
	@Inject
	Logger log;
	
	@Inject
	PlayerInventoryDB playerDB;
	
	public static void loadAdventure() {
		CDI.current().select(LoadSaveFile.class).get().load();
	}
	
	public void load() {
		try {
			readAndLoad();
		} catch (IOException e) {
			log.error("Error read and load the saving file:", e);
		} catch (Exception e) {
			log.error("Error read and load the saving file:", e);
		}
	}
	
	private void readAndLoad() throws IOException {
		final File saveFile = new File("aenture.jsonsave");
		if (!saveFile.exists()) {
			log.warn("Save file not exists, nothing to load");
			return;
		}
		log.info("Loading file: " + saveFile.getAbsolutePath());
		if (saveFile.length() == 0) {
			log.debug("File is empty");
			return;
		}
		
		
		final JsonReader reader = Json.createReader(new FileReader(saveFile));
		JsonStructure json = reader.read();
		
		if (json == JsonStructure.NULL || json == JsonStructure.EMPTY_JSON_OBJECT) {
			log.debug("Json object is null");
			return;
		}
		
		final JsonObject root = json.asJsonObject();
		insertPlayerDB(root);
		
		
	}

	private void insertPlayerDB(final JsonObject root) {
		if (!root.containsKey("playerInventoryDB"))
			return;
		
		final JsonObject rootPlayerDB = root.getJsonObject("playerInventoryDB");
		
		if (rootPlayerDB.containsKey("equipedArmor")) {
			final JsonValue val = rootPlayerDB.get("equipedArmor");
			if (val != JsonValue.NULL && val.getValueType() == ValueType.NUMBER) {
				final int itemID = ((JsonNumber) val).numberValue().intValue();
				playerDB.setEquipedArmor(ITEMS[itemID]);
			}
		}
		
		if (rootPlayerDB.containsKey("equipedWeapon")) {
			final JsonValue val = rootPlayerDB.get("equipedWeapon");
			if (val != JsonValue.NULL && val.getValueType() == ValueType.NUMBER) {
				final int itemID = ((JsonNumber) val).numberValue().intValue();
				playerDB.setEquipedWeapon(ITEMS[itemID]);
			}
		}
		
		if (rootPlayerDB.containsKey("equipedTalisman")) {
			final JsonValue val = rootPlayerDB.get("equipedTalisman");
			if (val != JsonValue.NULL && val.getValueType() == ValueType.NUMBER) {
				final int itemID = ((JsonNumber) val).numberValue().intValue();
				playerDB.setEquipedTalisman(ITEMS[itemID]);
			}
		}
		
		if (rootPlayerDB.containsKey("gold")) {
			final JsonValue val = rootPlayerDB.get("gold");
			if (val != JsonValue.NULL && val.getValueType() == ValueType.NUMBER) {
				final int gold = ((JsonNumber) val).numberValue().intValue();
				playerDB.setGold(gold);
			}
		}
		
		if (rootPlayerDB.containsKey("items")) {
			final JsonArray items = rootPlayerDB.getJsonArray("items");
			items.forEach(val ->  {
				if (val != JsonValue.NULL && val.getValueType() == ValueType.NUMBER) {
					final int itemID = ((JsonNumber) val).numberValue().intValue();
					playerDB.addItems(ITEMS[itemID]);
				}
			});
		}
	}
	
	
	
	
}
