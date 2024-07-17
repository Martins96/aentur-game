package com.lucamartinelli.aentur.testing;

import java.io.IOException;
import java.util.Optional;

import org.junit.jupiter.api.Test;

import com.lucamartinelli.aentur.ejb.LabelTextContentEJB;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;

@QuarkusTest
public class ContentLabelTest {
	
	@Inject
	LabelTextContentEJB ltcEJB;
	
	@Test
	public void testLoadProperty() throws IOException {
		ltcEJB.getContent("", Optional.of("it"));
	}
	
	
	
	
}
