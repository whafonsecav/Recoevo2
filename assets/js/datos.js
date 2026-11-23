/* RECOEVO · datos de la presentación y contenido de las ventanas «Más datos».
   Todas las cifras son del ESCENARIO REALISTA del plan (Plan detallado realista y Presupuesto ejecutivo, 3-nov-2026),
   del póster de la E-Fest, del estudio de campo (19-sep-2026) y de sus fuentes. Revisadas el 22-nov-2026. */
window.RECOEVO_DATOS = {
  // caja acumulada del negocio, mes 0 a 120, en millones de pesos (hoja «Proyección», fila 130; igual a la web /presupuesto/)
  caja: [-4372.6, -4547.4, -4639.7, -4710.2, -4772.4, -4826.4, -4872.0, -4909.4, -4942.0, -4966.4, -4982.4, -4990.2, -4990.6, -4986.3, -5002.3, -5007.1, -5001.7, -4984.6, -4956.6, -4917.4, -4868.0, -4806.9, -4734.9, -4651.7, -4558.3, -4511.6, -4411.3, -4299.0, -4175.9, -4040.2, -3897.2, -3742.3, -3576.6, -3402.5, -3216.8, -3019.3, -2809.4, -2646.6, -2398.4, -2141.8, -1876.3, -1628.2, -1439.9, -1246.5, -1047.7, -843.6, -633.6, -419.1, -202.1, -65.4, 166.6, 404.3, 648.3, 893.7, 1144.7, 1401.3, 1663.5, 1931.3, 2205.4, 2480.9, 2763.8, 2539.4, 2849.8, 3163.2, 3480.2, 3799.3, 4122.1, 4448.1, 4772.6, 5100.8, 5431.4, 5765.8, 6102.8, 6334.0, 6694.3, 7057.8, 7425.0, 7794.6, 8164.0, 8536.7, 8912.0, 9290.9, 9672.5, 10058.2, 10446.5, 10715.9, 11130.6, 11548.6, 11970.7, 12390.8, 12815.0, 13242.8, 13673.2, 14107.5, 14544.7, 14986.1, 15430.3, 15736.0, 16204.7, 16676.8, 17148.5, 17622.8, 18101.4, 18583.7, 19068.9, 19558.2, 20050.5, 20547.2, 21047.1, 21397.5, 21930.0, 22461.1, 22996.7, 23535.1, 24078.0, 24624.9, 25174.8, 25729.1, 26286.5, 26851.0, 27421.8],
  actos: [["problema", "Problema"], ["campo", "Campo"], ["solucion", "Solución"], ["impacto", "Impacto"], ["ods", "ODS"], ["negocio", "Negocio"], ["cifras", "Cifras"]]
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
    k: "03 · Trabajo de campo", t: "Lo que encontramos en Villa Rosita, Usme",
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
    k: "07 · Modelo de negocio", t: "Precios, canales y lo que deja cada venta",
    p: "El único ingreso es la venta del producto (más los talleres a empresas). No hay suscripciones.",
    b: [
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
      { tipo: "temas", items: ["Canales", "Marketplaces", "Lotes", "Empresas y conjuntos", "Tienda en línea", "Grandes superficies", "Envíos", "Comisiones", "Marketing", "LTV y CAC", "Cuotas", "Clientes", "Alianzas"] }
    ]
  },

  cifras: {
    k: "08 · Las cifras", t: "Plan financiero a 10 años, escenario realista",
    p: "Montaje de enero a junio de 2027; ventas desde julio de 2027. M = millones de pesos. Las cifras coinciden con el presupuesto ejecutivo y con la web /presupuesto/.",
    b: [
      { tipo: "cifras", titulo: "Las cifras clave", items: [
        { v: "$5.954 M", t: "Inversión inicial: fábrica $3.147 M + arranque $484 M + respaldo de caja que vuelve $2.323 M.", f: "Presupuesto ejecutivo, tabla 4" },
        { v: "$144.319", t: "Costo de un producto, todo incluido (promedio de 10 años): variable $104.611 y fijos $2.872 M al año.", f: "Tablas 9 y 13" },
        { v: "49 <small>%</small>", t: "Margen de contribución: cada producto deja $100.574 de los $205.185 que recibe la empresa.", f: "Tabla 13" },
        { v: "2.380 <small>/mes</small>", t: "Punto de equilibrio = fijos ÷ margen. Las ventas lo superan en el mes 17; la operación paga lo que cuesta operar desde el mes 9.", f: "Tabla 13" },
        { v: "Mes 50", t: "Recuperación de la inversión (4 años y 2 meses). Exigiendo el costo del dinero: mes 74.", f: "Tabla 14" },
        { v: "$30.508 M", t: "Utilidad neta de 10 años, ya pagados costos e impuesto de renta (35 %).", f: "Tabla 11" },
        { v: "512 <small>%</small>", t: "Retorno de la inversión (ROI): $30.508 M ÷ $5.954 M. Sobre el aporte de los socios es 625 %.", f: "Tabla 14" },
        { v: "33,9 <small>%</small>", t: "TIR: lo que rinde al año el dinero invertido. El VPN (lo que vale hoy, descontando 22,4 % al año) es +$3.397 M.", f: "Hoja «11 Resultados»" },
        { v: "28,7 <small>%</small>", t: "Utilidad sobre el costo; 19,9 % sobre las ventas ($153.075 M en 10 años).", f: "Tablas 11 y 12" }
      ] },
      { tipo: "tabla", titulo: "Año por año (M = millones de pesos)", cols: ["Año", "Productos", "Precio con IVA", "Ventas", "Gasto", "Utilidad neta", "Caja acumulada"], num: [1, 2, 3, 4, 5, 6], filas: [
        ["0", "0", "—", "0", "486", "−486", "−4.373"], ["1", "16.200", "$199.900", "2.448", "3.312", "−865", "−4.991"],
        ["2", "32.250", "$211.244", "5.144", "5.008", "136", "−4.558"], ["3", "50.250", "$223.232", "8.471", "6.888", "1.454", "−2.809"],
        ["4", "65.500", "$235.901", "11.668", "8.558", "2.022", "−202"], ["5", "77.500", "$249.288", "14.589", "10.226", "2.836", "2.764"],
        ["6", "86.750", "$263.435", "17.257", "11.445", "3.778", "6.103"], ["7", "92.750", "$278.385", "19.498", "12.751", "4.385", "10.447"],
        ["8", "98.750", "$294.184", "21.937", "14.168", "5.050", "15.430"], ["9", "104.750", "$310.879", "24.590", "15.806", "5.710", "21.047"],
        ["10", "110.750", "$328.521", "27.474", "17.491", "6.489", "27.422"], ["Total", "735.450", "", "153.075", "106.139", "30.508", ""]
      ], total: true, nota: "El precio sube cada julio con la inflación (5,7 %, promedio DANE 2016-2025); en pesos de hoy siempre es $199.900." },
      { tipo: "tabla", titulo: "La inversión inicial y cómo se paga", cols: ["Concepto", "Valor"], num: [1], filas: [
        ["Máquinas y equipos: 25 tipos, 97 unidades con estantes y mesas (3 inyectoras servo de 650, 400 y 250 t, prensa, horno de temple, láser, torno, línea de ensamble…)", "$1.672,3 M"],
        ["10 moldes de inyección, troqueles y clisés", "$1.012,8 M"], ["Adecuación de la bodega, transformador, oficina y computadores", "$462,0 M"],
        ["Gastos de arranque (trámites, marca y patentes, preserie de 300 productos, pruebas, montaje)", "$484,1 M"],
        ["Respaldo que vuelve: capital de trabajo $1.171 M, IVA de máquinas $598 M, colchón $500 M, depósito $54 M", "$2.322,9 M"],
        ["Total", "$5.954,0 M"]
      ], total: true, nota: "Lo ponen los socios ($4.880 M, 82 %) y un crédito ($1.074 M, 18 %; 19,5 % E.A. a 60 meses, cuota de $27,2 M). El plan no depende de dinero del Estado." },
      { tipo: "tabla", titulo: "De dónde salen los $144.319 de cada producto", cols: ["Parte", "Por producto"], num: [1], filas: [
        ["Materiales (resina por tonelada, fleje de acero, carbón, empaque)", "$58.081"], ["Publicidad, comisiones, distribución y garantía", "$30.141"],
        ["Nómina de todas las personas", "$29.310"], ["Planta: arriendo, servicios, mantenimiento y seguros", "$11.487"],
        ["Máquinas y moldes (depreciación)", "$4.825"], ["Energía e insumos de producción", "$4.637"], ["Oficina, ICA y 4 × 1.000", "$3.269"],
        ["Legales y contables", "$1.149"], ["Intereses del crédito", "$762"], ["Gastos de arranque", "$658"], ["Total", "$144.319"]
      ], total: true },
      { tipo: "tabla", titulo: "¿Y si algo sale mal? Valor presente (VPN) si cada variable cambia 20 %", cols: ["Variable", "Si baja 20 %", "Si sube 20 %"], num: [1, 2], filas: [
        ["Precio", "−$1.590 M", "$8.246 M"], ["Ventas", "$1.069 M", "$5.063 M"], ["Materiales", "$5.118 M", "$1.683 M"],
        ["Costos fijos de planta", "$4.235 M", "$2.562 M"], ["Dólar", "$3.918 M", "$2.877 M"], ["Mano de obra", "$3.782 M", "$3.012 M"]
      ], nota: "VPN base: +$3.397 M. En 1.000 futuros simulados (Monte Carlo), el 86,9 % termina con VPN positivo; la TIR del futuro del medio es 28,35 %. Lo que más hay que cuidar es el precio." },
      { tipo: "cifras", titulo: "La fábrica", items: [
        { v: "1.150 <small>m²</small>", t: "bodega arrendada en un parque industrial de la Sabana de Bogotá ($26,8 M al mes con administración).", f: "Hoja «3 Máquinas y planta»" },
        { v: "3.818 → 11.453", t: "productos al mes: año 1 con un turno; desde el año 5 con tres turnos de inyección.", f: "Hoja «6 Capacidad»" },
        { v: "23,2 <small>min</small>", t: "de trabajo de una persona por producto (9,5 min de máquina).", f: "Hoja «6 Capacidad»" },
        { v: "$1.315 M <small>/año</small>", t: "se ahorran en el año 3 por fabricar en casa en vez de comprar las piezas hechas.", f: "Hoja «4 Materia prima»" }
      ] },
      { tipo: "temas", items: ["Inversión inicial", "Financiación", "Crédito", "Precio", "Costo por producto", "Costos fijos y variables", "Margen de contribución", "Punto de equilibrio", "Recuperación (payback)", "Utilidad", "ROI", "TIR", "VPN y WACC", "Rentabilidad", "EBITDA", "Flujo de caja", "Riesgos", "Sensibilidad", "Supuestos", "Capacidad", "Fábrica propia", "Máquinas y moldes"] }
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
      { tipo: "texto", titulo: "Lo que sigue", html: "<p><b>1.</b> Cinco prototipos funcionales impresos en 3D ($8 M) y el ajuste del diseño para inyección ($25 M). <b>2.</b> Una <b>preserie de 300 productos</b> ($27 M) para pruebas, demostraciones, primeras preventas y cartas de intención. <b>3.</b> Un piloto con hogares reales, empezando por Usme, para medir los kilos por hogar, el uso y el precio. Si hay financiación: montaje de enero a junio de 2027 y ventas desde julio de 2027.</p><p>Lo que les pedimos: <b>una conversación y una posible mentoría</b>, para afinar estos números con su experiencia.</p>" },
      { tipo: "temas", items: ["Equipo", "Por qué este equipo", "Metodologías", "Origen de la idea", "Siguiente paso", "Piloto y preserie", "Cronograma", "Indicadores de éxito", "Visión de largo plazo"] }
    ]
  }
};
