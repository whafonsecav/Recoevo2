/* RECOEVO · motor de la presentación (sin librerías).
   - 11 pantallas; cada una avanza por pasos (data-b = aparece en el paso n; data-hasta = se va después del paso n).
   - Teclado: → espacio Enter Re Pág avanzan · ← Av Pág retroceden · Inicio/Fin · F pantalla completa · M más datos ·
     Q preguntas · G índice · P vista del presentador · B pantalla negra · Esc cierra. Clic o toque también avanzan.
   - La vista del presentador (otra ventana) muestra el guion de cada paso, el reloj y lo que sigue, sincronizada. */
(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const params = new URLSearchParams(location.search);
  const PRESENTADOR = params.has("presentador");
  const CAPTURA = params.has("captura");
  const mundo = $("#mundo"), esc = $("#escenario");
  const diapos = $$(".diapo");
  const VIZ = window.VIZ || {};
  const fmt = (n, d = 0) => new Intl.NumberFormat("es-CO", { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
  if (CAPTURA) document.body.classList.add("captura");

  // ---------------------------------------------------------------- canal entre la pantalla y la vista del presentador
  const canal = "BroadcastChannel" in window ? new BroadcastChannel("recoevo-final") : null;
  function enviar(m) {
    if (canal) canal.postMessage(m);
    else try { localStorage.setItem("recoevo-final", JSON.stringify(Object.assign({ r: Math.random() }, m))); } catch (e) { }
  }
  function escuchar(f) {
    if (canal) canal.onmessage = e => f(e.data);
    addEventListener("storage", e => { if (e.key === "recoevo-final" && e.newValue) try { f(JSON.parse(e.newValue)); } catch (x) { } });
  }

  // ---------------------------------------------------------------- partir títulos en palabras (para que suban una por una)
  function partir(el) {
    const frag = document.createDocumentFragment();
    let i = 0;
    const palabra = c => {
      const w = document.createElement("span"); w.className = "w";
      const s = document.createElement("span"); s.style.setProperty("--i", i++);
      if (typeof c === "string") s.textContent = c; else s.appendChild(c);
      w.appendChild(s); frag.appendChild(w);
    };
    for (const n of Array.from(el.childNodes)) {
      if (n.nodeType === 3) n.textContent.split(/(\s+)/).forEach(t => { if (!t) return; if (/^\s+$/.test(t)) frag.appendChild(document.createTextNode(" ")); else palabra(t); });
      else palabra(n);
    }
    el.textContent = ""; el.appendChild(frag);
  }

  diapos.forEach((d, n) => {
    d._n = n;
    d._pasos = Math.max(0, ...$$("[data-b]", d).map(e => +e.dataset.b));
    d._escenas = d.dataset.escena ? d.dataset.escena.split(",") : [];
    $$(".palabras", d).forEach(partir);
    d._notas = $$(".notas p", d).map(p => ({ p: +p.dataset.p, t: p.textContent.trim() }));
  });

  // ---------------------------------------------------------------- ruido del grano y escala del escenario
  (function () {
    const c = document.createElement("canvas"); c.width = c.height = 160;
    const g = c.getContext("2d"), im = g.createImageData(160, 160);
    for (let i = 0; i < im.data.length; i += 4) { const v = Math.random() * 255 | 0; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
    g.putImageData(im, 0, 0);
    mundo.style.setProperty("--ruido", `url(${c.toDataURL()})`);
  })();
  function escalar() {
    const k = Math.min(innerWidth / 1920, innerHeight / 1080);
    esc.style.setProperty("--k", k);
    window.K_ESC = k;
    dispatchEvent(new CustomEvent("escala", { detail: k }));
  }
  addEventListener("resize", escalar);
  escalar();

  if (PRESENTADOR) { vistaPresentador(); return; }

  // ---------------------------------------------------------------- cifras que ruedan (odómetro)
  // El número final queda oculto (marca el lugar exacto de cada carácter) y encima ruedan tiras de 0 a 9.
  function visibleEn(el, d) {
    for (let a = el; a && a !== d; a = a.parentElement) {
      if (a.dataset && a.dataset.b !== undefined && !a.classList.contains("on")) return false;
      if (a.classList && a.classList.contains("fuera")) return false;
    }
    return true;
  }
  function segundos(v) { v = (v || "").trim(); return v ? (parseFloat(v) || 0) * (/ms$/.test(v) ? 1 : 1000) : 0; }
  function retraso(el) {
    const a = el.closest(".a");
    const d = el.closest(".diapo");
    return (a ? segundos(getComputedStyle(a).getPropertyValue("--d")) : 0) + (d ? segundos(getComputedStyle(d).getPropertyValue("--r")) : 0);
  }
  function armarOdometro(el) {
    const n = +el.dataset.n, dec = +(el.dataset.dec || 0), pre = el.dataset.pre || "";
    const txt = pre + fmt(n, dec);
    el.classList.add("odo-listo");
    el.innerHTML = `<span class="fin">${txt}</span><span class="odo" aria-hidden="true"></span>`;
    const fin = el.firstChild.firstChild, odo = el.lastChild;
    const caja = el.getBoundingClientRect(), K = (caja.width / (el.offsetWidth || 1)) || 1, lh = el.offsetHeight;
    el.style.setProperty("--lh", lh + "px");
    const r = document.createRange(), cols = [];
    let j = 0;
    Array.from(txt).forEach((ch, i) => {
      r.setStart(fin, i); r.setEnd(fin, i + 1);
      const q = r.getBoundingClientRect();
      const c = document.createElement("span");
      c.style.left = ((q.left - caja.left) / K).toFixed(2) + "px";
      c.style.width = (q.width / K).toFixed(2) + "px";
      const t = document.createElement("span");
      t.style.lineHeight = lh + "px";
      if (/\d/.test(ch)) { t.className = "odo-t"; t.textContent = "01234567890123456789".split("").join("\n"); cols.push({ t, fin: 10 + +ch, j: j++ }); }
      else { t.className = "odo-s"; t.textContent = ch; }
      c.appendChild(t); odo.appendChild(c);
    });
    el._odo = { cols, lh };
  }
  function rodar(el, inmediato) {
    if (!el._odo) armarOdometro(el);
    const o = el._odo, base = retraso(el) + 140, lento = +(el.dataset.dur || 1.8) / 1.8;
    o.cols.forEach(c => {
      const dur = (1250 + c.j * 160) * lento, del = base + c.j * 75;
      c.t.style.transition = inmediato ? "none" : `transform ${dur}ms cubic-bezier(.12,.86,.18,1) ${del}ms`;
      c.t.style.animation = inmediato ? "none" : `desenfoque ${dur}ms cubic-bezier(.2,.8,.2,1) ${del}ms both`;
      c.t.style.transform = `translate3d(0, ${-c.fin * o.lh}px, 0)`;
    });
  }
  function volverACero(el) {
    if (!el._odo) return;
    el._odo.cols.forEach(c => { c.t.style.transition = "none"; c.t.style.animation = "none"; c.t.style.transform = "translate3d(0,0,0)"; });
  }
  function contadores(d) {
    for (const el of $$(".cuenta", d)) {
      const ver = visibleEn(el, d);
      if (ver && !el._hecho) { el._hecho = true; rodar(el, CAPTURA); }
      else if (!ver && el._hecho) { el._hecho = false; volverACero(el); }
    }
  }
  function reiniciarContadores(d) { for (const el of $$(".cuenta", d)) { el._hecho = false; volverACero(el); } }
  function armarTodo() {
    $$(".cuenta").forEach(el => { armarOdometro(el); if (el._hecho) rodar(el, true); });
    $$(".logo-svg .trazo").forEach(p => p.style.setProperty("--L", Math.ceil(p.getTotalLength() + 2)));
    if (actual >= 0) contadores(diapos[actual]);
  }

  // ---------------------------------------------------------------- transición de capítulo
  const capa = $("#capitulo");
  function capitulo(d) {
    const ojo = d.querySelector(".ojo");
    if (!ojo || !capa) return false;
    capa.querySelector(".cap-num").textContent = ojo.querySelector("b").textContent;
    capa.querySelector(".cap-nombre").textContent = Array.from(ojo.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join("").trim();
    capa.classList.remove("corre"); void capa.offsetWidth; capa.classList.add("corre");
    return true;
  }

  // ---------------------------------------------------------------- polvo de luz (partículas muy suaves en el fondo)
  (function polvo() {
    const c = $("#polvo"); if (!c || CAPTURA) return;
    const g = c.getContext("2d");
    const N = 70, ps = [];
    let W = 0, H = 0, q = 1, color = "164,214,94", antes = 0, cuadro = 0;
    const tam = () => { q = Math.min(1.5, window.devicePixelRatio || 1); W = c.width = Math.round(innerWidth * q); H = c.height = Math.round(innerHeight * q); };
    tam(); addEventListener("resize", tam);
    for (let i = 0; i < N; i++) ps.push({ x: Math.random(), y: Math.random(), r: .5 + Math.random() * 1.8, v: .006 + Math.random() * .02, f: Math.random() * 6.28, a: .05 + Math.random() * .28, z: .4 + Math.random() * .6 });
    const leerColor = () => {
      const v = getComputedStyle(mundo).getPropertyValue("--acento").trim();
      const m = v.match(/^#([0-9a-f]{6})$/i);
      if (m) color = [0, 2, 4].map(i => parseInt(m[1].substr(i, 2), 16)).join(",");
    };
    setInterval(leerColor, 900); leerColor();
    function paso(t) {
      requestAnimationFrame(paso);
      if (document.hidden || ++cuadro % 2) return;          // ≈ 30 cuadros por segundo: suave y liviano
      const dt = Math.min(.1, (t - antes) / 1000); antes = t;
      g.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.y -= p.v * dt * p.z; p.f += dt * .4;
        if (p.y < -.02) { p.y = 1.02; p.x = Math.random(); }
        const x = (p.x + Math.sin(p.f) * .012) * W, y = p.y * H, r = p.r * q * (1 + p.z);
        const brillo = p.a * (.6 + .4 * Math.sin(p.f * 1.7));
        const gr = g.createRadialGradient(x, y, 0, x, y, r * 4);
        gr.addColorStop(0, `rgba(${color},${brillo})`); gr.addColorStop(1, `rgba(${color},0)`);
        g.fillStyle = gr; g.beginPath(); g.arc(x, y, r * 4, 0, 6.283); g.fill();
      }
    }
    requestAnimationFrame(paso);
  })();

  // ---------------------------------------------------------------- pasos y navegación
  let actual = -1, paso = 0, tInicio = 0, ultimo = 0;
  function aplicarPaso(d, p) {
    d.dataset.paso = p;
    $$("[data-b]", d).forEach(e => e.classList.toggle("on", +e.dataset.b <= p));
    $$("[data-hasta]", d).forEach(e => e.classList.toggle("fuera", +e.dataset.hasta < p));
    contadores(d);
    const v = VIZ[d.dataset.viz];
    if (v && v.paso) v.paso(d, p);
    if (window.Escena) {
      let e = null;
      if (d._escenas.length) { e = d._escenas[Math.min(p, d._escenas.length - 1)]; if (e === "-") e = null; }
      window.Escena.estado(e);
    }
    hud();
    avisar();
  }
  function ir(n, dir = 1, pasoIni = null) {
    if (n < 0 || n >= diapos.length) return;
    const viejo = diapos[actual], nuevo = diapos[n];
    if (viejo && viejo !== nuevo) {
      viejo.classList.remove("activa", "entra", "entra-atras");
      viejo.classList.add(dir > 0 ? "sale" : "sale-atras");
      const v = VIZ[viejo.dataset.viz]; if (v && v.salir) v.salir(viejo);
      clearTimeout(viejo._t);
      viejo._t = setTimeout(() => { viejo.classList.remove("sale", "sale-atras"); reiniciarContadores(viejo); }, 680);
    }
    if (actual === 0 && n > 0 && !tInicio) tInicio = Date.now();
    actual = n;
    clearTimeout(nuevo._t);
    nuevo.classList.remove("sale", "sale-atras", "entra", "entra-atras", "con-cap");
    if (viejo !== nuevo) reiniciarContadores(nuevo);
    const conCap = !!(viejo && viejo !== nuevo && dir > 0 && !CAPTURA && viejo.dataset.acto !== nuevo.dataset.acto && capitulo(nuevo));
    nuevo.style.setProperty("--r", conCap ? ".6s" : "0s");
    void nuevo.offsetWidth;
    nuevo.classList.add("activa");
    if (viejo && viejo !== nuevo && !CAPTURA) {
      nuevo.classList.add(dir > 0 ? "entra" : "entra-atras");
      if (conCap) nuevo.classList.add("con-cap");
      setTimeout(() => nuevo.classList.remove("entra", "entra-atras", "con-cap"), 1700);
    }
    paso = pasoIni != null ? Math.min(pasoIni, nuevo._pasos) : (dir < 0 ? nuevo._pasos : 0);
    mundo.dataset.acto = nuevo.dataset.acto;
    const v = VIZ[nuevo.dataset.viz];
    if (v && v.entrar) v.entrar(nuevo, paso);
    aplicarPaso(nuevo, paso);
    try { history.replaceState(null, "", "#" + (n + 1) + (paso ? "." + paso : "")); } catch (e) { }
  }
  function siguiente() {
    if (abierta() || Date.now() - ultimo < 160) return; ultimo = Date.now();
    const d = diapos[actual];
    if (paso < d._pasos) { paso++; d.style.setProperty("--r", "0s"); aplicarPaso(d, paso); try { history.replaceState(null, "", "#" + (actual + 1) + "." + paso); } catch (e) { } }
    else if (actual < diapos.length - 1) ir(actual + 1, 1);
  }
  function anterior() {
    if (abierta() || Date.now() - ultimo < 160) return; ultimo = Date.now();
    const d = diapos[actual];
    if (paso > 0) { paso--; aplicarPaso(d, paso); try { history.replaceState(null, "", "#" + (actual + 1) + (paso ? "." + paso : "")); } catch (e) { } }
    else if (actual > 0) ir(actual - 1, -1);
  }

  // ---------------------------------------------------------------- HUD: actos, progreso y número
  const hudActos = $("#hud .actos");
  hudActos.innerHTML = window.RECOEVO_DATOS.actos.map(([k, t]) => `<span data-k="${k}">${t}</span>`).join("");
  function hud() {
    const d = diapos[actual];
    $$("span", hudActos).forEach(s => s.classList.toggle("on", s.dataset.k === d.dataset.acto));
    hudActos.style.opacity = actual === 0 || actual === diapos.length - 1 ? 0 : 1;
    const total = diapos.reduce((a, x) => a + x._pasos + 1, 0);
    let hecho = 0; for (let i = 0; i < actual; i++) hecho += diapos[i]._pasos + 1;
    $("#hud .progreso i").style.width = ((hecho + paso) / (total - 1) * 100).toFixed(2) + "%";
    $("#hud .contador").textContent = `${actual + 1} / ${diapos.length}`;
    $("#hud [data-accion=datos]").style.display = d.dataset.modal ? "" : "none";
  }

  // ---------------------------------------------------------------- capas: más datos, preguntas, índice
  const capas = { ventana: $("#ventana"), preguntas: $("#preguntas"), indice: $("#indice") };
  const abierta = () => Object.values(capas).some(c => c.classList.contains("abierta"));
  function cerrarCapas() { Object.values(capas).forEach(c => c.classList.remove("abierta")); avisar(); }
  function abrir(c, origen) {
    cerrarCapas();
    c.classList.add("abierta");
    const panel = c.querySelector(".panel");
    panel.style.transformOrigin = "50% 50%";
    if (origen && origen.getBoundingClientRect) {
      const pr = panel.getBoundingClientRect(), br = origen.getBoundingClientRect(), K = pr.width / panel.offsetWidth || 1;
      panel.style.transformOrigin = `${((br.left + br.width / 2 - pr.left) / K).toFixed(0)}px ${((br.top + br.height / 2 - pr.top) / K).toFixed(0)}px`;
    }
    panel.style.animation = "none"; void panel.offsetWidth; panel.style.animation = "";
    c.querySelector(".cuerpo").scrollTop = 0;
    avisar();
  }
  Object.values(capas).forEach(c => {
    c.addEventListener("click", e => { if (e.target === c) cerrarCapas(); });
    c.querySelector(".cerrar").addEventListener("click", cerrarCapas);
  });

  let nI = 0;
  const I = () => ` style="--i:${Math.min(nI++, 24)}"`;
  function bloque(b) {
    const h = b.titulo ? `<h3>${b.titulo}</h3>` : "";
    if (b.tipo === "cifras") return `<section class="bq">${h}<div class="cifras-v">${b.items.map(i => `<div class="cifra-v"${I()}><div class="v">${i.v}</div><div class="t">${i.t}</div>${i.f ? `<div class="f">${i.f}</div>` : ""}</div>`).join("")}</div></section>`;
    if (b.tipo === "tabla") {
      const num = b.num || [];
      const filas = b.filas.map((f, i) => `<tr${I()}${b.total && i === b.filas.length - 1 ? ' class="total"' : ""}>${f.map((c, j) => `<td${num.includes(j) ? ' class="n"' : ""}>${c}</td>`).join("")}</tr>`).join("");
      return `<section class="bq">${h}<table class="tabla-v"><thead><tr>${b.cols.map((c, j) => `<th${num.includes(j) ? ' class="n"' : ""}>${c}</th>`).join("")}</tr></thead><tbody>${filas}</tbody></table>${b.nota ? `<p class="nota-v">${b.nota}</p>` : ""}</section>`;
    }
    if (b.tipo === "barras") return `<section class="bq">${h}<div class="barras-v">${b.items.map(([n, v, et, cl]) => `<div class="fila${cl ? " " + cl : ""}"${I()}><span>${n}</span><i style="--w:${(v / b.max * 100).toFixed(2)}"></i><b>${et || (b.dinero ? "$" + fmt(v) : fmt(v))}</b></div>`).join("")}</div></section>`;
    if (b.tipo === "texto") return `<section class="bq">${h}<div class="texto-v">${b.html}</div></section>`;
    if (b.tipo === "citas") return `<section class="bq">${h}<div class="citas-v">${b.items.map(([q, a]) => `<blockquote${I()}>«${q}»<cite>${a}</cite></blockquote>`).join("")}</div></section>`;
    if (b.tipo === "temas") {
      const hay = new Set(window.BANCO.banco.flatMap(q => q.k));
      const items = b.items.filter(k => hay.has(k));
      if (!items.length) return "";
      return `<section class="bq"><h3>Preguntas del jurado sobre esto</h3><div class="temas-v">${items.map(k => `<button type="button" data-tema="${k}"${I()}>${k} <em>${window.BANCO.banco.filter(q => q.k.includes(k)).length}</em></button>`).join("")}</div></section>`;
    }
    return "";
  }
  function abrirDatos(id) {
    const m = window.MODALES[id || diapos[actual].dataset.modal];
    if (!m) return;
    const c = capas.ventana;
    c.querySelector(".k").textContent = m.k;
    c.querySelector("h2").textContent = m.t;
    c.querySelector(".cab p").textContent = m.p || "";
    nI = 0;
    c.querySelector(".cuerpo").innerHTML = m.b.map(bloque).join("");
    c.querySelectorAll("[data-tema]").forEach(b => b.addEventListener("click", () => { origenVentana = b; abrirPreguntas(b.dataset.tema); }));
    abrir(c, origenVentana);
    origenVentana = null;
  }
  let origenVentana = null;

  let temaActivo = null;
  function abrirPreguntas(tema) {
    const c = capas.preguntas, B = window.BANCO;
    const cuenta = k => B.banco.filter(q => q.k.includes(k)).length;
    const filtros = c.querySelector(".filtros");
    if (!filtros.children.length) {
      filtros.innerHTML = Object.keys(B.grupos).sort((a, b) => a.localeCompare(b, "es")).map(g =>
        `<div class="grupo-f"><span>${g}</span><div>${B.grupos[g].slice().sort((a, b) => a.localeCompare(b, "es")).map(k => `<button type="button" data-k="${k}">${k}<em>${cuenta(k)}</em></button>`).join("")}</div></div>`).join("");
      filtros.addEventListener("click", e => { const b = e.target.closest("button[data-k]"); if (b) mostrarTema(b.dataset.k === temaActivo ? null : b.dataset.k); });
      c.querySelector(".lista-q").addEventListener("click", e => { const b = e.target.closest(".q > button"); if (b) b.parentElement.classList.toggle("abierta"); });
    }
    mostrarTema(tema || null);
    abrir(c, origenVentana); origenVentana = null;
  }
  function mostrarTema(k) {
    temaActivo = k;
    const c = capas.preguntas, B = window.BANCO;
    c.querySelectorAll(".filtros button").forEach(b => b.classList.toggle("on", b.dataset.k === k));
    const lista = k ? B.banco.filter(q => q.k.includes(k)) : B.banco;
    c.querySelector(".cab h2").textContent = k ? `${k}: ${lista.length} preguntas` : `Respuestas listas: ${lista.length} preguntas`;
    c.querySelector(".lista-q").innerHTML = lista.map((q, i) => `<article class="q" style="--i:${Math.min(i, 14)}"><button type="button"><div class="pr">${q.q}</div><div class="rc">${q.r}</div></button><div class="det"><p><b>En sencillo:</b> ${q.s}</p>${q.c.length ? `<b>Cómo se calculó o de dónde sale:</b><ul>${q.c.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}</div></article>`).join("");
    c.querySelector(".lista-q").scrollTop = 0;
    const b = c.querySelector(".filtros button.on"); if (b) b.scrollIntoView({ block: "nearest" });
  }

  function abrirIndice() {
    const c = capas.indice;
    const nombres = Object.fromEntries(window.RECOEVO_DATOS.actos);
    c.querySelector(".cuerpo").innerHTML = diapos.map((d, i) => `<button type="button" class="mini${i === actual ? " actual" : ""}" data-i="${i}" style="--i:${i}"><small>${nombres[d.dataset.acto] || (i ? "Cierre" : "Inicio")}</small><b>${d.dataset.titulo}</b><span>${i + 1}</span></button>`).join("");
    c.querySelectorAll(".mini").forEach(b => b.addEventListener("click", () => { cerrarCapas(); ir(+b.dataset.i, +b.dataset.i >= actual ? 1 : -1); }));
    abrir(c, origenVentana); origenVentana = null;
  }

  function pantallaCompleta() {
    if (!document.fullscreenElement) (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || (() => { })).call(document.documentElement);
    else (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  }
  function abrirPresentador() {
    const u = location.href.split("#")[0].split("?")[0] + "?presentador";
    window.open(u, "recoevo-presentador", "width=1280,height=800");
  }

  // ---------------------------------------------------------------- entradas
  addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (k === "Escape") { if (abierta()) { cerrarCapas(); e.preventDefault(); } else $("#negro").classList.remove("on"); return; }
    if (abierta()) {
      if (k === "m" || k === "M" || k === "q" || k === "Q" || k === "g" || k === "G") { cerrarCapas(); e.preventDefault(); }
      return;
    }
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); siguiente(); }
    else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); anterior(); }
    else if (k === "Home") ir(0, -1);
    else if (k === "End") ir(diapos.length - 1, 1);
    else if (k === "f" || k === "F") pantallaCompleta();
    else if (k === "m" || k === "M") abrirDatos();
    else if (k === "q" || k === "Q") abrirPreguntas();
    else if (k === "g" || k === "G") abrirIndice();
    else if (k === "p" || k === "P") abrirPresentador();
    else if (k === "b" || k === "B" || k === ".") $("#negro").classList.toggle("on");
    else if (/^[1-9]$/.test(k)) ir(+k - 1, +k - 1 >= actual ? 1 : -1);
    else if (k === "0") ir(9, 9 >= actual ? 1 : -1);
  });
  // clic o toque: avanzar (salvo en botones y ventanas); deslizar: adelante o atrás
  let toque = null;
  esc.addEventListener("pointerdown", e => { toque = { x: e.clientX, y: e.clientY, t: Date.now() }; });
  esc.addEventListener("pointerup", e => {
    if (!toque) return;
    const dx = e.clientX - toque.x, dy = e.clientY - toque.y; const t0 = toque; toque = null;
    if (e.target.closest("button, a, .capa, #hud")) return;
    if (e.button !== undefined && e.button !== 0) return;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? siguiente() : anterior(); return; }
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12 && Date.now() - t0.t < 600) siguiente();
  });
  esc.addEventListener("contextmenu", e => { if (!e.target.closest(".capa")) { e.preventDefault(); anterior(); } });
  $$(".mas").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); origenVentana = b; abrirDatos(b.dataset.abrir); }));
  $$("#hud [data-accion]").forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    origenVentana = b;
    ({ datos: () => abrirDatos(), preguntas: () => abrirPreguntas(), indice: abrirIndice, presentador: abrirPresentador, pantalla: pantallaCompleta })[b.dataset.accion]();
  }));
  let reposo = 0;
  addEventListener("mousemove", () => {
    document.body.classList.add("mueve"); document.body.classList.remove("sin-cursor");
    clearTimeout(reposo);
    reposo = setTimeout(() => { document.body.classList.remove("mueve"); if (!abierta()) document.body.classList.add("sin-cursor"); }, 2600);
  });

  // ---------------------------------------------------------------- sincronía con la vista del presentador
  function avisar() {
    if (actual < 0) return;
    enviar({ tipo: "estado", actual, paso, total: diapos.length, tInicio, capa: abierta() });
  }
  escuchar(m => {
    if (!m || m.tipo !== "orden") return;
    if (m.que === "sig") siguiente();
    else if (m.que === "ant") anterior();
    else if (m.que === "ir") ir(m.n, m.n >= actual ? 1 : -1);
    else if (m.que === "hola") avisar();
    else if (m.que === "reloj") { tInicio = Date.now(); avisar(); }
    else if (m.que === "cerrar") cerrarCapas();
  });

  // ---------------------------------------------------------------- arranque
  for (const k of ["impacto", "canales"]) { const d = diapos.find(x => x.dataset.viz === k); if (d && VIZ[k] && VIZ[k].iniciar) VIZ[k].iniciar(d); }
  const h = (location.hash.match(/^#(\d+)(?:\.(\d+))?/) || []);
  const ini = CAPTURA ? (+params.get("captura") || 1) - 1 : h[1] ? Math.min(diapos.length, +h[1]) - 1 : 0;
  const pIni = CAPTURA ? +(params.get("paso") || 0) : h[2] ? +h[2] : 0;
  ir(ini, 1, pIni);
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => requestAnimationFrame(armarTodo));
  if (CAPTURA && window.Escena) { const sal = () => { if (window.Escena.listo) window.Escena.saltar(); else setTimeout(sal, 100); }; sal(); }
  addEventListener("hashchange", () => {
    const m = location.hash.match(/^#(\d+)(?:\.(\d+))?/);
    if (!m) return;
    const n = Math.min(diapos.length, +m[1]) - 1, p = +(m[2] || 0);
    if (n !== actual || p !== paso) ir(n, n >= actual ? 1 : -1, p);
  });
  window.RECOEVO = { ir, siguiente, anterior, abrirDatos, abrirPreguntas, abrirIndice, estado: () => ({ actual, paso, pasos: diapos[actual]._pasos }) };

  // ================================================================ vista del presentador
  function vistaPresentador() {
    document.body.classList.add("presentador");
    document.title = "RECOEVO · Presentador";
    const raiz = $("#presentador");
    const RITMO = 2.6;      // palabras por segundo al hablar con calma
    const palabras = t => (t.match(/\d[\d.,]*|[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || []).reduce((a, w) => a + (/^\d/.test(w) ? Math.max(1, Math.round(w.replace(/\D/g, "").length / 1.6)) : 1), 0);
    const seg = diapos.map(d => d._notas.reduce((a, n) => a + palabras(n.t) / RITMO + 1.2, 0));
    const totalSeg = seg.reduce((a, b) => a + b, 0);
    const mmss = s => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
    raiz.innerHTML = `
      <div class="arriba"><div class="reloj">0:00</div><div><div class="meta-t">Meta: menos de 5:00 · guion ≈ ${mmss(totalSeg)}</div><div class="meta-t ritmo"></div></div><div class="barra-t"><i></i></div><button type="button" class="reiniciar">Reiniciar reloj</button></div>
      <div class="actual-p"><div class="k"></div><h2></h2><div class="notas-p"></div></div>
      <div class="lado-p"><div class="caja-p sigue">Lo que sigue<b></b></div><div class="caja-p lista-p"></div><div class="caja-p">Teclas en esta ventana: → siguiente · ← anterior. En la pantalla: M más datos · Q preguntas · G índice · F pantalla completa.</div></div>
      <div class="botones-p"><button type="button" class="ant">◀ Anterior</button><button type="button" class="sig">Siguiente ▶</button></div>`;
    const lista = raiz.querySelector(".lista-p");
    lista.innerHTML = diapos.map((d, i) => `<div data-i="${i}"><span>${i + 1}. ${d.dataset.titulo}</span><span>${mmss(seg[i])}</span></div>`).join("");
    lista.addEventListener("click", e => { const f = e.target.closest("[data-i]"); if (f) enviar({ tipo: "orden", que: "ir", n: +f.dataset.i }); });
    raiz.querySelector(".sig").onclick = () => enviar({ tipo: "orden", que: "sig" });
    raiz.querySelector(".ant").onclick = () => enviar({ tipo: "orden", que: "ant" });
    raiz.querySelector(".reiniciar").onclick = () => enviar({ tipo: "orden", que: "reloj" });
    addEventListener("keydown", e => {
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); enviar({ tipo: "orden", que: "sig" }); }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); enviar({ tipo: "orden", que: "ant" }); }
    });
    let est = { actual: 0, paso: 0, tInicio: 0 };
    escuchar(m => { if (m && m.tipo === "estado") { est = m; pintar(); } });
    function pintar() {
      const d = diapos[est.actual];
      if (!d) return;
      raiz.querySelector(".k").textContent = `Pantalla ${est.actual + 1} de ${diapos.length} · paso ${est.paso + 1} de ${d._pasos + 1}`;
      raiz.querySelector("h2").textContent = d.dataset.titulo;
      raiz.querySelector(".notas-p").innerHTML = d._notas.map((n, i) =>
        `<p style="opacity:${n.p === est.paso ? 1 : n.p < est.paso ? .38 : .62}">${i ? `<span class="clic${n.p <= est.paso ? " hecho" : ""}">clic</span> ` : ""}${n.t}</p>`).join("");
      const sig = est.paso < d._pasos ? (d._notas.find(n => n.p === est.paso + 1) || {}).t : diapos[est.actual + 1] ? diapos[est.actual + 1].dataset.titulo : "Fin. Preguntas del jurado (tecla Q).";
      raiz.querySelector(".sigue b").textContent = sig ? (sig.length > 120 ? sig.slice(0, 118) + "…" : sig) : "";
      lista.querySelectorAll("[data-i]").forEach(f => f.classList.toggle("on", +f.dataset.i === est.actual));
    }
    setInterval(() => {
      const t = est.tInicio ? (Date.now() - est.tInicio) / 1000 : 0;
      const r = raiz.querySelector(".reloj");
      r.textContent = mmss(t);
      r.classList.toggle("pasado", t > 300);
      raiz.querySelector(".barra-t i").style.width = Math.min(100, t / 300 * 100) + "%";
      let esperado = 0; for (let i = 0; i < est.actual; i++) esperado += seg[i];
      const dif = t - esperado;
      raiz.querySelector(".ritmo").textContent = est.tInicio ? (dif > 8 ? `Vas ${mmss(dif)} atrasado: acorta un poco` : dif < -8 ? `Vas ${mmss(-dif)} adelantado` : "Vas a buen ritmo") : "El reloj arranca al pasar de la portada";
    }, 250);
    enviar({ tipo: "orden", que: "hola" });
  }
})();
