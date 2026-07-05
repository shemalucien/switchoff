'use client';
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaHeart, FaRegHeart, FaCheckCircle } from "react-icons/fa";
import type { Product } from "../../lib/products";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

type Tab = "overview" | "nutrition" | "ingredients";

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, isWishlisted, onToggleWishlist }) => {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <AnimatePresence onExitComplete={() => setTab("overview")}>
      {product && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.shortName}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl dark:bg-gray-900 sm:rounded-2xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="btn-ghost-icon absolute right-3 top-3 z-10 bg-white/90 dark:bg-gray-800/90"
            >
              <FaTimes />
            </button>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
              {/* Image */}
              <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-brand-50 to-silver-200 p-10 dark:from-gray-800 dark:to-gray-950">
                <Image
                  src={product.image}
                  alt={product.name.replace(/<[^>]+>/g, "")}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-contain p-6"
                />
                {product.badges.length > 0 && (
                  <div className="absolute left-4 top-4 flex flex-col gap-1.5">
                    {product.badges.map((badge) => (
                      <span key={badge} className="badge bg-brand-500 text-white shadow-sm">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {product.category} &middot; {product.volume}
                </p>
                <h2
                  className="mt-1 text-2xl font-bold text-gray-900 dark:text-white"
                  dangerouslySetInnerHTML={{ __html: product.name }}
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.tagline}</p>

                {/* Tabs */}
                <div className="mt-5 flex gap-1 border-b border-gray-200 dark:border-gray-800">
                  {(["overview", "nutrition", "ingredients"] as Tab[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`-mb-px border-b-2 px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                        tab === t
                          ? "border-brand-500 text-brand-600"
                          : "border-transparent text-gray-500 hover:text-brand-500"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex-1 text-sm text-gray-600 dark:text-gray-300">
                  {tab === "overview" && (
                    <div className="animate-fade-in space-y-4">
                      <p>{product.description}</p>
                      <ul className="space-y-1.5">
                        {product.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <FaCheckCircle className="mt-0.5 shrink-0 text-brand-500" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tab === "nutrition" && (
                    <div className="animate-fade-in">
                      <table className="w-full border-collapse overflow-hidden rounded-lg text-left">
                        <tbody>
                          <tr className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-2 font-semibold">Serving size</td>
                            <td className="py-2">{product.nutrition.servingSize}</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-2 font-semibold">Calories</td>
                            <td className="py-2">{product.nutrition.calories} kcal</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-2 font-semibold">Total sugar</td>
                            <td className="py-2">{product.nutrition.totalSugar}</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-2 font-semibold">Caffeine</td>
                            <td className="py-2">{product.nutrition.caffeine}</td>
                          </tr>
                          <tr className="border-b border-gray-100 dark:border-gray-800">
                            <td className="py-2 font-semibold">Sodium</td>
                            <td className="py-2">{product.nutrition.sodium}</td>
                          </tr>
                          {product.nutrition.vitamins && (
                            <tr>
                              <td className="py-2 font-semibold">Vitamins</td>
                              <td className="py-2">{product.nutrition.vitamins.join(", ")}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {tab === "ingredients" && (
                    <div className="animate-fade-in flex flex-wrap gap-2">
                      {product.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="/order" className="btn-primary flex-1">
                    Order Now
                  </a>
                  <button
                    type="button"
                    onClick={onToggleWishlist}
                    aria-pressed={isWishlisted}
                    className="btn-secondary"
                  >
                    {isWishlisted ? <FaHeart className="text-brand-500" /> : <FaRegHeart />}
                    {isWishlisted ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
