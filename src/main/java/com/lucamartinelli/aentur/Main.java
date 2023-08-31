package com.lucamartinelli.aentur;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.saves.CreateSaveFile;
import com.lucamartinelli.aentur.saves.LoadSaveFile;
import com.lucamartinelli.aentur.test.TestProfile;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.QuarkusApplication;
import io.quarkus.runtime.annotations.QuarkusMain;
import io.quarkus.runtime.configuration.ConfigUtils;
import jakarta.inject.Inject;

import java.util.List;

@QuarkusMain
public class Main {

	public static void main(String... args) {
		
		Quarkus.run(Aentur.class, args);
	}
	
	public static class Aentur implements QuarkusApplication {

		@Inject
		Logger log;
		
		@Inject
		PlayerInventoryDB playerInventory;
		
		@Inject CreateSaveFile createSaveFile;
		
        @Override
        public int run(String... args) throws Exception {
        	playerInventory.setGold(5L);
        	playerInventory.setEquipedWeapon(ItemsListDB.ITEMS[0]);
        	playerInventory.setEquipedArmor(ItemsListDB.ITEMS[1]);
        	
        	final List<String> profiles = ConfigUtils.getProfiles();
        	
        	log.debug("Active profiles: " + profiles);
        	if (profiles.contains("dev")) {
        		log.debug("DEV profile active, skip load the save file");
        		createSaveFile.setEnableSaving(true);
        		
        	} else if (profiles.contains("test")) {
        		log.debug("TEST profile active, skip load the save file");
        		createSaveFile.setEnableSaving(true);
        		TestProfile.loadTestDB();
        		// clean
        	} else {
        		log.info("PROD profile active, loading the save file");
        		LoadSaveFile.loadAdventure();
        	}
        	
            log.debug("Aentur started");
            Quarkus.waitForExit();
            return 0;
        }
    }

}
