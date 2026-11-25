// Monta a página de um deck a partir de window.DECK (definido no data.js de cada pasta).
// Tudo que é comum a todos os decks (layout, textos básicos, curva de mana) fica aqui.
{
  const D = window.DECK;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // ---------- tema (cores do deck) ----------
  const t = D.tema, ld = v => Array.isArray(v) ? `light-dark(${v[0]},${v[1]})` : v;
  const vars = {red:t.red, red2:t.red2, bg:t.bg, ink:t.ink, mut:t.mut, card:t.card, line:t.line, alt:t.alt, horde:t.horde, hline:t.hline};
  const st = document.createElement('style');
  st.textContent = ':root{' + Object.entries(vars).filter(([,v]) => v).map(([k,v]) => `--${k}:${ld(v)}`).join(';') + '}';
  document.head.appendChild(st);

  // ---------- cartas ----------
  const IMG = D.imagens || {};
  const imgUrl = n => IMG[n] ? 'https://cards.scryfall.io/normal/front/' + IMG[n]
    : 'https://api.scryfall.com/cards/named?exact=' + encodeURIComponent(n) + '&format=image&version=normal';
  const card = n => `<div class="mtg"><div class="fb"><b>${esc(n)}</b><i></i></div><img src="${imgUrl(n)}" alt="${esc(n)}" loading="lazy" onerror="this.remove()"></div>`;

  // ---------- curva de mana (cálculo central) ----------
  function curva(c) {
    const custos = Object.entries(c.custos).map(([k, v]) => [+k, v]);
    const total = custos.reduce((s, [, v]) => s + v, 0);
    const media = custos.reduce((s, [k, v]) => s + k * v, 0) / total;
    const baratas = custos.filter(([k]) => k <= 2).reduce((s, [, v]) => s + v, 0);
    const temZero = custos.some(([k]) => k === 0);
    const faixas = (temZero ? [0] : []).concat([1, 2, 3, 4, 5, 6, 7]);
    const qtd = f => custos.filter(([k]) => f === 7 ? k >= 7 : k === f).reduce((s, [, v]) => s + v, 0);
    const max = Math.max(...faixas.map(qtd));
    const ordem = ['Criatura','Instantânea','Feitiço','Artefato','Encantamento','Planeswalker'];
    const plural = {Criatura:'Criaturas',Instantânea:'Instantâneas',Feitiço:'Feitiços',Artefato:'Artefatos',Encantamento:'Encantamentos',Planeswalker:'Planeswalker'};
    return `<section class="band curva-sec" id="curva"><div class="wrap">
  <h2>Curva de mana</h2>
  <p>Cada barra mostra <strong>quantas cartas custam aquele tanto de mana</strong> (sem contar terrenos nem o comandante). Barras altas do lado esquerdo = deck que joga muita coisa cedo.</p>
  <div class="stats">
    <div class="stat"><b>${media.toFixed(2).replace('.', ',')}</b><span>custo médio das cartas</span></div>
    <div class="stat"><b>${c.terrenos}</b><span>terrenos</span></div>
    <div class="stat"><b>${baratas}</b><span>cartas de até 2 de mana</span></div>
  </div>
  <div class="curve" style="--n:${faixas.length}">${faixas.map(f => `<div><b>${qtd(f)}</b><i style="height:${Math.max(2, qtd(f) / max * 82).toFixed(0)}%"></i></div>`).join('')}</div>
  <div class="cx" style="--n:${faixas.length}">${faixas.map(f => `<span>${f === 7 ? '7+' : f}</span>`).join('')}</div>
  <p>${c.leitura}</p>
  <div class="types">${ordem.filter(k => c.tipos[k]).map(k => `<span>${plural[k]} <b>${c.tipos[k]}</b></span>`).join('')}</div>
</div></section>`;
  }

  // ---------- conta do comandante ----------
  const icone = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="ic" viewBox="0 0 40 40">${D.icone}</symbol></svg>`;
  const conta = D.conta.map(([n, l], i) => `<div class="hrow"><div class="lb">${esc(l)}<b>${n}</b></div><div class="heads">${Array.from({length: n}, (_, k) => `<svg style="animation-delay:${(i * .1 + k * .01).toFixed(2)}s"><use href="#ic"/></svg>`).join('')}</div></div>`).join('');

  const ele = D.genero === 'f' ? 'ela' : 'ele', o = D.genero === 'f' ? 'a' : 'o', O = D.genero === 'f' ? 'A' : 'O';
  const curto = D.nomeCurto;

  document.title = `${D.titulo} — como o deck roda`;
  document.body.innerHTML = `${icone}
<header class="band hero"><div class="wrap in">
  <div>
    <a class="back" href="../">← todos os decks</a>
    <div class="tag">Magic · Commander · ${esc(D.tag)}</div>
    <h1>${esc(D.titulo)}</h1>
    <p>${D.resumo}</p>
  </div>
  <div class="cmd">${card(D.comandante)}</div>
</div></header>

<nav><div class="scroll">
  <a href="#basico">Magic em 1 min</a><a href="#chefe">${O} chef${D.genero === 'f' ? 'e' : 'e'}</a><a href="#turno">Seu turno</a><a href="#cartas">Cartas</a><a href="#vitoria">Como ganhar</a><a href="#curva">Curva de mana</a><a href="#dicas">Dicas</a><a href="#glossario">Glossário</a><a href="#lista">Lista</a>
</div></nav>

<section class="band" id="basico"><div class="wrap">
  <h2>Magic em 1 minuto</h2>
  <p>Commander é jogado em 3 ou 4 pessoas. Cada um começa com <strong>40 de vida</strong>. Perdeu tudo, saiu. Ganha quem sobrar.</p>
  <div class="basics">
    <div class="bx"><svg viewBox="0 0 56 56"><path d="M6 46 L22 16 L30 28 L36 20 L50 46Z" fill="var(--red)"/><path d="M22 16 L26 24 L19 24Z" fill="#fff"/></svg><h3>Terreno = mana</h3><p>${D.terreno}</p></div>
    <div class="bx"><svg viewBox="0 0 56 56"><rect x="8" y="10" width="20" height="28" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="24" y="22" width="28" height="20" rx="3" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M30 6 a10 10 0 0 1 10 10" stroke="var(--red)" stroke-width="3" fill="none"/><path d="M40 12 l0 5 l-5 0" stroke="var(--red)" stroke-width="3" fill="none"/></svg><h3>Virar (tap)</h3><p>Pra usar um terreno ou atacar, você vira a carta de lado. Ela só desvira no começo do seu próximo turno.</p></div>
    <div class="bx"><svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="22" fill="#e7a924"/><path d="M18 28 l7 7 l13 -15" stroke="#1c1210" stroke-width="4" fill="none"/></svg><h3>O comandante</h3><p>${O} ${esc(curto)} fica separad${o}, fora do baralho. Você pode jogar ${ele} a qualquer momento. Se morrer, volta pra lá e dá pra jogar de novo, só que mais caro (+2 cada vez).</p></div>
  </div>
</div></section>

<section class="band horde" id="chefe"><div class="wrap">
  <h2>${O} chef${'e'}: ${esc(curto)}</h2>
  <p>${D.chefe.intro}</p>
  ${conta}
  <p style="margin-top:14px">${D.chefe.fim}</p>
</div></section>

<section class="band" id="turno"><div class="wrap">
  <h2>Seu turno, passo a passo</h2>
  <ol class="steps">${D.turno.map(([b, s]) => `<li><div><b>${b}</b><span>${s}</span></div></li>`).join('')}</ol>
</div></section>

<section class="band alt" id="cartas"><div class="wrap">
  <h2>As cartas que importam</h2>
  <p>Não precisa decorar o baralho. Fica de olho nessas aqui:</p>
  <div class="cardgrid">${D.cartas.map(([n, txt]) => `<div class="ci">${card(n)}<h3>${esc(n)}</h3><p>${esc(txt)}</p></div>`).join('')}</div>
</div></section>

<section class="band" id="vitoria"><div class="wrap">
  <h2>Como ganhar</h2>
  ${D.combos.map(([a, b, tt, d]) => `<div class="win"><div class="pair">${card(a)}${card(b)}</div><div><h3>${esc(tt)}</h3><p>${esc(d)}</p></div></div>`).join('')}
</div></section>

${curva(D.curva)}

<section class="band alt" id="dicas"><div class="wrap">
  <h2>Dicas pra não se enrolar</h2>
  <div class="grid2">
    <div class="bx"><h3>Mão inicial boa</h3><ul>${D.mao.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="bx"><h3>Cuidado</h3><ul>${D.cuidado.map(x => `<li>${x}</li>`).join('')}</ul></div>
  </div>
</div></section>

<section class="band" id="glossario"><div class="wrap">
  <h2>Glossário rápido</h2>
  <dl>${D.glossario.map(([a, b]) => `<dt>${a}</dt><dd>${b}</dd>`).join('')}</dl>
</div></section>

<section class="band alt" id="lista"><div class="wrap">
  <h2>Lista completa</h2>
  <p>Todas as cartas do deck, com imagem, no Archidekt.</p>
  <a class="cta" href="${esc(D.archidekt)}">Abrir no Archidekt</a>
</div></section>

<footer>Deck do João Matuck · <a href="../">ver todos os decks</a></footer>`;
}
