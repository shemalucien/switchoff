// ---------------------------------------------------------------------------
// Central product catalog for Switchoff Drinks.
//
// Every product card, the quick-view modal, the compare drawer and the
// product detail page all read from this single source of truth. To add a
// new product, add one object below — everything else (filters, cards,
// quick view, nutrition tab, compare) picks it up automatically.
//
// Image/video paths are just strings pointing at /public/images and
// /public/videos. Drop the matching file in with the same name and it will
// render — nothing else needs to change.
//
// NOTE: Nutrition figures below come from the official 2026 Switchoff
// Product Catalogue, which reports nutrition "per 100ml" rather than per
// can. `nutrition.servingSize` reflects that ("100 ml") separately from
// `volume`, which is the actual pack size sold on shelf. See the message
// this file was delivered with for a couple of values that still need
// confirming (caffeine amounts, Lemon product images).
// ---------------------------------------------------------------------------

export interface NutritionFacts {
  servingSize: string;
  calories: number;
  totalSugar: string;
  caffeine: string;
  sodium: string;
  vitamins?: string[];
  alcohol?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  colorTheme: string;
  volume: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  nutrition: NutritionFacts;
  image: string;
  gallery: string[];
  badges: ("New" | "Best Seller" | "Zero Sugar" | "Limited" | "Premium")[];
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: "lemon",
    slug: "lemon",
    name: "SWITCHOFF LEMON",
    shortName: "Lemon",
    tagline: "Zesty citrus refreshment in every sip",
    category: "Lemon",
    colorTheme: "Yellow",
    volume: "500 ml",
    description:
      "SWITCHOFF LEMON is a refreshing sparkling drink made with natural lemon flavour. Crisp, zesty and lightly carbonated, it's built for moments that call for a clean, citrus-forward refreshment in our signature 500ml can.",
    benefits: [
      "Refreshing sparkling lemon taste",
      "Made with natural lemon flavour",
      "With added Vitamin C",
    ],
    ingredients: [
      "Carbonated water",
      "Sugar",
      "Lemon juice concentrate",
      "Citric acid",
      "Natural lemon flavour",
      "Preservatives",
      "Vitamin C",
      "Food colour (if applicable)",
    ],
    nutrition: {
      servingSize: "100 ml",
      calories: 45,
      totalSugar: "10.8 g",
      caffeine: "0 mg",
      sodium: "15 mg",
      vitamins: ["Vitamin C (15 mg)"],
    },
    image: "/images/lemon.png",
    gallery: ["/images/lemon.png"],
    badges: ["New"],
    isNew: true,
  },
  {
    id: "nice-guarana",
    slug: "nice-guarana",
    name: "SWITCHOFF NICE GUARANA<sup>+</sup>",
    shortName: "Nice Guarana+",
    tagline: "Smooth alcoholic energy with a premium silver finish",
    category: "Nice Guarana",
    colorTheme: "Silver",
    volume: "330 ml",
    description:
      "Each can of SWITCHOFF NICE GUARANA is elegantly packaged in a sleek white can. This unique packaging not only enhances the product's appeal but also distinguishes it as a premium choice for consumers. The silver colour theme reflects the sophistication and premium quality of the beverage, adding a touch of elegance that appeals to discerning consumers. Now a 6% ABV alcoholic energy beverage.",
    benefits: [
      "Natural energy lift from real guarana extract",
      "Smooth, low-fizz taste profile",
      "Premium silver can, ready for the shelf",
    ],
    ingredients: [
      "Carbonated water",
      "Alcohol",
      "Sugar",
      "Guarana extract",
      "Caffeine",
      "Taurine",
      "Vitamins B3, B6 & B12",
      "Citric acid",
    ],
    nutrition: {
      servingSize: "100 ml",
      calories: 62,
      totalSugar: "11.7 g",
      caffeine: "Not specified",
      sodium: "75 mg",
      vitamins: ["B3", "B6", "B12"],
      alcohol: "6% ABV",
    },
    image: "/images/nice.png",
    gallery: ["/images/nice.png"],
    badges: ["Best Seller"],
    isNew: false,
  },
  {
    id: "energy-drink",
    slug: "energy-drink",
    name: "SWITCHOFF ENERGY DRINK",
    shortName: "Energy Drink",
    tagline: "Vivid cyan energy for the days that need it",
    category: "Energy Drink",
    colorTheme: "Cyan",
    volume: "330 ml",
    description:
      "SWITCHOFF ENERGY DRINK comes in the same distinctive white can as SWITCHOFF NICE GUARANA, now in a 330 ml format. A captivating shade of cyan — a blend between green and blue — sets the product apart and conveys a sense of freshness and energy that matches the drink's invigorating properties.",
    benefits: [
      "Fast-acting caffeine boost",
      "Bright, refreshing citrus-forward taste",
      "Eye-catching cyan branding on shelf",
    ],
    ingredients: [
      "Carbonated water",
      "Sugar",
      "Taurine",
      "Caffeine",
      "Glucuronolactone",
      "Inositol",
      "B vitamins (B3, B5, B6, B12)",
      "Citric acid",
      "Flavouring",
      "Preservatives",
    ],
    nutrition: {
      servingSize: "100 ml",
      calories: 45,
      totalSugar: "11 g",
      caffeine: "32 mg",
      sodium: "75 mg",
      vitamins: ["B3", "B5", "B6", "B12"],
    },
    image: "/images/energy.png",
    gallery: ["/images/energy.png"],
    badges: [],
    isNew: false,
  },
  {
    id: "original-apple",
    slug: "original-apple",
    name: "SWITCHOFF APPLE",
    shortName: "Apple",
    tagline: "Crisp, refreshing apple flavor with natural sweetness",
    category: "apple",
    colorTheme: "Green",
    volume: "500 ml",
    description:
      "SWITCHOFF APPLE brings the natural goodness of crisp green apples to your glass. Packaged in our signature white can with a vibrant green label, this 500ml drink combines refreshing carbonation with authentic apple flavor. Perfect for those seeking a naturally delicious beverage that quenches thirst and delights the palate.",
    benefits: [
      "Natural apple flavor with crisp taste",
      "Perfect refreshment for any occasion",
      "Premium packaging that stands out on shelves",
    ],
    ingredients: [
      "Carbonated water",
      "Sugar",
      "Apple juice concentrate",
      "Citric acid",
      "Natural apple flavour",
      "Vitamin C",
      "Preservatives",
    ],
    nutrition: {
      servingSize: "100 ml",
      calories: 46,
      totalSugar: "11 g",
      caffeine: "0 mg",
      sodium: "12 mg",
    },
    image: "/images/apple.png",
    gallery: ["/images/apple.png"],
    badges: ["Best Seller"],
    isNew: false,
  },
  {
    id: "sv-vodka-energy-mix",
    slug: "sv-vodka-energy-mix",
    name: "SV VODKA ENERGY MIX",
    shortName: "Vodka Energy Mix",
    tagline: "Premium mix with vibrant blue and red gradient styling",
    category: "Spirits",
    colorTheme: "Blue-Red",
    volume: "330 ml",
    description:
      "SV VODKA ENERGY MIX is a premium alcoholic beverage combining quality vodka with energy drink elements. With its distinctive blue and red gradient can design and bold gold branding, this 330ml drink delivers a sophisticated taste experience. Perfect for those seeking a premium mixer or ready-to-drink cocktail alternative. 18% ABV.",
    benefits: [
      "Premium spirit quality",
      "Energy drink hybrid formulation",
      "Eye-catching premium packaging",
      "18% alcohol content",
    ],
    ingredients: [
      "Vodka",
      "Carbonated water",
      "Sugar",
      "Taurine",
      "Caffeine",
      "B vitamins",
      "Natural flavours",
      "Citric acid",
    ],
    nutrition: {
      servingSize: "100 ml",
      calories: 142,
      totalSugar: "11.7 g",
      caffeine: "Not specified",
      sodium: "75 mg",
      vitamins: ["B3", "B6", "B12"],
      alcohol: "18% ABV",
    },
    image: "/images/vodka.png",
    gallery: ["/images/vodka.png"],
    badges: ["Premium"],
    isNew: true,
  },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}