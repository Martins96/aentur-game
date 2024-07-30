package com.lucamartinelli.aentur.testing;

import org.junit.jupiter.api.Test;

import com.lucamartinelli.aentur.languagecontent.ResolveContentsUtils;
import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.persistence.BossListDB;
import com.lucamartinelli.aentur.vo.BossDTO;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.Matchers.greaterThan;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@QuarkusTest
public class BossTest {

	@Inject
	AdventureStatsDB adventureDB;

	@Test
	public void testByLocationEndpoint() {
		final List<String> locations = Arrays.asList("iceland", 
				"darkwood", "frozenmountains", "flamevolcano", "hottendesert");
		locations.forEach(BossTest::testByLocationEndpointInternal);
	}

	private static void testByLocationEndpointInternal(String location) {
		BossDTO bossDto = BossListDB.BOSSES.get(location);
		bossDto = ResolveContentsUtils.resolveLabels(bossDto);
		given()
				.when().get("/api/boss/get-by-location/" + location)
				.then().statusCode(200)
				.body("name", equalTo(bossDto.getName()))
				.body("id", equalTo(bossDto.getId()));
	}

	@Test
	public void testHealthEndpoint() throws IOException {
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
		given()
				.when().get("/api/boss/init/darkwood")
				.then().statusCode(200);
		
		given()
				.when().get("/api/boss/is-success")
				.then().statusCode(200).body(is("false"));
		given()
				.when().get("/api/boss/is-failed")
				.then().statusCode(200).body(is("false"));
		adventureDB.setCurrentBossHealth(0);
		given()
				.when().get("/api/boss/is-success")
				.then().statusCode(200).body(is("true"));
		given()
				.when().get("/api/boss/health")
				.then().statusCode(200).body(is("0"));
		adventureDB.setPlayerHealth(0);
		given()
				.when().get("/api/boss/is-failed")
				.then().statusCode(200).body(is("true"));
	}
	
	@Test
	public void testRewardEndpoint() throws IOException {
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
		given()
				.when().get("/api/boss/init/iceland")
				.then().statusCode(200);
		
		given()
				.when().get("/api/boss/reward")
				.then().statusCode(204);
		adventureDB.setCurrentBossHealth(0);
		given()
				.when().get("/api/boss/reward")
				.then().statusCode(200)
				.body("gold", greaterThan(0))
				.body("item", notNullValue());
	}
	
	@Test
	public void testActionsEndpoint() throws IOException {
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
		given()
				.when().get("/api/boss/init/frozenmountains")
				.then().statusCode(200);
		given()
				.when().contentType("application/json").body("10")
				.post("/api/boss/action")
				.then().statusCode(200);
		given()
				.when().contentType("application/json").body("20")
				.post("/api/boss/action")
				.then().statusCode(200);
		given()
				.when().contentType("application/json").body("30")
				.post("/api/boss/action")
				.then().statusCode(204);
		
		given()
				.when().get("/api/boss/init/hottendesert")
				.then().statusCode(200);
		given()
				.when().contentType("application/json").body("10")
				.post("/api/boss/action")
				.then().statusCode(200);
		given()
				.when().contentType("application/json").body("20")
				.post("/api/boss/action")
				.then().statusCode(200);
		given()
				.when().contentType("application/json").body("30")
				.post("/api/boss/action")
				.then().statusCode(204);
		
	}
	

}
