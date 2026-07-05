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
// ---------------------------------------------------------------------------

export interface NutritionFacts {
  servingSize: string;
  calories: number;
  totalSugar: string;
  caffeine: string;
  sodium: string;
  vitamins?: string[];
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
  badges: ("New" | "Best Seller" | "Zero Sugar" | "Limited"| "Premium")[];
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: "nice-guarana",
    slug: "nice-guarana",
    name: "SWITCHOFF NICE GUARANA<sup>+</sup>",
    shortName: "Nice Guarana+",
    tagline: "Smooth energy with a premium silver finish",
    category: "Nice Guarana",
    colorTheme: "Silver",
    volume: "250 ml",
    description:
      "Each can of SWITCHOFF NICE GUARANA is elegantly packaged in a sleek white can. This unique packaging not only enhances the product's appeal but also distinguishes it as a premium choice for consumers. The silver colour theme reflects the sophistication and premium quality of the beverage, adding a touch of elegance that appeals to discerning consumers.",
    benefits: [
      "Natural energy lift from real guarana extract",
      "Smooth, low-fizz taste profile",
      "Premium silver can, ready for the shelf",
    ],
    ingredients: ["Carbonated water", "Sugar", "Guarana extract", "Citric acid", "Natural flavouring", "Caffeine"],
    nutrition: {
      servingSize: "250 ml can",
      calories: 115,
      totalSugar: "27 g",
      caffeine: "75 mg",
      sodium: "35 mg",
    },
    image: "/images/nice.jpg",
    gallery: ["/images/nice.jpg","/images/nice_package.jpg"],
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
    volume: "250 ml",
    description:
      "SWITCHOFF ENERGY DRINK comes in the same distinctive white can as SWITCHOFF NICE GUARANA, with 250 ml of invigorating beverage inside. A captivating shade of cyan — a blend between green and blue — sets the product apart and conveys a sense of freshness and energy that matches the drink's invigorating properties.",
    benefits: [
      "Fast-acting caffeine boost",
      "Bright, refreshing citrus-forward taste",
      "Eye-catching cyan branding on shelf",
    ],
    ingredients: ["Carbonated water", "Sugar", "Taurine", "Citric acid", "Natural flavouring", "Caffeine", "B vitamins"],
    nutrition: {
      servingSize: "250 ml can",
      calories: 120,
      totalSugar: "28 g",
      caffeine: "80 mg",
      sodium: "40 mg",
      vitamins: ["B3", "B6", "B12"],
    },
    image: "/images/ENERGY.jpg",
    gallery: ["/images/ENERGY.jpg","/images/energy_package.jpg"],
    badges: [],
    isNew: false,
  },

  {
    id: "original-apple",
    slug: "original-apple",
    name: "SWITCHOFF ORIGINAL APPLE",
    shortName: "Original Apple",
    tagline: "Crisp, refreshing apple flavor with natural sweetness",
    category: "Original",
    colorTheme: "Green",
    volume: "500 ml",
    description:
      "SWITCHOFF ORIGINAL APPLE brings the natural goodness of crisp green apples to your glass. Packaged in our signature white can with a vibrant green label, this 500ml drink combines refreshing carbonation with authentic apple flavor. Perfect for those seeking a naturally delicious beverage that quenches thirst and delights the palate.",
    benefits: [
      "Natural apple flavor with crisp taste",
      "Perfect refreshment for any occasion",
      "Premium packaging that stands out on shelves"
    ],
    ingredients: ["Carbonated water", "Apple juice concentrate", "Sugar", "Citric acid", "Natural apple flavoring", "Vitamin C"],
    nutrition: {
      servingSize: "500 ml can",
      calories: 210,
      totalSugar: "52 g",
      caffeine: "0 mg",
      sodium: "25 mg",
      vitamins: ["Vitamin C"]
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
      "18% alcohol content"
    ],
    ingredients: ["Vodka", "Energy drink blend", "Citric acid", "Caffeine", "Taurine", "B vitamins", "Natural flavoring"],
    nutrition: {
      servingSize: "330 ml can",
      calories: 350,
      totalSugar: "8 g",
      caffeine: "40 mg",
      sodium: "50 mg",
      vitamins: ["B3", "B6", "B12"]
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
