package com.lucamartinelli.aentur.testing;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

import com.lucamartinelli.aentur.persistence.AdventureStatsDB;
import com.lucamartinelli.aentur.vo.StepDTO;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;

@QuarkusTest
public class LocationTest {
	
	@Inject
	AdventureStatsDB adventureStats;
	
	@Test
	public void testPath() {
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
		final StepDTO initStep = adventureStats.getCurrentStep();
		assertTrue(initStep.getNumber() == 1);
		
		given()
				.when().get("/api/location/increase-step-path")
				.then().statusCode(204);
		final StepDTO secondStep = adventureStats.getCurrentStep();
		assertTrue(secondStep.getNumber() == 2);
		
		given()
				.when().get("/api/location/increase-step-path")
				.then().statusCode(204);
		final StepDTO thirdStep = adventureStats.getCurrentStep();
		assertTrue(thirdStep.getNumber() == 3);
		
		given()
				.when().get("/api/location/reset-adventure-stats")
				.then().statusCode(204);
		final StepDTO resetStep = adventureStats.getCurrentStep();
		assertEquals(initStep, resetStep);
	}

}
