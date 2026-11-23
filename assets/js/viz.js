/* RECOEVO · visualizaciones de datos hechas a mano (sin librerías): montaña de basura, puntos de hogares,
   meses de Doña Juana, dona de canales y curva de caja. Cada una responde a los pasos de su diapositiva. */
(function () {
  "use strict";
  const CAPTURA = /captura/.test(location.search);
  const SVGNS = "http://www.w3.org/2000/svg";
  const fmt = (n, d = 0) => new Intl.NumberFormat("es-CO", { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
  const azar = semilla => () => { semilla |= 0; semilla = semilla + 0x6D2B79F5 | 0; let t = Math.imul(semilla ^ semilla >>> 15, 1 | semilla); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const sale = x => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);

  const VIZ = window.VIZ = {};

  // ======================================================================== 1 · la montaña de basura (cada cuadro = 10 t)
  const B = { lienzo: null, g: null, q: 1, parts: [], t0: 0, raf: 0, org: 0, orgT: 0, dj: 0, dim: 0, rebanada: null, quieta: false, djV: 0, dimV: 0 };
  const GRIS = ["#3d5a4d", "#4a6a5b", "#58776a", "#668478", "#455f53"];
  const ORG = ["#E9A23B", "#D9912E", "#F0B65C", "#C98328", "#F3C77A", "#DFA048", "#E5AE52"];
  function prepararBasura(lienzo) {
    B.lienzo = lienzo; B.g = lienzo.getContext("2d");
    const N = 3330, celda = 10, ncol = 112, cx = 1365, sigma = 230, x0 = cx - ncol * celda / 2, base = 930;
    const pesos = [];
    let suma = 0;
    for (let c = 0; c < ncol; c++) { const x = x0 + c * celda + celda / 2 - cx; const v = Math.exp(-x * x / (2 * sigma * sigma)); pesos.push(v); suma += v; }
    const alto = pesos.map(v => Math.floor(v / suma * N));
    let resto = N - alto.reduce((a, b) => a + b, 0);
    const orden = [...alto.keys()].sort((a, b) => pesos[b] - pesos[a]);
    for (let k = 0; resto > 0; k++, resto--) alto[orden[k % ncol]]++;
    const r = azar(11);
    const parts = [];
    for (let c = 0; c < ncol; c++) for (let j = 0; j < alto[c]; j++) parts.push({ x: x0 + c * celda, y: base - (j + 1) * celda, c, j, r: r() });
    parts.sort((a, b) => (a.j + a.r * 7) - (b.j + b.r * 7));
    parts.forEach((p, i) => {
      p.t = i / N * 2.9 + p.r * 0.3;
      p.y0 = -30 - r() * 260;
      p.gris = GRIS[(r() * GRIS.length) | 0];
      p.esOrg = r() < 0.6;
      p.verde = ORG[(r() * ORG.length) | 0];
      p.dOrg = (p.x - x0) / (ncol * celda) * 0.7 + r() * 0.25;
    });
    // Doña Juana: 6.800 de 33.300 t (≈ 680 cuadros) en las columnas del centro
    let izq = orden[0], der = orden[0], cuenta = alto[orden[0]];
    while (cuenta < Math.round(N * 6800 / 33300)) {
      if ((alto[izq - 1] || 0) >= (alto[der + 1] || 0)) { izq--; cuenta += alto[izq]; } else { der++; cuenta += alto[der]; }
    }
    B.rebanada = { izq, der, x1: x0 + izq * celda, x2: x0 + (der + 1) * celda, tope: base - Math.max(...alto.slice(izq, der + 1)) * celda };
    parts.forEach(p => { p.dj = p.c >= izq && p.c <= der; });
    B.parts = parts;
    B.base = base;
    tamanoBasura();
  }
  function tamanoBasura() {
    if (!B.lienzo) return;
    B.q = Math.min(2, Math.max(0.5, (window.K_ESC || 1) * (window.devicePixelRatio || 1)));
    B.lienzo.width = Math.round(1920 * B.q); B.lienzo.height = Math.round(1080 * B.q);
    B.g.setTransform(B.q, 0, 0, B.q, 0, 0);
    dibujarBasura(performance.now(), true);
  }
  addEventListener("escala", tamanoBasura);
  function dibujarBasura(ahora, una) {
    const g = B.g, t = (ahora - B.t0) / 1000;
    g.clearRect(0, 0, 1920, 1080);
    const kOrg = B.org ? Math.max(0, (ahora - B.orgT) / 1000) : 0;
    let quieta = t > 4.2 && (!B.org || kOrg > 2.2);
    const tam = 8.6;
    B.djV += ((B.dj || 0) - (B.djV || 0)) * 0.12;
    B.dimV += ((B.dim || 0) - (B.dimV || 0)) * 0.12;
    if (Math.abs(B.dj - B.djV) > 0.004 || Math.abs(B.dim - B.dimV) > 0.004) quieta = false;
    for (const p of B.parts) {
      const k = (t - p.t) / 0.75;
      if (k <= 0) continue;
      const y = k >= 1 ? p.y : p.y0 + (p.y - p.y0) * (k * k);
      let alfa = 1;
      if (B.djV > 0.001 && !p.dj) alfa *= 1 - 0.78 * B.djV;
      alfa *= 1 - 0.86 * B.dimV;
      g.globalAlpha = alfa;
      g.fillStyle = p.gris;
      g.fillRect(p.x, y, tam, tam);
      if (p.esOrg && B.org) {
        const o = Math.min(1, Math.max(0, (kOrg - p.dOrg) / 0.55));
        if (o > 0) { g.globalAlpha = alfa * o; g.fillStyle = p.verde; g.fillRect(p.x, y, tam, tam); }
      }
    }
    g.globalAlpha = 1;
    // rótulo de Doña Juana sobre su parte de la montaña
    if (B.djV > 0.02) {
      const s = B.rebanada, a = B.djV * (1 - B.dimV);
      g.globalAlpha = a;
      g.strokeStyle = "#E9A23B"; g.lineWidth = 2;
      g.strokeRect(s.x1 - 6, s.tope - 8, s.x2 - s.x1 + 12, B.base - s.tope + 14);
      g.fillStyle = "#E9A23B";
      g.font = "600 32px Lexend, sans-serif"; g.textAlign = "center";
      g.fillText("Doña Juana", (s.x1 + s.x2) / 2, s.tope - 62);
      g.font = "400 24px Nunito, sans-serif"; g.fillStyle = "rgba(242,246,243,.8)";
      g.fillText("≈ 6.800 t al día", (s.x1 + s.x2) / 2, s.tope - 28);
      g.globalAlpha = 1;
    }
    if (!una) { if (quieta) B.raf = 0; else B.raf = requestAnimationFrame(n => dibujarBasura(n)); }
  }
  function correrBasura() { if (!B.raf) B.raf = requestAnimationFrame(n => dibujarBasura(n)); }
  VIZ.basura = {
    entrar(d, paso) {
      if (!B.lienzo) prepararBasura(d.querySelector("[data-lienzo=basura]"));
      B.t0 = performance.now() - (paso > 0 || CAPTURA ? 20000 : -350);
      B.org = 0; B.dj = 0; B.dim = 0; B.djV = 0; B.dimV = 0;
      this.paso(d, paso, true);
      if (CAPTURA) { B.djV = B.dj; B.dimV = B.dim; B.orgT = -1e9; dibujarBasura(performance.now() + 20000, true); return; }
      correrBasura();
    },
    paso(d, paso, inicio) {
      const conOrg = paso >= 1;
      if (conOrg && !B.org) { B.org = 1; B.orgT = inicio ? performance.now() - 10000 : performance.now(); }
      if (!conOrg) B.org = 0;
      B.dj = paso === 2 ? 1 : 0;
      B.dim = paso >= 3 ? 1 : 0;
      if (inicio) { B.djV = B.dj; B.dimV = B.dim; }
      if (CAPTURA) { B.djV = B.dj; B.dimV = B.dim; B.orgT = -1e9; dibujarBasura(performance.now(), true); return; }
      correrBasura();
    },
    salir() { }
  };

  // ======================================================================== 2 · hogares de Bogotá y meses de Doña Juana
  VIZ.impacto = {
    iniciar(d) {
      const rej = d.querySelector(".rejilla-h");
      if (rej && !rej.children.length) {
        const total = 290, si = 74, cols = 20;  // 2,9 M hogares; cada punto 10.000; 735.450 ≈ 74 puntos
        const filas = Math.ceil(total / cols), cx = (cols - 1) / 2, cy = (filas - 1) / 2;
        for (let i = 0; i < total; i++) {
          const el = document.createElement("i");
          const dist = Math.hypot(i % cols - cx, Math.floor(i / cols) - cy);
          el.style.setProperty("--j", (dist * 9).toFixed(0));          // aparecen en onda desde el centro
          el.style.setProperty("--k", (dist * 3.2).toFixed(1));
          if (Math.floor((i + 1) * si / total) > Math.floor(i * si / total)) el.className = "si";
          rej.appendChild(el);
        }
      }
      const mes = d.querySelector(".meses");
      if (mes && !mes.children.length) {
        for (let i = 0; i < 120; i++) {
          const el = document.createElement("i");
          el.style.setProperty("--j", i);
          if (i < 2) el.className = "si";
          mes.appendChild(el);
        }
      }
    },
    entrar(d) { this.iniciar(d); }
  };

  // ======================================================================== 3 · dona de canales
  VIZ.canales = {
    iniciar(d) {
      const svg = d.querySelector(".dona svg");
      if (!svg || svg.children.length) return;
      const C = 2 * Math.PI * 220;
      const segs = [35, 35, 15, 15];
      let ini = 0, html = `<circle class="fondo-d" cx="310" cy="310" r="220"/>`;
      segs.forEach((p, i) => {
        const largo = p / 100 * C - 8;
        html += `<circle class="seg-d s${i + 1}" cx="310" cy="310" r="220" style="--len:${largo.toFixed(1)};--d:${(0.25 + i * 0.3).toFixed(2)}s;stroke-dashoffset:${(-ini).toFixed(1)}"/>`;
        ini += p / 100 * C;
      });
      svg.innerHTML = html;
    },
    entrar(d) { this.iniciar(d); }
  };

  // ======================================================================== 3b · galería del trabajo de campo (una foto grande que cambia sola)
  const G = { fotos: [], pies: [], prog: [], borde: null, i: -1, t: 0, corre: false, DUR: 4600 };
  function mostrarFoto(n, primera) {
    const prev = G.i;
    G.i = n;
    G.fotos.forEach((f, k) => { if (k !== n && k !== prev) f.classList.remove("ve", "entra"); });
    const f = G.fotos[n];
    f.classList.remove("ve", "entra"); void f.offsetWidth;
    f.classList.add("ve");
    if (!primera) {
      f.classList.add("entra");
      G.borde.classList.remove("corre"); void G.borde.offsetWidth; G.borde.classList.add("corre");
      setTimeout(() => { if (G.i === n) { f.classList.remove("entra"); if (prev >= 0 && prev !== n) G.fotos[prev].classList.remove("ve"); } }, 1350);
    }
    G.pies.forEach((p, k) => p.classList.toggle("ve", k === n));
    G.prog.forEach((p, k) => { p.classList.remove("corre"); p.classList.toggle("hecho", k < n); });
    const b = G.prog[n]; void b.offsetWidth; b.style.setProperty("--t", G.DUR + "ms"); b.classList.add("corre");
  }
  function siguienteFoto() { if (!G.corre) return; mostrarFoto((G.i + 1) % G.fotos.length); G.t = setTimeout(siguienteFoto, G.DUR); }
  VIZ.campo = {
    entrar(d, paso) {
      if (!G.fotos.length) {
        G.fotos = Array.from(d.querySelectorAll(".g-foto"));
        G.pies = Array.from(d.querySelectorAll(".g-pie"));
        G.prog = Array.from(d.querySelectorAll(".g-prog i"));
        G.borde = d.querySelector(".g-borde");
      }
      this.parar();
      G.i = -1;
      mostrarFoto(0, true);
      this.paso(d, paso);
    },
    paso(d, paso) {
      if (paso === 0 && !CAPTURA) { if (!G.corre) { G.corre = true; clearTimeout(G.t); G.t = setTimeout(siguienteFoto, G.DUR); } }
      else this.parar();
    },
    parar() { G.corre = false; clearTimeout(G.t); },
    salir() { this.parar(); }
  };

  // ======================================================================== 4 · curva de caja acumulada (mes 0 a 120)
  // Se dibuja con JavaScript en cada cuadro: avanza mes a mes y, en el último paso, la vista se aleja (zoom) para mostrar los 10 años.
  const J = { svg: null, m: 0, mMeta: 0, v: null, vMeta: null, paso: 0, raf: 0, t: 0 };
  const VISTAS = [{ m1: 60, vmin: -6000, vmax: 3000 }, { m1: 120, vmin: -7000, vmax: 29000 }];
  const X0 = 90, X1 = 980, Y0 = 20, Y1 = 560;
  function prepararCurva(svg) {
    J.svg = svg;
    svg.innerHTML =
      `<defs><linearGradient id="gradA" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="rgba(164,214,94,.34)"/><stop offset="1" stop-color="rgba(164,214,94,0)"/></linearGradient></defs>` +
      `<g class="eje"></g><path class="area-neg"/><path class="area-pos"/><path class="curva-r"/><path class="curva-v"/>` +
      `<g class="cabeza"><circle class="punta-h" r="12"/><circle class="punta" r="7"/></g>` +
      ["m17|#E9A23B|Mes 16|punto de equilibrio", "m50|#A4D65E|Mes 51|recuperamos la inversión"].map(x => { const [id, c, t1, t2] = x.split("|");
        return `<g class="marca" data-id="${id}" style="opacity:0"><line stroke="${c}"/><circle class="h" r="10" stroke="${c}"/><circle class="p" r="10" stroke="${c}"/><text class="t1" fill="${c}">${t1}</text><text class="s">${t2}</text></g>`; }).join("");
    J.v = Object.assign({}, VISTAS[0]); J.vMeta = VISTAS[0];
  }
  function dibujarCurva() {
    const f = window.RECOEVO_DATOS.caja, v = J.v, svg = J.svg;
    const px = m => X0 + m / v.m1 * (X1 - X0);
    const py = val => Y0 + (v.vmax - val) / (v.vmax - v.vmin) * (Y1 - Y0);
    const valor = m => { const i = Math.floor(m), k = m - i; return i >= 120 ? f[120] : f[i] + (f[i + 1] - f[i]) * k; };
    // ejes
    const paso = v.vmax - v.vmin > 20000 ? 10000 : 2000;
    let ejes = "";
    for (let val = Math.ceil(v.vmin / paso) * paso; val <= v.vmax; val += paso) {
      const y = py(val);
      ejes += `<line ${val === 0 ? 'class="cero"' : ""} x1="${X0}" x2="${X1}" y1="${y}" y2="${y}"/>`;
      ejes += `<text x="${X0 - 14}" y="${y + 6}" text-anchor="end">${val === 0 ? "$0" : (val > 0 ? "+" : "−") + "$" + fmt(Math.abs(val)) + " M"}</text>`;
    }
    const cadaAnio = v.m1 > 90 ? 2 : 1;
    for (let a = cadaAnio; a * 12 <= v.m1 + 0.1; a += cadaAnio) ejes += `<text x="${px(a * 12)}" y="${Y1 + 38}" text-anchor="middle">Año ${a}</text>`;
    svg.querySelector(".eje").innerHTML = ejes;
    // curva: tramo rojo (antes de recuperar, mes 50) y tramo verde (después)
    const m = Math.min(J.m, 120);
    const pts = (desde, hasta) => { const out = []; for (let i = Math.ceil(desde); i < hasta; i++) out.push(`${px(i).toFixed(1)},${py(f[i]).toFixed(1)}`); out.push(`${px(hasta).toFixed(1)},${py(valor(hasta)).toFixed(1)}`); return out; };
    const mr = Math.min(m, 50);
    const rojo = pts(0, mr);
    svg.querySelector(".curva-r").setAttribute("d", "M" + px(0) + "," + py(f[0]) + " L" + rojo.join(" L"));
    svg.querySelector(".curva-v").setAttribute("d", m > 51 ? "M" + px(51) + "," + py(f[51]) + " L" + pts(51, m).join(" L") : "");
    svg.querySelector(".area-neg").setAttribute("d", "M" + px(0) + "," + py(0) + " L" + px(0) + "," + py(f[0]) + " L" + rojo.join(" L") + ` L${px(mr)},${py(0)} Z`);
    svg.querySelector(".area-neg").style.opacity = J.paso >= 2 ? 1 : 0;
    svg.querySelector(".area-pos").setAttribute("d", m > 51 ? `M${px(51)},${py(0)} L` + pts(51, m).join(" L") + ` L${px(m)},${py(0)} Z` : "");
    svg.querySelector(".area-pos").style.opacity = J.paso >= 3 ? 1 : 0;
    // punta luminosa: va delante de la curva mientras se dibuja
    const cab = svg.querySelector(".cabeza");
    cab.setAttribute("transform", `translate(${px(m).toFixed(1)},${py(valor(m)).toFixed(1)})`);
    cab.style.setProperty("--c", m > 51 ? "#A4D65E" : "#E9A23B");
    cab.style.opacity = m > 0.5 ? 1 : 0;
    // marcas (elementos fijos: solo se mueven y se encienden)
    const poner = (id, mes, dx, dy, ancla, ver, sinTexto) => {
      const g = svg.querySelector(`[data-id=${id}]`), x = px(mes), y = py(f[mes]);
      g.style.opacity = ver ? 1 : 0;
      const [ln, h, p, t1, t2] = g.children;
      for (const el of [ln, t1, t2]) el.style.opacity = sinTexto ? 0 : 1;
      ln.setAttribute("x1", x); ln.setAttribute("y1", y); ln.setAttribute("x2", x + dx); ln.setAttribute("y2", y + dy);
      for (const c of [h, p]) { c.setAttribute("cx", x); c.setAttribute("cy", y); }
      for (const [t, off] of [[t1, -34], [t2, -6]]) { t.setAttribute("x", x + dx); t.setAttribute("y", y + dy + off); t.setAttribute("text-anchor", ancla); }
    };
    const fin = J.paso >= 3;
    poner("m17", 16, 40, -70, "start", J.paso >= 2 && m >= 16, fin);
    poner("m50", 51, -40, fin ? -100 : -84, "end", J.paso >= 2 && m >= 51);
  }
  function animarCurva(ahora) {
    const dt = Math.min(0.05, (ahora - (J.t || ahora)) / 1000); J.t = ahora;
    const velMes = J.paso >= 3 ? 46 : 26;                       // meses por segundo
    if (J.m < J.mMeta) J.m = Math.min(J.mMeta, J.m + velMes * dt * (0.35 + 0.65 * Math.min(1, (J.mMeta - J.m) / 8)));
    else J.m = J.mMeta;
    let quieto = J.m === J.mMeta;
    const k = 1 - Math.exp(-dt * 2.6);
    for (const c of ["m1", "vmin", "vmax"]) { J.v[c] += (J.vMeta[c] - J.v[c]) * k; if (Math.abs(J.vMeta[c] - J.v[c]) > 0.5) quieto = false; else J.v[c] = J.vMeta[c]; }
    dibujarCurva();
    J.raf = quieto ? 0 : requestAnimationFrame(animarCurva);
  }
  VIZ.cifras = {
    entrar(d, paso) {
      if (!J.svg) prepararCurva(d.querySelector(".jcurva"));
      J.m = 0; J.v = Object.assign({}, VISTAS[paso >= 3 ? 1 : 0]);
      this.paso(d, paso, true);
    },
    paso(d, paso, inicio) {
      J.paso = paso;
      J.mMeta = [0, 0, 51, 120][Math.min(3, paso)];
      J.vMeta = VISTAS[paso >= 3 ? 1 : 0];
      if (inicio && paso > 0) J.m = J.mMeta;
      if (CAPTURA) { J.m = J.mMeta; J.v = Object.assign({}, J.vMeta); dibujarCurva(); return; }
      cancelAnimationFrame(J.raf); J.t = 0;
      const ir = () => { J.raf = requestAnimationFrame(animarCurva); };
      if (inicio) setTimeout(ir, 500); else ir();
    },
    salir() { cancelAnimationFrame(J.raf); J.raf = 0; }
  };
})();
