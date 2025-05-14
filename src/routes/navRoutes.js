export const navRoutes = [
  {
    id: 1,
    title: "Proyecto artístico",
    slug: "proyecto-artistico",
    path: "/proyecto-artistico",
    level: 0
  },
  {
    id: 2,
    title: "Los inicios",
    slug: "los-inicios",
    path: "/los-inicios",
    level: 0
  },
  {
    id: 3,
    order: 0,
    title: "La obra completa",
    slug: "obra-completa",
    path: "/obra-completa",
    level: 0
  },
  {
    id: 4,
    order: 1,
    title: `1. Realismo figurativo`,
    slug: "realismo-figurativo",
    path: "/obra-completa?category=realismo-figurativo",
    level: 1
  },
  {
    id: 5,
    order: 1.1,
    title: `1.1. Retratos`,
    slug: "retratos",
    path: "/obra-completa?category=realismo-figurativo&subcategory=retratos",
    level: 2
  },
  {
    id: 6,
    order: 1.2,
    title: `1.2. Representaciones de la naturaleza (De la realidad)`,
    slug: "representaciones-de-la-naturaleza",
    path: "/obra-completa?category=realismo-figurativo&subcategory=representaciones-de-la-naturaleza",
    level: 2
  },
  {
    id: 7,
    order: 2,
    title: `2. Realismo-abstracto`,
    slug: "realismo-abstracto",
    path: "/obra-completa?category=realismo-abstracto",
    level: 1
  },
  {
    id: 8,
    order: 2.1,
    title: `2.1. Representaciones de la naturaleza que insinuan abstracciones`,
    slug: "representaciones-de-la-naturaleza-que-insinuan-abstracciones",
    path: "/obra-completa?category=realismo-abstracto&subcategory=representaciones-de-la-naturaleza-que-insinuan-abstracciones",
    level: 2
  },
  {
    id: 9,
    order: 2.2,
    title: `2.2. Representaciones de la naturaleza inspiradas en representaciones de la realidad`,
    slug: "representaciones-abstractas-inspiradas-en-representaciones-de-la-realidad",
    path: "/obra-completa?category=realismo-abstracto&subcategory=representaciones-abstractas-inspiradas-en-representaciones-de-la-realidad",
    level: 2
  },
  {
    id: 10,
    order: 3,
    title: `3. Representaciones abstractas y geométricas`,
    slug: "representaciones-abstractas-y-geometricas",
    path: "/obra-completa?category=representaciones-abstractas-y-geometricas",
    level: 1
  },
  {
    id: 11,
    order: 4,
    title: `4. Representaciones mixtas (Combinación de elementos abstractos y figurativos reales)`,
    slug: "representaciones-mixtas-combinacion-de-elementos-abstractos-y-figurativos-reales",
    path: "/obra-completa?category=representaciones-mixtas-combinacion-de-elementos-abstractos-y-figurativos-reales",
    level: 1
  },
  {
    id: 12,
    order: 5,
    title: `5. Copias de pintores reconocidos`,
    slug: "copias-de-pintores-reconocidos",
    path: "/obra-completa?category=copias-de-pintores-reconocidos",
    level: 1
  }
];
