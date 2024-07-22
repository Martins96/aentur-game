package com.lucamartinelli.aentur.testing;

import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import com.lucamartinelli.aentur.persistence.ItemsListDB;
import com.lucamartinelli.aentur.persistence.PlayerInventoryDB;
import com.lucamartinelli.aentur.vo.ItemDTO;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.enterprise.inject.spi.CDI;
import jakarta.inject.Inject;

@QuarkusTest
public class ShopTest {
	
	@Inject
	PlayerInventoryDB playerInventory;
	
	@BeforeAll
	public static void initTest() {
		final PlayerInventoryDB playerInventory = CDI.current().select(PlayerInventoryDB.class).get();
		playerInventory.setItems(new ArrayList<ItemDTO>(3));
		playerInventory.addItems(ItemsListDB.getById(0));
		playerInventory.addItems(ItemsListDB.getById(1));
		playerInventory.addItems(ItemsListDB.getById(32));
		playerInventory.setGold(50L);
	}
	
	@Test
	public void testBuySell() {
		testBuySellInternal(ItemsListDB.getById(32));
		testBuySellInternal(ItemsListDB.getById(1));
		testBuySellInternal(ItemsListDB.getById(0));
	}
	
	private void testBuySellInternal(ItemDTO itemTest) {
		
		final int initialInventorySize = playerInventory.getItems().size();
		final long initialGold = playerInventory.getGold();
		
		
		given()
			.when().post("/api/shop/sell/"+itemTest.getId()).then().statusCode(204);
		
		assertTrue( playerInventory.getItems().size() == (initialInventorySize - 1));
		final int goldGain = itemTest.getGoldValue() / 2;
		assertTrue( playerInventory.getGold() == (initialGold + goldGain) );
		assertThat( playerInventory.getItems(), not(hasItem(itemTest)));
		
		
		given()
			.when().post("/api/shop/buy/"+itemTest.getId()).then().statusCode(204);
		
		assertThat( playerInventory.getItems().size(), equalTo(initialInventorySize) );
		assertTrue( playerInventory.getGold() == (initialGold - goldGain) );
		assertThat( playerInventory.getItems(), hasItem(itemTest));

	}
	
	@Test
	public void testMerchantItems() {
		given()
				.when().get("/api/shop/items")
				.then().statusCode(200)
				.body(not(empty()));
	}
	
	
	
}
