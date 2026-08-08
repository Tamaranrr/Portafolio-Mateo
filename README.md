# Portafolio — Productor Multimedia

Cuatro versiones de portafolio de una sola página construidas con [Astro](https://astro.build) para un productor multimedia, cada una con dirección de diseño, tipografía y tipo de slider distintos. Úsalas para comparar y quedarte con la que mejor represente la marca — o mezcla piezas de cada una.

| Ruta | Estilo | Tipografía | Slider destacado |
| --- | --- | --- | --- |
| `/` | Oscuro cinematográfico | Anton + Work Sans | Grid con filtro por categoría + modal de detalle |
| `/v2` | Editorial minimalista clara | Fraunces + Inter | Portada crossfade en el hero + carrusel "spread" horizontal en Trabajo |
| `/v3` | Vibrante y maximalista | Archivo Black + Space Grotesk | Carrusel arrastrable (drag) en Trabajo + stack de tarjetas swipe en Testimonios |
| `/v4` | Brutalista / experimental | IBM Plex Mono | Ticker/marquee crudo + tabla-acordeón de proyectos + pager de corte duro en Testimonios |

Cada versión tiene su propio layout, componentes y hoja de estilos (no comparten CSS), pero reutilizan los mismos datos de ejemplo en `src/data/`. Un selector flotante en la parte inferior de cada página permite saltar entre las 4.

## Requisitos

- Node.js 18.17+ (recomendado 20 LTS)

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:4321`. Navega a `/v2`, `/v3` o `/v4` para ver las otras versiones.

## Build de producción

```bash
npm run build
npm run preview
```

El sitio estático queda en `dist/` listo para publicar en Netlify, Vercel, GitHub Pages, etc.

## Estructura

```
src/
  components/       # v1: Nav, Hero, About, Work, Services, Testimonials, Clients, Contact, Footer
  components/v2/    # Equivalentes de v2 (sufijo V2)
  components/v3/    # Equivalentes de v3 (sufijo V3)
  components/v4/    # Equivalentes de v4 (sufijo V4)
  components/shared/VersionSwitcher.astro  # selector flotante entre versiones
  data/              # projects.js, content.js — contenido editable, compartido por las 4 versiones
  layouts/           # Layout.astro, LayoutV2/V3/V4.astro (head, fuentes, scroll-reveal)
  pages/             # index.astro (v1), v2.astro, v3.astro, v4.astro
  styles/            # global.css, v2.css, v3.css, v4.css — tokens de diseño por versión
public/
  favicon.svg
```

## Dónde reemplazar contenido de ejemplo

Todo el contenido es de ejemplo (placeholder) y está centralizado para editarse una sola vez:

- **[src/data/projects.js](src/data/projects.js)** — proyectos del portafolio (título, categoría, cliente, año, descripción, imagen). Cambia el campo `image` por rutas locales (colócalas en `public/` y usa `/nombre.jpg`) o URLs reales. Este archivo alimenta las 4 versiones a la vez.
- **[src/data/content.js](src/data/content.js)** — testimonios, servicios, lista de clientes/marcas y estadísticas. También compartido por las 4 versiones.
- Textos específicos de cada Hero/About/Contact (tagline, bio, email, redes) están escritos directamente en cada componente — edítalos ahí si quieres textos distintos por versión, o iguálalos a mano si prefieres consistencia.

### Imágenes

Actualmente se usan imágenes de ejemplo de `picsum.photos`. Para producción, reemplázalas por fotografías/fotogramas reales: colócalas en `public/images/` y referencia rutas como `/images/proyecto-1.jpg`.

### Formularios de contacto

Los formularios validan los campos y muestran un mensaje de éxito en el cliente, pero **no envían datos a ningún servidor todavía**. Para que funcionen de verdad, conéctalos a un servicio como [Formspree](https://formspree.io), [Resend](https://resend.com) o tu propio backend — el punto de integración está marcado con un comentario dentro del `<script>` de cada componente Contact/ContactV2/ContactV3/ContactV4.

## Personalizar colores y tipografía

Cada versión tiene su propia hoja de tokens bajo `:root` — cambia ahí sin afectar a las demás:

- **v1:** [src/styles/global.css](src/styles/global.css) — `--accent` (dorado), Anton + Work Sans.
- **v2:** [src/styles/v2.css](src/styles/v2.css) — `--accent` (terracota), Fraunces + Inter.
- **v3:** [src/styles/v3.css](src/styles/v3.css) — `--pink`/`--cyan`/`--yellow`/`--violet`, Archivo Black + Space Grotesk.
- **v4:** [src/styles/v4.css](src/styles/v4.css) — `--accent` (rojo), IBM Plex Mono.

Las fuentes se cargan vía Google Fonts en cada `Layout*.astro` correspondiente.

## Quitar el selector de versiones

Cuando decidas quedarte con una sola versión: elimina el `<VersionSwitcher />` de esa página en `src/pages/`, borra las carpetas/páginas de las versiones descartadas (`v2.astro` + `components/v2/` + `styles/v2.css` + `layouts/LayoutV2.astro`, etc.), y mueve la versión ganadora a `index.astro` si no era ya la `/`.
