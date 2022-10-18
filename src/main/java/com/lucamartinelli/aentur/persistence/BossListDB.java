package com.lucamartinelli.aentur.persistence;

import java.util.Map;

import com.lucamartinelli.aentur.vo.BossDTO;

public final class BossListDB {
	
	public static final Map<String, BossDTO> BOSSES = Map.of(
			"darkwood", new BossDTO(0, "darkwood", "Fomoriano", 
					"Erano un popolo di semidei, hanno corpo umanoide orribilmente deformato da un'antica maledizione "
					+ "Le calvizie erano relativamente comuni tra i Fomori di entrambi i sessi, sebbene alcuni fossero "
					+ "noti per avere chiazze sparse di capelli resistenti come fili di ferro.<br/>"
					+ "Non c'era un singolo odore ad essi associato: alcuni erano completamente inodore, mentre altri"
					+ " avevano un forte odore a causa dell'iperattivita' delle ghiandole sudoripare.<br/>"
					+ "I Fomoriani erano noti per essere creature molto caotiche allineate al male, "
					+ "avide e sleali per natura.<br/>"
					+ "I Fomori un tempo erano una razza incredibilmente bella, il piu' bello di tutti i giganti. "
					+ "In quel periodo vissero nella Selva Fatata e furono alleati con gli elfi del piano.<br/>"
					+ "Tuttavia, nel corso del tempo, i cuori dei Fomori furono contorti da una brama di potere"
					+ " e magia che li spinse a tentare di conquistare la Selva Fatata. "
					+ "Hanno cercato di schiavizzare i suoi abitanti e prendere la loro magia per se stessi. "
					+ "I folletti alla fine reagirono contro di loro e sottoposero la loro razza a una maledizione. "
					+ "Questo ha deformato i loro corpi per riflettere il male nei loro cuori e li ha derubati "
					+ "delle loro capacita' magiche.",
					new int[] {0,1,2,3,4,5}),
			"iceland", new BossDTO(1, "iceland", "Linnorm dei Ghiacci",
					"Un mostro enorme simile ad un serpente con la testa di drago si alza, facendo cadere cumuli "
					+ "di neve e ghiaccio dai fianchi delle sue spire. <br/>"
					+ "Il linnorm di ghiaccio dimora tra crepacci glaciali, in cima a cime montuose battute dal vento "
					+ "o all'interno di caverne scintillanti scavate nel cuore del piu' potente degli iceberg, sono "
					+ "privi di ali e arti posteriori. I racconti parlano di scalatori che si arrampicano "
					+ "inconsapevolmente sui fianchi di un linnorm di ghiaccio arrotolato "
					+ "attorno a una montagna, solo per trovare la morte per le sue zanne e artigli in cima "
					+ "alla loro meta.<br/>"
					+ "Queste creature erano generalmente conosciute per essere crudeli, odiose e "
					+ "molto dispettose. Raramente rispettavano gli accordi. Non sono "
					+ "mai stati ritenuti capaci di mostrare segni di compassione o empatia.<br/>"
					+ "Alcuni studiosi credono che i linnorm siano serpenti minori che si sono evoluti da "
					+ "un antenato comune ai draghi. In genere sanno come parlare abissale oltre che al draconico.",
					new int[] {0,5,6,7,8,9,10}),
			"frozenmountains", new BossDTO(2, "frozenmountain", "Yeti", 
					"A differenza del bigfoot, gli yeti sono camminatori completamente bipedi e camminano in modo "
					+ "molto simile agli umani. La loro faccia e' anche molto piu' umana di quella di un bigfoot. E'"
					+ " un carnivoro completo, che si nutre di cuccioli di leopardo delle nevi, umani, uova di "
					+ "uccelli e lepri delle nevi.<br/>"
					+ "Vivono nei territori nevosi e dal clima rigido, attaccando i viaggiatori. Nonostante la "
					+ "mole sono silenziosi cacciatori, in grado di sfruttare l'ambiente circostante.<br/>"
					+ "Sebbene l'aspetto selvaggio, possedevano una spiccata intelligenza e furbizia, "
					+ "tanto che si dice che alcuni esemplari si travestissero da esseri umani per infiltrarsi "
					+ "nei villaggi o tra i ranghi degli eserciti.",
					new int[] {0,1,5,10,11,12}),
			"flamevolcano", new BossDTO(3, "flamevolcano", "Balor",
					"I Balor sono i signori delle Isole Ebridi, incarnano le forze negative del male. I Balor "
					+ "erano imponenti figure umanoidi che erano alte circa 3,7 metri e pesavano 2.000 chilogrammi. "
					+ "Una potente aura di oscurita' avvolgeva le loro forme grottesche, mentre la loro pelle rosso "
					+ "intenso era avvolta da fiamme abbaglianti.<br/>"
					+ "Sebbene fossero naturalmente armati con zanne velenose e artigli spaventosi, erano "
					+ "normalmente armati anche con una spada di fulmine e una frusta di fuoco a piu' code.<br/>"
					+ "Quando combattevano frontalmente, i Balor si concentravano incessantemente su un avversario "
					+ "alla volta. Le loro fruste fiammeggianti avevano la coda che terminava con ganci, punte e "
					+ "palline, consentendo loro di attirare facilmente quelli catturati da loro.<br/>"
					+ "In generale, i Balor erano esseri temuti che preferivano circondarsi di creature appena al di "
					+ "sotto del proprio potere piuttosto che deboli o eguali. Mentre due balor possono "
					+ "occasionalmente fare squadra, qualsiasi alleanza normalmente si rompe dopo che e' trascorso un "
					+ "po' di tempo a causa della loro naturale competitivita'.",
					new int[] {1,2,3,9,11,13}),
			"", new BossDTO()	
			);
	
	
	
	public static BossDTO getById(int id) {
		return BOSSES.values()
				.stream()
				.filter(e -> e.getId() == id)
				.findFirst()
				.orElseGet(null);
	}
	
}
