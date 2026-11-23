/* RECOEVO · datos de la presentación y contenido de las ventanas «Más datos».
   Todas las cifras son del ESCENARIO REALISTA del plan (Plan detallado realista y Presupuesto ejecutivo, 3-nov-2026),
   del póster de la E-Fest, del estudio de campo (19-sep-2026) y de sus fuentes. Revisadas el 22-nov-2026. */
window.RECOEVO_DATOS = {
  // caja acumulada del negocio, mes 0 a 120, en millones de pesos (hoja «Proyección»: flujo libre acumulado; plan sin crédito)
  caja: [-4377.5, -4552.4, -4644.7, -4715.2, -4777.4, -4831.3, -4877.0, -4914.4, -4947.0, -4971.3, -4987.3, -4995.1, -4995.5, -4991.2, -5007.2, -5012.1, -5006.7, -4989.5, -4961.5, -4922.4, -4873.0, -4811.8, -4739.8, -4656.7, -4563.3, -4516.6, -4416.2, -4304.0, -4180.8, -4045.2, -3902.2, -3747.3, -3581.5, -3407.4, -3221.8, -3024.3, -2814.3, -2651.6, -2403.4, -2165.2, -1986.5, -1803.1, -1617.2, -1426.0, -1229.4, -1027.3, -819.2, -606.4, -391.1, -256.0, -25.4, 211.0, 453.8, 698.1, 948.2, 1204.0, 1465.4, 1732.8, 2006.5, 2281.6, 2564.4, 2340.0, 2650.4, 2963.8, 3280.8, 3599.9, 3922.7, 4248.7, 4573.2, 4901.4, 5232.0, 5566.4, 5903.3, 6134.6, 6494.9, 6858.4, 7225.6, 7595.2, 7964.6, 8337.3, 8712.6, 9091.5, 9473.1, 9858.8, 10247.1, 10516.5, 10931.2, 11349.2, 11771.3, 12191.4, 12615.6, 13043.4, 13473.8, 13908.1, 14345.3, 14786.7, 15230.9, 15536.6, 16005.3, 16477.4, 16949.1, 17423.4, 17902.0, 18384.3, 18869.4, 19358.8, 19851.1, 20347.8, 20847.6, 21198.1, 21730.6, 22261.7, 22797.3, 23335.7, 23878.6, 24425.5, 24975.4, 25529.7, 26087.1, 26651.6, 27222.4],
  actos: [["problema", "Basura"], ["abono", "Abono"], ["campo", "Campo"], ["solucion", "Solución"], ["impacto", "Impacto"], ["negocio", "Negocio"], ["cifras", "Cifras"], ["pedido", "Pedido"]]
};

window.MODALES = {

  basura: {
    k: "01 · El problema", t: "La basura en Colombia y en Bogotá",
    p: "Las cifras que respaldan la primera parte, con su fecha y su fuente.",
    b: [
      { tipo: "cifras", titulo: "Colombia", items: [
        { v: "33.300 <small>t/día</small>", t: "de basura van a rellenos y botaderos: 12,15 millones de toneladas en 2024 (80,3 % de lo generado).", f: "Superservicios, Informe Nacional de Disposición Final 2024" },
        { v: "1 de cada 5", t: "toneladas se aprovecha (≈ 20 %, 2,99 millones de t). Las otras 4 se entierran.", f: "Superservicios vía Decreto 0772 de 2026 y El Tiempo (16-oct-2026)" },
        { v: "≈ 60 <small>%</small>", t: "de la basura es orgánica: restos de comida. Otras fuentes de Bogotá dan entre 50 y 65 %.", f: "Secretaría del Hábitat de Bogotá; Portafolio" },
        { v: "72", t: "botaderos a cielo abierto siguen activos (249 sitios de disposición en total).", f: "Superservicios, datos 2024" },
        { v: "9,76 M <small>t/año</small>", t: "de alimentos se pierden o se desperdician: 34 % de la comida disponible.", f: "DNP (última medición oficial, 2016)" },
        { v: "8", t: "capitales más tienen el relleno con la vida útil vencida (Bucaramanga, Cartagena, Cúcuta, Ibagué…).", f: "El Tiempo, 16-oct-2026" }
      ] },
      { tipo: "cifras", titulo: "Bogotá", items: [
        { v: "6.769 <small>t/día</small>", t: "llegaron a Doña Juana en el primer trimestre de 2026 (608.100 t en tres meses).", f: "UAESP (la entidad de la Alcaldía que maneja el aseo) vía El Tiempo y El Espectador" },
        { v: "2029", t: "primer semestre: hasta ahí va la licencia de Doña Juana, prorrogada por la CAR. Le quedan ≈ 3 años.", f: "El Tiempo, 16-oct-2026" },
        { v: "135", t: "puntos críticos de alta infestación de ratas, en 10 localidades.", f: "Semana, 17-mar-2026 (administración distrital)" },
        { v: "469", t: "focos de basura activos en la ciudad (662 identificados).", f: "UAESP, inicios de 2026" },
        { v: "968 <small>t/día</small>", t: "se arrojan a la calle; el arrojo clandestino subió 19 %.", f: "UAESP vía El Tiempo" },
        { v: "+5 <small>%</small>", t: "creció en 2025 lo que pesa la báscula de Doña Juana: 2,42 millones de toneladas.", f: "UAESP" }
      ] },
      { tipo: "texto", titulo: "La ley", html: "<p><b>Decreto 0772 de 2026</b> (Ministerio de Vivienda, 16-jul-2026): «es obligación de los usuarios realizar la separación de los residuos sólidos en la fuente». Usuarios son los hogares, los conjuntos, las empresas y las entidades. Crea la <b>ruta selectiva de orgánicos</b>, que debe pasar al menos una vez por semana.</p><p><b>Código de colores</b> (Resolución 2184 de 2019, rige desde 2021): bolsa blanca para lo aprovechable, negra para lo no aprovechable y <b>verde para los orgánicos</b>. RECOEVO llena la bolsa verde.</p>" },
      { tipo: "temas", items: ["Basura en Colombia", "Doña Juana", "Orgánicos", "Desperdicio de comida", "Ratas y plagas", "Puntos críticos", "Decreto 0772", "Código de colores", "Ruta de orgánicos"] }
    ]
  },

  abono: {
    k: "02 · El otro problema", t: "Fertilizantes, urea y la tierra",
    p: "La urea es el abono químico más usado. Se fabrica con gas natural: por eso una guerra lejana sube el abono en Colombia.",
    b: [
      { tipo: "tabla", titulo: "Precio del bulto de urea de 50 kg", cols: ["Cuándo", "Precio", "Fuente"], filas: [
        ["Enero de 2021", "$80.000", "DANE-SIPSA vía U.S. Trade.gov"],
        ["Promedio de 2021", "$102.777", "Fedegán con datos del DANE"],
        ["Enero de 2022", "$230.000 (+187 %)", "DANE-SIPSA vía U.S. Trade.gov"],
        ["2023", "≈ 55 % menos que el pico de 2022", "La República con datos de Bancolombia"],
        ["Marzo de 2026 (Medellín)", "de $120.000 a $130.000 al empezar la guerra", "El Colombiano, 7-abr-2026"],
        ["Agosto de 2026", "$153.300 (Campoalegre, Huila) a $222.400 (Santa Marta)", "DANE (SIPSA) vía El Tiempo, 18-oct-2026"]
      ] },
      { tipo: "cifras", titulo: "El campo", items: [
        { v: "&gt; 94 <small>%</small>", t: "del fertilizante que usa Colombia es importado.", f: "El Colombiano, 7-abr-2026" },
        { v: "&gt; 2,4 M <small>t/año</small>", t: "de fertilizantes importados; la urea es entre 20 y 28 % del volumen.", f: "El Colombiano" },
        { v: "≈ 45 <small>%</small>", t: "de las exportaciones mundiales de urea pasa por el estrecho de Ormuz.", f: "SAC (Sociedad de Agricultores de Colombia), 2026" },
        { v: "USD 482 → 750", t: "por tonelada de urea en un solo mes (finales de febrero a finales de marzo de 2026).", f: "Qore; La República" },
        { v: "2,8 M <small>ha</small>", t: "de tierra degradada: el 40 % de la tierra agrícola del país.", f: "Agronegocios; CONtexto Ganadero (Asocompost), 2019" },
        { v: "&lt; 300 <small>kg/ha</small>", t: "de abono orgánico se aplica, cuando lo mínimo recomendado es 1.000 kg por hectárea.", f: "CONtexto Ganadero (Asocompost), 2019" }
      ] },
      { tipo: "texto", titulo: "La visión de la fase 2 (fuera de las cifras del plan)", html: "<p>Recoger las bolsas, compostarlas y devolver el abono al campo. Con ≈ 35 % de la masa convertida en compost, las <b>406.983 t</b> de restos de los 10 años darían <b>≈ 142.444 t de compost</b> (estimado). Esa fase no suma ingresos ni costos al plan actual.</p>" },
      { tipo: "temas", items: ["Fertilizantes y urea", "Tierra degradada", "Compost", "Visión de largo plazo"] }
    ]
  },

  campo: {
    k: "03 · Trabajo de campo", t: "Lo que encontramos en Tihuaque, Usme",
    p: "Estudio cualitativo exploratorio del 19 de septiembre de 2026: entrevistas semiestructuradas y observación en la calle. Las cifras describen a las personas entrevistadas, no a todo el barrio.",
    b: [
      { tipo: "cifras", titulo: "El estudio", items: [
        { v: "8 <small>personas</small>", t: "3 hogares, 3 comercios y 2 que son las dos cosas; entre ellas, 2 líderes comunitarios.", f: "Muestra intencional" },
        { v: "220 <small>frases</small>", t: "analizadas de 10 grabaciones (66 minutos), con 17 códigos en 5 dimensiones (Framework Method).", f: "Metodología y reporte del estudio, versión auditada del 30-sep-2026" },
        { v: "96,9 <small>%</small>", t: "de acuerdo entre dos codificadores (kappa 0,70: acuerdo sustancial). Las transcripciones coinciden 92 % con el audio.", f: "Confiabilidad del estudio" },
        { v: "26", t: "fotos y videos de observación: shut desbordado, perros, bolsas en los andenes.", f: "Equipo RECOEVO" }
      ] },
      { tipo: "barras", titulo: "Qué parte de las personas mencionó cada tema", max: 100, items: [
        ["El shut y las esquinas como foco", 100, "100 % · 8 de 8"], ["Hábito y cultura («a las carreras»)", 88, "88 % · 7 de 8"],
        ["Perros, ratas o plagas", 75, "75 % · 6 de 8"], ["Perros y recicladores rompen las bolsas", 75, "75 % · 6 de 8"],
        ["Todo va en la misma bolsa", 63, "63 % · 5 de 8"], ["Quejas por la recolección", 63, "63 % · 5 de 8"],
        ["«¿Y si los demás no separan?»", 63, "63 % · 5 de 8"], ["Piden pedagogía para participar", 63, "63 % · 5 de 8"],
        ["Conectan los residuos con el abono", 50, "50 % · 4 de 8"], ["Sienten al Estado ausente", 50, "50 % · 4 de 8"],
        ["Ya aprovechan sobras en casa", 38, "38 % · 3 de 8"], ["Relacionan la basura con inseguridad", 25, "25 % · 2 de 8"]
      ] },
      { tipo: "cifras", titulo: "Disposición", items: [
        { v: "0 <small>rechazos</small>", t: "Nadie rechazó la idea: 4 a favor y 3 con condiciones (una persona no opinó sobre soluciones).", f: "Escala de 1 a 5, media 3,7" },
        { v: "1,76 <small>/ 5</small>", t: "satisfacción media con el manejo de los residuos del barrio. 7 de las 8 personas están insatisfechas.", f: "86 frases calificadas" },
        { v: "Por medir", t: "Cuánto pagaría un hogar por RECOEVO: el estudio no preguntó el precio. La prueba de precio queda para la preserie.", f: "Lo que no medimos" }
      ] },
      { tipo: "citas", titulo: "Lo que dijeron", items: [
        ["Las cáscaras de la papa, el cartón, las cáscaras de huevo… todo es un revoltijo.", "E01, hogar"],
        ["Los perros se encargan de romper bolsas.", "E03, líder comunitario"],
        ["¿Qué hacemos tres o cuatro que lo hagamos si diez no lo hacen?", "E05, comerciante"],
        ["Si tú ya me las regalas, ya me motivo para separar los residuos.", "E04, trabajador de fruver"],
        ["El abono en Colombia se importa. El abono en Colombia se trae de otro país.", "E05"]
      ] },
      { tipo: "temas", items: ["Hallazgos", "Metodología del campo", "Confiabilidad", "Barreras", "Disposición", "Aprendizajes", "Usme", "Origen de la idea"] }
    ]
  },

  producto: {
    k: "04 · La solución", t: "RECOEVO por dentro",
    p: "Un triturador de cocina que funciona con el pie: sin motor, sin electricidad y sin energía guardada. Las 18 piezas son las mismas del modelo 3D, la web y el póster.",
    b: [
      { tipo: "cifras", titulo: "Cómo funciona, con números", items: [
        { v: "32 × 34 × 52 <small>cm</small>", t: "el cuerpo, del tamaño de una caneca con pedal; con los pedales el fondo llega a ≈ 40,5 cm. Pesa ≈ 5 kg.", f: "Hoja «5 Producto» del plan" },
        { v: "2 : 1", t: "palanca del pedal: el pie baja 6 cm y la cremallera 3 cm. Un resorte la devuelve.", f: "Hoja «5 Producto»" },
        { v: "≈ 143°", t: "gira el eje de las cuchillas en cada pisada. El trinquete, como la rueda libre de una bicicleta, no lo deja devolverse.", f: "Piñón módulo 2 de 12 dientes" },
        { v: "≈ 11 <small>pisadas</small>", t: "al día para lo de un hogar: unos 20 segundos. Cada pisada pone 13,2 J.", f: "Con 0,46 kg de restos al día" },
        { v: "13 <small>cuchillas</small>", t: "de gancho, Ø 56 × 2,5 mm, de acero 3Cr13 templado a 48–52 HRC. Ancho de corte ≈ 10 cm.", f: "Se estampan y templan en la planta" },
        { v: "≈ 5 <small>mm</small>", t: "tiras: la cáscara se corta contra los 12 dedos del peine fijo, con 0,3 mm de holgura, como unas tijeras.", f: "Peine de inox 304" },
        { v: "10 <small>L</small>", t: "el balde; en una semana se llena ≈ 75 %: una bolsa compostable por semana (no viene incluida).", f: "≈ 3,4 kg de restos por semana" },
        { v: "60 <small>g</small>", t: "de carbón activado en la tapa; dura ≈ 6 meses. La válvula de una vía deja salir el aire y no deja entrar moscas.", f: "Junta de caucho en tapa y puerta" },
        { v: "2 <small>L</small>", t: "compartimento opcional de material seco (papel, hojas secas o aserrín): 40 mL por pisada del pedal izquierdo, ≈ 17 días.", f: "Si la bolsa sale cada 2 o 3 días, no hace falta" },
        { v: "70 <small>%</small>", t: "de plástico reciclado en el gabinete y la base: ≈ 720 toneladas de plástico reciclado en 10 años.", f: "Hoja «5 Producto»; banco de preguntas" }
      ] },
      { tipo: "texto", titulo: "Seguridad", html: "<p><b>Tapa abierta: el pedal no baja</b> (un pasador bloquea la cremallera). No hay motor ni energía guardada: el eje solo se mueve mientras el pie empuja. La boca mide 12 × 10 cm y la tolva es profunda, así que la mano no alcanza las cuchillas. La puerta tiene cierre de doble acción, como los frascos de medicina. Si algo duro se atasca, la <b>perilla de reversa</b> destraba el eje a mano. Es un prototipo inicial: las pruebas de 20.000 pisadas, corte, olor y caída de la caja están presupuestadas en el arranque.</p>" },
      { tipo: "tabla", titulo: "Las 18 piezas", cols: ["Pieza", "Material", "Dato clave"], filas: [
        ["Tapa con junta", "PP inyectado; junta EPDM", "Aloja el filtro"], ["Filtro y válvula", "60 g de carbón activado; silicona", "≈ 6 meses"],
        ["Gabinete", "PP de 2,2 mm con nervios", "70 % reciclado; logo en relieve"], ["Puerta frontal", "PP inyectado; junta EPDM", "Cierre para niños"],
        ["Balde", "PP inyectado, con asa y aro", "10 L"], ["Base y bastidor", "PP 70 % reciclado", "Eje de pedales de acero Ø 8 mm"],
        ["Pedal derecho", "PP con 30 % de fibra de vidrio", "Palanca 2:1"], ["Pedal izquierdo (opcional)", "PP con fibra de vidrio", "40 mL de material seco"],
        ["Cremallera", "Acero de 4 mm, corte láser", "Carrera de 30 mm"], ["Piñón con trinquete", "Acero zincado; rueda PA-GF", "12 dientes, módulo 2"],
        ["Eje con 13 cuchillas", "Inox 304 hexagonal de 12 mm; acero templado", "12 separadores de POM"], ["Peine fijo", "Inox 304 de 2 mm", "12 dedos de 5 mm"],
        ["Cámara y tolva", "PP con fibra de vidrio; bujes POM", "Boca de 12 × 10 cm"], ["Retenes", "Caucho NBR 12 × 22 × 5 mm", "Sellan el paso del eje"],
        ["Perilla de reversa", "Inyectada", "Destraba a mano"], ["Material seco", "PP; dosificador rotativo", "2 L"],
        ["Seguro de tapa", "Pasador con resorte", "Prueba de 20.000 ciclos"], ["Patas", "TPE antideslizante", "4 patas"]
      ] },
      { tipo: "temas", items: ["Cómo funciona", "Cuchillas", "Filtro y olor", "Seguridad", "Atascos", "Material seco", "Bolsas", "Tamaño y peso", "Prototipo", "Uso en casa", "Garantía", "Validación y pruebas", "Plástico reciclado"] }
    ]
  },

  diferencial: {
    k: "04 · Por qué RECOEVO", t: "Energía y precio frente al mercado",
    p: "No hay en venta un triturador de cocina a pedal: solo prototipos o caseros (India, Francia, Malasia). Los procesadores que existen son eléctricos e importados.",
    b: [
      { tipo: "barras", titulo: "Precio con IVA (octubre de 2026)", max: 3161000, dinero: true, items: [
        ["Picadora manual de cocina", 89900], ["Caneca inox con pedal 20 L · solo guarda", 119900], ["RECOEVO · tritura, sin luz", 199900, "", "yo"],
        ["Caneca plástica con pedal 44 L · solo guarda", 203900], ["Compostera giratoria 70 L · patio", 409900], ["Bokashi (cubeta importada)", 454560],
        ["FoodCycler FC-50 · eléctrico", 1265000], ["Lomi 3 · eléctrico", 1737000], ["Mill · eléctrico + suscripción", 3161000]
      ] },
      { tipo: "tabla", titulo: "Lo que paga un hogar en 5 años", cols: ["Concepto", "RECOEVO", "Triturador eléctrico"], filas: [
        ["Compra", "$199.900", "$1.265.000"], ["Energía (0,8 kWh por ciclo, 300 al año, $950/kWh; estimado)", "$0", "$1.140.000"],
        ["Filtros", "$249.000", "$789.000"], ["Total", "$448.900", "$3.194.000"]
      ], total: true, nota: "Ahorro del hogar: $2.745.100 en 5 años (sin inflación). Fuente: plan RECOEVO, hoja 9, parte 2d." },
      { tipo: "cifras", titulo: "Además", items: [
        { v: "0 <small>kWh</small>", t: "Funciona con el pie: sin enchufe, sin baterías. Un eléctrico gasta ≈ 240 kWh al año (estimado).", f: "Hoja 9 del plan" },
        { v: "12 × $16.658", t: "En 12 cuotas sin intereses, con tarjeta o Addi.", f: "$199.900 ÷ 12" },
        { v: "6,3 <small>veces</small>", t: "cuesta el eléctrico más barato (FoodCycler) frente a RECOEVO; el Lomi 3, 8,7 veces.", f: "Dólares a TRM $3.163,76 del 21-oct-2026" }
      ] },
      { tipo: "temas", items: ["Competencia", "Diferenciación", "Sustitutos", "Precio", "Patente", "Copiar o importar", "Cuotas"] }
    ]
  },

  impacto: {
    k: "05 · Lo que esperamos lograr", t: "Hogares, toneladas y empleo, año por año",
    p: "Empezamos en Usme y Bogotá-Región, seguimos con Bogotá y después con otras ciudades.",
    b: [
      { tipo: "cifras", titulo: "El mercado", items: [
        { v: "18,9 M", t: "hogares en Colombia: el mercado total (TAM).", f: "DANE, Encuesta de Calidad de Vida 2025" },
        { v: "13,6 M", t: "hogares urbanos: los que deben separar y por donde pasa la ruta (SAM).", f: "DANE, proyecciones de hogares 2025" },
        { v: "735.450", t: "hogares con RECOEVO en 10 años: la meta del plan (SOM), el 5,4 % de los hogares urbanos.", f: "Plan realista" },
        { v: "≈ 2,9 M", t: "hogares en Bogotá: 735.450 es como 1 de cada 4.", f: "Encuesta Multipropósito 2025" }
      ] },
      { tipo: "tabla", titulo: "Año por año", cols: ["Año", "Productos vendidos", "Hogares acumulados", "t fuera del relleno", "Empleos"], num: [1, 2, 3, 4], filas: [
        ["1", "16.200", "16.200", "1.082", "12"], ["2", "32.250", "48.450", "4.590", "17"], ["3", "50.250", "98.700", "10.581", "22"],
        ["4", "65.500", "164.200", "18.997", "25"], ["5", "77.500", "241.700", "29.267", "28"], ["6", "86.750", "328.450", "41.107", "29"],
        ["7", "92.750", "421.200", "53.944", "30"], ["8", "98.750", "519.950", "67.637", "31"], ["9", "104.750", "624.700", "82.186", "33"],
        ["10", "110.750", "735.450", "97.591", "34"], ["Total", "735.450", "735.450", "406.983", "34 (máx.)"]
      ], total: true },
      { tipo: "cifras", titulo: "El impacto", items: [
        { v: "≈ 60 <small>días</small>", t: "de lo que recibe Doña Juana equivalen a las 406.983 t: el 1,6 % de lo que le llegaría en 10 años.", f: "Con ≈ 6.800 t/día" },
        { v: "≈ 288 <small>t/día</small>", t: "menos en el año 10, con todos los hogares: ≈ 4 % de lo que entra hoy a Doña Juana.", f: "Plan realista" },
        { v: "≈ 203.491 <small>t</small>", t: "de CO₂ equivalente evitadas en 10 años (estimado con 0,5 t por tonelada; la literatura da 0,4 a 0,7).", f: "Hoja «Supuestos»" },
        { v: "34", t: "empleos directos formales en el año 10 (13 fijos + 21 operarios); 12 al arrancar.", f: "Hoja «Proyección»" }
      ] },
      { tipo: "texto", titulo: "Supuestos, dichos con honestidad", html: "<p>El impacto usa <b>0,46 kg de restos por hogar al día</b> y <b>85 % de uso diario</b>. Son supuestos del plan, no mediciones: la UAESP registra ≈ 1,2 kg por hogar, así que el impacto real podría ser mayor. Se medirán con hogares reales en la preserie.</p>" },
      { tipo: "temas", items: ["Toneladas", "Hogares", "Bogotá", "Usme", "Mercado (TAM, SAM, SOM)", "Demanda", "Adopción", "CO₂", "Empleos", "Medición del impacto", "Impacto social"] }
    ]
  },

  ods: {
    k: "06 · ODS", t: "Cómo aporta RECOEVO a la Agenda 2030",
    p: "Los Objetivos de Desarrollo Sostenible de las Naciones Unidas. RECOEVO se pensó con tres.",
    b: [
      { tipo: "tabla", titulo: "Objetivos y metas", cols: ["Objetivo", "Meta", "Cómo aporta RECOEVO"], filas: [
        ["12 · Producción y consumo responsables (principal)", "12.3: reducir a la mitad el desperdicio de alimentos · 12.5: reducir la generación de desechos", "Saca los restos de comida de la bolsa de basura y los deja listos para compostar."],
        ["11 · Ciudades y comunidades sostenibles", "11.6: reducir el impacto ambiental de las ciudades, con atención a los desechos municipales", "Menos bolsas rotas en las esquinas, menos ratas y menos carga para Doña Juana."],
        ["13 · Acción por el clima", "Reducir las emisiones", "La comida enterrada se pudre sin aire y suelta metano (≈ 80 veces el CO₂ en 20 años). ≈ 203.491 t de CO₂e evitadas en 10 años (estimado)."]
      ] },
      { tipo: "cifras", titulo: "Lo que lo hace sostenible", items: [
        { v: "0 <small>kWh</small>", t: "No usa energía: funciona aunque suba la tarifa o haya racionamiento.", f: "Producto 100 % mecánico" },
        { v: "70 <small>%</small>", t: "de plástico reciclado en el cuerpo: ≈ 720 t en 10 años.", f: "Plan realista" },
        { v: "406.983 <small>t</small>", t: "de comida fuera del relleno en 10 años.", f: "Plan realista" },
        { v: "Fase 2", t: "Convertir las bolsas en abono para el campo (≈ 142.444 t de compost posibles; fuera de las cifras).", f: "Visión de largo plazo" }
      ] },
      { tipo: "temas", items: ["ODS", "Metano", "CO₂", "Plástico reciclado", "Compost", "Impacto social"] }
    ]
  },

  negocio: {
    k: "06 · Modelo de negocio", t: "Precios, canales y lo que deja cada venta",
    p: "El único ingreso es la venta del producto (más los talleres a empresas). No hay suscripciones.",
    b: [
      { tipo: "texto", titulo: "Estratos 1 y 2: comodato, no venta", html: "<p>Los mentores de la primera ronda nos dijeron: <b>no le vendan el producto a hogares de bajos ingresos</b>. Por eso, en los barrios de estratos 1 y 2 <b>la alcaldía local, el conjunto o una empresa compra el lote</b> ($142.000 + IVA por producto, el mismo precio de lote del plan) y <b>se lo presta al hogar en comodato</b>.</p><p><b>Comodato</b> (Código Civil, art. 2200) es un préstamo de uso gratuito: el hogar usa el producto sin pagar y, si se va o deja de usarlo, lo devuelve para otra familia. El producto sigue siendo de quien lo compró.</p><p><b>¿Y un descuento en la factura del agua?</b> No se puede: la Ley 142 de 1994 (art. 99.9) prohíbe exonerar o descontar el valor de los servicios públicos. Lo legal es un premio fuera de la factura, por ejemplo <b>puntos que se cambian en las tiendas del barrio</b>, pagados por las tiendas aliadas. Esa idea se probará en el piloto y <b>no está en las cifras del plan</b>.</p><p>Además, el <b>Decreto 0772 de 2026</b> prevé un beneficio en la tarifa de aseo para quienes gestionen sus orgánicos en comunidad; la CRA definirá cómo se aplica.</p>" },
      { tipo: "cifras", titulo: "Precios", items: [
        { v: "$199.900", t: "con IVA al público ($167.983 sin IVA). Sube con la inflación cada julio; en pesos de hoy siempre es $199.900.", f: "Hoja «Supuestos»" },
        { v: "$142.000 <small>+ IVA</small>", t: "por producto en lotes de 100 o más a empresas, conjuntos y alcaldías: 15 % menos que el precio público.", f: "Canvas del plan" },
        { v: "$8.000 <small>+ IVA</small>", t: "por producto: taller de separación con cada lote (darlo cuesta ≈ $5.000).", f: "Canvas del plan" },
        { v: "$14.900", t: "el envío en Bogotá, que paga el cliente que compra por internet (promedio nacional $20.270). A cadenas y lotes se lleva en estibas.", f: "Hoja 9, parte 3" }
      ] },
      { tipo: "tabla", titulo: "Lo que le queda a la empresa por producto en cada canal (año 1, sin IVA, antes de fabricar)", cols: ["Canal", "Mezcla", "Recibe", "Costos del canal", "Le queda"], filas: [
        ["Marketplaces (Mercado Libre, Falabella.com)", "30 % → 35 %", "$167.983", "comisión 14 %", "$144.466"],
        ["Lotes B2B y B2G", "48 % → 35 %", "$142.000", "vendedor 2 % + transporte $3.000", "$136.160"],
        ["Tienda en línea y WhatsApp", "12 % → 15 %", "$167.983", "pauta $35.000 + pasarela 3,5 %", "$127.104"],
        ["Grandes superficies (Homecenter, Éxito, Alkosto)", "10 % → 15 %", "$100.790 (60 %)", "transporte $2.500", "$98.290"],
        ["Promedio ponderado del año 1", "", "", "", "$133.778"]
      ], total: true, nota: "Mezcla: año 1 → años 2 a 10. Las cadenas se quedan ≈ 40 % (margen de 30 a 35 % y cobros de 8 a 12 %) y pagan a 60 días." },
      { tipo: "tabla", titulo: "Productos por canal en 10 años", cols: ["Canal", "Productos", "Parte"], num: [1, 2], filas: [
        ["Lotes B2B y B2G", "259.491", "35 %"], ["Marketplaces", "256.605", "35 %"], ["Tienda en línea y WhatsApp", "109.839", "15 %"], ["Grandes superficies", "109.515", "15 %"], ["Total", "735.450", "100 %"]
      ], total: true },
      { tipo: "cifras", titulo: "Clientes y aliados", items: [
        { v: "B2C", t: "Hogares urbanos: compran en marketplaces, tienda propia o cadenas.", f: "Canvas, bloque 2" },
        { v: "B2B · B2G", t: "Empresas, conjuntos y alcaldías: compran por lotes con taller, porque el decreto también los obliga.", f: "Canvas, bloque 2" },
        { v: "2,0 <small>veces</small>", t: "lo que deja un cliente en línea frente a lo que cuesta conseguirlo (LTV $115.073 / CAC $56.572, año 3).", f: "Hoja 9" },
        { v: "Aliados", t: "Esenttia y recicladores (plástico), proveedores de acero y carbón activado, fabricantes de moldes, Bancóldex, SENA y universidades.", f: "Canvas, bloque 8" }
      ] },
      { tipo: "temas", items: ["Comodato", "Canales", "Marketplaces", "Lotes", "Empresas y conjuntos", "Tienda en línea", "Grandes superficies", "Envíos", "Comisiones", "Marketing", "LTV y CAC", "Cuotas", "Clientes", "Alianzas"] }
    ]
  },

  cifras: {
    k: "07 · Las cifras", t: "Plan financiero a 10 años, escenario realista, sin crédito",
    p: "Los 10 años se cuentan desde la primera venta, cuando abre la fábrica; antes van las 3 etapas (≈ 13 meses). M = millones de pesos. Plan sin crédito: todo lo ponen socios e inversionistas.",
    b: [
      { tipo: "cifras", titulo: "Las cifras clave", items: [
        { v: "$5.520 M", t: "Inversión inicial, sin crédito: fábrica $3.147 M + arranque $489 M + respaldo de caja que vuelve $1.884 M.", f: "Presupuesto ejecutivo, tabla 4" },
        { v: "$143.564", t: "Costo de un producto, todo incluido (promedio de 10 años): variable $104.611 y fijos $2.816 M al año.", f: "Tablas 9 y 13" },
        { v: "49 <small>%</small>", t: "Margen de contribución: cada producto deja $100.574 de los $205.185 que recibe la empresa.", f: "Tabla 13" },
        { v: "2.334 <small>/mes</small>", t: "Punto de equilibrio = fijos ÷ margen. Las ventas lo superan en el mes 16; la operación paga lo que cuesta operar desde el mes 9.", f: "Tabla 13" },
        { v: "Mes 51", t: "Recuperación de la inversión (4 años y 3 meses). Exigiendo el costo del dinero: mes 77.", f: "Tabla 14" },
        { v: "$30.870 M", t: "Utilidad neta de 10 años, ya pagados costos e impuesto de renta (35 %).", f: "Tabla 11" },
        { v: "559 <small>%</small>", t: "Retorno de la inversión (ROI): $30.870 M ÷ $5.520 M.", f: "Tabla 14" },
        { v: "33,6 <small>%</small>", t: "TIR: lo que rinde al año el dinero invertido. El VPN (lo que vale hoy, descontando 23,8 % al año) es +$2.766 M.", f: "Hoja «11 Resultados»" },
        { v: "29,2 <small>%</small>", t: "Utilidad sobre el costo; 20,2 % sobre las ventas ($153.075 M en 10 años).", f: "Tablas 11 y 12" }
      ] },
      { tipo: "tabla", titulo: "Cómo se llega al costo de un producto (10 años = la vida útil de las máquinas)", cols: ["Parte del gasto", "Total 10 años", "Por producto"], num: [1, 2], filas: [
        ["Fabricar: materiales, energía y planta (arriendo, mantenimiento y seguros)", "$54.574 M", "$74.205"],
        ["Administrar y vender: nómina de todos, publicidad, comisiones, distribución, oficina y legales", "$46.972 M", "$63.868"],
        ["Máquinas y moldes: lo que se gastan en los 10 años (depreciación) más las compras de los años siguientes", "$3.549 M", "$4.825"],
        ["Arranque: trámites, desarrollo y pruebas, montaje y lanzamiento", "$489 M", "$665"],
        ["Total: gasto completo ÷ 735.450 productos vendidos", "$105.584 M", "$143.564"]
      ], total: true, nota: "Por producto = total de los 10 años ÷ 735.450 productos vendidos en esos 10 años. Es un promedio: el año 1 cada producto cuesta $193.259, porque se venden pocos; desde el año 4 baja a ≈ $130.000." },
      { tipo: "tabla", titulo: "Cuántos productos: capacidad de la fábrica y ventas", cols: ["Año", "Capacidad al mes", "Turnos de inyección", "Vendidos en el año"], num: [1, 3], filas: [
        ["1", "3.818", "1", "16.200"], ["2", "7.635", "2", "32.250"], ["3", "7.635", "2", "50.250"], ["4", "7.635", "2", "65.500"],
        ["5", "11.453", "3", "77.500"], ["6", "11.453", "3", "86.750"], ["7", "11.453", "3", "92.750"], ["8", "11.453", "3", "98.750"],
        ["9", "11.453", "3", "104.750"], ["10", "11.453", "3", "110.750"], ["Total", "", "", "735.450"]
      ], total: true, nota: "Las ventas suben poco a poco: de 800 productos al mes en el mes 1 a ≈ 9.500 al cerrar el año 10. La fábrica suma un turno cuando las ventas pasan del 85 % de lo que puede hacer." },
      { tipo: "tabla", titulo: "Año por año (M = millones de pesos)", cols: ["Año", "Productos", "Precio con IVA", "Ventas", "Gasto", "Utilidad neta", "Caja acumulada"], num: [1, 2, 3, 4, 5, 6], filas: [
        ["0", "0", "—", "0", "491", "−491", "−4.378"], ["1", "16.200", "$199.900", "2.448", "3.131", "−683", "−4.996"],
        ["2", "32.250", "$211.244", "5.144", "4.856", "289", "−4.563"], ["3", "50.250", "$223.232", "8.471", "6.769", "1.416", "−2.814"],
        ["4", "65.500", "$235.901", "11.668", "8.480", "2.072", "−391"], ["5", "77.500", "$249.288", "14.589", "10.197", "2.855", "2.564"],
        ["6", "86.750", "$263.435", "17.257", "11.445", "3.778", "5.903"], ["7", "92.750", "$278.385", "19.498", "12.751", "4.385", "10.247"],
        ["8", "98.750", "$294.184", "21.937", "14.168", "5.050", "15.231"], ["9", "104.750", "$310.879", "24.590", "15.806", "5.710", "20.848"],
        ["10", "110.750", "$328.521", "27.474", "17.491", "6.489", "27.222"], ["Total", "735.450", "", "153.075", "105.584", "30.870", ""]
      ], total: true, nota: "El precio sube cada julio con la inflación (5,7 %, promedio DANE 2016-2025); en pesos de hoy siempre es $199.900." },
      { tipo: "tabla", titulo: "La inversión inicial y cómo se paga", cols: ["Concepto", "Valor"], num: [1], filas: [
        ["Máquinas y equipos: 25 tipos, 97 unidades con estantes y mesas (3 inyectoras servo de 650, 400 y 250 t, prensa, horno de temple, láser, torno, línea de ensamble…)", "$1.672,3 M"],
        ["10 moldes de inyección, troqueles y clisés", "$1.012,8 M"], ["Adecuación de la bodega, transformador, oficina y computadores", "$462,0 M"],
        ["Gastos de arranque (trámites, marca y patentes, preserie de 300 productos, pruebas, montaje)", "$489,0 M"],
        ["Respaldo que vuelve: capital de trabajo $732 M, IVA de máquinas $598 M, colchón $500 M, depósito $54 M", "$1.883,9 M"],
        ["Total", "$5.520,0 M"]
      ], total: true, nota: "Lo ponen socios e inversionistas, sin crédito: no hay intereses ni cuotas. Entra en 3 etapas (validar, preserie y fábrica). El plan no depende de dinero del Estado; si llega capital semilla del Fondo Emprender, baja el aporte." },
      { tipo: "tabla", titulo: "De dónde salen los $143.564 de cada producto", cols: ["Parte", "Por producto"], num: [1], filas: [
        ["Materiales (resina por tonelada, fleje de acero, carbón, empaque)", "$58.081"], ["Publicidad, comisiones, distribución y garantía", "$30.141"],
        ["Nómina de todas las personas", "$29.310"], ["Planta: arriendo, servicios, mantenimiento y seguros", "$11.487"],
        ["Máquinas y moldes (depreciación)", "$4.825"], ["Energía e insumos de producción", "$4.637"], ["Oficina, ICA y 4 × 1.000", "$3.269"],
        ["Legales y contables", "$1.149"], ["Gastos de arranque", "$665"], ["Intereses", "$0"], ["Total", "$143.564"]
      ], total: true },
      { tipo: "tabla", titulo: "¿Y si algo sale mal? Valor presente (VPN) si cada variable cambia 20 %", cols: ["Variable", "Si baja 20 %", "Si sube 20 %"], num: [1, 2], filas: [
        ["Precio", "−$1.865 M", "$7.241 M"], ["Ventas", "$610 M", "$4.308 M"], ["Materiales", "$4.351 M", "$1.172 M"],
        ["Costos fijos de planta", "$3.536 M", "$1.995 M"], ["Dólar", "$3.249 M", "$2.283 M"], ["Mano de obra", "$3.122 M", "$2.410 M"]
      ], nota: "VPN base: +$2.766 M. En 1.000 futuros simulados (Monte Carlo), el 80,6 % termina con VPN positivo; la TIR del futuro del medio es 28,0 %. Lo que más hay que cuidar es el precio." },
      { tipo: "cifras", titulo: "La fábrica", items: [
        { v: "1.150 <small>m²</small>", t: "bodega arrendada en un parque industrial de la Sabana de Bogotá ($26,8 M al mes con administración).", f: "Hoja «3 Máquinas y planta»" },
        { v: "3.818 → 11.453", t: "productos al mes: año 1 con un turno; desde el año 5 con tres turnos de inyección.", f: "Hoja «6 Capacidad»" },
        { v: "23,2 <small>min</small>", t: "de trabajo de una persona por producto (9,5 min de máquina).", f: "Hoja «6 Capacidad»" },
        { v: "$1.315 M <small>/año</small>", t: "se ahorran en el año 3 por fabricar en casa en vez de comprar las piezas hechas.", f: "Hoja «4 Materia prima»" }
      ] },
      { tipo: "temas", items: ["Inversión inicial", "Financiación", "Precio", "Costo por producto", "Costos fijos y variables", "Margen de contribución", "Punto de equilibrio", "Recuperación (payback)", "Utilidad", "ROI", "TIR", "VPN y WACC", "Rentabilidad", "EBITDA", "Flujo de caja", "Riesgos", "Sensibilidad", "Supuestos", "Capacidad", "Fábrica propia", "Máquinas y moldes"] }
    ]
  },

  pedido: {
    k: "08 · El plan por etapas", t: "Validar antes de construir, y sin crédito",
    p: "Cada etapa se libera solo si se cumple la meta de la anterior. M = millones de pesos. Todas las cifras salen del plan RECOEVO, escenario realista.",
    b: [
      { tipo: "tabla", titulo: "Las tres etapas", cols: ["Etapa", "En qué se usa", "Meta para pasar a la siguiente", "Valor"], num: [3], filas: [
        ["1 · Validar, 3 meses (sin fábrica: talleres de Bogotá hacen las piezas y el equipo arma)", "Ajuste del diseño para inyección $25 M · 5 prototipos impresos en 3D $8 M · pruebas de 20.000 pisadas, corte, olor y caída $10 M · muestras y validación de proveedores $5 M · marca, modelo de utilidad y diseño $6,8 M", "Los 5 prototipos rotan entre 10 familias de Tihuaque, en Usme (dos turnos de 6 semanas): 8 de 10 lo usan a diario. Cuchillas y pedal pasan 20.000 pisadas", "$54,8 M"],
        ["2 · Preserie, ≈ 4 meses (moldes propios, que tardan 10 a 12 semanas; inyección en un taller contratado)", "10 moldes de inyección, troqueles y clisés $1.012,8 M · preserie de 300 productos $27 M", "300 productos en hogares, conjuntos y alcaldías locales; preventas y cartas de intención de compra", "$1.039,8 M"],
        ["3 · Fábrica propia, ≈ 6 meses de montaje (las máquinas tardan ≈ 4 meses en llegar)", "Máquinas y equipos $1.672,3 M · bodega, oficina y computadores $462,0 M · resto del arranque $407,2 M · respaldo de caja que vuelve $1.883,9 M", "Abre la fábrica: mes 1 del plan, 16.200 productos en el año 1", "$4.425,4 M"],
        ["Total", "", "", "$5.520 M"]
      ], total: true, nota: "Los $55 M de hoy son parte de los $5.520 M, no algo aparte. Hoy pedimos solo la etapa 1 ($55 M por el 10 % de RECOEVO); las etapas 2 y 3 ($5.465 M) se piden en nuevas rondas, solo si se cumple cada meta, y el inversionista de hoy tiene la primera opción." },
      { tipo: "tabla", titulo: "Lo que nos dijeron los mentores y lo que cambiamos", cols: ["Nos dijeron", "Lo que hicimos"], filas: [
        ["Los costos no eran coherentes: detallar inyección, mecanizado de cuchillas y trámites legales.", "Cada peso tiene nombre: 10 moldes $1.012,8 M (el del gabinete $308 M, el de la tapa $79,2 M), prensa de 80 t que estampa las 13 cuchillas, horno de temple, y trámites $57,3 M, con marca, modelo de utilidad y diseño ($6,8 M)."],
        ["Validar el hábito con 10 familias antes de gastar en grande.", "Es la etapa 1: 5 prototipos rotan entre 10 familias de Tihuaque, con pruebas de 20.000 pisadas, corte y olor. Sin esa meta no se compran moldes."],
        ["No depender de que el Distrito pague por tonelada (Resolución CRA 720 de 2015).", "Ganamos vendiendo el producto. La CRA 720 no remunera los orgánicos; si llega la tarifa de tratamiento que prepara la CRA, es ganancia extra, no la base del plan."],
        ["No venderle el producto a hogares de bajos ingresos.", "Comodato: la alcaldía local o el conjunto compra el lote y se lo presta gratis al hogar (Código Civil, art. 2200)."],
        ["¿Las bolsas compostables aguantan el camión compactador? ¿Necesitan flota propia?", "No necesitamos flota: la bolsa cerrada va a la ruta de orgánicos que el Decreto 0772 obliga a pasar al menos una vez por semana. El balde de 10 L sirve con cualquier bolsa."],
        ["Para vender abono hace falta registro ICA y la NTC 5167.", "No vendemos abono: el hogar entrega la bolsa a la ruta. Si en el futuro vendemos compost, se hace el registro ICA (Resoluciones 150 de 2003 y 68370 de 2020) y se cumple la NTC 5167."],
        ["Bajar la inversión y el riesgo.", "Sin crédito: la inversión baja de $5.954 M a $5.520 M porque ya no hay cuotas ni intereses que cubrir, y el dinero entra por etapas."]
      ] },
      { tipo: "tabla", titulo: "Marco legal que respalda el plan", cols: ["Norma", "Qué dice", "Qué significa para RECOEVO"], filas: [
        ["Decreto 0772 de 2026 (Ministerio de Vivienda, 16-jul-2026)", "Separar los orgánicos es obligatorio; ruta selectiva de orgánicos al menos una vez por semana; los municipios deben asegurar su tratamiento de forma progresiva.", "Hogares, conjuntos y empresas necesitan una forma fácil de separar: ese es el producto."],
        ["Decreto 0670 de 2025 (Programa Basura Cero)", "Reglamenta el art. 227 de la Ley 2294 de 2023 (Plan Nacional de Desarrollo).", "La política nacional va hacia menos relleno: viento a favor."],
        ["Resolución CRA 720 de 2015", "Paga por tonelada aprovechada (valor base de aprovechamiento), pero no menciona el compostaje ni los orgánicos. CRA es la Comisión de Regulación de Agua Potable y Saneamiento Básico.", "No dependemos de ese pago; si se amplía a orgánicos, es un ingreso extra."],
        ["Ley 142 de 1994, art. 99.9", "Prohíbe exonerar o descontar el valor de los servicios públicos.", "El incentivo al hogar no puede ser un descuento en la factura: se da fuera de ella (puntos en tiendas del barrio)."],
        ["Código Civil, art. 2200", "Comodato: préstamo de uso gratuito de un bien, que se devuelve.", "Base legal para prestar el producto a hogares de estratos 1 y 2."],
        ["Resoluciones ICA 150 de 2003 y 68370 de 2020; NTC 5167", "Registro del ICA (Instituto Colombiano Agropecuario) y calidad para vender abonos orgánicos.", "Hoy no aplica: no vendemos abono. Aplicaría en una fase futura de compost."],
        ["Decisión Andina 486 de 2000", "Marca, modelo de utilidad y diseño industrial se registran en la SIC (Superintendencia de Industria y Comercio).", "Están en la etapa 1 ($6,8 M)."],
        ["Estatuto Tributario, art. 255", "Descuento del 25 % en el impuesto de renta por inversiones ambientales certificadas por la ANLA.", "Posible beneficio, por validar con un contador; no está en las cifras."]
      ] },
      { tipo: "cifras", titulo: "Dinero sin deuda", items: [
        { v: "$0", t: "de crédito: el plan completo lo ponen socios e inversionistas; no hay intereses ni cuotas.", f: "Plan RECOEVO, escenario realista" },
        { v: "$55 M", t: "lo que pedimos hoy, por el 10 % de RECOEVO: la etapa 1 ($54,8 M).", f: "Gastos de arranque del plan" },
        { v: "Fondo Emprender", t: "capital semilla del SENA que se condona si se cumplen las metas; en 2026 abrió 12 convocatorias con más de $282.000 M. El plan lo deja en $0 por prudencia.", f: "Infobae, 17-mar-2026" },
        { v: "$5.520 M", t: "el plan completo en 3 etapas; antes, con crédito, eran $5.954 M.", f: "Presupuesto de inversión" }
      ] },
      { tipo: "temas", items: ["Mentores", "Inversión inicial", "Financiación", "Piloto y preserie", "Siguiente paso", "CRA y tarifas", "Decreto 0772", "Permisos"] }
    ]
  },

  equipo: {
    k: "Equipo y siguiente paso", t: "Quiénes somos y qué sigue",
    p: "Ricardo Beltrán · William Fonseca · Samuel Medina · Faber Ortiz · Camila Riaño. Docente: Ingrid Zoraida Sandoval Pérez. Proceso Administrativo, Politécnico Grancolombiano.",
    b: [
      { tipo: "cifras", titulo: "Lo que ya hicimos", items: [
        { v: "6", t: "metodologías: Design Thinking, investigación de campo, Customer Journey Map, Value Proposition Canvas, Business Model Canvas y Lean Startup.", f: "" },
        { v: "14", t: "informes de investigación con fuentes, y un plan de fábrica y finanzas a 10 años.", f: "" },
        { v: "3D", t: "prototipo interactivo en la web, video, manual de marca, póster y planos para el prototipo físico.", f: "" },
        { v: "252", t: "preguntas del jurado respondidas, con de dónde sale cada cifra (botón «Preguntas»).", f: "" }
      ] },
      { tipo: "texto", titulo: "Lo que sigue", html: "<p><b>Etapa 1 · Validar ($54,8 M):</b> ajuste del diseño para inyección, cinco prototipos que rotan entre 10 familias de Tihuaque, pruebas de 20.000 pisadas, corte y olor, y registro de marca, modelo de utilidad y diseño. <b>Etapa 2 · Preserie ($1.039,8 M):</b> moldes y 300 productos para preventas y cartas de intención. <b>Etapa 3 · Fábrica ($4.425,4 M):</b> ≈ 6 meses de montaje; ahí arranca el año 1 de ventas (16.200 productos).</p><p>Lo que les pedimos: <b>$55 M por el 10 % de RECOEVO</b>, para la etapa 1, y la primera opción para invertir en las siguientes.</p>" },
      { tipo: "temas", items: ["Equipo", "Por qué este equipo", "Metodologías", "Origen de la idea", "Siguiente paso", "Piloto y preserie", "Cronograma", "Indicadores de éxito", "Visión de largo plazo"] }
    ]
  }
};

/* El ODS es ahora el último paso de «Lo que esperamos lograr»: su ventana suma los bloques de los ODS. */
(function () {
  const M = window.MODALES, temas = M.impacto.b.pop();
  M.impacto.b.push(...M.ods.b.filter(b => b.tipo !== "temas"), temas);
  M.impacto.t = "Hogares, toneladas, empleo y ODS";
})();
