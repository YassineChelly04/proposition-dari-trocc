/* ===================================================
   DARI TROCC — Product Catalog Data
   =================================================== */

var PRODUCTS = [
  {
    id: 1,
    name: "Assiettes Artisanales — Lot de 4",
    nameAr: "أطباق حرفية — مجموعة من 4",
    category: "vaisselle",
    price: 89,
    badge: "nouveau",
    description: "Assiettes en ceramique faites main avec une finition mate beige naturel. Chaque piece est unique, refletant le savoir-faire artisanal tunisien. Parfaites pour une table elegante au quotidien.",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598300064133-4bb9ae3123c4?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560256467-91823dabf9b0?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Ceramique artisanale",
      dimensions: "26 cm diametre",
      couleur: "Beige naturel",
      entretien: "Lavage a la main recommande"
    }
  },
  {
    id: 2,
    name: "Vase Amphore Traditionnel",
    nameAr: "مزهرية أمفورا تقليدية",
    category: "vases",
    price: 145,
    badge: null,
    description: "Inspire des amphores mediterraneennes, ce vase en terre cuite apporte une touche d'authenticite a votre decoration. Forme elegante et patine naturelle.",
    images: [
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Terre cuite",
      dimensions: "35 cm hauteur, 18 cm diametre",
      couleur: "Terracotta naturel",
      entretien: "Essuyer avec un chiffon sec"
    }
  },
  {
    id: 3,
    name: "Service a The Vintage",
    nameAr: "طقم شاي عتيق",
    category: "vaisselle",
    price: 120,
    badge: "populaire",
    description: "Service a the complet avec theiere, sucrier et 4 tasses. Style vintage avec des motifs floraux delicats. Une piece de collection pour les amateurs de belles choses.",
    images: [
      "https://images.unsplash.com/photo-1629119882639-d2d5860b2411?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Porcelaine fine",
      dimensions: "Theiere: 20 cm, Tasses: 8 cm",
      couleur: "Blanc et or",
      entretien: "Lavage a la main"
    }
  },
  {
    id: 4,
    name: "Bols Rustiques — Lot de 3",
    nameAr: "أوعية ريفية — مجموعة من 3",
    category: "vaisselle",
    price: 65,
    badge: null,
    description: "Bols en gres avec une finition rustique authentique. Ideaux pour les salades, soupes ou comme elements decoratifs. Chaque bol a son caractere unique.",
    images: [
      "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598300064133-4bb9ae3123c4?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Gres emaille",
      dimensions: "15 cm diametre, 7 cm hauteur",
      couleur: "Brun naturel",
      entretien: "Compatible lave-vaisselle"
    }
  },
  {
    id: 5,
    name: "Bougeoir Dore — Lot de 2",
    nameAr: "شمعدان ذهبي — مجموعة من 2",
    category: "accessoires",
    price: 75,
    badge: "populaire",
    description: "Paire de bougeoirs en metal dore avec un design epure et intemporel. Creez une ambiance chaleureuse et raffinee dans votre interieur.",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Metal dore",
      dimensions: "22 cm et 18 cm hauteur",
      couleur: "Or antique",
      entretien: "Essuyer avec un chiffon doux"
    }
  },
  {
    id: 6,
    name: "Vase Ceramique Texturee",
    nameAr: "مزهرية سيراميك منسوجة",
    category: "vases",
    price: 95,
    badge: "nouveau",
    description: "Vase en ceramique avec une texture tissee unique. Un mariage parfait entre artisanat traditionnel et design contemporain.",
    images: [
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Ceramique texturee",
      dimensions: "28 cm hauteur, 14 cm diametre",
      couleur: "Beige sable",
      entretien: "Essuyer avec un chiffon humide"
    }
  },
  {
    id: 7,
    name: "Plateau Decoratif en Bois",
    nameAr: "صينية خشبية للتزيين",
    category: "accessoires",
    price: 85,
    badge: null,
    description: "Plateau en bois de noyer avec finition huilee. Parfait pour le service, la decoration de table ou comme presentoir sur un meuble bas.",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Bois de noyer",
      dimensions: "40 cm x 28 cm",
      couleur: "Noyer naturel",
      entretien: "Huiler regulierement"
    }
  },
  {
    id: 8,
    name: "Panier Tresse Artisanal",
    nameAr: "سلة مجدولة حرفية",
    category: "vintage",
    price: 55,
    badge: null,
    description: "Panier tresse a la main par des artisans locaux. Polyvalent et decoratif, il ajoute une touche naturelle et authentique a n'importe quel espace.",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Fibres naturelles tressees",
      dimensions: "30 cm diametre, 25 cm hauteur",
      couleur: "Naturel",
      entretien: "Garder au sec"
    }
  },
  {
    id: 9,
    name: "Miroir Vintage Ovale",
    nameAr: "مرآة عتيقة بيضاوية",
    category: "vintage",
    price: 195,
    badge: "populaire",
    description: "Miroir ovale avec cadre en metal patine. Style Art Deco revisitee. Un objet statement qui apporte caractere et lumiere a votre interieur.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Verre et metal patine",
      dimensions: "60 cm x 40 cm",
      couleur: "Bronze antique",
      entretien: "Nettoyant a vitres"
    }
  },
  {
    id: 10,
    name: "Nappes en Lin — Lot de 4",
    nameAr: "مفارش كتان — مجموعة من 4",
    category: "textiles",
    price: 45,
    badge: null,
    description: "Serviettes de table en lin lave de haute qualite. Texture douce et naturelle, finition bord franc. Ideales pour une table raffinee.",
    images: [
      "https://images.unsplash.com/photo-1584346133934-a3afd3f98c4c?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "100% Lin lave",
      dimensions: "45 cm x 45 cm chacune",
      couleur: "Naturel / Beige",
      entretien: "Lavable en machine 40°C"
    }
  },
  {
    id: 11,
    name: "Pots en Argile — Lot de 3",
    nameAr: "أواني من الفخار — مجموعة من 3",
    category: "vases",
    price: 110,
    badge: null,
    description: "Trio de pots en argile de differentes tailles. Faconnes a la main avec des techniques ancestrales. Parfaits pour les plantes ou comme objets decoratifs.",
    images: [
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Argile naturelle",
      dimensions: "15 cm, 20 cm, 25 cm hauteur",
      couleur: "Terracotta",
      entretien: "Drainage necessaire pour les plantes"
    }
  },
  {
    id: 12,
    name: "Chemin de Table Brode",
    nameAr: "مفرش طاولة مطرز",
    category: "textiles",
    price: 70,
    badge: "nouveau",
    description: "Chemin de table en coton avec broderie artisanale. Motifs inspires de l'artisanat tunisien traditionnel. Une piece unique pour sublimer votre table.",
    images: [
      "https://images.unsplash.com/photo-1584346133934-a3afd3f98c4c?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Coton et broderie main",
      dimensions: "180 cm x 35 cm",
      couleur: "Ecru avec broderie doree",
      entretien: "Lavage delicat a la main"
    }
  },
  {
    id: 13,
    name: "Objet Decoratif Ancien",
    nameAr: "قطعة ديكور عتيقة",
    category: "vintage",
    price: 160,
    badge: null,
    description: "Piece decorative vintage chinee avec soin. Un objet de caractere qui raconte une histoire. Chaque piece est unique et porte les marques du temps.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Divers (piece unique)",
      dimensions: "Variable",
      couleur: "Patine naturelle",
      entretien: "Depoussierer delicatement"
    }
  },
  {
    id: 14,
    name: "Assiette de Presentation",
    nameAr: "طبق تقديم",
    category: "vaisselle",
    price: 55,
    badge: null,
    description: "Grande assiette de presentation en ceramique avec bord irregulier artisanal. Parfaite pour les antipasti, le fromage ou comme objet decoratif mural.",
    images: [
      "https://images.unsplash.com/photo-1560256467-91823dabf9b0?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598300064133-4bb9ae3123c4?w=600&h=600&fit=crop&q=80"
    ],
    details: {
      materiau: "Ceramique emailllee",
      dimensions: "32 cm diametre",
      couleur: "Blanc casse",
      entretien: "Lavage a la main"
    }
  }
];

var CATEGORIES = [
  { slug: "all", label: "Tout", labelAr: "الكل" },
  { slug: "vaisselle", label: "Vaisselle", labelAr: "أواني" },
  { slug: "vases", label: "Vases & Pots", labelAr: "مزهريات" },
  { slug: "vintage", label: "Objets Vintage", labelAr: "قطع عتيقة" },
  { slug: "textiles", label: "Textiles", labelAr: "منسوجات" },
  { slug: "accessoires", label: "Accessoires", labelAr: "إكسسوارات" }
];

// Utility: get product by ID
function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === parseInt(id); });
}

// Utility: get products by category
function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(function (p) { return p.category === cat; });
}

// Utility: format price
function formatPrice(price) {
  return price.toFixed(3) + ' TND';
}
