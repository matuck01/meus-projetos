import React, { useEffect, useRef, useState, useCallback } from "react";

/* ============================================================
   MATUCKINHOS SOUNDPLANT
   Teclado vira disparador de áudio. Web Audio API (baixa latência),
   sons salvos no IndexedDB do navegador (sobrevivem ao refresh).
   ESC = para tudo (com fade).  Teclas físicas por e.code (ABNT2 ok).
   ============================================================ */

// ---------- layout ABNT2 (e.code -> rótulo) ----------
const ROWS = [
  [["Digit1","1"],["Digit2","2"],["Digit3","3"],["Digit4","4"],["Digit5","5"],["Digit6","6"],["Digit7","7"],["Digit8","8"],["Digit9","9"],["Digit0","0"],["Minus","-"],["Equal","="]],
  [["KeyQ","Q"],["KeyW","W"],["KeyE","E"],["KeyR","R"],["KeyT","T"],["KeyY","Y"],["KeyU","U"],["KeyI","I"],["KeyO","O"],["KeyP","P"],["BracketLeft","´"],["BracketRight","["]],
  [["KeyA","A"],["KeyS","S"],["KeyD","D"],["KeyF","F"],["KeyG","G"],["KeyH","H"],["KeyJ","J"],["KeyK","K"],["KeyL","L"],["Semicolon","Ç"],["Quote","~"],["Backslash","]"]],
  [["IntlBackslash","\\"],["KeyZ","Z"],["KeyX","X"],["KeyC","C"],["KeyV","V"],["KeyB","B"],["KeyN","N"],["KeyM","M"],["Comma",","],["Period","."],["Slash",";"],["IntlRo","/"]],
];
const ALL_CODES = new Set(ROWS.flat().map(([c]) => c));
const LABEL = Object.fromEntries(ROWS.flat());

const COLORS = ["#e5484d","#f76b15","#ffc53d","#46a758","#12a594","#0090ff","#6e56cf","#d6409f","#8d8d8d"];

const DEFAULTS = { name: "", volume: 1, mode: "once", loop: false, fadeIn: 0, fadeOut: 0.05, color: "#0090ff" };
// mode: once   = cada toque reinicia do zero
//       toggle = toque toca, toque de novo para
//       hold   = toca enquanto segura a tecla
//       layer  = cada toque soma mais uma instância (polifônico)

// ---------- IndexedDB mínimo ----------
const DB = "matuck-soundplant", STORE = "keys";
function idb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function idbAll() {
  const db = await idb();
  return new Promise((res) => {
    const out = {}, tx = db.transaction(STORE).objectStore(STORE).openCursor();
    tx.onsuccess = () => { const c = tx.result; if (c) { out[c.key] = c.value; c.continue(); } else res(out); };
  });
}
async function idbPut(k, v) { const db = await idb(); db.transaction(STORE, "readwrite").objectStore(STORE).put(v, k); }
async function idbDel(k) { const db = await idb(); db.transaction(STORE, "readwrite").objectStore(STORE).delete(k); }

const fmt = (s) => { s = Math.max(0, s || 0); return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`; };

export default function SoundPlant() {
  const ctxRef = useRef(null);
  const masterRef = useRef(null);
  const buffers = useRef({});   // code -> AudioBuffer
  const voices = useRef({});    // code -> [{src, gain, start, offsetDur}]
  const [keys, setKeys] = useState({}); // code -> {settings + fileName}
  const keysRef = useRef(keys); keysRef.current = keys;
  const [selected, setSelected] = useState(null);
  const [playing, setPlaying] = useState({}); // code -> progress 0..1 / elapsed
  const [master, setMaster] = useState(1);
  const [dragOver, setDragOver] = useState(null);
  const [loading, setLoading] = useState(true);

  const ctx = () => {
    if (!ctxRef.current) {
      const c = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive" });
      const m = c.createGain(); m.connect(c.destination);
      ctxRef.current = c; masterRef.current = m;
    }
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  };

  useEffect(() => { if (masterRef.current) masterRef.current.gain.value = master; }, [master]);

  // ---------- carregar do IndexedDB ----------
  useEffect(() => {
    (async () => {
      const all = await idbAll();
      const c = ctx();
      const meta = {};
      for (const [code, v] of Object.entries(all)) {
        try {
          buffers.current[code] = await c.decodeAudioData(v.data.slice(0));
          meta[code] = { ...DEFAULTS, ...v.settings, fileName: v.fileName, duration: buffers.current[code].duration };
        } catch { /* arquivo corrompido: ignora */ }
      }
      setKeys(meta);
      setLoading(false);
    })();
  }, []);

  const persist = (code, patch) => {
    setKeys((k) => {
      const next = { ...k, [code]: { ...k[code], ...patch } };
      idb().then((db) => {
        const st = db.transaction(STORE, "readwrite").objectStore(STORE);
        const g = st.get(code);
        g.onsuccess = () => { if (g.result) { const { fileName, duration, ...settings } = next[code]; st.put({ ...g.result, settings }, code); } };
      });
      return next;
    });
  };

  // ---------- carregar arquivo numa tecla ----------
  const loadFile = async (code, file) => {
    if (!file) return;
    const data = await file.arrayBuffer();
    let buf;
    try { buf = await ctx().decodeAudioData(data.slice(0)); }
    catch { alert(`Não consegui ler "${file.name}". Use mp3, wav, ogg, m4a ou flac.`); return; }
    stopKey(code, 0);
    buffers.current[code] = buf;
    const prev = keysRef.current[code];
    const settings = prev ? (({ fileName, duration, ...s }) => s)(prev) : { ...DEFAULTS, color: COLORS[Object.keys(keysRef.current).length % COLORS.length] };
    if (!prev || !prev.name) settings.name = file.name.replace(/\.[^.]+$/, "");
    await idbPut(code, { data, fileName: file.name, settings });
    setKeys((k) => ({ ...k, [code]: { ...settings, fileName: file.name, duration: buf.duration } }));
  };

  const removeKey = async (code) => {
    stopKey(code, 0);
    delete buffers.current[code];
    await idbDel(code);
    setKeys((k) => { const n = { ...k }; delete n[code]; return n; });
  };

  // ---------- engine ----------
  const stopKey = useCallback((code, fade) => {
    const c = ctxRef.current; const list = voices.current[code];
    if (!c || !list) return;
    const f = fade ?? keysRef.current[code]?.fadeOut ?? 0.05;
    list.forEach((v) => {
      const t = c.currentTime;
      v.gain.gain.cancelScheduledValues(t);
      v.gain.gain.setValueAtTime(v.gain.gain.value, t);
      v.gain.gain.linearRampToValueAtTime(0, t + Math.max(f, 0.005));
      try { v.src.stop(t + Math.max(f, 0.005) + 0.01); } catch {}
    });
    voices.current[code] = [];
  }, []);

  const stopAll = useCallback((fade = 0.3) => { Object.keys(voices.current).forEach((c) => stopKey(c, fade)); }, [stopKey]);

  const startKey = useCallback((code) => {
    const buf = buffers.current[code], k = keysRef.current[code];
    if (!buf || !k) return;
    const c = ctx();
    const src = c.createBufferSource(); src.buffer = buf; src.loop = !!k.loop;
    const g = c.createGain();
    const t = c.currentTime;
    if (k.fadeIn > 0) { g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(k.volume, t + k.fadeIn); }
    else g.gain.value = k.volume;
    src.connect(g).connect(masterRef.current);
    const voice = { src, gain: g, start: t };
    src.onended = () => { voices.current[code] = (voices.current[code] || []).filter((v) => v !== voice); };
    voices.current[code] = [...(voices.current[code] || []), voice];
    src.start();
  }, []);

  const press = useCallback((code) => {
    const k = keysRef.current[code];
    if (!k) return;
    const active = (voices.current[code] || []).length > 0;
    switch (k.mode) {
      case "toggle": active ? stopKey(code) : startKey(code); break;
      case "layer": startKey(code); break;
      case "hold": if (!active) startKey(code); break;
      default: stopKey(code, 0.01); startKey(code);
    }
  }, [startKey, stopKey]);

  const release = useCallback((code) => {
    if (keysRef.current[code]?.mode === "hold") stopKey(code);
  }, [stopKey]);

  // ---------- teclado ----------
  useEffect(() => {
    const isTyping = (e) => ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName);
    const down = (e) => {
      if (isTyping(e) || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.code === "Escape") { e.preventDefault(); stopAll(); return; }
      if (!ALL_CODES.has(e.code)) return;
      e.preventDefault();
      if (e.repeat) return;
      if (e.shiftKey) { stopKey(e.code); return; } // SHIFT+tecla = para só ela
      press(e.code);
    };
    const up = (e) => { if (!isTyping(e) && ALL_CODES.has(e.code)) release(e.code); };
    const blur = () => Object.entries(keysRef.current).forEach(([c, k]) => k.mode === "hold" && stopKey(c));
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); window.removeEventListener("blur", blur); };
  }, [press, release, stopAll, stopKey]);

  // ---------- progresso ----------
  useEffect(() => {
    let raf;
    const tick = () => {
      const c = ctxRef.current, out = {};
      if (c) for (const [code, list] of Object.entries(voices.current)) {
        if (!list.length) continue;
        const v = list[list.length - 1], dur = buffers.current[code]?.duration || 1;
        let el = c.currentTime - v.start; if (v.src.loop) el %= dur;
        out[code] = { el, dur, n: list.length };
      }
      setPlaying(out);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const sel = selected && keys[selected];
  const fileInput = useRef(null);
  const nPlaying = Object.keys(playing).length;

  return (
    <div style={S.page}>
      <header style={S.header}>
        <div>
          <div style={S.title}>SOUNDPLANT</div>
          <div style={S.sub}>arraste áudio numa tecla · aperta e toca · <b>ESC</b> para tudo · <b>SHIFT+tecla</b> para uma</div>
        </div>
        <div style={S.headRight}>
          <label style={S.masterLbl}>MASTER
            <input type="range" min={0} max={1} step={0.01} value={master} onChange={(e) => setMaster(+e.target.value)} style={{ width: 140 }} />
            <span style={S.mono}>{Math.round(master * 100)}%</span>
          </label>
          <button onClick={() => stopAll()} style={{ ...S.panic, opacity: nPlaying ? 1 : 0.5 }}>■ STOP ALL{nPlaying ? ` (${nPlaying})` : ""}</button>
        </div>
      </header>

      {loading ? <div style={S.sub}>carregando sons…</div> : (
        <div style={S.board}>
          {ROWS.map((row, i) => (
            <div key={i} style={{ ...S.row, paddingLeft: [0, 28, 44, 16][i] }}>
              {row.map(([code, label]) => {
                const k = keys[code], p = playing[code];
                return (
                  <div key={code}
                    onClick={() => setSelected(code)}
                    onDoubleClick={() => k ? press(code) : (setSelected(code), fileInput.current?.click())}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(code); }}
                    onDragLeave={() => setDragOver(null)}
                    onDrop={(e) => { e.preventDefault(); setDragOver(null); setSelected(code); loadFile(code, e.dataTransfer.files[0]); }}
                    style={{
                      ...S.key,
                      background: k ? (p ? k.color : `${k.color}33`) : "#1a1a1d",
                      borderColor: selected === code ? "#fff" : dragOver === code ? "#ffc53d" : k ? k.color : "#2a2a2e",
                      color: p ? "#000" : "#eee",
                      transform: p ? "translateY(1px)" : "none",
                    }}>
                    <div style={S.keyTop}>
                      <span style={S.keyLabel}>{label}</span>
                      {k && <span style={S.badge}>{{ once: "", toggle: "⏯", hold: "✋", layer: "≡" }[k.mode]}{k.loop ? "↻" : ""}</span>}
                    </div>
                    <div style={S.keyName}>{k?.name || ""}</div>
                    {k && <div style={S.keyTime}>{p ? `${fmt(p.el)} / ${fmt(p.dur)}${p.n > 1 ? ` ×${p.n}` : ""}` : fmt(k.duration)}</div>}
                    {p && <div style={{ ...S.prog, width: `${(p.el / p.dur) * 100}%` }} />}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <input ref={fileInput} type="file" accept="audio/*" hidden onChange={(e) => { selected && loadFile(selected, e.target.files[0]); e.target.value = ""; }} />

      {selected && (
        <div style={S.panel}>
          <div style={S.panelHead}>
            <span style={S.bigKey}>{LABEL[selected]}</span>
            {sel ? <span style={S.sub}>{sel.fileName} · {fmt(sel.duration)}</span> : <span style={S.sub}>tecla vazia</span>}
            <div style={{ flex: 1 }} />
            <button style={S.btn} onClick={() => fileInput.current?.click()}>{sel ? "Trocar áudio" : "Carregar áudio"}</button>
            {sel && <button style={S.btn} onClick={() => press(selected)}>▶ Testar</button>}
            {sel && <button style={{ ...S.btn, color: "#e5484d" }} onClick={() => removeKey(selected)}>Remover</button>}
            <button style={S.btn} onClick={() => setSelected(null)}>✕</button>
          </div>
          {sel && (
            <div style={S.grid}>
              <Field label="Nome"><input style={S.input} value={sel.name} onChange={(e) => persist(selected, { name: e.target.value })} /></Field>
              <Field label="Modo">
                <select style={S.input} value={sel.mode} onChange={(e) => persist(selected, { mode: e.target.value })}>
                  <option value="once">Disparo (reinicia)</option>
                  <option value="toggle">Toggle (liga/desliga)</option>
                  <option value="hold">Segurar (gate)</option>
                  <option value="layer">Camadas (sobrepõe)</option>
                </select>
              </Field>
              <Field label={`Volume ${Math.round(sel.volume * 100)}%`}><input type="range" min={0} max={1.5} step={0.01} value={sel.volume} onChange={(e) => persist(selected, { volume: +e.target.value })} /></Field>
              <Field label={`Fade in ${sel.fadeIn.toFixed(1)}s`}><input type="range" min={0} max={10} step={0.1} value={sel.fadeIn} onChange={(e) => persist(selected, { fadeIn: +e.target.value })} /></Field>
              <Field label={`Fade out ${sel.fadeOut.toFixed(1)}s`}><input type="range" min={0} max={10} step={0.1} value={sel.fadeOut} onChange={(e) => persist(selected, { fadeOut: +e.target.value })} /></Field>
              <Field label="Loop"><label style={S.check}><input type="checkbox" checked={sel.loop} onChange={(e) => persist(selected, { loop: e.target.checked })} /> repetir</label></Field>
              <Field label="Cor">
                <div style={{ display: "flex", gap: 6 }}>
                  {COLORS.map((c) => <div key={c} onClick={() => persist(selected, { color: c })} style={{ ...S.swatch, background: c, outline: sel.color === c ? "2px solid #fff" : "none" }} />)}
                </div>
              </Field>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const Field = ({ label, children }) => <label style={S.field}><span style={S.fieldLbl}>{label}</span>{children}</label>;

const S = {
  page: { minHeight: "100vh", background: "#0e0e10", color: "#eee", fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif", padding: 20, boxSizing: "border-box", userSelect: "none" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 800, letterSpacing: 3 },
  sub: { fontSize: 12, color: "#888" },
  headRight: { display: "flex", alignItems: "center", gap: 16 },
  masterLbl: { display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "#aaa", letterSpacing: 1 },
  mono: { fontFamily: "ui-monospace, monospace", width: 40 },
  panic: { background: "#e5484d", color: "#fff", border: 0, borderRadius: 8, padding: "10px 18px", fontWeight: 800, cursor: "pointer", letterSpacing: 1 },
  board: { display: "flex", flexDirection: "column", gap: 8, overflowX: "auto", paddingBottom: 8 },
  row: { display: "flex", gap: 8 },
  key: { position: "relative", width: 92, minWidth: 92, height: 92, border: "2px solid", borderRadius: 10, padding: 8, boxSizing: "border-box", cursor: "pointer", overflow: "hidden", display: "flex", flexDirection: "column", transition: "background .08s" },
  keyTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  keyLabel: { fontWeight: 800, fontSize: 18 },
  badge: { fontSize: 12, opacity: 0.8 },
  keyName: { fontSize: 11, lineHeight: 1.2, marginTop: 4, flex: 1, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", wordBreak: "break-word" },
  keyTime: { fontSize: 10, fontFamily: "ui-monospace, monospace", opacity: 0.8 },
  prog: { position: "absolute", left: 0, bottom: 0, height: 4, background: "#000a" },
  panel: { marginTop: 20, background: "#17171a", border: "1px solid #2a2a2e", borderRadius: 12, padding: 16 },
  panelHead: { display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 },
  bigKey: { fontSize: 24, fontWeight: 800, background: "#26262b", borderRadius: 8, padding: "2px 12px" },
  btn: { background: "#26262b", color: "#eee", border: "1px solid #333", borderRadius: 8, padding: "8px 12px", cursor: "pointer" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 },
  field: { display: "flex", flexDirection: "column", gap: 6 },
  fieldLbl: { fontSize: 11, color: "#999", letterSpacing: 1, textTransform: "uppercase" },
  input: { background: "#0e0e10", color: "#eee", border: "1px solid #333", borderRadius: 6, padding: "7px 9px" },
  check: { display: "flex", alignItems: "center", gap: 6, fontSize: 13 },
  swatch: { width: 22, height: 22, borderRadius: 6, cursor: "pointer" },
};

