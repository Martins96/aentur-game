package com.lucamartinelli.aentur.persistence;

import java.util.Map;

public class EventListDB {
	
	public static final Map<String, int[]> eventList = Map.ofEntries(
			Map.entry("dw", new int[] {1,2,3,4,5}),
			Map.entry("il", new int[] {6,7,8,9,10}),
			Map.entry("fm", new int[] {15,16,17,18}),
			Map.entry("fv", new int[] {23}),
			Map.entry("cc", new int[] {19, 20, 21, 22}),
			Map.entry("hd", new int[] {11,12,13,14})
	);
	
	
}
