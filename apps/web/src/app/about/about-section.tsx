'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBullseye, FaEye, FaGem } from "react-icons/fa";
import bottle from "../../../public/images/Image.jpg";

const pillars = [
  {
    icon: FaBullseye,
    title: "Mission",
    body: "To revolutionize the local market by delivering high-quality products at affordable prices while fostering sustainable growth and contributing positively to the community.",
  },
  {
    icon: FaEye,
    title: "Vision",
    body: "To become a leading provider of premium-quality products in the region and beyond, recognized for our commitment to excellence, innovation, and customer satisfaction.",
  },
  {
    icon: FaGem,
    title: "Values",
    body: "We are committed to delivering excellence in every can of Switchoff, and we look forward to continuing our journey of growth and innovation in the beverage industry.",
  },
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
            Welcome to DISSCO LTD, a company dedicated to providing superior quality products at competitive prices.
            With our commitment to excellence, we aim to elevate the world market by offering unparalleled goods
            that meet and exceed consumer expectations.
          </p>
          <Link href="/about/moreinfo" className="btn-primary inline-flex text-sm sm:text-base">
            Learn More
          </Link>
        </div>
      </div>

      {/* Mission, Vision, Values Cards */}
      <div className="border-t border-gray-200 dark:border-gray-800 pt-16 md:pt-20">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Our Core Values
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Driven by our commitment to excellence, innovation, and customer satisfaction
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
