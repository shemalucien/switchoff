// Media Configuration with Placeholders
// Replace VIDEO_URL_X with your actual video URLs
// Replace IMAGE_URL_X with your actual image URLs

export const VIDEOS = {
  // VIDEOS (4 total)
  HERO_PROMO: {
    url: '/videos/lemon_highlight.mp4', // Hero/main promotional video
    title: 'Switchoff Drinks Promo',
    description: 'Experience the refreshing taste of Switchoff',
    thumbnail: '/images/lemon.png',
    duration: '30s',
    type: 'promo' as const,
  },
  PRODUCT_DEMO: {
    url: '/videos/nice_highlight.mp4', // Product showcase/demo
    title: 'Product Demo',
    description: 'See our products in action',
    thumbnail: '/images/nice.png',
    duration: '45s',
    type: 'product' as const,
  },
  BEHIND_SCENES: {
    url: '/videos/vodka_highlight.mp4', // Behind the scenes
    title: 'Behind the Scenes',
    description: 'How we craft quality beverages',
    thumbnail: '/images/vodka.png',
    duration: '60s',
    type: 'behind-scenes' as const,
  },
  TESTIMONIAL: {
    url: '/videos/apple_highlight.mp4', // Customer testimonial
    title: 'Customer Testimonial',
    description: 'What our customers say',
    thumbnail: '/images/apple.png',
    duration: '30s',
    type: 'testimonial' as const,
  },
};

const PRODUCTS_DATA = {
  NICE_GUARANA: [
    { url: '/images/nice.png', alt: 'Nice Guarana Product Shot', type: 'product' },
    { url: '/images/nice_1.png', alt: 'Nice Guarana Lifestyle', type: 'lifestyle' },
    { url: '/images/nice_2.png', alt: 'Nice Guarana Detail', type: 'detail' },
  ],
  ENERGY_DRINK: [
    { url: '/images/energy.png', alt: 'Energy Drink Product Shot', type: 'product' },
    { url: '/images/energy_1.png', alt: 'Energy Drink Lifestyle', type: 'lifestyle' },
    { url: '/images/energy_2.png', alt: 'Energy Drink Detail', type: 'detail' },
  ],
  APPLE: [
    { url: '/images/apple.png', alt: 'Apple Drink Product Shot', type: 'product' },
    { url: '/images/apple_1.png', alt: 'Apple Drink Lifestyle', type: 'lifestyle' },
    { url: '/images/apple_2.png', alt: 'Apple Drink Detail', type: 'detail' },
  ],
  LEMON: [
   { url: '/images/lemon.png', alt: 'Lemon Drink Product Shot', type: 'product' },
    { url: '/images/lemon_1.png', alt: 'Lemon Drink Lifestyle', type: 'lifestyle' },
    { url: '/images/lemon_2.png', alt: 'Lemon Drink Detail', type: 'detail' },

  ],
  VODKA: [
    { url: '/images/vodka.png', alt: 'Vodka Energy Mix Product Shot', type: 'product' },
    { url: '/images/vodka_1.png', alt: 'Vodka Energy Mix Lifestyle', type: 'lifestyle' },
    { url: '/images/vodka_2.png', alt: 'Vodka Energy Mix Detail', type: 'detail' },
  ],
};

export const IMAGES = {
  // PRODUCT IMAGES (4 products x 3 variations = 12 images)
  PRODUCTS: {
    ...PRODUCTS_DATA,
    ALL: [
      ...PRODUCTS_DATA.NICE_GUARANA,
      ...PRODUCTS_DATA.ENERGY_DRINK,
      ...PRODUCTS_DATA.LEMON,
      ...PRODUCTS_DATA.APPLE,
      ...PRODUCTS_DATA.VODKA,
    ],
  },

  // BRAND/LIFESTYLE IMAGES (6 images)
  LIFESTYLE: [
    { url: '/images/switchoff_products_2.png', alt: 'Brand Lifestyle 1', category: 'brand' },
    { url: '/images/switchoff_products_4.png', alt: 'Brand Lifestyle 2', category: 'brand' },
    { url: '/images/apple_4.png', alt: 'Customer Enjoyment 1', category: 'customer' },
    // { url: 'IMAGE_URL_20_REPLACE_WITH_YOUR_IMAGE', alt: 'Customer Enjoyment 2', category: 'customer' },
    // { url: 'IMAGE_URL_21_REPLACE_WITH_YOUR_IMAGE', alt: 'Team/Office Image', category: 'team' },
    { url: '/images/advert_1.png', alt: 'Event/Promotion Image', category: 'event' },
  ],
};

// Helper function to check if URL is a placeholder
export const isPlaceholder = (url: string): boolean => {
  return url.includes('REPLACE_WITH_YOUR');
};

// Helper to get all media items
export const getAllMedia = () => {
  return {
    videos: Object.values(VIDEOS),
    images: {
      products: Object.values(IMAGES.PRODUCTS).flat(),
      lifestyle: IMAGES.LIFESTYLE,
    },
  };
};
