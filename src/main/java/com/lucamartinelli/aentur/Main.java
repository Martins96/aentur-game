package com.lucamartinelli.aentur;

import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.saves.LoadSaveFile;

import io.quarkus.runtime.Quarkus;
import io.quarkus.runtime.QuarkusApplication;
import io.quarkus.runtime.annotations.QuarkusMain;
import io.quarkus.runtime.configuration.ProfileManager;

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
		
        @Override
        public int run(String... args) throws Exception {
        	playerInventory.setGold(5L);
        	playerInventory.setEquipedWeapon(ItemsListDB.ITEMS[0]);
        	playerInventory.setEquipedArmor(ItemsListDB.ITEMS[1]);
        	
        	final String quarkusProfile = ProfileManager.getActiveProfile();
        	if ("dev".equalsIgnoreCase(quarkusProfile)) {
        		log.debug("DEV profile active, skip load the save file");
        		
        	} else if ("test".equalsIgnoreCase(quarkusProfile)) {
        		log.debug("TEST profile active, skip load the save file");
        		
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
