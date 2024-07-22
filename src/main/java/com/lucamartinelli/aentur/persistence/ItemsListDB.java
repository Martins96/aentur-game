package com.lucamartinelli.aentur.persistence;

import java.util.Arrays;

import com.lucamartinelli.aentur.vo.ItemDTO;

public class ItemsListDB {
	
	private static final ItemDTO[] ITEMS = new ItemDTO[] {
			new ItemDTO(0, "item.name.oldsword", ItemCategory.WEAPON, "item.effect.noeffect", 1, true, 4),
			new ItemDTO(1, "item.name.dagger", ItemCategory.ARMOR, "item.effect.noeffect", 1, true, 2),
			new ItemDTO(2, "item.name.cityclothes", ItemCategory.WEAPON, "item.effect.withdraw1odd", 2, true, 4),
			new ItemDTO(3, "item.name.oldaxe", ItemCategory.WEAPON, "item.effect.plus1odd", 2, true, 8),
			new ItemDTO(4, "item.name.oldclub", ItemCategory.WEAPON, "item.effect.plus1even", 2, true, 8),
			new ItemDTO(5, "item.name.mace", ItemCategory.WEAPON, "item.effect.plus1", 3, true, 14),
			new ItemDTO(6, "item.name.magerod", ItemCategory.WEAPON, "item.effect.withdraw2underhalf", 3, true, 20),
			new ItemDTO(7, "item.name.ancientrod", ItemCategory.WEAPON, "item.effect.withdraw2pickmajor", 4, false, 30),
			new ItemDTO(8, "item.name.elvsword", ItemCategory.WEAPON, "item.effect.plus2even", 4, false, 20),
			new ItemDTO(9, "item.name.brasshammer", ItemCategory.WEAPON, "item.effect.plus2odd", 4, false, 20),
			new ItemDTO(10, "item.name.tribalbow", ItemCategory.WEAPON, "item.effect.rotatedice", 5, false, 30),
			new ItemDTO(11, "item.name.bigdragonaxe", ItemCategory.WEAPON, "item.effect.plus2", 6, false, 30),
			new ItemDTO(12, "item.name.fullmoonsword", ItemCategory.WEAPON, "item.effect.plus3underhalf", 6, false, 34),
			new ItemDTO(13, "item.name.pulleybow", ItemCategory.WEAPON, "item.effect.withdraw3takebest", 6, false, 50),
			new ItemDTO(14, "item.name.fairyscepter", ItemCategory.WEAPON, "item.effect.withdraw4takelast", 6, false, 42),
			new ItemDTO(15, "item.name.iceblade", ItemCategory.WEAPON, "item.effect.roll4takeodd", 7, false, 60),
			new ItemDTO(16, "item.name.firespear", ItemCategory.WEAPON, "item.effect.roll4takeeven", 7, false, 60),
			new ItemDTO(17, "item.name.paddedjacket", ItemCategory.ARMOR, "item.effect.plus1odd", 2, true, 8),
			new ItemDTO(18, "item.name.furarmor", ItemCategory.ARMOR, "item.effect.plus1even", 2, true, 8),
			new ItemDTO(19, "item.name.leatherbust", ItemCategory.ARMOR, "item.effect.withdrawodd", 2, true, 4),
			new ItemDTO(20, "item.name.leatherarmor", ItemCategory.ARMOR, "item.effect.plus1", 3, true, 14),
			new ItemDTO(21, "item.name.studdedarmor", ItemCategory.ARMOR, "item.effect.withdraw2underhalf", 3, false, 20),
			new ItemDTO(22, "item.name.chainmail", ItemCategory.ARMOR, "item.effect.withdraw2pickmajor", 4, false, 30),
			new ItemDTO(23, "item.name.ironbust", ItemCategory.ARMOR, "item.effect.plus2even", 4, false, 20),
			new ItemDTO(24, "item.name.ironplatejacket", ItemCategory.ARMOR, "item.effect.plus2odd", 4, false, 20),
			new ItemDTO(25, "item.name.holymagevest", ItemCategory.ARMOR, "item.effect.rotatedice", 5, false, 30),
			new ItemDTO(26, "item.name.steelbust", ItemCategory.ARMOR, "item.effect.plus2", 6, false, 30),
			new ItemDTO(27, "item.name.blackmagiccape", ItemCategory.ARMOR, "item.effect.plus3underhalf", 6, false, 34),
			new ItemDTO(28, "item.name.steelarmor", ItemCategory.ARMOR, "item.effect.withdraw3takebest", 6, false, 50),
			new ItemDTO(29, "item.name.mithrilarmor", ItemCategory.ARMOR, "item.effect.withdraw4takelast", 6, false, 42),
			new ItemDTO(30, "item.name.thunderarmor", ItemCategory.ARMOR, "item.effect.roll4takeodd", 7, false, 60),
			new ItemDTO(31, "item.name.darkkingarmor", ItemCategory.ARMOR, "item.effect.roll4takeeven", 7, false, 60),
			new ItemDTO(32, "item.name.deafearrings", ItemCategory.TALISMAN, "item.effect.plus1sound", 3, true, 6),
			new ItemDTO(33, "item.name.ironring", ItemCategory.TALISMAN, "item.effect.plus1underhalfphysical", 3, true, 8),
			new ItemDTO(34, "item.name.steelnecklace", ItemCategory.TALISMAN, "item.effect.plus1evenphysical", 4, true, 16),
			new ItemDTO(35, "item.name.steelring", ItemCategory.TALISMAN, "item.effect.plus1oddphysical", 4, true, 16),
			new ItemDTO(36, "item.name.bigshieldring", ItemCategory.TALISMAN, "item.effect.plus1physical", 8, false, 30),
			new ItemDTO(37, "item.name.windring", ItemCategory.TALISMAN, "item.effect.plus1underhalfelemental", 3, true, 6),
			new ItemDTO(38, "item.name.fireearrings", ItemCategory.TALISMAN, "item.effect.plus1evenelemental", 4, true, 14),
			new ItemDTO(39, "item.name.waterearrings", ItemCategory.TALISMAN, "item.effect.plus1oddelemental", 4, true, 14),
			new ItemDTO(40, "item.name.mothernaturenecklace", ItemCategory.TALISMAN, "item.effect.plus1elemental", 7, false, 28),
			new ItemDTO(41, "item.name.minormagicring", ItemCategory.TALISMAN, "item.effect.plus1underhalfmagic", 3, true, 8),
			new ItemDTO(42, "item.name.whitemagicearrings", ItemCategory.TALISMAN, "item.effect.plus1evenmagic", 4, true, 16),
			new ItemDTO(43, "item.name.blackmagicearrings", ItemCategory.TALISMAN, "item.effect.plus1oddmagic", 4, true, 16),
			new ItemDTO(44, "item.name.archmagering", ItemCategory.TALISMAN, "item.effect.plus1magic", 7, false, 30),
			new ItemDTO(45, "item.name.featherearrings", ItemCategory.TALISMAN, "item.effect.plus1underhalfagility", 3, true, 6),
			new ItemDTO(46, "item.name.breezenecklace", ItemCategory.TALISMAN, "item.effect.plus1evenagility", 4, true, 14),
			new ItemDTO(47, "item.name.scoutnecklace", ItemCategory.TALISMAN, "item.effect.plus1offagility", 4, true, 14),
			new ItemDTO(48, "item.name.snakering", ItemCategory.TALISMAN, "item.effect.plus1agility", 6, false, 26),
			new ItemDTO(49, "item.name.minordrillring", ItemCategory.TALISMAN, "item.effect.plus1underhalfarmor", 4, true, 10),
			new ItemDTO(50, "item.name.majordrillring", ItemCategory.TALISMAN, "item.effect.plus1armor", 5, false, 26),
			
			
	};
	
	public static ItemDTO getById(int id) {
		return ITEMS[id].clone();
	}
	
	public static ItemDTO[] getAll() {
		return Arrays.asList(ITEMS).stream()
				.map(i -> i.clone())
				.toArray(size -> new ItemDTO[size]);
	}
	
	
}
