// Dados do deck. Pra mudar texto, cartas ou combos, é só editar aqui.
window.DECK = {
 "titulo": "PLUMA",
 "tag": "Deck branco e vermelho",
 "comandante": "Feather, the Redeemed",
 "nomeCurto": "Feather",
 "genero": "f",
 "resumo": "A Feather é um anjo que devolve as suas mágicas. Você joga truques baratos nas suas criaturas (deixar mais forte, proteger, dar ímpeto) e no fim do turno eles voltam pra sua mão. Os mesmos truques, todo turno, pra sempre.",
 "archidekt": "https://archidekt.com/decks/6712771/pluma",
 "tema": {
  "red": "#c2541b",
  "red2": [
   "#9c3f0e",
   "#ffaa6b"
  ],
  "bg": [
   "#fbf6ec",
   "#15100a"
  ],
  "ink": [
   "#16141c",
   "#eeecf3"
  ],
  "mut": [
   "#5f5a66",
   "#aaa5b3"
  ],
  "card": [
   "#fff",
   "#241a10"
  ],
  "line": [
   "#ecdcc3",
   "#3d2d1b"
  ],
  "alt": [
   "#f5ead8",
   "#1c1409"
  ],
  "horde": "#1f1508",
  "hline": "#3d2d1b"
 },
 "icone": "<path d=\"M30 5 C18 9 10 20 9 34 L12 34 C14 24 20 16 30 5Z\" fill=\"#f2efe6\"/><path d=\"M30 5 C31 16 24 27 12 33 C16 24 22 15 30 5Z\" fill=\"#ffb066\"/><path d=\"M28 8 L11 34\" stroke=\"#7a3a10\" stroke-width=\"1.4\"/>",
 "terreno": "Um terreno por turno. Cada terreno dá mana da cor dele. Mana é o dinheiro pra jogar as outras cartas.",
 "chefe": {
  "intro": "Quando você joga uma <strong>instantânea ou feitiço mirando uma criatura sua</strong>, a Feather guarda a carta em vez de mandar pro cemitério e <strong>devolve ela pra sua mão no fim do turno</strong>. Então 2 truques na mão viram 2 truques todo turno (cada pena é uma vez que você usou a carta):",
  "fim": "Um Defiant Strike (+1/+0 e compra 1 carta) vira “compra uma carta todo turno”. Por isso <strong>todo mundo vai querer matar a Feather</strong>."
 },
 "conta": [
  [
   2,
   "Turno 1"
  ],
  [
   4,
   "Turno 2"
  ],
  [
   6,
   "Turno 3"
  ],
  [
   8,
   "Turno 4"
  ],
  [
   10,
   "Turno 5"
  ]
 ],
 "turno": [
  [
   "Desvira tudo e compra uma carta",
   "Todas as suas cartas viradas voltam a ficar de pé."
  ],
  [
   "Joga um terreno",
   "Um por turno. Quase sempre vale jogar."
  ],
  [
   "Turnos 1 e 2: mana e criaturas que gostam de ser alvo",
   "Sol Ring, Signets, Tenth District Legionnaire, Akroan Crusader, Monastery Mentor."
  ],
  [
   "Turno 3: joga a Feather",
   "A partir daí, os truques que miram suas criaturas voltam pra mão."
  ],
  [
   "Todo turno: joga os truques",
   "Defiant Strike, Expedite, Brute Force mirando suas criaturas. No fim do turno eles voltam. Deixa sempre 1 ou 2 de mana pra proteção (Apostle's Blessing)."
  ],
  [
   "Ataca e fecha",
   "A Feather voa. Com força extra e o Temur Battle Rage (golpe duplo), ela tira muita vida de uma vez."
  ]
 ],
 "cartas": [
  [
   "Defiant Strike",
   "+1/+0 e compra uma carta. Com a Feather, é compra extra todo turno."
  ],
  [
   "Expedite",
   "Dá ímpeto e compra uma carta. Mesma ideia."
  ],
  [
   "Apostle's Blessing",
   "Sua criatura ganha proteção contra a cor que você escolher. Proteção que volta todo turno."
  ],
  [
   "Tenth District Legionnaire",
   "Toda mágica que mira ela: +1/+1 permanente e você olha o topo do deck."
  ],
  [
   "Akroan Crusader",
   "Toda mágica que mira ele cria um soldado 1/1 com ímpeto."
  ],
  [
   "Monastery Mentor",
   "Toda mágica que não é criatura cria um monge 1/1 que também cresce com mágica."
  ],
  [
   "Phalanx Leader",
   "Toda mágica que mira ele põe +1/+1 em TODAS as suas criaturas."
  ],
  [
   "Sunforger",
   "Equipamento que busca uma instantânea vermelha ou branca no deck e joga de graça."
  ]
 ],
 "combos": [
  [
   "Feather, the Redeemed",
   "Zada, Hedron Grinder",
   "Um truque pra todo mundo",
   "Joga uma mágica só na Zada: ela copia a mágica pra cada outra criatura sua. Um Expedite vira ímpeto e uma carta pra cada criatura. E a Feather devolve a carta."
  ],
  [
   "Phalanx Leader",
   "Defiant Strike",
   "O time inteiro cresce",
   "Cada mágica no Phalanx Leader põe +1/+1 em todas as suas criaturas. Com a Feather devolvendo os truques, o time cresce todo turno."
  ],
  [
   "Feather, the Redeemed",
   "Temur Battle Rage",
   "Golpe duplo voando",
   "Põe força na Feather (Brute Force, Titan's Strength) e dá golpe duplo com o Temur Battle Rage. Ela voa, quase ninguém bloqueia, e o dano dobra."
  ],
  [
   "Monastery Mentor",
   "Akroan Crusader",
   "Exército de fichas",
   "O Mentor cria um monge a cada mágica e o Crusader cria um soldado a cada mágica nele. Truque barato todo turno = muita ficha."
  ]
 ],
 "curva": {
  "terrenos": 32,
  "custos": {
   "1": 24,
   "2": 27,
   "3": 8,
   "4": 4,
   "5": 2,
   "6": 1,
   "8": 1
  },
  "tipos": {
   "Instantânea": 34,
   "Criatura": 13,
   "Artefato": 9,
   "Feitiço": 10,
   "Encantamento": 1
  },
  "leitura": "O deck mais barato de todos: mais da metade das cartas custa 1 ou 2. Dá pra jogar vários truques no mesmo turno, e com a Feather eles voltam."
 },
 "mao": [
  "Tem de 2 a 4 terrenos",
  "Tem uma criatura barata e pelo menos um truque (Defiant Strike, Expedite…)",
  "Se vier ruim, pode embaralhar e comprar de novo (mulligan). Pergunta pra mesa como funciona na casa."
 ],
 "cuidado": [
  "Se a Feather morrer, os truques vão pro cemitério normal. Protege ela: Apostle's Blessing, Swiftfoot Boots.",
  "A Feather só devolve mágica que mira criatura <strong>sua</strong>. Remoção no inimigo (Path to Exile) vai pro cemitério normal.",
  "Wrath of God e Vanquish the Horde matam suas criaturas também. Só usa se estiver perdendo."
 ],
 "glossario": [
  [
   "Ficha (token)",
   "Criatura ou objeto criado por carta. Não é uma carta de verdade; usa um marcador, dado ou ficha impressa."
  ],
  [
   "Ímpeto (haste)",
   "Deixa a criatura atacar ou virar no mesmo turno em que entrou."
  ],
  [
   "Mirar (alvo)",
   "Escolher uma criatura específica pra mágica afetar."
  ],
  [
   "Heroico",
   "Habilidade que dispara quando você mira a criatura com uma mágica."
  ],
  [
   "Golpe duplo",
   "A criatura causa dano duas vezes no combate."
  ],
  [
   "Voar",
   "Só pode ser bloqueada por criaturas que voam ou têm alcance."
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
  "Akroan Crusader": "b/8/b8569043-16b2-480f-b4d0-ba2fe6e19b46.jpg?1783908700",
  "Apostle's Blessing": "f/d/fdfbc07e-d726-4d42-9394-6aa0f5fc3a3a.jpg?1783938429",
  "Defiant Strike": "9/4/9473c9bc-458e-4879-8abb-9b43be85e4be.jpg?1783908812",
  "Expedite": "b/8/b86c0628-0b61-44f2-91cc-1c3c309631ce.jpg?1783928712",
  "Feather, the Redeemed": "e/4/e4a2d2c6-8eaa-4760-b620-921b807baa2e.jpg?1783933396",
  "Monastery Mentor": "2/3/2343e69d-f30e-4826-953c-fbf31c6079e6.jpg?1783907121",
  "Phalanx Leader": "9/6/96d22985-4354-4015-bd74-0ddf4f0cdf17.jpg?1783933861",
  "Sunforger": "d/d/dd3e42ee-ab13-460b-90fd-86e677abce4f.jpg?1783928686",
  "Temur Battle Rage": "3/7/375bc646-942e-4bf5-9c71-2c5471828e35.jpg?1783915640",
  "Tenth District Legionnaire": "c/d/cd0c8d75-fb20-49f2-9a03-35411f06c1a7.jpg?1783921801",
  "Zada, Hedron Grinder": "d/5/d582b933-adbe-4706-a3c9-c19b6c52fd72.jpg?1783908847"
 }
};
