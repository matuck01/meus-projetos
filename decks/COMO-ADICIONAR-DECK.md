# Como funciona a pasta decks

- `deck.css` → visual de todas as páginas de deck
- `deck.js` → monta a página a partir dos dados e calcula a curva de mana
- `index.html` → lista de todos os decks
- `<deck>/data.js` → só os dados do deck (textos, cartas, combos, cores, custos das cartas)
- `<deck>/index.html` → página curtinha que carrega o data.js e o deck.js

Deck novo: copia uma pasta existente, troca o `data.js` e adiciona o link no `index.html`.
