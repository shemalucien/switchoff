'use client';
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import Navbar from "../../navbar/page";
import Footer from "../../footer/page";
import ProductCard from "../product-card";
import { products, getProductBySlug } from "../../../lib/products";
import { useStoredIds } from "../../../lib/use-stored-ids";

const noop = () => undefined;

function ProductDetail() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("id") ?? products[0]?.id;
  const product = getProductBySlug(slug ?? "") ?? products[0];
  const wishlist = useStoredIds("switchoff:wishlist");

  if (!product) {
    return (
      <div className="container-page py-24 text-center">
        <p>Product not found.</p>
        <Link className="btn-primary mt-4 inline-flex" href="/products">
          Back to products
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div>
      <Link className="btn-secondary mb-8 !py-2 text-sm" href="/products">
        <FaArrowLeft /> All products
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative flex aspect-square items-center justify-center rounded-xl2 bg-gradient-to-br from-brand-50 to-silver-200 p-10 dark:from-gray-800 dark:to-gray-950">
          <Image
            alt={product.name.replace(/<[^>]+>/g, "")}
            className="object-contain p-8"
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            src={product.image}
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
            {product.category} &middot; {product.volume}
          </p>
          <h1
            className="mt-1 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
            dangerouslySetInnerHTML={{ __html: product.name }}
          />
          <p className="mt-2 text-gray-500 dark:text-gray-400">{product.tagline}</p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">{product.description}</p>

          <ul className="mt-5 space-y-2">
            {product.benefits.map((b) => (
              <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300" key={b}>
                <FaCheckCircle className="mt-0.5 shrink-0 text-brand-500" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/order">
              Order Now
            </Link>
            <button className="btn-secondary" onClick={() => wishlist.toggle(product.id)}>
              {wishlist.has(product.id) ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl2 border border-gray-100 p-5 dark:border-gray-800 sm:grid-cols-3">
            <div>
              <p className="text-xs text-gray-400">Calories</p>
              <p className="font-bold">{product.nutrition.calories} kcal</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Sugar</p>
              <p className="font-bold">{product.nutrition.totalSugar}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Caffeine</p>
              <p className="font-bold">{product.nutrition.caffeine}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">You Might Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard
              isComparing={false}
              isWishlisted={wishlist.has(p.id)}
              key={p.id}
              onQuickView={noop}
              onToggleCompare={noop}
              onToggleWishlist={() => wishlist.toggle(p.id)}
              product={p}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductPage() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <div className="container-page pt-28 pb-16">
        <Suspense fallback={<div className="py-24 text-center text-gray-400">Loading product...</div>}>
          <ProductDetail />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
