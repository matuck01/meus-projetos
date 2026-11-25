// Dados do deck. Pra mudar texto, cartas ou combos, é só editar aqui.
window.DECK = {
 "titulo": "ELVOS",
 "tag": "Deck verde",
 "comandante": "Marwyn, the Nurturer",
 "nomeCurto": "Marwyn",
 "genero": "f",
 "resumo": "Você comanda uma floresta cheia de elfos. Cada elfo que entra deixa a sua comandante, Marwyn, mais forte, e ela vira uma fábrica de mana. Com muito mana na mão, você joga tudo, cria um exército e atropela a mesa.",
 "archidekt": "https://archidekt.com/decks/6239284/elvos",
 "tema": {
  "red": "#2f7a34",
  "red2": [
   "#22612a",
   "#7fcf6a"
  ],
  "bg": [
   "#f3f7ee",
   "#0b130b"
  ],
  "ink": [
   "#122014",
   "#eaf3e6"
  ],
  "mut": [
   "#566656",
   "#a9bba6"
  ],
  "card": [
   "#fff",
   "#142014"
  ],
  "line": [
   "#d6e3cf",
   "#26382a"
  ],
  "alt": [
   "#e6efdd",
   "#111c11"
  ],
  "horde": "#10200f",
  "hline": "#26382a"
 },
 "icone": "<circle cx=\"20\" cy=\"20\" r=\"17\" fill=\"#2f7a34\"/><circle cx=\"20\" cy=\"20\" r=\"14\" fill=\"#9fd47f\"/><path d=\"M20 8 C28 14 28 24 20 32 C12 24 12 14 20 8Z\" fill=\"#1f5a24\"/><path d=\"M20 11 L20 30\" stroke=\"#9fd47f\" stroke-width=\"1.6\"/>",
 "terreno": "Um terreno por turno. Cada Floresta dá 1 mana verde, que é o dinheiro pra jogar as outras cartas.",
 "chefe": {
  "intro": "A Marwyn faz duas coisas: <strong>toda vez que entra outro elfo seu, ela ganha um marcador +1/+1</strong> (fica mais forte), e <strong>quando você vira ela, ela dá mana verde igual à força dela</strong>. Quanto mais elfo, mais mana (cada bolinha é 1 mana):",
  "fim": "E o deck tem um monte de carta que <strong>desvira</strong> a Marwyn, ou seja, dá pra usar ela de novo no mesmo turno e pegar o mana duas, três vezes. Por isso <strong>todo mundo vai querer matar a Marwyn</strong>."
 },
 "conta": [
  [
   1,
   "Só ela"
  ],
  [
   2,
   "+1 elfo"
  ],
  [
   4,
   "+3 elfos"
  ],
  [
   6,
   "+5 elfos"
  ],
  [
   12,
   "+ Timberwatch"
  ],
  [
   24,
   "+ desvirar"
  ]
 ],
 "turno": [
  [
   "Desvira tudo e compra uma carta",
   "Todas as suas cartas viradas voltam a ficar de pé."
  ],
  [
   "Joga um terreno",
   "Uma Floresta por turno. Quase sempre vale jogar."
  ],
  [
   "Turnos 1 e 2: elfos que dão mana",
   "Llanowar Elves, Elvish Mystic, Arbor Elf. Eles viram pra dar 1 mana a mais e aceleram tudo."
  ],
  [
   "Turno 3: joga a Marwyn",
   "Depois dela, todo elfo que entrar deixa ela maior. Se der, joga os elfos <em>depois</em> da Marwyn, não antes."
  ],
  [
   "Vira a Marwyn, pega o mana e desvira ela",
   "Usa as cartas que desviram (Quirion Ranger, Wirewood Symbiote, Stony Strength…) pra tirar mana dela de novo. Gasta tudo jogando mais elfo e comprando carta."
  ],
  [
   "Com muito mana: fecha o jogo",
   "Usa uma das jogadas da seção \"Como ganhar\" pra transformar o mana em exército e atacar."
  ]
 ],
 "cartas": [
  [
   "Llanowar Elves",
   "Vira e dá 1 mana verde. Elfo de turno 1, ajuda a jogar a Marwyn mais cedo."
  ],
  [
   "Elvish Archdruid",
   "Vira e dá 1 mana pra cada elfo que você tem. Mais uma fábrica de mana."
  ],
  [
   "Quirion Ranger",
   "Devolve uma Floresta pra mão e desvira uma criatura. Desvira a Marwyn e pega o mana de novo."
  ],
  [
   "Wirewood Symbiote",
   "Devolve um elfo pra mão e desvira uma criatura. Quando o elfo volta pra mesa, a Marwyn cresce mais."
  ],
  [
   "Timberwatch Elf",
   "Dá +X/+X numa criatura, X = número de elfos. Põe na Marwyn e ela dá muito mais mana."
  ],
  [
   "Shamanic Revelation",
   "Compra uma carta pra cada criatura sua. Com a mesa cheia, enche a mão."
  ],
  [
   "Imperious Perfect",
   "Seus outros elfos ficam +1/+1 e ela cria uma ficha de elfo."
  ],
  [
   "Eternal Witness",
   "Quando entra, pega uma carta do cemitério de volta pra mão."
  ]
 ],
 "combos": [
  [
   "Marwyn, the Nurturer",
   "Staff of Domination",
   "Mana infinito",
   "Com a Marwyn grandona (5 de força ou mais), o Staff paga pra desvirar ela e ainda sobra mana. Repete quantas vezes quiser: mana infinito. E o próprio Staff compra cartas com esse mana."
  ],
  [
   "Marwyn, the Nurturer",
   "Sword of the Paruns",
   "Mana infinito, versão 2",
   "Equipa a espada na Marwyn: pagando 3, você desvira ela. Se ela dá 4 de mana ou mais, sobra mana a cada volta. Vira infinito também."
  ],
  [
   "Gelatinous Genesis",
   "Wolfbriar Elemental",
   "Mana vira exército",
   "Essas cartas ficam maiores quanto mais mana você paga. Com a Marwyn ligada, sai um exército de gosmas ou de lobos de uma vez."
  ],
  [
   "Lys Alana Huntmaster",
   "Wildheart Invoker",
   "Ataque com a floresta inteira",
   "Cada elfo que você joga cria mais uma ficha de elfo. Depois, pagando 8, o Wildheart Invoker dá +5/+5 e atropelar numa criatura, e você ataca com tudo."
  ]
 ],
 "curva": {
  "terrenos": 29,
  "custos": {
   "1": 14,
   "2": 22,
   "3": 17,
   "4": 14,
   "5": 2,
   "6": 1
  },
  "tipos": {
   "Criatura": 39,
   "Artefato": 6,
   "Feitiço": 6,
   "Encantamento": 4,
   "Instantânea": 15
  },
  "leitura": "Muita coisa de 1 e 2 de mana, e vários elfos que dão mana. O deck acelera rápido: no turno 4 você já joga como se estivesse no 6."
 },
 "mao": [
  "Tem de 2 a 4 terrenos",
  "Tem pelo menos um elfo que dá mana (Llanowar, Mystic, Arbor Elf)",
  "Se vier ruim, pode embaralhar e comprar de novo (mulligan). Pergunta pra mesa como funciona na casa."
 ],
 "cuidado": [
  "Elfo é pequeno: <strong>carta que mata todas as criaturas</strong> destrói seu jogo. Não joga a mão inteira se não precisar.",
  "A Marwyn é o alvo de todo mundo. Usa Gaea's Gift ou Bombadil's Song pra proteger ela quando alguém tentar matar.",
  "Mana que você não gasta some. Só tira mana da Marwyn quando tiver no que gastar."
 ],
 "glossario": [
  [
   "Ficha (token)",
   "Criatura criada por carta (elfo, lobo, gosma…). Não é uma carta de verdade; usa um marcador, dado ou ficha impressa."
  ],
  [
   "Ímpeto (haste)",
   "Deixa a criatura atacar ou virar no mesmo turno em que entrou."
  ],
  [
   "Desvirar (untap)",
   "Deixar a carta de pé de novo, pronta pra usar outra vez no mesmo turno. É o truque principal do deck."
  ],
  [
   "Marcador +1/+1",
   "Contador que fica em cima da criatura e deixa ela 1 ponto mais forte pra sempre."
  ],
  [
   "Sacrificar",
   "Você mesmo manda uma criatura sua pro cemitério pra pagar um efeito."
  ],
  [
   "Ramp",
   "Carta que te dá mana extra pra jogar coisas grandes mais cedo."
  ],
  [
   "Tutor",
   "Carta que busca outra carta no seu baralho."
  ],
  [
   "Board wipe",
   "Carta que destrói todas as criaturas da mesa de uma vez."
  ],
  [
   "Cemitério",
   "Pilha de descarte: carta usada ou criatura morta vai pra lá."
  ]
 ],
 "imagens": {
  "Elvish Archdruid": "0/0/006ff5a3-355b-4a7d-b402-bb3c8d32a585.jpg?1785497593",
  "Eternal Witness": "3/9/39704000-65d3-4d39-849e-a3b617376bbc.jpg?1783915632",
  "Gelatinous Genesis": "4/e/4e5c2be0-76ab-4873-a1fc-9ff65a9347c7.jpg?1783930148",
  "Imperious Perfect": "8/3/83b4a09f-ea53-42b4-a41a-4299192a6fd3.jpg?1783908890",
  "Llanowar Elves": "6/a/6a0b230b-d391-4998-a3f7-7b158a0ec2cd.jpg?1783909057",
  "Lys Alana Huntmaster": "0/8/0849f67b-da5d-49f7-840f-f87f48518156.jpg?1783928313",
  "Marwyn, the Nurturer": "4/c/4c92e444-2a33-4e67-a8be-8cf5d564e589.jpg?1783908631",
  "Quirion Ranger": "3/2/320fdf89-e158-41c5-b0bf-fee9dec36a75.jpg?1783926781",
  "Shamanic Revelation": "b/3/b3784eff-ab7b-4fd4-9a07-fbc852d116bf.jpg?1783923241",
  "Staff of Domination": "f/d/fde838c8-2f32-4e7d-a236-0bc42dd7abd9.jpg?1783928743",
  "Sword of the Paruns": "3/e/3e0fd1d6-c57e-47c7-a87f-0487cf5b2786.jpg?1783913258",
  "Timberwatch Elf": "3/8/38807f17-1cf2-4736-ad10-df6c8b1a9f55.jpg?1783928309",
  "Wildheart Invoker": "6/0/60f42969-bb5c-4183-8bd3-ba87f008391d.jpg?1783908944",
  "Wirewood Symbiote": "d/2/d237f5cc-2b9b-4929-9697-72078bac4c77.jpg?1783911211",
  "Wolfbriar Elemental": "6/0/60da801e-c47c-4aac-928c-2e7eab2d24c6.jpg?1783936238"
 }
};
