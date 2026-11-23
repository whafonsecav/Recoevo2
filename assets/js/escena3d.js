/* RECOEVO · escena 3D de la presentación.
   Es el mismo producto del póster, de la web y del video (recoevo.glb, exportado de Blender, con sus pivotes:
   piv_tapa, piv_puerta, piv_pedal_der, corr_balde, corr_cremallera, rot_pinon, rot_eje…).
   Cada paso de la diapositiva pide un «estado» (revelar, echa, pisa, olor, guarda, despiece, vitrina, cierre) y la escena
   se mueve sola hacia él: cámara, giro del producto, tapa, puerta, balde, rayos X, despiece y etiquetas. */
(function () {
  "use strict";
  const T = window.THREE;
  const lienzo = document.getElementById("lienzo3d");
  const respaldo = document.getElementById("respaldo3d");
  const svgL = document.getElementById("lineas3d");
  const capaEt = document.getElementById("etiquetas3d");
  const CAPTURA = /captura/.test(location.search);
  const suave = x => { x = Math.min(1, Math.max(0, x)); return x * x * x * (x * (x * 6 - 15) + 10); };
  const lim = x => Math.min(1, Math.max(0, x));
  const enCubica = x => (x = lim(x), x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const enQuinta = x => (x = lim(x), x < .5 ? 16 * x ** 5 : 1 - Math.pow(-2 * x + 2, 5) / 2);
  const salCubica = x => 1 - Math.pow(1 - lim(x), 3);
  const atras = x => { x = lim(x); const s = 1.0; return 1 + (s + 1) * Math.pow(x - 1, 3) + s * Math.pow(x - 1, 2); };
  const B2G = v => new T.Vector3(v[0], v[2], -v[1]);           // ejes de Blender → glTF
  const SVGNS = "http://www.w3.org/2000/svg";

  const API = { listo: false, estado() {}, saltar() {}, nombre: null };
  window.Escena = API;

  // ---------------------------------------------------------------- respaldo si el navegador no tiene WebGL
  function usarRespaldo() {
    API.estado = nombre => {
      API.nombre = nombre;
      respaldo.classList.toggle("visible", !!nombre && nombre !== "despiece");
      Object.assign(respaldo.style, { left: "1010px", top: "150px", height: "820px", width: "auto" });
    };
  }

  let render = null;
  try {
    render = new T.WebGLRenderer({ canvas: lienzo, antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: CAPTURA });
    if (!render.getContext()) throw new Error("sin contexto");
  } catch (e) { render = null; }
  if (!render) { usarRespaldo(); return; }

  render.outputEncoding = T.sRGBEncoding;
  render.toneMapping = T.ACESFilmicToneMapping;
  render.toneMappingExposure = 1.1;
  render.shadowMap.enabled = true;
  render.shadowMap.type = T.PCFSoftShadowMap;
  render.setClearColor(0x000000, 0);

  const escena = new T.Scene();
  const cam = new T.PerspectiveCamera(28, 16 / 9, 0.02, 40);

  // ---------------------------------------------------------------- estudio oscuro con cajas de luz (reflejos del plástico)
  (function entorno() {
    const e = new T.Scene();
    const caja = new T.Mesh(new T.BoxGeometry(12, 8, 12), new T.MeshBasicMaterial({ color: 0x6f6a5c, side: T.BackSide }));
    caja.position.y = 3; e.add(caja);
    const panel = (w, h, pos, k, color = 0xffffff) => {
      const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: new T.Color(color).multiplyScalar(k), side: T.DoubleSide }));
      m.position.set(...pos); m.lookAt(0, 0.4, 0); e.add(m);
    };
    panel(4.5, 2.6, [0, 5, 1.2], 4.2);              // caja grande arriba
    panel(1.1, 4.2, [-4.2, 2.2, 1.4], 3.0);         // tira izquierda
    panel(1.1, 4.2, [4.2, 2.2, -0.6], 2.4);         // tira derecha
    panel(3.2, 1.2, [0.5, 1.4, 5], 1.4);            // relleno de frente
    panel(2.4, 3.2, [0, 2.2, -5], 2.0, 0xc8ffe0);   // contraluz verdoso
    const pm = new T.PMREMGenerator(render);
    escena.environment = pm.fromScene(e, 0.035).texture;
    pm.dispose();
  })();

  const clave = new T.DirectionalLight(0xfff3e4, 1.55);
  clave.position.set(-1.7, 3.3, 2.3);
  clave.castShadow = true;
  clave.shadow.mapSize.set(2048, 2048);
  Object.assign(clave.shadow.camera, { left: -1.1, right: 1.1, top: 1.6, bottom: -0.6, near: 0.5, far: 8 });
  clave.shadow.bias = -0.0004;
  clave.shadow.radius = 7;
  const contraA = new T.SpotLight(0x9ff5c3, 2.4, 9, 0.62, 0.8); contraA.position.set(2.3, 2.1, -2.5);
  const contraB = new T.SpotLight(0xffffff, 1.5, 9, 0.62, 0.8); contraB.position.set(-2.5, 1.9, -2.1);
  [contraA, contraB].forEach(l => { l.target.position.set(0, 0.3, 0); escena.add(l.target); });
  const cielo = new T.HemisphereLight(0xffffff, 0x0e140f, 0.3);
  escena.add(clave, contraA, contraB, cielo);

  const piso = new T.Mesh(new T.PlaneGeometry(6, 6), new T.ShadowMaterial({ opacity: 0.26, color: 0x2a3a22 }));
  piso.rotation.x = -Math.PI / 2; piso.receiveShadow = true; escena.add(piso);
  function texturaBrillo() {
    const c = document.createElement("canvas"); c.width = c.height = 256;
    const g = c.getContext("2d"), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, "rgba(120,200,90,.42)"); gr.addColorStop(.38, "rgba(150,210,110,.16)"); gr.addColorStop(1, "rgba(150,210,110,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    const t = new T.CanvasTexture(c); t.encoding = T.sRGBEncoding; return t;
  }
  const brillo = new T.Mesh(new T.PlaneGeometry(1.7, 1.7), new T.MeshBasicMaterial({ map: texturaBrillo(), transparent: true, depthWrite: false }));
  brillo.rotation.x = -Math.PI / 2; brillo.position.y = 0.002; escena.add(brillo);
  const anillo = (r1, r2, op) => {
    const m = new T.Mesh(new T.RingGeometry(r1, r2, 160), new T.MeshBasicMaterial({ color: 0x0E9A48, transparent: true, opacity: op, depthWrite: false, side: T.DoubleSide }));
    m.rotation.x = -Math.PI / 2; m.position.y = 0.003; escena.add(m); return m;
  };
  const anillos = [anillo(0.40, 0.405, 0.5), anillo(0.52, 0.523, 0.26), anillo(0.66, 0.662, 0.14)];

  // ---------------------------------------------------------------- modelo
  const raiz = new T.Group(); escena.add(raiz);
  let modelo = null, N = {};
  const mallas = [];               // { m, g (grupo G_*), base }
  const aristas = [];              // líneas de rayos X
  const FANTASMA = { G_gabinete: 0.08, G_puerta: 0.08, G_tapa: 0.12, G_base: 0.12, G_camara: 0.32, G_deposito: 0.22, G_balde: 0.16 };
  const CON_ARISTAS = ["Gabinete", "Puerta frontal", "Tapa", "Base", "Camara y tolva de corte", "Balde 10 L"];
  const ORDEN = ["G_tapa", "G_gabinete", "G_puerta", "G_balde", "G_base", "G_patas", "G_pedal_der", "G_pedal_izq", "G_deposito",
    "G_camara", "G_seguro", "G_peine", "G_eje", "G_perilla", "G_reten_izq", "G_reten_der", "G_pinon", "G_cremallera"];
  const SEPARAR = {
    G_tapa: [0, 0.02, 0.56], G_gabinete: [0, 0.04, 0.42], G_puerta: [-0.44, -0.30, -0.02, -0.45], G_balde: [0, -0.34, -0.12],
    G_base: [0, 0.02, -0.20], G_patas: [0, 0.02, -0.28], G_pedal_der: [0.32, -0.16, -0.14], G_pedal_izq: [-0.30, -0.16, -0.16],
    G_deposito: [-0.42, 0.02, 0.02, 0.3], G_camara: [0, 0, 0.04], G_seguro: [0.30, -0.05, 0.14], G_peine: [0, -0.22, -0.07],
    G_eje: [0, -0.13, -0.02], G_perilla: [-0.24, -0.13, -0.02], G_reten_izq: [-0.075, -0.13, -0.02], G_reten_der: [0.075, -0.13, -0.02],
    G_pinon: [0.17, -0.13, -0.02], G_cremallera: [0.34, -0.10, -0.06],
    G_tapa_filtro: [0, 0, 0.085], G_filtro: [0, 0, 0.045],
    G_pata0: [0.035, 0.035, 0], G_pata1: [-0.035, 0.035, 0], G_pata2: [0.035, -0.035, 0], G_pata3: [-0.035, -0.035, 0]
  };
  const LEVANTAR = { G_tapa_filtro: [0, 0, 0.13], G_filtro: [0, 0, 0.075] };
  const ANG_REPOSO = -12 * Math.PI / 180, ANG_PISADO = 2.4 * Math.PI / 180;

  function bufferDeBase64(b64) {
    const bin = atob(b64), u = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u.buffer;
  }
  const fuente = window.RECOEVO_GLB_B64 ? bufferDeBase64(window.RECOEVO_GLB_B64) : "assets/modelo/recoevo.glb";
  window.cargarGLB(fuente).then(({ escena: m, porNombre }) => {
    modelo = m; N = porNombre;
    raiz.add(modelo);
    modelo.traverse(o => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      o.castShadow = true; o.receiveShadow = true;
      let a = o, g = null;
      while (a && !g) { if (/^G_/.test(a.name) && !/^G_pata\d/.test(a.name)) g = a.name; a = a.parent; }
      const base = { op: o.material.opacity, tr: o.material.transparent, em: o.material.emissive.clone(), dw: o.material.depthWrite };
      mallas.push({ m: o, g, base });
      if (CON_ARISTAS.includes(o.name)) {
        const l = new T.LineSegments(new T.EdgesGeometry(o.geometry, 32), new T.LineBasicMaterial({ color: 0x0E9A48, transparent: true, opacity: 0, depthWrite: false }));
        l.visible = false; o.add(l); aristas.push(l);
      }
    });
    for (const k of ["piv_pedal_der", "piv_pedal_izq"]) if (N[k]) N[k].rotation.x = ANG_REPOSO;
    API.listo = true;
    if (pendiente !== undefined) API.estado(pendiente);
  }).catch(err => { console.warn("RECOEVO 3D:", err); usarRespaldo(); API.estado(pendiente); });

  // ---------------------------------------------------------------- estados
  const DEF = { th: 0.5, ph: 1.24, r: 2.1, ox: 0, oy: 0.27, oz: 0, desp: 0.13, rayos: 0, sep: 0, tapa: 0, puerta: 0, balde: 0, lev: 0, foco: 0, luz: 1 };
  const ESTADOS = {
    revelar: { th: 0.5, ph: 1.3, r: 2.05, oy: 0.28, desp: 0.135, giro: 0.32, intro: true },
    echa: { th: 0.2, ph: 1.08, r: 2.25, oy: 0.4, desp: 0.13, yaw: -0.42, tapa: 1,
      et: [{ a: "A_camara", t: "Boca de 12 × 10 cm", s: "la mano no llega a las cuchillas" },
           { a: "A_seguro", t: "Seguro de tapa", s: "abierta: el pedal no baja" },
           { a: "A_pedal_der", t: "Pedal bloqueado", s: "hasta cerrar la tapa" }] },
    pisa: { th: 0.95, ph: 1.34, r: 1.72, oy: 0.26, desp: 0.12, yaw: 0, rayos: 1, pedal: true,
      et: [{ a: "A_pinon", t: "Piñón con trinquete", s: "≈ 143° por pisada" },
           { a: "A_eje", t: "13 cuchillas", s: "acero templado, Ø 56 mm" },
           { a: "A_peine", t: "Peine fijo", s: "corta en tiras de ≈ 5 mm" },
           { a: "A_cremallera", t: "Cremallera", s: "baja 3 cm en cada pisada" },
           { a: "A_pedal_der", t: "Pedal", s: "palanca 2:1, sin motor" }] },
    olor: { th: 0.3, ph: 0.95, r: 2.05, oy: 0.38, oz: -0.03, desp: 0.14, yaw: -0.25, lev: 1, foco: 1, focoG: ["G_filtro", "G_tapa_filtro"],
      et: [{ m: "Filtro de carbón 60 g", t: "Filtro de carbón", s: "60 g · dura ≈ 6 meses" },
           { a: "A_tapa", t: "Junta de caucho", s: "sella la tapa y la puerta" }] },
    guarda: { th: -0.55, ph: 1.24, r: 2.05, oy: 0.22, oz: 0.06, desp: 0.15, yaw: 0, puerta: 1, balde: 1,
      et: [{ a: "A_balde", t: "Balde de 10 L", s: "una bolsa por semana" },
           { a: "A_puerta", t: "Puerta con seguro", s: "a prueba de niños" },
           { a: "A_pedal_izq", t: "Pedal izquierdo", s: "material seco, opcional" }] },
    despiece: { th: 0.6, ph: 1.2, r: 4.15, oy: 0.86, desp: 0, sep: 1, oscila: { base: 0.12, amp: 0.26, vel: 0.22 }, colI: 470, colD: 1450, yMin: 330,
      et: [{ a: "A_tapa", t: "Tapa y filtro", lado: "i" }, { a: "A_deposito", t: "Material seco (opcional)", lado: "i" },
           { a: "A_puerta", t: "Puerta", lado: "i" }, { a: "A_balde", t: "Balde de 10 L", lado: "i" },
           { a: "A_eje", t: "Eje con 13 cuchillas", lado: "d" }, { a: "A_pinon", t: "Piñón y trinquete", lado: "d" },
           { a: "A_cremallera", t: "Cremallera", lado: "d" }, { a: "A_pedal_der", t: "Pedal derecho", lado: "d" }] },
    vitrina: { th: 0.5, ph: 1.28, r: 2.25, oy: 0.27, desp: 0.2, giro: 0.3 },
    cierre: { th: 0.5, ph: 1.3, r: 2.75, oy: 0.2, desp: 0.17, giro: 0.24 }
  };

  const P = Object.assign({ yaw: 0 }, DEF), M = Object.assign({ yaw: 0 }, DEF);
  let actual = null, pendiente, visible = false, tCambio = 0, apagarEn = 0;
  let DESDE = Object.assign({}, P), T0 = -1e9, DUR = 2, progreso = 1, velGiro = 0, vel0 = 0, residuo = 0;
  let pedalT = 0, ejeBase = 0, ejeVueltas = 0, oscT = 0;

  const difAng = (a, b) => { let d = (a - b) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };

  API.estado = function (nombre) {
    pendiente = nombre;
    if (!API.listo) { lienzo.classList.toggle("visible", false); return; }
    const antes = actual;
    actual = nombre ? ESTADOS[nombre] : null;
    API.nombre = nombre;
    if (!actual) {
      lienzo.classList.remove("visible");
      apagarEn = performance.now() + 1300;
      quitarEtiquetas();
      return;
    }
    if (!visible) { visible = true; arrancar(); }
    lienzo.classList.add("visible");
    apagarEn = 0;
    if (actual === antes) return;
    const e = Object.assign({}, DEF, actual);
    for (const k of Object.keys(DEF)) M[k] = e[k];
    if (actual.intro && !antes && !CAPTURA) { P.r = 4.8; P.ph = 1.5; P.luz = 0; P.th = M.th - 0.75; P.oy = 0.18; velGiro = 0; }
    DESDE = Object.assign({}, P);
    DUR = actual.intro && !antes ? 3.8 : (actual.sep || (antes && antes.sep)) ? 2.5 : 2.1;
    vel0 = velGiro;
    if (e.yaw !== undefined) M.yaw = P.yaw + difAng(e.yaw, P.yaw) - (actual.giro ? 0 : vel0 * DUR / 3);
    else if (actual.oscila) M.yaw = P.yaw + difAng(actual.oscila.base, P.yaw);
    residuo = 0;
    T0 = performance.now();
    tCambio = T0;
    crearEtiquetas(actual.et || []);
    if (CAPTURA) API.saltar();
  };
  API.saltar = function () {
    for (const k of Object.keys(M)) P[k] = M[k];
    DESDE = Object.assign({}, P);
    T0 = -1e9; tCambio = -1e9; progreso = 1; vel0 = 0;
  };

  // ---------------------------------------------------------------- etiquetas (columna a la derecha y, en el despiece, también a la izquierda)
  let etiquetas = [];
  function quitarEtiquetas() {
    for (const e of etiquetas) { e.div.classList.remove("visible"); e.g.classList.remove("visible"); const d = e; setTimeout(() => { d.div.remove(); d.g.remove(); }, 750); }
    etiquetas = [];
  }
  function crearEtiquetas(lista) {
    quitarEtiquetas();
    lista.forEach((s, i) => {
      const div = document.createElement("div");
      div.style.setProperty("--i", i);
      div.className = "et3d" + (s.lado === "i" ? " izq" : "");
      div.innerHTML = `<div class="caja"><b>${s.t}</b>${s.s ? `<span>${s.s}</span>` : ""}</div>`;
      capaEt.appendChild(div);
      const g = document.createElementNS(SVGNS, "g");
      g.style.setProperty("--i", i);
      g.innerHTML = '<line pathLength="1"/><circle class="halo" r="11"/><circle r="5.5"/>';
      svgL.appendChild(g);
      etiquetas.push({ s, div, g, ancla: null });
    });
  }
  const v3 = new T.Vector3();
  function moverEtiquetas(ahora) {
    if (!etiquetas.length || !actual) return;
    const mostrar = progreso > (actual.sep ? .9 : .78);
    const colD = actual.colD || 1500, colI = actual.colI || 470;
    const puntos = etiquetas.map(e => {
      const a = N[e.s.a || e.s.m];
      if (!a) return null;
      if (e.s.m && a.geometry) {
        if (!a.geometry.boundingBox) a.geometry.computeBoundingBox();
        a.geometry.boundingBox.getCenter(v3).applyMatrix4(a.matrixWorld).project(cam);
      } else a.getWorldPosition(v3).project(cam);
      return { e, x: (v3.x * 0.5 + 0.5) * 1920, y: (-v3.y * 0.5 + 0.5) * 1080 };
    }).filter(Boolean);
    for (const lado of ["d", "i"]) {
      const grupo = puntos.filter(p => (p.e.s.lado || "d") === lado).sort((a, b) => a.y - b.y);
      let y = actual.yMin || 200;
      for (const p of grupo) { p.ly = Math.max(p.y, y); y = p.ly + 104; }
      const exceso = (grupo.length ? grupo[grupo.length - 1].ly : 0) - (actual.yMax || 900);
      if (exceso > 0) for (const p of grupo) p.ly -= exceso;
      for (let i = 1; i < grupo.length; i++) if (grupo[i].ly < grupo[i - 1].ly + 104) grupo[i].ly = grupo[i - 1].ly + 104;
      for (const p of grupo) {
        const lx = lado === "d" ? colD : colI;
        p.e.div.style.transform = `translate(${lx}px, ${p.ly}px)`;
        p.e.div.classList.toggle("visible", mostrar);
        p.e.g.classList.toggle("visible", mostrar);
        const [ln, halo, punto] = p.e.g.children;
        ln.setAttribute("x1", p.x); ln.setAttribute("y1", p.y);
        ln.setAttribute("x2", lado === "d" ? lx - 12 : lx + 12); ln.setAttribute("y2", p.ly);
        halo.setAttribute("cx", p.x); halo.setAttribute("cy", p.y);
        punto.setAttribute("cx", p.x); punto.setAttribute("cy", p.y);
      }
    }
  }

  // ---------------------------------------------------------------- aplicar los parámetros al modelo
  const pisada = u => {             // ángulo del pedal en un ciclo de 1,3 s
    const k = u < 0.15 ? 0 : u < 0.45 ? suave((u - 0.15) / 0.3) : u < 0.57 ? 1 : u < 0.9 ? 1 - suave((u - 0.57) / 0.33) : 0;
    return ANG_REPOSO + (ANG_PISADO - ANG_REPOSO) * k;
  };
  const dzCrem = th => 0.12 * (Math.sin(-th) - Math.sin(-ANG_REPOSO));
  let pedalAng = ANG_REPOSO;

  function aplicar(dt, ahora) {
    if (!modelo) return;
    raiz.rotation.y = P.yaw;
    // despiece
    const e = P.sep, n = ORDEN.length;
    for (const [nombre, v] of Object.entries(SEPARAR)) {
      const o = N[nombre];
      if (!o) continue;
      const i = ORDEN.indexOf(nombre);
      const k = i < 0 ? suave((e - 0.3) / 0.7) : atras((e - i / n * 0.45) / 0.55);
      const lev = LEVANTAR[nombre] ? suave(P.lev) : 0;
      const pos = B2G(v).multiplyScalar(k);
      if (lev) pos.add(B2G(LEVANTAR[nombre]).multiplyScalar(lev));
      o.position.copy(pos);
      if (v.length > 3) o.rotation.y = v[3] * k;
    }
    if (N.RECOEVO) N.RECOEVO.position.y = 0.2 * suave(e);
    // tapa, seguro, puerta y balde
    if (N.piv_tapa) N.piv_tapa.rotation.x = -80 * Math.PI / 180 * suave(P.tapa);
    if (N.corr_seguro) N.corr_seguro.position.y = -0.010 * suave(P.tapa);
    if (N.piv_puerta) N.piv_puerta.rotation.y = -100 * Math.PI / 180 * suave(P.puerta);
    if (N.corr_balde) N.corr_balde.position.z = 0.15 * suave(Math.max(0, P.balde * 1.4 - 0.4));
    // pedal derecho: pisa en bucle; el eje solo avanza (trinquete)
    let objetivo = ANG_REPOSO;
    if (actual && actual.pedal) {
      pedalT += dt;
      const ciclo = 1.3, u = pedalT % ciclo, vueltas = Math.floor(pedalT / ciclo);
      objetivo = pisada(u);
      pedalAng = objetivo;
      const parcial = u < 0.15 ? 0 : suave((u - 0.15) / 0.3);
      ejeVueltas = ejeBase + (vueltas + parcial) * 2.5;
    } else {
      if (pedalT > 0) { ejeBase = ejeVueltas; pedalT = 0; }
      pedalAng += (ANG_REPOSO - pedalAng) * Math.min(1, dt * 6);
    }
    if (N.piv_pedal_der) N.piv_pedal_der.rotation.x = pedalAng;
    const dz = dzCrem(pedalAng);
    if (N.corr_cremallera) N.corr_cremallera.position.y = dz;
    if (N.rot_pinon) N.rot_pinon.rotation.x = -dz / 0.012;
    for (const k of ["rot_eje", "rot_trinquete", "rot_perilla"]) if (N[k]) N[k].rotation.x = ejeVueltas;
    // rayos X y foco
    const rx = P.rayos * (1 - suave(P.sep));
    const focoG = actual && actual.focoG ? actual.focoG : null;
    const pulso = 0.5 + 0.5 * Math.sin(ahora / 260);
    for (const { m, g, base } of mallas) {
      const fan = FANTASMA[g];
      const mat = m.material;
      if (fan !== undefined && rx > 0.001) {
        mat.transparent = true;
        mat.opacity = base.op * (1 - (1 - fan) * rx);
        mat.depthWrite = rx < 0.5;
      } else { mat.transparent = base.tr; mat.opacity = base.op; mat.depthWrite = base.dw; }
      mat.emissive.copy(base.em);
      if (focoG && P.foco > 0.01 && (focoG.includes(g) || focoG.some(f => esDe(m, f)))) mat.emissive.setRGB(0.06, 0.45, 0.22).multiplyScalar(P.foco * (0.35 + 0.45 * pulso));
    }
    for (const l of aristas) { l.visible = rx > 0.01; l.material.opacity = 0.55 * rx; }
  }
  const cacheDe = new Map();
  function esDe(m, nombre) {
    const k = m.uuid + nombre;
    if (cacheDe.has(k)) return cacheDe.get(k);
    let a = m, r = false;
    while (a) { if (a.name === nombre) { r = true; break; } a = a.parent; }
    cacheDe.set(k, r); return r;
  }

  // ---------------------------------------------------------------- cámara
  function camara() {
    const o = new T.Vector3(P.ox, P.oy, P.oz);
    const t = CAPTURA ? 0 : performance.now() / 1000;
    const th = P.th + 0.012 * Math.sin(t * 0.31), ph = P.ph + 0.007 * Math.sin(t * 0.23 + 1), r = P.r * (1 + 0.005 * Math.sin(t * 0.19 + 2));
    cam.position.set(o.x + r * Math.sin(ph) * Math.sin(th), o.y + r * Math.cos(ph), o.z + r * Math.sin(ph) * Math.cos(th));
    cam.lookAt(o);
    cam.setViewOffset(1920, 1080, -P.desp * 1920, 0, 1920, 1080);
    render.toneMappingExposure = 1.1 * (0.06 + 0.94 * P.luz);
    brillo.material.opacity = P.luz * (1 - 0.6 * suave(P.sep));
    anillos.forEach((a, i) => { a.material.opacity = [0.5, 0.26, 0.14][i] * P.luz * (1 - suave(P.sep)); a.rotation.z += 0.0015 * (i + 1); });
  }

  function tamano() {
    const q = Math.min(2, Math.max(0.5, (window.K_ESC || 1) * (window.devicePixelRatio || 1)));
    render.setPixelRatio(1);
    render.setSize(Math.round(1920 * q), Math.round(1080 * q), false);
  }
  addEventListener("escala", tamano);
  tamano();

  // ---------------------------------------------------------------- bucle
  let corriendo = false, antes = 0;
  function arrancar() { if (corriendo) return; corriendo = true; antes = performance.now(); requestAnimationFrame(cuadro); }
  function cuadro(ahora) {
    const dt = Math.min(0.05, (ahora - antes) / 1000); antes = ahora;
    if (actual) {
      const u = lim((ahora - T0) / (DUR * 1000));
      progreso = u;
      const kc = enCubica(u);
      const kp = enQuinta((ahora - T0 - 220) / (DUR * 920));
      for (const k of ["th", "ph", "r", "ox", "oy", "oz", "desp"]) P[k] = DESDE[k] + (M[k] - DESDE[k]) * kc;
      for (const k of ["rayos", "sep", "tapa", "puerta", "balde", "lev", "foco"]) P[k] = DESDE[k] + (M[k] - DESDE[k]) * kp;
      P.luz = DESDE.luz + (M.luz - DESDE.luz) * salCubica(u);
      if (actual.giro) {                                   // giro continuo que acelera con suavidad
        velGiro = vel0 + (actual.giro - vel0) * kc;
        P.yaw += velGiro * dt;
      } else {
        velGiro = vel0 * Math.pow(1 - u, 2);                 // lo que venía girando se frena sin salto
        residuo += velGiro * dt;
        let base = DESDE.yaw + (M.yaw - DESDE.yaw) * kc + residuo;
        if (actual.oscila) { oscT += dt; base += actual.oscila.amp * kc * Math.sin(oscT * actual.oscila.vel * Math.PI * 2 / 3); }
        P.yaw = base;
      }
    }
    aplicar(dt, ahora);
    camara();
    render.render(escena, cam);
    moverEtiquetas(ahora);
    if (!actual && apagarEn && ahora > apagarEn) { corriendo = false; visible = false; return; }
    requestAnimationFrame(cuadro);
  }
})();
