# Vascolet 4: renderer del navegador y mediciones

CheerpX 1.2.8 ejecuta el ELF x86 original. El renderer YUV comunica sprites y
líneas a Canvas, y el adaptador SDL reproduce audio con Web Audio. Los archivos
originales conservan sus hashes (`native/cheerpx/sources.json`).

Se corrigen el tamaño de los eventos SDL i386, transparencia, reutilización
de texturas y escrituras parciales. Las texturas mutables se invalidan al
acceder a sus píxeles, incluyendo las utilizadas para vídeo. La liberación de
texturas utiliza el operador de memoria del propio juego.

Los hooks del renderer y las optimizaciones de color y transformaciones se
identifican mediante direcciones y hashes en
`native/cheerpx/runtime-metadata.json`. Las conversiones y atajos matemáticos
se contrastan con sus funciones originales antes de activarse.

## Resultado local, noviembre de 2026

Chromium y AMD Radeon RX 6500 XT, dentro del primer nivel, caminando y saltando:

| Medición | Resultado |
|---|---:|
| Duración de movimiento | 15,76 s |
| FPS medio | 58,69 |
| Mediana entre cuadros | 16,86 ms |
| Percentil 95 | 23,67 ms |
| Audio | Señal real, sin errores |

Otra ruta de 20,97 s dio 58,62 FPS. Estas mediciones no certifican todos los
niveles ni un teléfono. La película de introducción original es de 10 FPS;
no se usa para medir rendimiento jugable.

Se verificaron exportación, importación, reinicio y reexportación de un archivo
de prueba. Esa comprobación valida la infraestructura de persistencia y no
sustituye completar niveles para comprobar el guardado del propio juego.

Para recompilar: configurar `ZIG` con Zig 0.13.0 y ejecutar
`python native/cheerpx/rebuild.py`. `python build.py` genera el sitio con el
bundle incluido. CheerpX se carga desde su CDN oficial.
