'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaBalanceScale } from "react-icons/fa";
import type { Product } from "../../lib/products";

const badgeStyles: Record<string, string> = {
  New: "bg-brand-500 text-white",
  "Best Seller": "bg-amber-500 text-white",
  "Zero Sugar": "bg-emerald-500 text-white",
  Limited: "bg-purple-500 text-white",
};

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  isComparing: boolean;
  onToggleCompare: () => void;
  onQuickView: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  isComparing,
  onToggleCompare,
  onQuickView,
}) => {
  return (
    <div className="card-surface group relative flex h-full flex-col overflow-hidden hover:shadow-card-hover hover:-translate-y-1">
      {/* Badges */}
      {product.badges.length > 0 && (
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.badges.map((badge) => (
            <span key={badge} className={`badge shadow-sm ${badgeStyles[badge] ?? "bg-gray-700 text-white"}`}>
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Wishlist */}
      <button
        type="button"
        onClick={onToggleWishlist}
        aria-pressed={isWishlisted}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-500 shadow-sm backdrop-blur transition-transform hover:scale-110 dark:bg-gray-900/80"
      >
        {isWishlisted ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Image */}
      <button
        type="button"
        onClick={onQuickView}
        className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 to-silver-200 p-6 dark:from-gray-800 dark:to-gray-900"
        aria-label={`Quick view ${product.shortName}`}
      >
        <Image
          src={product.image}
          alt={product.name.replace(/<[^>]+>/g, "")}
          fill
          sizes="(min-width: 1024px) 320px, 45vw"
          className="object-contain p-4 transition-transform duration-500 ease-snappy group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-brand-900/80 py-2 text-center text-sm font-semibold text-white opacity-0 transition-all duration-300 ease-snappy group-hover:translate-y-0 group-hover:opacity-100">
          Quick View
        </span>
      </button>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
            {product.category} &middot; {product.volume}
          </p>
          <Link href={`/products/productpage?id=${product.slug}`} className="hover:text-brand-600">
            <h3
              className="mb-1 mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
              dangerouslySetInnerHTML={{ __html: product.name }}
            />
          </Link>
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{product.tagline}</p>
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button type="button" onClick={onQuickView} className="btn-primary flex-1 !py-2 text-sm">
            Quick View
          </button>
          <button
            type="button"
            onClick={onToggleCompare}
            aria-pressed={isComparing}
            title="Add to compare"
            className={`btn-ghost-icon border ${
              isComparing
                ? "border-brand-500 bg-brand-50 text-brand-600 dark:bg-brand-900/40"
                : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <FaBalanceScale />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
