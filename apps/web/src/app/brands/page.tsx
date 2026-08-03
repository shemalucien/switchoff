"use client";
import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import lemon from "../../../public/images/lemon.png";
import energy from "../../../public/images/energy.png";
import nice from "../../../public/images/nice.png";
import apple from "../../../public/images/apple.png";
import vodka from "../../../public/images/vodka.png";
import premiumLager from "../../../public/images/premium-lager.png";
import strongBeer from  "../../../public/images/strong-beer.png";

type Brand = {
  name: string;
  superscript?: string;
  tagline: string;
  description: string;
  size: string;
  abv?: number; // present only for alcoholic beverages
  features: string[];
  image: StaticImageData;
};

const brands: Brand[] = [
  {
    name: "SWITCHOFF LEMON",
    tagline: "Crisp citrus, zero fuss",
    description:
      "A crisp sparkling drink made with natural lemon flavour and a touch of Vitamin C. Zesty, clean and lightly carbonated — the perfect citrus pick-me-up for any moment of your day.",
    size: "500ml can",
    features: ["Natural lemon flavour", "With Vitamin C", "Lightly carbonated"],
    image: lemon,
  },
  {
    name: "NICE GUARANA",
    superscript: "+",
    tagline: "A sophisticated lift",
    description:
      "A refreshing alcoholic beverage that combines quality spirit with the natural boost of guarana, infused with exquisite flavours — a delightful fusion of taste and vitality for those seeking real character.",
    size: "330ml can",
    abv: 6,
    features: ["Guarana extract", "6% ABV", "Exquisite flavour blend"],
    image: nice,
  },
  {
    name: "SWITCHOFF ENERGY DRINK",
    tagline: "Fuel your passion",
    description:
      "Bursting with vibrant flavours and infused with taurine, caffeine and B vitamins, designed to fuel your passion and keep you going strong — at the gym, on an adventure, or during your daily routine.",
    size: "330ml can",
    features: ["Taurine & caffeine", "B vitamins", "Vibrant flavour"],
    image: energy,
  },
  {
    name: "SWITCHOFF APPLE",
    tagline: "Crisp, natural, refreshing",
    description:
      "Crafted with natural apple flavour and premium ingredients, delivering authentic apple goodness in every sip — naturally delicious and satisfying, with a distinctive green label and silver can design.",
    size: "500ml can",
    features: ["Natural apple flavour", "Premium ingredients", "Distinctive design"],
    image: apple,
  },
  {
    name: "SV VODKA ENERGY MIX",
    tagline: "Refined taste, ready to drink",
    description:
      "A sophisticated spirit beverage that combines quality vodka with energising elements, featuring an eye-catching blue and red gradient design — a refined ready-to-drink cocktail alternative.",
    size: "330ml can",
    abv: 18,
    features: ["Premium spirit", "Ready to drink", "18% ABV"],
    image: vodka,
  },

  {
    name: "SWITCHOFF PREMIUM LAGER BEER",
    tagline: "Refresh. Recharge. Rise Again.",
    description:
      "A premium lager brewed from carefully selected malted barley and premium hops for a smooth, refreshing taste. Packaged in a classic 330ml glass bottle. Contains barley (gluten).",
    size: "330ml glass bottle",
    abv: 5,
    features: ["Malted barley & hops", "Smooth, refreshing taste", "Glass bottle"],
    image: premiumLager,
  },
  {
    name: "SWITCHOFF STRONG BEER",
    tagline: "Refresh. Recharge. Rise Again.",
    description:
      "A bold, strong lager with rich flavour and a smooth finish. Packaged in a convenient 500ml can. Contains barley (gluten).",
    size: "500ml can",
    abv: 10,
    features: ["Bold, full-bodied flavour", "Smooth finish", "500ml can"],
    image: strongBeer,
  },
];

function BrandCard({ brand }: { brand: Brand }) {
  const isAlcoholic = typeof brand.abv === "number";

  return (
    <div className="card-interactive group relative flex h-full flex-col items-center p-6 text-center sm:p-8">
      {isAlcoholic && (
        <span className="absolute right-4 top-4 rounded-full bg-gray-900/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white dark:bg-white/90 dark:text-gray-900">
          {brand.abv}% ABV
        </span>
      )}

      {/* Image */}
      <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-brand-100 transition-all duration-300 group-hover:ring-brand-300 dark:ring-gray-700 dark:group-hover:ring-brand-600">
        <Image
          alt={brand.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          height={128}
          src={brand.image}
          width={128}
        />
      </div>

      {/* Eyebrow */}
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        {brand.tagline}
      </p>

      {/* Title */}
      <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 sm:text-2xl">
        {brand.name}
        {brand.superscript && <sup className="ml-0.5">{brand.superscript}</sup>}
      </h3>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{brand.size}</p>

      {/* Description */}
      <p className="mb-6 line-clamp-4 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
        {brand.description}
      </p>

      {/* Feature chips */}
      <ul className="mb-6 flex flex-wrap justify-center gap-2">
        {brand.features.map((feature) => (
          <li
            key={feature}
            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-gray-800 dark:text-brand-300"
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        className="btn-primary mt-auto w-full text-sm sm:w-auto sm:text-base"
        href="/products"
      >
        View Products
      </Link>

      {isAlcoholic && (
        <p className="mt-3 text-[11px] text-gray-400 dark:text-gray-500">
          Please drink responsibly. For adults of legal drinking age only.
        </p>
      )}
    </div>
  );
}

function BrandsSection() {
  return (
    <>
      <Navbar />
      <section className="container-page py-16 md:py-20" id="brands">
        <div className="mb-12">
          <h2 className="section-heading text-gray-900 dark:text-white">Our Brands</h2>
          <p className="section-subheading">
            Welcome to the world of Dissco Ltd, where we bring you the finest selection of
            high-quality beverage products to invigorate your senses and elevate your
            experiences. Our brands epitomize excellence, flavor, and vitality. Crafted with
            precision and sourced from reputable manufacturers in Vietnam, our products are a
            testament to our commitment to delivering nothing but the best.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {brands.map((brand) => (
            <BrandCard brand={brand} key={brand.name} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BrandsSection;