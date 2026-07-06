"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { products } from "../../lib/products";
import { Download, ExternalLink, Eye, Mail } from "lucide-react";

// The catalog PDF is a real, pre-made file — drop it in /public/pdfs/ with
// this exact name (or update this constant to match your filename).
const CATALOG_PDF_PATH = "/pdfs/product-catalog.pdf";

const CatalogPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header Section */}
        <section className="container-page py-12 md:py-16 bg-gradient-to-br from-brand-500/5 to-accent-500/5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-2 bg-brand-100 dark:bg-brand-900/40 rounded-full text-brand-600 dark:text-brand-400 text-sm font-semibold mb-4">
              PRODUCT CATALOG
            </div>
            <h1 className="page-title text-gray-900 dark:text-white mb-4">
              Switchoff Products Catalog
            </h1>
            <p className="page-subtitle">
              Explore our complete range of premium beverages. View our products
              online or download the full catalog for your reference.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href={CATALOG_PDF_PATH}
              download
              className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download size={20} />
              Download PDF Catalog
            </a>

            <a
              href="#catalog"
              className="btn-secondary flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Eye size={20} />
              View Online
            </a>
          </div>
        </section>

        {/* Catalog PDF Viewer */}
        <section id="catalog" className="container-page py-12 md:py-20">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Switchoff Products Catalog.pdf
            </p>

            <a
              href={CATALOG_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
            >
              Open in new tab
              <ExternalLink size={14} />
            </a>

            {/* Inline PDF viewer. Mobile browsers vary in how well they render
                PDFs inline, so the fallback link below always stays visible
                rather than being hidden behind a <noscript> or error state. */}
            <iframe
              src={CATALOG_PDF_PATH}
              title="Switchoff Product Catalog"
              className="w-full h-[70vh] md:h-[85vh]"
            />

            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-center bg-gray-50 dark:bg-gray-900/40">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Having trouble viewing the PDF?{" "}
                <a
                  href={CATALOG_PDF_PATH}
                  download
                  className="font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  Download it instead
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Browse Products Online — a lightweight, always-accessible companion
            to the PDF above (useful for screen readers, search engines, and
            anyone who'd rather not open a PDF at all). */}
        <section className="container-page py-12 md:py-20 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center mb-12">
            <h2 className="section-heading">Browse Products Online</h2>
            <p className="section-subheading">
              Prefer not to open a PDF? Every product from the catalog is listed
              below.
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 bg-white dark:bg-gray-900"
              >
                {/* Product Number */}
                <div className="text-sm font-semibold text-brand-500 dark:text-brand-400 mb-2">
                  PRODUCT {index + 1}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Product Image */}
                  <div className="relative h-64 md:h-72 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={300}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                        {product.shortName}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      {product.tagline}
                    </p>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Product Details */}
                    <div className="grid grid-cols-2 gap-3 pt-3 mt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Volume
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {product.volume}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Category
                        </p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {product.category}
                        </p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Key Benefits
                      </p>
                      <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-500 mt-0.5">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nutrition Facts */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Nutrition Facts (per {product.nutrition.servingSize})
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">
                            Calories
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {product.nutrition.calories}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">
                            Sugar
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {product.nutrition.totalSugar}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">
                            Caffeine
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {product.nutrition.caffeine}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">
                            Sodium
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {product.nutrition.sodium}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                        Ingredients
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {product.ingredients.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-8 mt-12 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              For more information or to place an order, visit our website or
              contact us.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © 2026 Switchoff Drinks. All rights reserved. |
              www.switchoffdrinks.com
            </p>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="container-page py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Download Catalog */}
            <div className="card-surface p-6 md:p-8">
              <Download className="text-brand-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Download Catalog
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Download our complete products catalog in PDF format for offline
                viewing and sharing.
              </p>
              <a
                href={CATALOG_PDF_PATH}
                download
                className="btn-primary text-sm w-full inline-flex items-center justify-center"
              >
                <Download size={16} className="inline mr-2" />
                Download PDF
              </a>
            </div>

            {/* Browse Products */}
            <div className="card-surface p-6 md:p-8">
              <Eye className="text-brand-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Browse Products
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                View all our products with detailed information and
                specifications.
              </p>
              <Link
                href="/products"
                className="btn-primary text-sm w-full inline-block text-center"
              >
                View Products
              </Link>
            </div>

            {/* Contact Support */}
            <div className="card-surface p-6 md:p-8">
              <Mail className="text-brand-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Contact our team for custom catalogs, wholesale inquiries, or
                distribution information.
              </p>
              <Link
                href="/contact"
                className="btn-secondary text-sm w-full inline-block text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CatalogPage;
