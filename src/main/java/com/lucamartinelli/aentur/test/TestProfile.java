package com.lucamartinelli.aentur.test;

import org.jboss.logging.Logger;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.CompletationListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;

import io.quarkus.arc.Unremovable;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.spi.CDI;
import jakarta.inject.Inject;

@Unremovable
@ApplicationScoped
public class TestProfile {
	
	@Inject
	Logger log;
	
	@Inject
	PlayerInventoryDB playerDB;
	
	@Inject
	AdventureStatsDB adventureDB;
	
	@Inject
	CompletationListDB completationDB;
	
	public static void loadTestDB() {
		CDI.current().select(TestProfile.class).get().load();
	}

	public void load() {
		completationDB.setDarkwoodCompleted();
	}
}
