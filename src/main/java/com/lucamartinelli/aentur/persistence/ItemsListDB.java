package com.lucamartinelli.aentur.persistence;

import com.lucamartinelli.aentur.vo.ItemDTO;

public class ItemsListDB {
	
	public static final ItemDTO[] ITEMS = new ItemDTO[] {
			new ItemDTO(0, "Vecchia spada", ItemCategory.WEAPON, "Nessun effetto", 1, true, 4),
			new ItemDTO(1, "Vertiti cittadini", ItemCategory.ARMOR, "Nessun effetto", 1, true, 2),
			new ItemDTO(2, "Pugnale", ItemCategory.WEAPON, "Puoi ritirare 1 volta il dado se il risulatato attuale e' dispari", 2, true, 4),
			new ItemDTO(3, "Vecchia ascia", ItemCategory.WEAPON, "Aggiungi 1 al dado se il risultato tirato e' dispari", 2, true, 8),
			new ItemDTO(4, "Vecchia clava chiodata", ItemCategory.WEAPON, "Aggiungi 1 al dado se il risultato tirato e' pari", 2, true, 8),
			new ItemDTO(5, "Mazza", ItemCategory.WEAPON, "Aggiungi 1 al dado", 3, true, 14),
			new ItemDTO(6, "Bastone da mago", ItemCategory.WEAPON, "Rilancia fino a 2 volte il dato se il risultato e' sotto la meta', tieni l'ultimo risultato", 3, true, 20),
			new ItemDTO(7, "Antico bastone magico", ItemCategory.WEAPON, "Tira 2 volte il dado, scegli il risultato migliore tra i due", 4, false, 30),
			new ItemDTO(8, "Spadone elfico", ItemCategory.WEAPON, "Aggiungi 2 al dado se il risultato tirato e' pari", 4, false, 20),
			new ItemDTO(9, "Martello in ottone", ItemCategory.WEAPON, "Aggiungi 2 al dado se il risultato tirato e' dispari", 4, false, 20),
			new ItemDTO(10, "Arco tibale", ItemCategory.WEAPON, "Ruota il dado e prendi il valore della faccia opposta a quella tirata", 5, false, 30),
			new ItemDTO(11, "Grande ascia del drago", ItemCategory.WEAPON, "Aggiungi 2 al risultato del dado", 6, false, 30),
			new ItemDTO(12, "Spada della luna piena", ItemCategory.WEAPON, "Aggiungi 3 al dado se il risultato e' sotto la meta'", 6, false, 34),
			new ItemDTO(13, "Arco a carrucole", ItemCategory.WEAPON, "Tira 3 volte il dado, scegli il risultato migliore tra i tre", 6, false, 50),
			new ItemDTO(14, "Scettro fatato", ItemCategory.WEAPON, "Rilancia fino a 4 volte il dado, tieni l'ultimo risultato", 6, false, 42),
			new ItemDTO(15, "Lama del ghiaccio", ItemCategory.WEAPON, "Lancia 4 volte il dato, tieni il risultato dispari migliore", 7, false, 60),
			new ItemDTO(16, "Lancia fiammante", ItemCategory.WEAPON, "Lancia 4 volte il dato, tieni il risultato pari migliore", 7, false, 60),
			new ItemDTO(17, "Giacca in stoffa imbottita", ItemCategory.ARMOR, "Aggiungi 1 al dado se il risultato tirato e' dispari", 2, true, 8),
			new ItemDTO(18, "Armatura in pelliccia", ItemCategory.ARMOR, "Aggiungi 1 al dado se il risultato tirato e' pari", 2, true, 8),
			new ItemDTO(19, "Busto in pelle", ItemCategory.ARMOR, "Puoi ritirare 1 volta il dado se il risulatato attuale e' dispari", 2, true, 4),
			new ItemDTO(20, "Armatura in pelle", ItemCategory.ARMOR, "Aggiungi 1 al dado", 3, true, 14),
			new ItemDTO(21, "Armatura borchiata", ItemCategory.ARMOR, "Rilancia fino a 2 volte il dato se il risultato e' sotto la meta', tieni l'ultimo risultato", 3, false, 20),
			new ItemDTO(22, "Cotta di maglia", ItemCategory.ARMOR, "Tira 2 volte il dado, scegli il risultato migliore tra i due", 4, false, 30),
			new ItemDTO(23, "Busto in ferro", ItemCategory.ARMOR, "Aggiungi 2 al dado se il risultato tirato e' pari", 4, false, 20),
			new ItemDTO(24, "Giacca in piastre di ferro", ItemCategory.ARMOR, "Aggiungi 2 al dado se il risultato tirato e' dispari", 4, false, 20),
			new ItemDTO(25, "Veste del mago sacro", ItemCategory.ARMOR, "Ruota il dado e prendi il valore della faccia opposta a quella tirata", 5, false, 30),
			new ItemDTO(26, "Busto in acciaio", ItemCategory.ARMOR, "Aggiungi 2 al risultato del dado", 6, false, 30),
			new ItemDTO(27, "Mantella di magia nera", ItemCategory.ARMOR, "Aggiungi 3 al dado se il risultato e' sotto la meta'", 6, false, 34),
			new ItemDTO(28, "Armatura in acciaio", ItemCategory.ARMOR, "Tira 3 volte il dado, scegli il risultato migliore tra i tre", 6, false, 50),
			new ItemDTO(29, "Armatura in Mithril", ItemCategory.ARMOR, "Rilancia fino a 4 volte il dado, tieni l'ultimo risultato", 6, false, 42),
			new ItemDTO(30, "Corazza del tuono", ItemCategory.ARMOR, "Lancia 4 volte il dato, tieni il risultato dispari migliore", 7, false, 60),
			new ItemDTO(31, "Corazza del re oscuro", ItemCategory.ARMOR, "Lancia 4 volte il dato, tieni il risultato pari migliore", 7, false, 60),
			new ItemDTO(32, "Orecchini del sordo", ItemCategory.TALISMAN, "<i>suono</i>,<br/> Aggiungi 1 al risultato del dado", 3, true, 6),
			new ItemDTO(33, "Anello di ferro", ItemCategory.TALISMAN, "<i>fisico</i>,<br/>Aggiungi 1 se il risultato e' sotto la meta'", 3, true, 8),
			new ItemDTO(34, "Collana in acciaio", ItemCategory.TALISMAN, "<i>fisico</i>,<br/>Aggiungi 1 se il risultato e' pari", 4, true, 16),
			new ItemDTO(35, "Anello d'acciaio", ItemCategory.TALISMAN, "<i>fisico</i>,<br/>Aggiungi 1 se il risultato se e' dispari", 4, true, 16),
			new ItemDTO(36, "Anello granscudo", ItemCategory.TALISMAN, "<i>fisico</i>,<br/>Aggiungi 1 al dado", 8, false, 30),
			new ItemDTO(37, "Anello del vento", ItemCategory.TALISMAN, "<i>elementale</i>,<br/>Aggiungi 1 se il risultato e' sotto la meta", 3, true, 6),
			new ItemDTO(38, "Orecchini del fuoco", ItemCategory.TALISMAN, "<i>elementale</i>,<br/>Aggiungi 1 se il risultato e' pari", 4, true, 14),
			new ItemDTO(39, "Orecchini dell'acqua", ItemCategory.TALISMAN, "<i>elementale</i>,<br/>Aggiungi 1 se il risultato e' dispari", 4, true, 14),
			new ItemDTO(40, "Collana madre natura", ItemCategory.TALISMAN, "<i>elementale</i>,<br/>Aggiungi 1 al dado", 7, false, 28),
			new ItemDTO(41, "Anello di magia minore", ItemCategory.TALISMAN, "<i>magia</i>,<br/>Aggiungi 1 se il risultato e' sotto la meta", 3, true, 8),
			new ItemDTO(42, "Orecchini di magia bianca", ItemCategory.TALISMAN, "<i>magia</i>,<br/>Aggiungi 1 se il risultato e' pari", 4, true, 16),
			new ItemDTO(43, "Orecchini di magia nera", ItemCategory.TALISMAN, "<i>magia</i>,<br/>Aggiungi 1 se il risultato e' dispari", 4, true, 16),
			new ItemDTO(44, "Anello dell'arcimago", ItemCategory.TALISMAN, "<i>magia</i>,<br/>Aggiungi 1 al dado", 7, false, 30),
			new ItemDTO(45, "Orecchini piuma di uccello", ItemCategory.TALISMAN, "<i>agilita'</i>,<br/>Aggiungi 1 se il risultato e' sotto la meta", 3, true, 6),
			new ItemDTO(46, "Collana della brezza rapida", ItemCategory.TALISMAN, "<i>agilita'</i>,<br/>Aggiungi 1 se il risultato e' pari", 4, true, 14),
			new ItemDTO(47, "Collana dello scout tribale", ItemCategory.TALISMAN, "<i>agilita'</i>,<br/>Aggiungi 1 se il risultato e' dispari", 4, true, 14),
			new ItemDTO(48, "Anello del serpente veloce", ItemCategory.TALISMAN, "<i>agilita'</i>,<br/>Aggiungi 1 al dado", 6, false, 26),
			new ItemDTO(49, "Anello della perforazione minore", ItemCategory.TALISMAN, "<i>corazza</i>,<br/>Aggiungi 1 se il risultato e' sotto la meta", 4, true, 10),
			new ItemDTO(50, "Collana della perforazione maggiore", ItemCategory.TALISMAN, "<i>corazza</i>,<br/>Aggiungi 1 al dado", 5, false, 26),
			
			
	};
	
	
}
