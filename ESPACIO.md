# Conteo de espacio (control de límites de GitHub)

Actualizar con cada lote de imágenes/PDF que se agregue.

## Límites a respetar
| Recurso | Límite | Aviso |
|---|---|---|
| Sitio publicado (GitHub Pages) | 1 GB duro | — |
| Archivo individual en el repo | 100 MB duro | GitHub avisa a partir de 50 MB |
| Repositorio | ~1 GB recomendado (sin límite duro cercano) | |
| Ancho de banda Pages | 100 GB / mes (blando) | |

## Estado actual (2026-08-29)

| Parte | Tamaño | Cuenta para |
|---|---|---|
| `dist/` sitio publicado | **59 MB** | límite Pages (1 GB) |
| ├─ páginas de cartillas como imágenes (`public/proyectos/diseno/lector/`) | 55 MB | |
| └─ resto (HTML + imágenes .webp + CSS/JS) | ~4 MB | |
| `src/assets/` (fotos fuente, NO se publican) | 17 MB | tamaño del repo |
| **Total que entra al repo en el próximo commit** | **~72 MB** | |

### Fotos fuente por categoría (`src/assets/proyectos/`)
Reescaladas a máx. 2400 px, JPEG q80 (originales intactos en `…/Mateo/Proyectos/`).

| Categoría | Tamaño |
|---|---|
| eventos (bodas, quinces) | 7,2 MB |
| producto (textiles, alimentos, mobiliario) | 5,8 MB |
| diseno/editoriales (portadas + interiores) | 3,9 MB |

### Cartillas: páginas como imágenes (`public/proyectos/diseno/lector/<slug>/NNN.jpg`)
NO se publica ningún PDF. Cada cartilla es una carpeta de JPEG (105 dpi, q72) que
se leen SOLO dentro del visor de la web. 240 MB de PDF originales -> 55 MB de imágenes.

| Cartilla | Páginas | Tamaño |
|---|---|---|
| 1-vulnerabilidad-sismica | 64 | 7,2 MB |
| 2-instalaciones-hidraulicas | 72 | 8,2 MB |
| 3-instalaciones-sanitarias | 62 | 7,0 MB |
| 4-instalaciones-gas | 56 | 6,0 MB |
| 5-vulnerabilidad-sismica-vol2 | 80 | 9,6 MB |
| 6-jardineria-horticultura-urbana | 133 | 17 MB |

## Margen
Sitio publicado 59 MB de 1 GB → **queda ~94 % libre**. Ningún archivo pasa de 50 MB.
Se pueden agregar muchas categorías más antes de acercarse a cualquier límite.

## Reglas al agregar material nuevo
1. Fotos: reescalar a máx. 2400 px antes de meterlas en `src/assets/` (script sharp usado: q80 mozjpeg).
2. Documentos: NO subir PDF descargable. Rasterizar a páginas JPEG (~105 dpi) en `public/.../lector/<slug>/`.
3. Nunca subir originales de cámara (5000+ px, 5-15 MB c/u) al repo.
