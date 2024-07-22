package com.lucamartinelli.aentur.persistence;

import java.util.Map;

import com.lucamartinelli.aentur.vo.BossDTO;

public final class BossListDB {
	
	public static final Map<String, BossDTO> BOSSES = Map.ofEntries(
			Map.entry("darkwood", new BossDTO(0, "darkwood", "boss.dw.name", 
					"boss.dw.description",
					new int[] {0,1,2,3,4,5})),
			Map.entry("iceland", new BossDTO(1, "iceland", "Linnorm dei Ghiacci",
					"boss.il.description",
					new int[] {0,5,6,7,8,9,10})),
			Map.entry("frozenmountains", new BossDTO(2, "frozenmountain", "boss.fm.name", 
					"boss.fm.description",
					new int[] {0,1,5,10,11,12})),
			Map.entry("flamevolcano", new BossDTO(3, "flamevolcano", "boss.fv.name",
					"boss.fv.description",
					new int[] {1,2,3,9,11,13})),
			Map.entry("crimsoncave", new BossDTO(4, "crimsoncave", "boss.cc.name",
					"boss.cc.description",
					new int[] {5,9,10,13,14,15})),	
			Map.entry("hottendesert", new BossDTO(5, "hottendesert", "boss.hd.name",
					"boss.hd.description",
					new int[] {0,2,7,9,11}))
			);
	
	
	
	public static BossDTO getById(int id) {
		return BOSSES.values()
				.stream()
				.filter(e -> e.getId() == id)
				.findFirst()
				.orElseGet(null);
	}
	
}
