# Switchoff Drinks — Redesign Notes

## What changed

### 1. New product-catalog architecture (`src/lib/products.ts`)
Every product — image, description, benefits, ingredients, nutrition facts —
now lives in one typed array. The product grid, quick-view modal, compare
tool, and detail page all read from it. **To add/edit a product, edit only
this file.**

Two entries are placeholders for the new products you mentioned:
`new-product-1` ("Zero Sugar") and `new-product-2` ("Tropical Blast").
Replace the name, tagline, description, benefits, ingredients, nutrition
numbers, and image filenames with the real thing — the layout, filters,
badges, and comparison tool already fully support them.

### 2. Products page — full rebuild (`src/app/products/`)
- Live **search** + **category filter chips**
- **Quick View modal** (Overview / Nutrition Facts / Ingredients tabs)
- **Wishlist** (heart icon, persisted in the browser, count badge in the navbar)
- **Compare tool** — pick up to 3 products, see them side-by-side
- **"New" / "Best Seller" / "Zero Sugar"** badges per product
- A data-driven product detail page at `/products/productpage?id=<slug>`
- A newsletter / restock-alert signup block at the bottom (wire it to
  EmailJS or your mailing list provider — the hook point is marked with a
  `TODO` in `src/app/components/newsletter-signup.tsx`)

### 3. Fixed bugs
- **Navbar**: the mobile menu button and desktop menu used mismatched
  Tailwind breakpoints, so on tablet-width screens neither showed up. Fixed,
  and the nav now also includes About/Products/Brands/Contact links that
  had been dropped, plus an active-page underline and a wishlist counter.
- **Duplicate navbars on the homepage**: the About and Products sections
  each rendered their own `<Navbar />`, so the homepage showed the navbar
  three times. Each section is now split into a "pure" section component
  (used on the homepage) and a thin page wrapper (used for the standalone
  `/about` and `/products` routes) that adds the Navbar/Footer once.

### 4. Visual polish
- Introduced a small design-token layer in `tailwind.config.ts`
  (`brand`, `accent`, `silver` colors, shadows, animation keyframes) —
  still your existing blue/white/gray identity, just consistent.
- Shared utility classes in `globals.css` (`.btn-primary`, `.btn-secondary`,
  `.card-surface`, `.chip`, `.input-field`, etc.) so buttons/cards/inputs
  look the same everywhere instead of one-off Tailwind strings.
- Footer rebuilt with quick links, socials, and the newsletter block.
- About and Brands sections restyled to match the new system.

### 5. Images & videos
`public/images` and `public/videos` were empty in the uploaded project, so
placeholder images (clearly labeled, e.g. "PLACEHOLDER — Nice Guarana+
Can") were generated with the **exact filenames the code expects** so the
project builds today. Drop your real files in with the same names and
they'll appear automatically — nothing else needs to change. Filenames
used: see each entry in `src/lib/products.ts` (`image`, `gallery`) and the
existing imports in `about/about-section.tsx`, `brands/page.tsx`,
`testimonials/page.tsx`, `slide.tsx`, `contact/page.tsx`, `navbar/page.tsx`.

### 6. Verified
`pnpm install && next build` runs clean (0 type errors, production build
succeeds, all 19 routes prerender).

## Not touched this pass
Appointment and Order forms, and the Highlights/testimonials sections work
and were spot-checked for the new design tokens, but weren't restructured —
happy to give those the same treatment next if useful.

## Next steps for you
1. Send the real name/description/nutrition facts for the two new products
   (or edit `src/lib/products.ts` directly — it's a plain array).
2. Drop your real photography/video into `public/images` and
   `public/videos` using the filenames noted above.
3. Wire the newsletter form to a real provider (EmailJS is already a
   dependency and used elsewhere in the project).
