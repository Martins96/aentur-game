package com.lucamartinelli.aentur.persistence;

import com.lucamartinelli.aentur.vo.DefenseDTO;

public class MonsterDefencesListDB {
	
	
	public static final DefenseDTO[] DEFENCES = new DefenseDTO[] {
			new DefenseDTO(0, "Punto Debole", "Noti una vecchia ferita nel mostro, sembra un buon punto per un attacco, <br/><i>tira un D12, colpisci al 6+</i>"
					, 1, new String[] {"fisico"}),
			new DefenseDTO(1, "Pelliccia folta", "Il mostro ha un pelo molto folto, bisognera' colpire con forza per arrivare in profondit&agrave;, <br/><i>tira un D8, colpisci al 4+</i>", 
					1, new String[] {"pelle"}),
			new DefenseDTO(2, "Agile", "Il nemico ha una grande agilita', <br/><i>Tira un D6, con un 3+ sei piu' agile e colpisci</i>",
					1, new String[] {"agilita'"}),
			new DefenseDTO(3, "Pelle spessa", "La pelle del nemico sembra essere incredibilemnte spessa, farai fatica a perforarla, <br/><i>Tira un D12, perfori la pelle al 7+</i>", 
					2, new String[] {"pelle"}),
			new DefenseDTO(4, "Leggermente corazzato", "Il nemico indossa un'armatura leggera in cuoio e fibre resistenti, <br/><i>tira un D8, il tuo colpo supera l'armatura con un 4+</i>", 
					2, new String[] {"corazza"}),
			new DefenseDTO(5, "Molto Agile", "Il mostro &egrave; rapidissimo, non sara' semplice colpirlo, <br/><i>tira un D6, riesci a capire i suoi movimenti e colpisci al 4+</i>", 
					2, new String[] {"agilita'"}),
			new DefenseDTO(6, "Corazzato", "Il mostro ha una corazza, alcuni punti sono esposti, ma non sara' penetrarla, <br/><i>tira un D8, penetri la corazza al 5+</i>", 
					3, new String[] {"corazza"}),
			new DefenseDTO(7, "Stato brinato", "Il nemico e' ricoperto da un piccolo strato di ghiaccio, il tuo colpo potrebbe scivolare su di esso, <br/><i>Tira un D8, eviti lo scivolamento e colpisci al 4+</i>",
					1, new String[] {"elementale"}),
			new DefenseDTO(8, "Guscio di vapore", "Il nemico e' avvolto da una nume di vapore, come se fosse dentro un guscio, <br/><i>tira un D12, trovi il punto da colpire nel vapore al 6+</i>", 
					1, new String[] {"elementale"}),
			new DefenseDTO(9, "Pelle d'acqua", "Il nemico e' fatto d'acqua al posto di pelle, riesci ad intravedere gli organi interni da colpire, <br/><i>tira un D6, trovi e colpisci l'organo al 3+</i>", 
					1, new String[] {"elementale"}),
			new DefenseDTO(10, "Semplice vestaglia", "Il nemico non indossa nessuna armatura speciale, <br/><i>tira un D6, colpisci al 3+</i>", 
					1, new String[] {"corazza"}),
			new DefenseDTO(11, "Pelle a piccole scaglie", "La pelle del nemico sembra essere leggermente spessa, farai fatica a perforarla, <br/><i>Tira un D12, perfori la pelle al 6+</i>", 
					1, new String[] {"pelle"}),
			new DefenseDTO(12, "Corazza di fango", "Il nemico e' ricoperto da fango, <br/><i>tira un D10, colpisci ingorando il fango al 4+</i>", 
					1, new String[] {"elementale"}),
			new DefenseDTO(13, "Lento", "Il nemico e' incredibilmente lento, puoi sfruttarlo a tuo vantaggio, <br/><i>Tira un D6, con un 3+ sei agile e colpisci</i>", 
					1, new String[] {"agilita'"}),
			new DefenseDTO(14, "Bariera magica minore", "Il nemico e' ricoperto da una bariera magica di basso livello, ma comunque di protezione,<br/><i>tira un D12, trovi il punto da colpire nel vapore al 6+</i>",
					1, new String[] {"magia"}),
			new DefenseDTO(15, "Viscido", "Il nemico ha un leggero strato viscido sulla pelle,<br/><i>Tira un D10, con un 4+ sei agile e colpisci</i>", 
					1, new String[] {"elementale"}),
			new DefenseDTO(16, "Bariera magica maggiore", "Il nemico e' ricoperto da una bariera magica di buon livello,<br/><i>tira un D12, trovi il punto da colpire nel vapore al 7+</i>", 
					2, new String[] {"magia"}),
			new DefenseDTO(17, "Scivoloso", "Il nemico ha un grosso strato viscido sulla pelle,<br/><i>Tira un D10, con un 5+ sei agile e colpisci</i>", 
					2, new String[] {"elementale"}),
			new DefenseDTO(18, "Corazza rocciosa", "Il nemico e' ricoperto da fango duro, <br/><i>tira un D10, colpisci ingorando il fango al 5+</i>", 
					2, new String[] {"elementale"}),
			new DefenseDTO(19, "Pelle di fuoco", "Il nemico e' avvolto da una nume di fuoco, come se fosse dentro un guscio infuocato, <br/><i>tira un D12, trovi il punto da colpire nel vapore al 7+</i>", 
					2, new String[] {"elementale"}),
			new DefenseDTO(20, "Pelle a squame", "La pelle del nemico sembra essere spessa e ricoperta da squame, farai fatica a perforarla, <br/><i>Tira un D12, perfori la pelle al 67+</i>", 
					2, new String[] {"fisico"}),
			new DefenseDTO(21, "Illusoria", "Il nemico e' cosi' rapido che sembra essere doppio,<br/><i>Tira un D4, con un 3+ sei agile e non ti fai ingannare</i>", 
					3, new String[] {"agilita'"}),
			new DefenseDTO(22, "nome", "eff", 
					1, new String[] {}),
			new DefenseDTO(23, "nome", "eff", 
					1, new String[] {})
	};
	
}
