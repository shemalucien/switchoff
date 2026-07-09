'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBullseye, FaEye, FaGem, FaCheckCircle, FaGlobeAfrica } from "react-icons/fa";
import bottle from "../../../public/images/switchoff_products.png";

const pillars = [
  {
    icon: FaBullseye,
    title: "Mission",
    body: "To provide consumers with refreshing, innovative, and high-quality beverages that energize lifestyles and create memorable drinking experiences.",
  },
  {
    icon: FaEye,
    title: "Vision",
    body: "To become one of Africa's most recognized and trusted beverage brands by delivering exceptional products, building strong distribution partnerships, and continuously expanding the SWITCHOFF portfolio.",
  },
  {
    icon: FaGem,
    title: "Values",
    body: "Quality without compromise, innovation in flavor and packaging, international manufacturing excellence, reliable supply and distribution, and customer satisfaction and brand loyalty.",
  },
];

const products = [
  "Energy Drink",
  "Lemon",
  "Apple",
  "Nice Guarana",
  "Vodka Energy Mix",
];

const certifications = ["HACCP", "GMP", "ISO", "HALAL", "FSSC"];

const stats = [
  { value: "180+", label: "Countries exported to by our manufacturing partner" },
  { value: "5", label: "Products in the SWITCHOFF portfolio" },
  { value: "5", label: "Global quality & safety certifications" },
];

const AboutSection = () => {
  return (
    <section id="about" className="container-page py-16 md:py-20">
      {/* Main About Section */}
      <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 mb-16 md:mb-20">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-brand-100 to-accent-400/20 blur-2xl dark:from-brand-900/30" />
          <Image
            className="w-full rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            src={bottle}
            alt="Switchoff drinks"
            width={550}
            height={420}
          />

          {/* Floating stat badge - reinforces global reach at a glance */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 flex items-center gap-3 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800 px-4 py-3 sm:px-5 sm:py-4">
            <FaGlobeAfrica className="text-brand-500 dark:text-brand-400 shrink-0" size={28} />
            <div className="leading-tight">
              <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">180+</p>
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">countries reached</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400">About Us</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Excellence in Every Pour.
            </h2>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">SWITCHOFF Drinks</span> is a dynamic
            and innovative beverage brand owned by <span className="font-semibold text-gray-900 dark:text-white">DISSCO LTD</span>,
            dedicated to delivering refreshing, high-quality, and consumer-focused beverages to markets across
            Africa and beyond &mdash; built for young consumers and active lifestyles seeking premium yet
            affordable refreshment.
          </p>

          {/* Product portfolio - scannable chips instead of buried in a paragraph */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Our Portfolio
            </p>
            <div className="flex flex-wrap gap-2">
              {products.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-600 dark:text-brand-300 text-xs sm:text-sm font-medium px-3 py-1.5 border border-brand-100 dark:border-brand-800"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Manufacturing credibility - certifications made visible, not buried */}
          <div className="rounded-xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800 p-4 sm:p-5">
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Manufactured in Vietnam by <span className="font-semibold text-gray-900 dark:text-white">RITA Food &amp; Drink Co., Ltd.</span>,
              a leading beverage exporter operating under internationally recognized quality standards.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {certifications.map((cert) => (
                <span key={cert} className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FaCheckCircle className="text-brand-500 dark:text-brand-400" size={14} />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <Link href="/about/moreinfo" className="btn-primary inline-flex text-sm sm:text-base">
            Learn More
          </Link>
        </div>
      </div>

      {/* Key stats strip - the numbers a reader should walk away remembering */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 rounded-2xl bg-brand-500/5 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-900/50 p-6 sm:p-8 mb-16 md:mb-20">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-2xl sm:text-4xl font-bold text-brand-600 dark:text-brand-400">{value}</p>
            <p className="mt-1 text-[11px] sm:text-sm text-gray-600 dark:text-gray-400 leading-snug">{label}</p>
          </div>
        ))}
      </div>

      {/* Mission, Vision, Values Cards */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-16 md:pt-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Our Core Values
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Driven by our commitment to quality, innovation, and international manufacturing excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="card-interactive group p-6 sm:p-8 h-full flex flex-col transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-500 dark:bg-brand-900/40 dark:text-brand-400 group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </div>

              {/* Title */}
              <h4 className="mb-3 text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {title}
              </h4>

              {/* Body */}
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 flex-grow">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;