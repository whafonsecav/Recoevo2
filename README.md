# RECOEVO · Presentación de la gran final

**Transformación de residuos orgánicos sin electricidad.** Menos relleno, más vida.

Presentación en estilo keynote para la final del concurso (Proceso Administrativo, Politécnico Grancolombiano, 2026-2).

- **Verla:** https://whafonsecav.github.io/Recoevo2/
- **Web del proyecto (QR del póster):** https://whafonsecav.github.io/Prototipo-Recoevo/

## Cómo se maneja

| Tecla | Qué hace |
|---|---|
| → · espacio · clic · control remoto | Siguiente paso. Cada pantalla se transforma por pasos. |
| ← · clic derecho | Paso anterior |
| F | Pantalla completa |
| P | Vista del presentador en otra ventana: guion, reloj y lo que sigue |
| M | Más datos de la pantalla actual: cifras completas, tablas y fuentes |
| Q | Preguntas del jurado: 252 respuestas por tema |
| G | Índice para saltar a cualquier pantalla |
| B | Pantalla negra |
| Esc | Cierra las ventanas |

## Las 11 pantallas

1. Portada
2. La comida que enterramos (33.300 t/día, 60 % es comida, Doña Juana, Decreto 0772)
3. El campo paga caro el abono (urea +187 %, 2026, importación y tierra degradada)
4. Trabajo de campo en Villa Rosita, Usme
5. RECOEVO en 3D: echa, pisa, sin olor, entrega y despiece
6. Sin luz y a precio de caneca
7. Lo que esperamos lograr (735.450 hogares, 406.983 t)
8. Objetivos de Desarrollo Sostenible 12, 11 y 13
9. Modelo de negocio y canales
10. Las cifras: inversión, equilibrio, recuperación, utilidad, ROI y TIR
11. Cierre

Todas las cifras son del escenario realista del plan financiero a 10 años, del póster de la E-Fest y del estudio de campo (19-sep-2026).

## Técnica

HTML, CSS y JavaScript sin librerías, salvo three.js (r149) para el modelo 3D (`assets/modelo/recoevo.glb`, el mismo de la web y del póster). El escenario mide 1920 × 1080 y se escala a cualquier pantalla. Para abrir sin internet: doble clic en `index.html`, que carga el modelo desde `assets/modelo/recoevo_glb.js`.

- `?captura=N&paso=M` dibuja la pantalla N en su paso M sin animaciones (lo usa el PDF de respaldo).
- `?presentador` es la vista del presentador; se sincroniza con la pantalla principal en el mismo navegador.

Equipo: Ricardo Beltrán · William Fonseca · Samuel Medina · Faber Ortiz · Camila Riaño. Docente: Ingrid Zoraida Sandoval Pérez.
