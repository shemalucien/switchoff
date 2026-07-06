"use client";

import React, { useEffect, useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import type { Splide, SplideSlide } from "@splidejs/splide";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import lemon from "../../public/images/lemon.png";
import energy from "../../public/images/energy.png";
// import energyPackage from "../../public/images/energy_package.jpg";
// import muyango2 from "../../public/images/muyango2.jpg";
// import nicePackage from "../../public/images/nice_package.jpg";
import nice from "../../public/images/nice.png";
import apple from "../../public/images/apple.png";
import vodka from "../../public/images/vodka.png";
import allProducts from "../../public/images/switchoff_products.png";

// Define an array of images and their associated text
const images = [
    {
    gallery: [allProducts],
    alt: "The full range of Switchoff products",
    eyebrow: "Full Range",
    text1: "THE SWITCHOFF RANGE",
    text2:
      "From zero-proof refreshers to premium alcoholic energy mixes — discover every can in the Switchoff lineup.",
    accent: "from-brand-400/20 to-brand-200/10",
  },
  {
    gallery: [nice],
    alt: "Nice Guarana Package",
    eyebrow: "Nice Guarana",
    text1: "SWITCHOFF NICE GUARANA",
    text2:
      "Smooth energy with a premium silver finish. Experience natural guarana extract in our sleek white can.",
    accent: "from-slate-400/20 to-slate-200/10",
  },
  {
    gallery: [energy],
    alt: "Energy Package",
    eyebrow: "Energy Drink",
    text1: "SWITCHOFF ENERGY DRINK",
    text2:
      "Vivid cyan energy for the days that need it. Fast-acting caffeine boost with refreshing citrus flavor.",
    accent: "from-cyan-400/20 to-cyan-200/10",
  },
  {
    gallery: [apple],
    alt: "Original Apple",
    eyebrow: "Apple",
    text1: "SWITCHOFF APPLE",
    text2:
      "Crisp, refreshing apple flavor with natural sweetness. The perfect beverage for any occasion. Premium quality in every 500ml can.",
    accent: "from-green-400/20 to-green-200/10",
  },
  {
    gallery: [lemon],
    alt: "Switchoff Lemon",
    eyebrow: "New — Lemon",
    text1: "SWITCHOFF LEMON",
    text2:
      "Zesty citrus refreshment made with natural lemon flavour and a touch of Vitamin C. Now in a 500ml can.",
    accent: "from-yellow-400/20 to-yellow-200/10",
  },
  {
    gallery: [vodka],
    alt: "SV Vodka Energy Mix",
    eyebrow: "Spirits",
    text1: "SV VODKA ENERGY MIX",
    text2:
      "Premium spirit meets energy drink. Sophisticated 330ml beverage with 18% ABV for those seeking refined taste and premium experience.",
    accent: "from-blue-400/20 to-red-300/10",
  },
];

// Cycles through a product's gallery images while its slide is on screen.
// Falls back to a single static image when a product only has one photo.
function ProductGallery({
  gallery,
  alt,
  accent,
  isActive,
}: {
  gallery: StaticImageData[];
  alt: string;
  accent: string;
  isActive: boolean;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (!isActive || gallery.length < 2) return;
    setPhotoIndex(0);
    const id = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % gallery.length);
    }, 2200);
    return () => clearInterval(id);
  }, [isActive, gallery.length]);

  return (
    <div className="relative flex items-center justify-center order-1 md:order-2 min-h-72 sm:min-h-80 md:min-h-96 xl:min-h-[560px]">
      {/* Soft color blob fills extra space behind the can on large screens */}
      <div
        className={`absolute inset-0 m-auto h-64 w-64 sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem] xl:h-[34rem] xl:w-[34rem] rounded-full bg-gradient-to-br ${accent} blur-3xl`}
        aria-hidden="true"
      />
      <div className="relative w-full h-full flex items-center justify-center">
        {gallery.map((src, i) => (
          <Image
            key={i}
            className={`absolute h-auto w-full max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl object-contain drop-shadow-2xl transition-opacity duration-700 ${
              i === photoIndex ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            alt={alt}
            width={600}
            height={750}
            priority={i === 0}
          />
        ))}
        {/* Static spacer so the wrapper reserves height even though images are absolutely positioned */}
        <Image
          className="invisible h-auto w-full max-w-[220px] sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl object-contain"
          src={gallery[0]}
          alt=""
          width={600}
          height={750}
          aria-hidden="true"
        />
      </div>

      {gallery.length > 1 && (
        <div className="absolute bottom-2 flex gap-1.5" aria-hidden="true">
          {gallery.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === photoIndex
                  ? "w-5 bg-brand-500"
                  : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Slide() {
  const [autoplay, setAutoplay] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  // Respect users who've asked for less motion
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutoplay(!query.matches);
    const handler = (e: MediaQueryListEvent) => setAutoplay(!e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative w-full bg-white dark:bg-gray-900 overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-500/10 dark:from-brand-900/20 dark:to-accent-900/20" />

      <Splide
        options={{
          type: "fade",
          autoplay,
          interval: 5000,
          pauseOnHover: true,
          rewind: true,
          arrows: true,
          pagination: true,
        }}
        aria-label="Featured products"
        // onMoved={(_splide, newIndex) => setActiveSlide(newIndex)}
        onMoved={(_: SplideInstance, newIndex: number) => {
          setActiveSlide(newIndex);
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index} className="!flex items-center">
            <div className="relative w-full py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-[420px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[680px] 2xl:min-h-[760px] flex items-center">
              {/* Content container — widens further on very large screens so it doesn't float in empty margin */}
              <div className="container-page w-full 2xl:max-w-[1600px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
                  {/* Text Section */}
                  <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 xl:space-y-8 order-2 md:order-1">
                    <div className="space-y-2 sm:space-y-3">
                      <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-500 dark:text-brand-400">
                        {image.eyebrow}
                      </span>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight text-balance">
                        {image.text1}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-pretty max-w-xl">
                        {image.text2}
                      </p>
                    </div>
                    <div className="pt-2 sm:pt-4">
                      <Link
                        href="/products"
                        className="btn-primary inline-flex items-center justify-center text-xs sm:text-sm md:text-base xl:text-lg px-5 sm:px-6 xl:px-8 py-2.5 sm:py-3 xl:py-3.5 whitespace-nowrap"
                      >
                        Explore More
                      </Link>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 pt-1">
                      {index + 1} / {images.length}
                    </p>
                  </div>

                  {/* Image Section */}
                  <ProductGallery
                    gallery={image.gallery}
                    alt={image.alt}
                    accent={image.accent}
                    isActive={index === activeSlide}
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom slide navigation indicator */}
      <style jsx>{`
        :global(.splide__arrow) {
          @apply bg-brand-500 hover:bg-brand-600 transition-all duration-200 z-20;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
        }
        :global(.splide__arrow:disabled) {
          @apply opacity-50 cursor-not-allowed;
        }
        :global(.splide__arrow--prev) {
          @apply left-2 sm:left-3 md:left-4 lg:left-6 xl:left-10;
        }
        :global(.splide__arrow--next) {
          @apply right-2 sm:right-3 md:right-4 lg:right-6 xl:right-10;
        }
        :global(.splide__pagination__page button) {
          @apply bg-gray-300 dark:bg-gray-600 transition-all duration-300;
          width: 8px;
          height: 8px;
        }
        :global(.splide__pagination__page.is-active button) {
          @apply bg-brand-500;
          width: 24px;
        }
        :global(.splide__pagination) {
          @apply bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.splide__slide) {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
