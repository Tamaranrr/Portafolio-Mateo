// Proyectos reales del productor. Se agregan uno por uno a medida que llegan las carpetas.
// "image" acepta una URL completa o una ruta relativa dentro de src/assets/ (se optimiza en el build).
import { categories as categoryList } from "./categories.js";

export const categories = ["Todos", ...categoryList.map((c) => c.label)];

export const projects = [
  {
    id: "p13",
    title: "Diseño: Cartillas Técnicas SENA",
    category: "Diseño",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    tags: ["Editorial", "Maquetación", "Infografía"],
    description:
      "Serie de seis cartillas técnicas de construcción y horticultura: de la investigación a la imprenta. Retícula, jerarquía tipográfica, infografías que explican la norma de un vistazo y un sistema visual constante que le da identidad a toda la colección.",
    image: "proyectos/diseno/editoriales/1-vulnerabilidad-sismica-00.jpg",
  },
  {
    id: "p10",
    title: "Producto: Textiles Artesanales",
    category: "Producto",
    client: "Marca de accesorios hechos a mano",
    tags: ["Producto", "Artesanía", "E-commerce"],
    description:
      "El collar sobre piel real y con luz lateral: así se ve el brillo de cada semilla y el color verdadero. Combinamos la prenda puesta, que da actitud y escala, con primeros planos del tejido y los remates para que se entienda el trabajo a mano y den ganas de comprarlo.",
    image: "proyectos/producto/textiles/_IMG_8270-Editar.jpg",
  },
  {
    id: "p11",
    title: "Producto: Bebidas Mr. Drinks",
    category: "Producto",
    client: "Mr. Drinks Company Bogotá",
    tags: ["Producto", "Bebidas", "Publicidad"],
    description:
      "Contraluz para encender el color, la salpicadura congelada en el aire y el vaso escarchado con el logo bien legible. Cada toma está calculada para que la bebida se vea fría, fresca y apetecible: una foto que da sed y se comparte sola.",
    image: "proyectos/producto/alimentos/IMG_9490.jpg",
  },
  {
    id: "p12",
    title: "Producto: Mobiliario Tallado",
    category: "Producto",
    client: "Taller de muebles en madera",
    tags: ["Producto", "Mobiliario", "Catálogo"],
    description:
      "Luz amplia y envolvente sobre fondo limpio, con una sombra suave que asienta la pieza en el piso. Un ángulo de tres cuartos le da volumen real y los primeros planos del relieve y el acabado a la cal explican, sin palabras, por qué vale lo que vale.",
    image: "proyectos/producto/mobiliario/4824.jpg",
  },
  {
    id: "p7",
    title: "Quince Años: Corona y Confeti",
    category: "Eventos",
    client: "Fiesta de 15 años",
    tags: ["Quinceañera", "Retrato", "Edición de momento"],
    description:
      "El día en que una niña se convierte, por una noche, en la protagonista de su propia historia: la corona, el orgullo de sus papás mirándola y el confeti cayendo como si el tiempo se detuviera. Guardamos esa inocencia y esa alegría que solo se viven a los quince.",
    image: "proyectos/eventos/quinces/IMG_0341.jpg",
  },
  {
    id: "p9",
    title: "Boda: Primer Baile",
    category: "Eventos",
    client: "Celebración de boda",
    tags: ["Boda", "Ceremonia", "Fiesta"],
    description:
      "Una boda no es una fiesta más: es una promesa. El nervio antes del sí, el abrazo de las dos familias, el primer baile ya como esposos. No fotografiamos el vestido ni el anillo, fotografiamos la certeza de un para siempre que van a querer volver a sentir.",
    image: "proyectos/eventos/bodas/_MG_5470.jpg",
  },
];
