// Dados do deck. Pra mudar texto, cartas ou combos, é só editar aqui.
window.DECK = {
 "titulo": "JUDITH",
 "tag": "Deck preto e vermelho",
 "comandante": "Judith, Carnage Connoisseur",
 "nomeCurto": "Judith",
 "genero": "f",
 "resumo": "Cada mágica que você joga vira um capetinha. Os capetinhas explodem quando morrem, e o deck tem um monte de jeito de fazer eles morrerem. Mágica barata, fogo pra todo lado.",
 "archidekt": "https://archidekt.com/decks/7285751/judith_carnage_connoisseur",
 "tema": {
  "red": "#8e1530",
  "red2": [
   "#7a1029",
   "#ff7690"
  ],
  "bg": [
   "#f8f1f2",
   "#120a0b"
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
   "#22121a"
  ],
  "line": [
   "#ead3d8",
   "#3c1f27"
  ],
  "alt": [
   "#f1e2e5",
   "#1a0b0e"
  ],
  "horde": "#1a0b0e",
  "hline": "#3c1f27"
 },
 "icone": "<path d=\"M8 8 L14 16 L10 18Z M32 8 L26 16 L30 18Z\" fill=\"#5a0d1c\"/><circle cx=\"20\" cy=\"22\" r=\"12\" fill=\"#d23a4f\"/><path d=\"M13 19 L18 21 M27 19 L22 21\" stroke=\"#2a0710\" stroke-width=\"2\"/><circle cx=\"16\" cy=\"22\" r=\"1.8\" fill=\"#ffd24a\"/><circle cx=\"24\" cy=\"22\" r=\"1.8\" fill=\"#ffd24a\"/><path d=\"M14 28 Q20 32 26 28\" stroke=\"#2a0710\" stroke-width=\"1.8\" fill=\"none\"/>",
 "terreno": "Um terreno por turno. Cada terreno dá mana da cor dele. Mana é o dinheiro pra jogar as outras cartas.",
 "chefe": {
  "intro": "Toda vez que você joga uma mágica <strong>instantânea ou feitiço</strong>, a Judith te deixa escolher: ou a mágica ganha <strong>toque mortífero e vínculo com a vida</strong>, ou você <strong>cria um Imp 2/2 que dá 2 de dano quando morre</strong>. Quase sempre: imp. Imps por turno (cada capetinha é 2 de dano guardado):",
  "fim": "Por isso <strong>todo mundo vai querer matar a Judith</strong>. Joga mágica barata todo turno e deixa a mesa encher de imp."
 },
 "conta": [
  [
   1,
   "1 mágica"
  ],
  [
   2,
   "2 mágicas"
  ],
  [
   3,
   "3 mágicas"
  ],
  [
   6,
   "3 + Prodigy"
  ]
 ],
 "turno": [
  [
   "Desvira tudo e compra uma carta",
   "Todas as suas cartas viradas voltam a ficar de pé."
  ],
  [
   "Joga um terreno",
   "Um por turno. O deck tem bastante terreno: quase sempre dá pra jogar."
  ],
  [
   "Turnos 1 e 2: mana e cavar",
   "Sol Ring, Signets, Faithless Looting. Mágica barata que acha as cartas boas."
  ],
  [
   "Assim que der: joga a Judith",
   "Depois dela, cada instantânea ou feitiço vira um imp."
  ],
  [
   "Joga mágica barata todo turno",
   "Shock, Lightning Bolt, Gut Shot: matam uma criatura inimiga E criam um imp."
  ],
  [
   "Faz os imps explodirem",
   "Culling the Weak e Fanatical Offering sacrificam um imp: ele explode (2 de dano), você ganha mana ou carta, e como são mágicas, vem um imp novo."
  ]
 ],
 "cartas": [
  [
   "Lightning Bolt",
   "3 de dano em qualquer alvo por 1 de mana. Mata algo e ainda cria um imp."
  ],
  [
   "Guttersnipe",
   "Toda mágica instantânea ou feitiço que você joga dá 2 de dano em cada adversário."
  ],
  [
   "Young Pyromancer",
   "Toda instantânea ou feitiço cria uma ficha 1/1 a mais."
  ],
  [
   "Storm-Kiln Artist",
   "Toda instantânea ou feitiço cria um Tesouro, ou seja, mana pra próxima mágica."
  ],
  [
   "Faithless Looting",
   "Compra 2, descarta 2. Dá pra jogar de novo do cemitério."
  ],
  [
   "Culling the Weak",
   "Sacrifica uma criatura e ganha 4 de mana preto. Sacrifica um imp: ele explode."
  ],
  [
   "Harmonic Prodigy",
   "A Judith é xamã. Com o Prodigy, ela dispara duas vezes: 2 imps por mágica."
  ],
  [
   "Krark, the Thumbless",
   "Cara ou coroa a cada mágica. Ganhou: copia a mágica. Perdeu: ela volta pra mão pra jogar de novo."
  ]
 ],
 "combos": [
  [
   "Judith, Carnage Connoisseur",
   "Culling the Weak",
   "Máquina de imp",
   "Joga o Culling sacrificando um imp: ele explode (2 de dano), você ganha 4 de mana e, como o Culling é instantânea, a Judith cria um imp novo."
  ],
  [
   "Judith, Carnage Connoisseur",
   "Electrickery",
   "Limpa a mesa",
   "Joga o Electrickery com overload (sobrecarga) e escolhe toque mortífero: 1 de dano em cada criatura dos adversários, e toque mortífero mata todas."
  ],
  [
   "Guttersnipe",
   "Kessig Flamebreather",
   "Fogo em todo mundo",
   "Cada mágica: Guttersnipe dá 2 em cada adversário e o Flamebreather mais 1. Com 5 mágicas no turno, são 15 de dano em cada um."
  ],
  [
   "Harmonic Prodigy",
   "Young Pyromancer",
   "Dobra tudo",
   "Judith, Guttersnipe, Young Pyromancer e Storm-Kiln Artist são todos xamãs. Com o Prodigy, tudo que eles fazem acontece duas vezes."
  ]
 ],
 "curva": {
  "terrenos": 37,
  "custos": {
   "1": 18,
   "2": 19,
   "3": 12,
   "4": 6,
   "5": 3,
   "6": 2,
   "7": 1,
   "9": 1
  },
  "tipos": {
   "Instantânea": 15,
   "Feitiço": 18,
   "Criatura": 17,
   "Artefato": 8,
   "Planeswalker": 1,
   "Encantamento": 3
  },
  "leitura": "Muita mágica de 1 e 2: dá pra jogar duas ou três por turno, e cada uma vira um imp. O deck tem 37 terrenos, mais que o normal, pra nunca faltar mana."
 },
 "mao": [
  "Tem de 2 a 4 terrenos",
  "Tem pelo menos 2 mágicas baratas (1 ou 2 de mana)",
  "Se vier ruim, pode embaralhar e comprar de novo (mulligan). Pergunta pra mesa como funciona na casa."
 ],
 "cuidado": [
  "Blasphemous Act e Star of Extinction matam seus imps também, mas cada imp que morre dá 2 de dano. Às vezes vale muito.",
  "Sem mágica na mão o deck para. Usa Faithless Looting e Cathartic Reunion pra cavar.",
  "A Judith é o alvo de todo mundo. Swiftfoot Boots protege ela."
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
   "Instantânea / feitiço",
   "Os dois tipos de mágica que você joga e depois vão pro cemitério. São eles que ativam a Judith."
  ],
  [
   "Toque mortífero",
   "Qualquer dano dessa fonte mata a criatura, não importa o tamanho."
  ],
  [
   "Vínculo com a vida",
   "O dano que essa fonte causa vira vida pra você."
  ],
  [
   "Tesouro",
   "Ficha que você sacrifica pra ganhar 1 mana de qualquer cor."
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
  "Culling the Weak": "5/0/50c33f18-0a5c-4e46-ab0d-6e450915594f.jpg?1783946521",
  "Electrickery": "5/e/5ed81ee8-d5e4-4127-876e-9bff81f9c726.jpg?1783940356",
  "Faithless Looting": "f/c/fc019ffa-4461-4f3d-ab8d-e4d20e77ca0c.jpg?1783903774",
  "Guttersnipe": "f/6/f6bb1ffc-2251-4655-b8f9-4c8047dd5d5f.jpg?1785497556",
  "Harmonic Prodigy": "6/3/63a565e3-d7a8-469d-898f-49fef634c107.jpg?1783903818",
  "Judith, Carnage Connoisseur": "3/e/3eaa19ce-cace-499e-8b23-ef9e56b23700.jpg?1783912849",
  "Kessig Flamebreather": "3/0/303ad78a-b02a-44dc-afe6-7f95781a5062.jpg?1783924832",
  "Krark, the Thumbless": "0/6/06a981cd-1951-438e-95c9-68294795638e.jpg?1783928810",
  "Lightning Bolt": "7/6/7673784e-db4b-43a1-8d55-1bb9fc1e284f.jpg?1783903008",
  "Storm-Kiln Artist": "d/a/da7ae8e0-cb6b-4386-8a30-9527d1af9be5.jpg?1783903773",
  "Young Pyromancer": "c/0/c0d74ecd-a595-4012-81b4-083264b40c94.jpg?1783907139"
 }
};
