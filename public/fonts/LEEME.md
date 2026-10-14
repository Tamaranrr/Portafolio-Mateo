# Fuente de títulos: LEMON MILK

Copia aquí los archivos con EXACTAMENTE estos nombres:

- LEMONMILK-Regular.woff2   (o .otf)
- LEMONMILK-Medium.woff2    (o .otf)
- LEMONMILK-Bold.woff2      (o .otf)

.woff2 es lo ideal (mucho más liviano). Si solo tienes .otf también sirve
(el navegador intentará .woff2, dará 404 y cargará el .otf). Para convertir
.otf/.ttf a .woff2: https://cloudconvert.com/otf-to-woff2

Mientras no estén los archivos, los títulos grandes usan "Anton" como respaldo.
Las reglas @font-face están en src/layouts/Layout.astro; el token en src/styles/global.css.
