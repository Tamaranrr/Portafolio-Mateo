// Categorías de proyectos del portafolio (usadas en el slider del Hero y en /proyectos/[slug]).
export const categories = [
  { slug: "fotografia-urbana", label: "Fotografía urbana" },
  {
    slug: "producto",
    label: "Producto",
    description:
      "Fotografía de producto pensada para vender: cada toma se construye para que quien la ve sienta el material, entienda el tamaño y se imagine usándolo. Luz, fondo y encuadre trabajan juntos para que el producto se vea deseable antes de leer una sola palabra.",
    subcategories: [
      {
        slug: "textiles",
        label: "Textiles",
        description:
          "Un accesorio artesanal se compra cuando el cliente ya se imagina llevándolo puesto. Por eso lo fotografiamos sobre piel real y con luz lateral suave: así se ve el brillo de cada semilla, el tejido de la mochila y el color exacto, sin filtros que engañen. Alternamos la prenda puesta, que da escala y actitud, con primeros planos de la trama, los remates y los herrajes, para que se entienda el trabajo hecho a mano y el valor detrás del precio.",
      },
      {
        slug: "alimentos",
        label: "Alimentos",
        description:
          "Una bebida entra por los ojos antes que por la boca. Trabajamos con contraluz para encender el color del líquido, congelamos el instante de la salpicadura y el vaso escarchado, y cuidamos que el hielo, la fruta y la espuma se vean en su punto exacto. El logo queda legible y bien puesto, el fondo con brillos suaves suma frescura sin robar protagonismo: el resultado es una foto que da sed y se comparte sola.",
      },
      {
        slug: "mobiliario",
        label: "Mobiliario",
        description:
          "Un mueble se compra cuando el cliente ya lo ubicó en su casa. Lo fotografiamos con luz amplia y envolvente que describe la madera tallada tal cual es, sobre fondo limpio y con una sombra suave que lo asienta en el piso. Elegimos un ángulo de tres cuartos que da volumen y proporción real, y acercamos los detalles (el relieve, las uniones, el acabado a la cal) que explican por qué esta pieza vale lo que vale.",
      },
    ],
  },
  {
    slug: "eventos",
    label: "Eventos",
    description:
      "Cobertura de bodas, quince años y celebraciones familiares: retratos, ediciones y momentos espontáneos pensados para guardar la nostalgia, la alegría y la elegancia de cada fiesta.",
    subcategories: [
      { slug: "bodas", label: "Bodas" },
      { slug: "quinces", label: "Quinces" },
    ],
  },
  {
    slug: "diseno",
    label: "Diseño",
    description:
      "Diseño gráfico de principio a fin: investigación, maquetación, sistema visual y estrategia. Publicaciones técnicas, piezas publicitarias y campañas donde la información compleja se vuelve clara, ordenada y agradable de leer.",
    subcategories: [
      {
        slug: "editoriales",
        label: "Editoriales",
        description:
          "Publicaciones que empiezan en la investigación y terminan en la imprenta. Se define una retícula y una jerarquía tipográfica que ordenan capítulos, figuras y tablas; se diseñan infografías y diagramas que explican un procedimiento técnico de un vistazo, y un sistema visual constante (color, íconos, portada ilustrada) que le da identidad a toda la colección. Estrategia editorial para que un manual denso se lea fácil y den ganas de hojearlo.",
      },
      { slug: "publicitarios", label: "Publicitarios" },
      { slug: "campana", label: "Campaña" },
    ],
  },
  { slug: "documental", label: "Documental" },
  { slug: "retratos", label: "Retratos" },
  { slug: "fotografia-detalle", label: "Fotografía a detalle" },
];
