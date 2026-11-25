// Dados do deck. Pra mudar texto, cartas ou combos, é só editar aqui.
window.DECK = {
 "titulo": "enKRENKO",
 "tag": "Deck vermelho",
 "comandante": "Krenko, Mob Boss",
 "nomeCurto": "Krenko",
 "genero": "m",
 "resumo": "Você é o chefe de uma gangue de goblins. Eles são pequenos e fracos, mas se multiplicam muito rápido. Quando a mesa estiver lotada deles, você transforma esse monte de goblin em dano e ganha o jogo.",
 "archidekt": "https://archidekt.com/decks/6238836/enkrenko",
 "tema": {
  "red": "#c4221b",
  "red2": [
   "#a01a14",
   "#ef5a46"
  ],
  "bg": [
   "#fbf4ee",
   "#140b09"
  ],
  "ink": [
   "#1c1210",
   "#f6ece6"
  ],
  "mut": [
   "#6d5a54",
   "#bba79f"
  ],
  "card": [
   "#fff",
   "#21130f"
  ],
  "line": [
   "#ead8cf",
   "#3a2620"
  ],
  "alt": [
   "#f4e6dd",
   "#1b100c"
  ],
  "horde": "#1c1210",
  "hline": "#3a2620"
 },
 "icone": "<path d=\"M4 12 L13 18 L11 24Z M36 12 L27 18 L29 24Z\" fill=\"#7a9a3a\"/><circle cx=\"20\" cy=\"22\" r=\"11\" fill=\"#8fb547\"/><path d=\"M10 18 Q20 10 30 18 Q20 15 10 18Z\" fill=\"#c4221b\"/><circle cx=\"16\" cy=\"21\" r=\"2.4\" fill=\"#ffd24a\"/><circle cx=\"24\" cy=\"21\" r=\"2.4\" fill=\"#ffd24a\"/><path d=\"M15 27 Q20 31 25 27\" stroke=\"#3a2a10\" stroke-width=\"1.6\" fill=\"none\"/>",
 "terreno": "Um terreno por turno. Cada Montanha dá 1 mana vermelho, que é o dinheiro pra jogar as outras cartas.",
 "chefe": {
  "intro": "O Krenko tem um poder só: <strong>vira ele e cria um goblin novo pra cada goblin que você já tem</strong>, contando ele mesmo. Então a gangue dobra toda vez. Olha só:",
  "fim": "Por isso <strong>todo mundo na mesa vai querer matar o Krenko</strong>. Seu trabalho é proteger ele e ativar o poder o máximo de vezes possível."
 },
 "conta": [
  [
   1,
   "Começo"
  ],
  [
   2,
   "1ª vez"
  ],
  [
   4,
   "2ª vez"
  ],
  [
   8,
   "3ª vez"
  ],
  [
   16,
   "4ª vez"
  ],
  [
   32,
   "5ª vez"
  ]
 ],
 "turno": [
  [
   "Desvira tudo e compra uma carta",
   "Todas as suas cartas viradas voltam a ficar de pé."
  ],
  [
   "Joga um terreno",
   "Uma Montanha por turno. Quase sempre vale jogar."
  ],
  [
   "Nos primeiros turnos: goblins baratos e mana extra",
   "Cartas de 1 a 3 de mana que criam goblins ou te dão mais mana (tipo o Sol Ring)."
  ],
  [
   "Por volta do turno 4: joga o Krenko com ímpeto",
   "Criatura que acabou de entrar não pode virar no mesmo turno. Por isso você quer uma carta de <em>ímpeto</em> (haste) na mesa antes, aí ativa o Krenko na hora."
  ],
  [
   "Ataca quem estiver mais fraco",
   "Goblins que não vão ser usados pro poder do Krenko podem atacar. Cada um tira 1 de vida."
  ],
  [
   "Com a mesa cheia: fecha o jogo",
   "Usa uma das cartas da seção \"Como ganhar\" pra transformar os goblins em dano em todo mundo."
  ]
 ],
 "cartas": [
  [
   "Goblin Warchief",
   "Dá ímpeto pra todos os goblins e deixa eles mais baratos. Melhor amigo do Krenko."
  ],
  [
   "Fervor",
   "Todas as suas criaturas ganham ímpeto."
  ],
  [
   "Swiftfoot Boots",
   "Equipa no Krenko: ganha ímpeto e o adversário não consegue mirar nele."
  ],
  [
   "Sol Ring",
   "Custa 1 e dá 2 de mana. Jogou no começo? Jogo acelerado."
  ],
  [
   "Skirk Prospector",
   "Sacrifica um goblin e ganha 1 de mana."
  ],
  [
   "Skullclamp",
   "Equipa num goblin 1/1: ele morre e você compra 2 cartas."
  ],
  [
   "Goblin Matron",
   "Quando entra, busca qualquer goblin no baralho e põe na sua mão. Boa pra buscar o Goblin Warchief ou o Siege-Gang."
  ],
  [
   "Siege-Gang Commander",
   "Entra com mais 3 goblins. Depois, pagando 2 de mana, sacrifica um goblin pra dar 2 de dano em qualquer alvo."
  ]
 ],
 "combos": [
  [
   "Krenko, Mob Boss",
   "Impact Tremors",
   "O terremoto",
   "Toda vez que um goblin entra, cada adversário perde 1 de vida. Krenko cria 16 goblins? 16 de dano em cada um."
  ],
  [
   "Krenko, Mob Boss",
   "Hobgoblin Bandit Lord",
   "O chefe do bando",
   "Ativa o Krenko, depois vira o Bandit Lord: ele dá dano igual ao número de goblins que entraram nesse turno, em quem você quiser."
  ],
  [
   "Siege-Gang Commander",
   "Pashalik Mons",
   "Explode a gangue",
   "Sacrifica goblins pra dar dano. Cada goblin vira tiro na cara do adversário."
  ],
  [
   "Goblin King",
   "Battle Cry Goblin",
   "Ataque em massa",
   "Deixa todo goblin mais forte e manda a horda inteira atacar. Ninguém consegue bloquear todos."
  ]
 ],
 "curva": {
  "terrenos": 29,
  "custos": {
   "1": 14,
   "2": 16,
   "3": 18,
   "4": 10,
   "5": 3,
   "6": 2,
   "7": 1,
   "9": 1,
   "10": 1
  },
  "tipos": {
   "Artefato": 6,
   "Criatura": 31,
   "Feitiço": 15,
   "Encantamento": 6,
   "Instantânea": 7,
   "Planeswalker": 1
  },
  "leitura": "Quase tudo custa até 3 de mana: dá pra jogar alguma coisa todo turno desde o começo. As cartas caras (6 e 7) são poucas e são as que fecham o jogo."
 },
 "mao": [
  "Tem de 2 a 4 terrenos",
  "Tem pelo menos uma carta barata (1 a 3 de mana)",
  "Se vier ruim, pode embaralhar e comprar de novo (mulligan). Pergunta pra mesa como funciona na casa."
 ],
 "cuidado": [
  "Algumas cartas suas (Blasphemous Act, Storm's Wrath) <strong>matam seus goblins também</strong>. Só usa quando estiver perdendo feio.",
  "Inimigo com dragão voando: goblin não consegue bloquear quem voa.",
  "Não joga todos os goblins de uma vez se alguém tiver carta que mata tudo. Guarda uns na mão."
 ],
 "glossario": [
  [
   "Ficha (token)",
   "Goblin criado por carta. Não é uma carta de verdade; usa um marcador, dado ou ficha impressa."
  ],
  [
   "Ímpeto (haste)",
   "Deixa a criatura atacar ou virar no mesmo turno em que entrou."
  ],
  [
   "Sacrificar",
   "Você mesmo manda uma criatura sua pro cemitério pra pagar um efeito. Goblin existe pra isso."
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
  "Battle Cry Goblin": "b/a/ba41ec1b-e631-4882-b897-df26e26ada04.jpg?1783908830",
  "Fervor": "a/8/a88515c2-4b4f-4d16-9f50-149ef012e961.jpg?1783940484",
  "Goblin King": "4/b/4b266935-25ea-49c5-a1da-57c22a4362fd.jpg?1783943019",
  "Goblin Matron": "8/e/8ee0fdd4-1fb5-4160-b408-2c51ef4f85d0.jpg?1783903458",
  "Goblin Warchief": "5/b/5bac033c-dc4e-40a0-b103-4892e4b50249.jpg?1783934992",
  "Hobgoblin Bandit Lord": "0/9/09e9dc36-f2d8-4384-98cb-e44c00b02433.jpg?1783926478",
  "Impact Tremors": "d/0/d0b7cecf-b51b-4d30-b7e9-cd7976271e07.jpg?1783908891",
  "Krenko, Mob Boss": "8/2/824b2d73-2151-4e5e-9f05-8f63e2bdcaa9.jpg?1783909065",
  "Pashalik Mons": "c/a/ca20a650-65b0-4714-b7ce-0481af3db377.jpg?1783918458",
  "Siege-Gang Commander": "7/d/7d67e614-03d2-4034-b82f-25962fc378d4.jpg?1783903455",
  "Skirk Prospector": "7/b/7bc508b3-8b38-4cf0-89a7-a2cb247ed083.jpg?1783918455",
  "Skullclamp": "e/1/e1da8b79-249b-439a-a0ad-c8784bd716df.jpg?1793021175",
  "Sol Ring": "f/c/fc817e07-c1f3-469f-9cf7-0945dea7400f.jpg?1793021181",
  "Swiftfoot Boots": "3/b/3b69b12e-ef29-455c-8939-eacf44c6c3f6.jpg?1793021194"
 }
};
