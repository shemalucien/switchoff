"use client";
import React, { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { products, categories, type Product } from "../../lib/products";
import { useStoredIds } from "../../lib/use-stored-ids";
// import NewsletterSignup from "../components/newsletter-signup";
import ProductCard from "./product-card";
import QuickViewModal from "./quick-view-modal";
import CompareTool from "./compare-tool";
import ImageGallery from "../components/image-gallery";
import { IMAGES } from "../../lib/media-config";

const MAX_COMPARE = 3;

interface ProductsSectionProps {
  /** Show the search/filter controls and newsletter block. Off by default when embedded compactly. */
  full?: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ full = true }) => {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const wishlist = useStoredIds("switchoff:wishlist");
  const compare = useStoredIds("switchoff:compare", MAX_COMPARE);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  const compareProducts = products.filter((p) => compare.ids.includes(p.id));

  return (
    <>
      <section className="container-page py-16" id="products">
        <h2 className="section-heading text-gray-900 dark:text-white">
          Are You Ready to Taste Our Products?
        </h2>
        <p className="section-subheading">
          Discover the perfect blend of flavors and textures that redefine your
          taste buds. Our drinks are crafted with the finest ingredients,
          designed to quench your thirst while delighting your palate.
        </p>

        {/* {full ? <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="relative w-full sm:max-w-xs">
            <FaSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              aria-label="Search products"
              className="input-field pl-10"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              type="search"
              value={query}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                className={`chip ${filter === cat ? "chip-active" : ""}`}
                key={cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div> : null} */}

        {full ? (
          <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-center">
            {/* Search */}
            <div className="relative w-full lg:w-80 shrink-0">
              <FaSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 -translate-x-0 text-gray-400" />
              <input
                aria-label="Search products"
                className="input-field pl-10"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                type="search"
                value={query}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`chip shrink-0 ${filter === cat ? "chip-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {filteredProducts.length === 0 ? (
          <p className="mt-16 text-center text-gray-500 dark:text-gray-400">
            No products match &ldquo;{query}&rdquo;. Try a different search or
            category.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                isComparing={compare.has(product.id)}
                isWishlisted={wishlist.has(product.id)}
                key={product.id}
                onQuickView={() => setActiveProduct(product)}
                onToggleCompare={() => compare.toggle(product.id)}
                onToggleWishlist={() => wishlist.toggle(product.id)}
                product={product}
              />
            ))}
          </div>
        )}

        {/* {full ? <div className="mt-16">
          <NewsletterSignup />
        </div> : null} */}

        <QuickViewModal
          isWishlisted={activeProduct ? wishlist.has(activeProduct.id) : false}
          onClose={() => setActiveProduct(null)}
          onToggleWishlist={() =>
            activeProduct && wishlist.toggle(activeProduct.id)
          }
          product={activeProduct}
        />

        <CompareTool
          compareProducts={compareProducts}
          max={MAX_COMPARE}
          onClear={compare.clear}
          onRemove={(id) => compare.remove(id)}
        />
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Products Gallery
        </h2>
        <ImageGallery
          images={IMAGES.PRODUCTS.ALL}
          columns={3}
          showLightbox={true}
        />
      </section>
    </>
  );
};

export default ProductsSection;
