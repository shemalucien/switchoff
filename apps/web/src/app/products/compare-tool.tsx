'use client';
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaBalanceScale, FaTimes } from "react-icons/fa";
import type { Product } from "../../lib/products";

interface CompareToolProps {
  compareProducts: Product[];
  onRemove: (id: string) => void;
  onClear: () => void;
  max: number;
}

const rows: Array<{ label: string; get: (p: Product) => React.ReactNode }> = [
  { label: "Category", get: (p) => p.category },
  { label: "Volume", get: (p) => p.volume },
  { label: "Colour theme", get: (p) => p.colorTheme },
  { label: "Calories", get: (p) => `${p.nutrition.calories} kcal` },
  { label: "Total sugar", get: (p) => p.nutrition.totalSugar },
  { label: "Caffeine", get: (p) => p.nutrition.caffeine },
  { label: "Sodium", get: (p) => p.nutrition.sodium },
];

const CompareTool: React.FC<CompareToolProps> = ({ compareProducts, onRemove, onClear, max }) => {
  const [open, setOpen] = useState(false);

  if (compareProducts.length === 0) return null;

  return (
    <>
      {/* Sticky tray */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4">
        <div className="flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-card-hover backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
          <div className="flex -space-x-3">
            {compareProducts.map((p) => (
              <div
                key={p.id}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-50 dark:border-gray-900"
              >
                <Image src={p.image} alt={p.shortName} fill className="object-contain p-1" />
              </div>
            ))}
          </div>
          <p className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">
            {compareProducts.length} of {max} selected for comparison
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            disabled={compareProducts.length < 2}
            className="btn-primary !py-2 text-sm disabled:opacity-40"
          >
            <FaBalanceScale /> Compare
          </button>
          <button type="button" onClick={onClear} className="btn-ghost-icon" aria-label="Clear compare list">
            <FaTimes />
          </button>
        </div>
      </div>

      {/* Compare modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Compare Products</h3>
                <button type="button" onClick={() => setOpen(false)} className="btn-ghost-icon" aria-label="Close">
                  <FaTimes />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      <th className="w-32 py-2" />
                      {compareProducts.map((p) => (
                        <th key={p.id} className="px-3 py-2 text-center">
                          <div className="relative mx-auto mb-2 h-20 w-20">
                            <Image src={p.image} alt={p.shortName} fill className="object-contain" />
                          </div>
                          <span className="font-bold">{p.shortName}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.label} className="border-t border-gray-100 dark:border-gray-800">
                        <td className="py-2.5 pr-3 font-semibold text-gray-500 dark:text-gray-400">{row.label}</td>
                        {compareProducts.map((p) => (
                          <td key={p.id} className="px-3 py-2.5 text-center">
                            {row.get(p)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompareTool;
