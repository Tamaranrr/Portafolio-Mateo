// Publicaciones (cartillas) que se muestran en las páginas de categoría.
// Se leen SOLO dentro del visor de la web (páginas como imágenes en public/<reader>/NNN.jpg).
// No se publica ningún PDF descargable.
// "cover" es una ruta dentro de src/assets/ (se optimiza en el build).
export const publicaciones = [
  {
    category: "diseno",
    subcat: "editoriales",
    title: "Vulnerabilidad sísmica en viviendas de 1 y 2 pisos",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    meta: "Cartilla · 64 páginas · NSR-10 Título E",
    description:
      "Investigación, maquetación e infografía de la cartilla sobre vulnerabilidad sísmica en vivienda de baja altura en Bogotá. Retícula, jerarquía tipográfica y diagramas para volver aplicable la norma.",
    cover: "proyectos/diseno/editoriales/1-vulnerabilidad-sismica-00.jpg",
    reader: "proyectos/diseno/lector/1-vulnerabilidad-sismica",
    pages: 64,
  },
  {
    category: "diseno",
    subcat: "editoriales",
    title: "Planos de instalaciones hidráulicas residenciales",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    meta: "Cartilla · 72 páginas",
    description:
      "Diseño editorial de la guía de lectura de planos hidráulicos: sistema de figuras numeradas, tablas de escalas y esquemas paso a paso dentro de una retícula constante.",
    cover: "proyectos/diseno/editoriales/2-instalaciones-hidraulicas-00.jpg",
    reader: "proyectos/diseno/lector/2-instalaciones-hidraulicas",
    pages: 72,
  },
  {
    category: "diseno",
    subcat: "editoriales",
    title: "Planos de instalaciones sanitarias residenciales",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    meta: "Cartilla · 62 páginas",
    description:
      "Maquetación y diagramación de la cartilla sanitaria, con ilustraciones de proyección y vistas ortográficas construidas para explicar geometría descriptiva sin texto de más.",
    cover: "proyectos/diseno/editoriales/3-instalaciones-sanitarias-00.jpg",
    reader: "proyectos/diseno/lector/3-instalaciones-sanitarias",
    pages: 62,
  },
  {
    category: "diseno",
    subcat: "editoriales",
    title: "Planos de instalaciones residenciales de gas",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    meta: "Cartilla · 56 páginas",
    description:
      "Diseño de la guía de instalaciones de gas: dibujo técnico, proyección isométrica y despieces mecánicos integrados al mismo sistema visual de la colección.",
    cover: "proyectos/diseno/editoriales/4-instalaciones-gas-00.jpg",
    reader: "proyectos/diseno/lector/4-instalaciones-gas",
    pages: 56,
  },
  {
    category: "diseno",
    subcat: "editoriales",
    title: "Vulnerabilidad sísmica volumen 2: construcción progresiva",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    meta: "Cartilla · 80 páginas · NSR-10 Títulos C, D, E",
    description:
      "Segundo volumen de la serie sísmica. Infografías de dosificación de mezclas y proceso constructivo, con la identidad de portada ilustrada y el color guía de toda la colección.",
    cover: "proyectos/diseno/editoriales/5-vulnerabilidad-sismica-vol2-00.jpg",
    reader: "proyectos/diseno/lector/5-vulnerabilidad-sismica-vol2",
    pages: 80,
  },
  {
    category: "diseno",
    subcat: "editoriales",
    title: "Jardinería y horticultura urbana",
    client: "SENA (Servicio Nacional de Aprendizaje)",
    meta: "Libro · 133 páginas",
    description:
      "La publicación más extensa de la serie. Portada ilustrada en puntillismo, fotografía de procedimiento con tratamiento consistente y una maquetación pensada para lectura larga.",
    cover: "proyectos/diseno/editoriales/6-jardineria-horticultura-00.jpg",
    reader: "proyectos/diseno/lector/6-jardineria-horticultura-urbana",
    pages: 133,
  },
];
