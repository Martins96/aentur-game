package com.lucamartinelli.aentur.testing;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.lucamartinelli.aentur.ejb.PlayerEJB;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.stream.IntStream;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.enterprise.inject.spi.CDI;
import jakarta.inject.Inject;

@QuarkusTest
public class PlayerTest {
	
	
	@Inject
	PlayerInventoryDB playerInventory;
	@Inject
	AdventureStatsDB adventureStats;
	
	@Inject
	PlayerEJB playerEJB;
	
	@BeforeAll
	public static void initTest() {
		final PlayerInventoryDB playerInventory = CDI.current().select(PlayerInventoryDB.class).get();
		playerInventory.addItems(ItemsListDB.ITEMS[0]);
		playerInventory.addItems(ItemsListDB.ITEMS[1]);
		playerInventory.addItems(ItemsListDB.ITEMS[32]);
	}
	
	@Test
	public void testEquipedWeapon() {
		final ItemDTO weapon = playerInventory.getEquipedWeapon();
		if (weapon == null)
			given()
					.when().get("/api/player/equiped-weapon")
					.then().statusCode(204);
		else
			given()
					.when().get("/api/player/equiped-weapon")
					.then().statusCode(200)
					.body("id", equalTo(weapon.getId()));
		
	}
	
	@Test
	public void testEquipedArmor() {
		final ItemDTO armor = playerInventory.getEquipedArmor();
		if (armor == null)
			given()
					.when().get("/api/player/equiped-armor")
					.then().statusCode(204);
		else
			given()
					.when().get("/api/player/equiped-armor")
					.then().statusCode(200)
					.body("id", equalTo(armor.getId()));
	}
	
	@Test
	public void testEquipedTalisman() {
		playerInventory.setEquipedTalisman(null);
		final ItemDTO talisman = ItemsListDB.ITEMS[32];
		given()
				.when().get("/api/player/equiped-talisman")
				.then().statusCode(204);
		
		playerInventory.setEquipedTalisman(talisman);
		given()
				.when().get("/api/player/equiped-talisman")
				.then().statusCode(200)
				.body("id", equalTo(talisman.getId()));
	}
	
	@Test
	public void testInventory() {
		final List<ItemDTO> items = playerInventory.getItems();
		final List<ItemDTO> restItems = given()
				.when().get("/api/player/inventory")
				.then().statusCode(200)
				.extract().response().jsonPath().getList(".", ItemDTO.class);
		
		System.out.println(restItems);
		
		assertEquals(items.size(), restItems.size());
		assertEquals(items.get(0).getId(), restItems.get(0).getId());
		IntStream
				.range(0, items.size())
				.forEach(idx -> assertTrue(items.get(idx).getId() == restItems.get(idx).getId()));
	}
	
	@Test
	public void testGold() {
		playerInventory.setGold(0L);
		given()
				.when().get("/api/player/gold")
				.then().statusCode(200)
				.body(is("0"));
		playerInventory.setGold(10L);
		given()
				.when().get("/api/player/gold")
				.then().statusCode(200)
				.body(is(Long.toString(playerInventory.getGold())));
	}
	
	@Test
	public void testPathStep() {
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
		given()
				.when().get("/api/player/current-step")
				.then().statusCode(200)
				.body("number", equalTo(adventureStats.getCurrentStep().getNumber()));
		
		
		given()
				.when().get("/api/player/increase-step")
				.then().statusCode(204);
		
		given()
				.when().get("/api/player/current-step")
				.then().statusCode(200)
				.body("number", equalTo(adventureStats.getCurrentStep().getNumber()));
	}
	
	@Test
	public void testHealth() {
		int health = 2;
		adventureStats.setPlayerHealth(health);
		given()
				.when().get("/api/player/decrease-health")
				.then().statusCode(204);
		assertEquals(adventureStats.getPlayerHealth(), health-1);
		given()
				.when().get("/api/adventure/player-health")
				.then().statusCode(200)
				.body(is(Integer.toString(health-1)));
		
		
		given()
				.when().get("/api/player/increase-health")
				.then().statusCode(204);
		assertEquals(adventureStats.getPlayerHealth(), health);
		given()
				.when().get("/api/adventure/player-health")
				.then().statusCode(200)
				.body(is(Integer.toString(health)));
		
	}
	
}
