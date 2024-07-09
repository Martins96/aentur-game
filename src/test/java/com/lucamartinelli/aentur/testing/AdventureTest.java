package com.lucamartinelli.aentur.testing;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;

import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class AdventureTest {
	
	@Inject
	AdventureStatsDB adventureStats;
	
	@BeforeEach
	public void testPath() {
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
	}
	
	
	
	@Test
	public void testPlayerHealth() {
		given()
				.when().get("/api/adventure/player-health")
				.then().statusCode(200)
				.body(is(Integer.toString(adventureStats.getPlayerHealth())));
	}
	
	@Test
	public void testMonsterHealth() {
		given()
				.when().get("/api/adventure/monster-health")
				.then().statusCode(200)
				.body(is(Integer.toString(adventureStats.getCurrentMonsterHealth())));
	}
	
	@Test
	public void testBossHealth() {
		given()
				.when().get("/api/adventure/boss-health")
				.then().statusCode(200)
				.body(is(Integer.toString(adventureStats.getCurrentBossHealth())));
	}
	
	@Test
	public void testFailed() {
		adventureStats.setPlayerHealth(1);
		given()
				.when().get("/api/adventure/isfailed")
				.then().statusCode(200)
				.body(is("false"));
		adventureStats.setPlayerHealth(0);
		given()
				.when().get("/api/adventure/isfailed")
				.then().statusCode(200)
				.body(is("true"));
		adventureStats.setPlayerHealth(3);
		given()
				.when().get("/api/adventure/isfailed")
				.then().statusCode(200)
				.body(is("false"));
	}
	
	@Test
	public void testSuccess() {
		adventureStats.setCurrentMonsterHealth(1);
		given()
				.when().get("/api/adventure/issuccess")
				.then().statusCode(200)
				.body(is("false"));
		adventureStats.setCurrentMonsterHealth(0);
		given()
				.when().get("/api/adventure/issuccess")
				.then().statusCode(200)
				.body(is("true"));
		adventureStats.setCurrentMonsterHealth(3);
		given()
				.when().get("/api/adventure/issuccess")
				.then().statusCode(200)
				.body(is("false"));
	}
	
	
}
