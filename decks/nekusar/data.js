// Dados do deck. Pra mudar texto, cartas ou combos, é só editar aqui.
window.DECK = {
 "titulo": "NEKUSAR",
 "tag": "Deck azul, preto e vermelho",
 "comandante": "Nekusar, the Mindrazer",
 "nomeCurto": "Nekusar",
 "genero": "m",
 "resumo": "Você é o cara “gente boa” que faz todo mundo comprar um monte de carta. O problema é que, com o Nekusar na mesa, cada carta que um adversário compra tira vida dele. Quanto mais eles compram, mais eles morrem.",
 "archidekt": "https://archidekt.com/decks/6846960/nekusar",
 "tema": {
  "red": "#3b2a6b",
  "red2": [
   "#3b2a6b",
   "#b9a4ff"
  ],
  "bg": [
   "#f3f1f8",
   "#0d0b14"
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
   "#17132a"
  ],
  "line": [
   "#dcd6ea",
   "#2c2545"
  ],
  "alt": [
   "#e8e4f2",
   "#120f1f"
  ],
  "horde": "#120f1f",
  "hline": "#2c2545"
 },
 "icone": "<circle cx=\"20\" cy=\"20\" r=\"17\" fill=\"#3b2a6b\"/><path d=\"M23 6 L12 22 L19 22 L16 34 L28 17 L21 17Z\" fill=\"#ffcf4a\"/>",
 "terreno": "Um terreno por turno. Cada terreno dá mana da cor dele. Mana é o dinheiro pra jogar as outras cartas.",
 "chefe": {
  "intro": "O Nekusar faz duas coisas: <strong>no começo da compra de cada jogador, ele compra 1 carta a mais</strong> (você também), e <strong>toda vez que um adversário compra uma carta, leva 1 de dano</strong>. O resto do deck multiplica isso. Dano em cada adversário por rodada (cada raio é 1 de dano):",
  "fim": "Por isso <strong>todo mundo vai querer matar o Nekusar</strong>. Protege ele e enche a mesa de cartas que punem quem compra."
 },
 "conta": [
  [
   2,
   "Só Nekusar"
  ],
  [
   3,
   "+ Howling Mine"
  ],
  [
   6,
   "+ Underworld Dreams"
  ],
  [
   20,
   "+ Windfall"
  ]
 ],
 "turno": [
  [
   "Desvira tudo e compra",
   "Com o Nekusar na mesa, você compra 2 em vez de 1."
  ],
  [
   "Joga um terreno",
   "Um por turno. Quase sempre vale jogar."
  ],
  [
   "Turnos 1 a 3: mana extra",
   "Sol Ring, Signets, Talismans. São artefatos baratos que dão mana e aceleram o jogo."
  ],
  [
   "Turno 4 ou 5: joga o Nekusar",
   "De preferência com proteção junto (Swiftfoot Boots) ou com o Propaganda na mesa pra ninguém te atacar."
  ],
  [
   "Monta as punições",
   "Cartas que dão dano quando o adversário compra ou descarta: Underworld Dreams, Megrim, Sheoldred, Fate Unraveler."
  ],
  [
   "Joga uma roda",
   "Windfall, Wheel of Fate: todo mundo descarta a mão e compra de novo. Com as punições na mesa, é dano em todo mundo de uma vez."
  ]
 ],
 "cartas": [
  [
   "Howling Mine",
   "Todo mundo compra 1 carta a mais por turno. Mais compra, mais dano."
  ],
  [
   "Underworld Dreams",
   "Toda vez que um adversário compra, leva 1 de dano. É um segundo Nekusar."
  ],
  [
   "Sheoldred, the Apocalypse",
   "Adversário compra: perde 2 de vida. Você compra: ganha 2."
  ],
  [
   "Megrim",
   "Adversário descarta uma carta: leva 2. Perfeito com as rodas."
  ],
  [
   "Windfall",
   "Todo mundo descarta a mão e compra a mesma quantidade de quem tinha mais."
  ],
  [
   "Rhystic Study",
   "Toda vez que um adversário joga algo, você compra uma carta, a menos que ele pague 1 a mais."
  ],
  [
   "Psychosis Crawler",
   "Toda vez que VOCÊ compra, cada adversário perde 1 de vida."
  ],
  [
   "Harmonic Prodigy",
   "O Nekusar é um mago. Com o Prodigy, as habilidades dele disparam duas vezes: compra extra dobrada e dano dobrado."
  ]
 ],
 "combos": [
  [
   "Nekusar, the Mindrazer",
   "Wheel of Fate",
   "A roda",
   "Todo mundo descarta e compra 7. Com o Nekusar, cada adversário leva 7 de dano na hora. Com Megrim na mesa, cada carta descartada dá mais 2."
  ],
  [
   "Niv-Mizzet, the Firemind",
   "Curiosity",
   "O dragão que não para",
   "Curiosity no Niv-Mizzet: você compra, ele dá 1 de dano num adversário; ele causou dano, você compra de novo. Dá pra puxar quase o deck inteiro e derreter alguém."
  ],
  [
   "Forced Fruition",
   "Spiteful Visions",
   "O presente envenenado",
   "Com Forced Fruition, o adversário que joga uma mágica compra 7. Com Spiteful Visions ou Underworld Dreams na mesa, são 7 de dano nele toda vez."
  ],
  [
   "Sheoldred, the Apocalypse",
   "Howling Mine",
   "Sangria lenta",
   "Todo mundo compra mais. Cada carta que eles compram tira 2 de vida deles, e cada carta sua te dá 2."
  ]
 ],
 "curva": {
  "terrenos": 30,
  "custos": {
   "0": 1,
   "1": 7,
   "2": 24,
   "3": 18,
   "4": 10,
   "5": 6,
   "6": 2,
   "7": 1
  },
  "tipos": {
   "Criatura": 18,
   "Feitiço": 7,
   "Artefato": 19,
   "Encantamento": 15,
   "Instantânea": 9,
   "Planeswalker": 1
  },
  "leitura": "O pico no 2 são principalmente artefatos que dão mana (Signets, Talismans). Eles abrem caminho pras cartas que realmente machucam, que custam 4 ou 5."
 },
 "mao": [
  "Tem de 2 a 4 terrenos",
  "Tem uma pedra de mana (Sol Ring, Signet, Talisman)",
  "Se vier ruim, pode embaralhar e comprar de novo (mulligan). Pergunta pra mesa como funciona na casa."
 ],
 "cuidado": [
  "Você também está dando carta pros outros. Eles vão jogar mais coisa: segura um Counterspell ou Arcane Denial pra hora certa.",
  "Spiteful Visions e as rodas também machucam <strong>você</strong>. Fica de olho na sua vida.",
  "O Nekusar é o alvo de todo mundo. Swiftfoot Boots e Neurok Stealthsuit protegem ele."
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
   "Roda (wheel)",
   "Carta que faz todo mundo descartar a mão e comprar uma nova."
  ],
  [
   "Counter (anular)",
   "Carta que cancela a mágica que outro jogador acabou de jogar."
  ],
  [
   "Descartar",
   "Mandar cartas da sua mão pro cemitério."
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
  "Curiosity": "c/5/c5a0be10-c20f-4ac0-89a5-1770ecf48aad.jpg?1783930457",
  "Forced Fruition": "f/7/f7ea1c6e-c0af-40b0-b492-8d71f496903e.jpg?1783942903",
  "Harmonic Prodigy": "6/3/63a565e3-d7a8-469d-898f-49fef634c107.jpg?1783903818",
  "Howling Mine": "d/7/d7ae7be5-9c44-4707-9450-5074412a4c9f.jpg?1793111944",
  "Megrim": "3/b/3b04fca4-b4de-4343-ba58-d8aea39edc19.jpg?1783942380",
  "Nekusar, the Mindrazer": "4/a/4afdc65d-3c97-47af-83fa-df340389802e.jpg?1783915612",
  "Niv-Mizzet, the Firemind": "3/9/395465b8-f5ed-4668-9e6a-82257150c52c.jpg?1783931145",
  "Psychosis Crawler": "d/0/d0f42a19-c180-45b1-9f4c-787cf3a4a649.jpg?1783912973",
  "Rhystic Study": "9/f/9f37c5b6-a59c-45cd-9a99-e9357fe9ea1b.jpg?1783919146",
  "Sheoldred, the Apocalypse": "d/6/d67be074-cdd4-41d9-ac89-0a0456c4e4b2.jpg?1783921327",
  "Spiteful Visions": "3/b/3be610eb-790f-4f47-a92a-34fe704cc8e0.jpg?1783909589",
  "Underworld Dreams": "0/3/03919c86-1c4a-43b0-a2db-54ca6ae1ac57.jpg?1783931557",
  "Wheel of Fate": "c/7/c7937e12-76d9-4030-a68c-7a93a3c852cb.jpg?1783927784",
  "Windfall": "9/c/9ce7113b-08f7-4584-b65f-a7b5caa90c2f.jpg?1783911933"
 }
};
