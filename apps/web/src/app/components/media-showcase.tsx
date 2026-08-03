'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import VideoPlayer from './video-player';
import ImageGallery from './image-gallery';
import { VIDEOS, IMAGES } from '../../lib/media-config';

const NAV_SECTIONS = [
  { id: 'videos', label: 'Videos' },
  { id: 'products', label: 'Product Gallery' },
  { id: 'lifestyle', label: 'Lifestyle & Brand' },
] as const;

const PRODUCT_SECTIONS = [
  { key: 'NICE_GUARANA', label: 'Switchoff Nice Guarana', id: 'nice-guarana' },
  { key: 'ENERGY_DRINK', label: 'Switchoff Energy Drink', id: 'energy-drink' },
  { key: 'LEMON', label: 'Switchoff Lemon', id: 'lemon' },
  { key: 'APPLE', label: 'Switchoff Apple', id: 'apple' },
  { key: 'VODKA', label: 'SV Vodka Energy Mix', id: 'vodka' },
  {key: 'LAGER_BEER', label :'SWITCHOFF PREMIUM LAGER BEER', id: 'LAGER_BEER'},
  {key: 'STRONG_BEER', label :'SWITCHOFF STRONG BEER', id: 'STRONG_BEER'}
] as const;

type ProductKey = (typeof PRODUCT_SECTIONS)[number]['key'];

// Update this with your real WhatsApp business number (country code, no + or spaces).
const WHATSAPP_NUMBER = '250785135816';

// Fades + slides content up once it enters the viewport.
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } ${className}`}
    >
      {children}
    </div>
  );
};

// Small trust-signal strip — swap icons/copy for whatever's actually true of your business.
const TRUST_ITEMS = [
  { icon: '🚚', label: 'Fast nationwide delivery' },
  { icon: '✅', label: '100% authentic products' },
  { icon: '💬', label: 'Real support, real fast' },
];

export const MediaShowcase: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('videos');
  const [activeFilter, setActiveFilter] = useState<'all' | ProductKey>('all');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Highlight the sticky nav item matching the section currently in view.
  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Show mobile sticky CTA + back-to-top once the visitor scrolls past the hero.
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const pastHero = !entry.isIntersecting;
        setShowStickyBar(pastHero);
        setShowBackToTop(pastHero);
      },
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visibleProducts = useMemo(
    () =>
      activeFilter === 'all'
        ? PRODUCT_SECTIONS
        : PRODUCT_SECTIONS.filter((p) => p.key === activeFilter),
    [activeFilter]
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-page">
        {/* Hero / Value Proposition */}
        <div
          ref={heroRef}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 px-8 py-16 lg:px-16 lg:py-20 mb-20"
        >
          {/* Decorative Background */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 items-center">

            {/* LEFT SIDE */}
            <div>

              <Reveal>
                <span className="inline-flex items-center rounded-full bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-600 dark:text-brand-300">
                  🥤 Premium Beverage Collection
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                  Experience
                  <span className="block text-brand-600">
                    Switchoff
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Discover our premium drinks through immersive videos,
                  vibrant product galleries, and authentic lifestyle moments.
                  Every bottle is crafted to deliver quality, refreshment,
                  and unforgettable taste.
                </p>
              </Reveal>

              {/* Buttons */}
              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/order"
                    className="btn-primary"
                  >
                    Order Now
                  </Link>

                  <button
                    onClick={() => scrollToSection("products")}
                    className="btn-ghost"
                  >
                    Explore Gallery
                  </button>
                </div>
              </Reveal>

              {/* Trust */}
              <Reveal delay={250}>
                <div className="mt-10 flex flex-wrap gap-6">
                  {TRUST_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-gray-800"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

            </div>

            {/* RIGHT SIDE */}
            <Reveal delay={300}>
              <div className="relative">

                <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <img
                    src="/images/switchoff_products_updated.png"
                    alt="Switchoff Drinks"
                    className="h-[500px] w-full object-cover"
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
                  <p className="text-3xl font-bold text-brand-600">
                    10+
                  </p>
                  <p className="text-sm text-gray-500">
                    Premium Flavours
                  </p>
                </div>

                {/* Floating Card */}
                <div className="absolute top-6 -right-6 rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
                  <p className="text-3xl font-bold text-brand-600">
                    100%
                  </p>
                  <p className="text-sm text-gray-500">
                    Authentic Products
                  </p>
                </div>

              </div>
            </Reveal>

          </div>
        </div>

        {/* Sticky section nav */}
        <div className="sticky top-16 z-20 -mx-4 mb-16 border-b border-gray-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-gray-800 dark:bg-gray-900/90">
          <div className="flex gap-2 overflow-x-auto">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                aria-current={activeSection === s.id ? 'true' : undefined}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 ${activeSection === s.id
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div id="videos" className="mb-20 scroll-mt-32">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Videos
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="md:col-span-2">
              <div className="group aspect-video rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.01]">
                <VideoPlayer
                  videoUrl={VIDEOS.HERO_PROMO.url}
                  thumbnail={VIDEOS.HERO_PROMO.thumbnail}
                  title={VIDEOS.HERO_PROMO.title}
                  autoplay={false}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02]">
                <VideoPlayer
                  videoUrl={VIDEOS.PRODUCT_DEMO.url}
                  thumbnail={VIDEOS.PRODUCT_DEMO.thumbnail}
                  title={VIDEOS.PRODUCT_DEMO.title}
                  autoplay={false}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02]">
                <VideoPlayer
                  videoUrl={VIDEOS.BEHIND_SCENES.url}
                  thumbnail={VIDEOS.BEHIND_SCENES.thumbnail}
                  title={VIDEOS.BEHIND_SCENES.title}
                  autoplay={false}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-8 md:w-1/2" delay={100}>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md ring-1 ring-black/5">
              <VideoPlayer
                videoUrl={VIDEOS.TESTIMONIAL.url}
                thumbnail={VIDEOS.TESTIMONIAL.thumbnail}
                title={VIDEOS.TESTIMONIAL.title}
                autoplay={false}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </Reveal>
        </div>

        <div className="divider"></div>

        {/* Product Images Section */}
        <div id="products" className="my-20 scroll-mt-32">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Product Gallery
            </h3>
          </Reveal>

          {/* Filter tabs */}
          <Reveal className="mb-10">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products">
              <button
                onClick={() => setActiveFilter('all')}
                aria-pressed={activeFilter === 'all'}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 ${activeFilter === 'all'
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                All
              </button>
              {PRODUCT_SECTIONS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActiveFilter(p.key)}
                  aria-pressed={activeFilter === p.key}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 ${activeFilter === p.key
                    ? 'bg-brand-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </Reveal>

          {visibleProducts.map((p, i) => (
            <Reveal key={p.key} delay={i * 80}>
              <div id={p.id} className="mb-16 scroll-mt-32">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {p.label}
                  </h4>
                  <Link
                    href={`/shop?product=${p.key.toLowerCase()}`}
                    className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
                  >
                    Shop this product →
                  </Link>
                </div>
                <ImageGallery images={IMAGES.PRODUCTS[p.key]} columns={3} showLightbox={true} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="divider"></div>

        {/* Lifestyle/Brand Images */}
        <div id="lifestyle" className="my-20 scroll-mt-32">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Lifestyle & Brand
            </h3>
          </Reveal>
          <Reveal>
            <ImageGallery images={IMAGES.LIFESTYLE} columns={3} showLightbox={true} />
          </Reveal>
        </div>


        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Switchoff?</h3>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of satisfied customers enjoying our premium beverages
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary !bg-white !text-brand-600 hover:!bg-gray-100">

              <Link
                href="/order"
              >
                Order Now
              </Link>
            </button>
            <button className="btn-ghost !text-white border-2 border-white hover:!bg-white/20">
              <Link
                href="/products"
              >
                Learn More
              </Link>
            </button>

            <div className="flex gap-2">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !text-white border-2 border-white hover:!bg-white/20"
              >
                WhatsApp Us
              </a>

            </div>
          </div>



        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className={`fixed bottom-24 right-6 z-30 rounded-full bg-brand-500 p-3 text-white shadow-lg transition-all duration-300 hover:bg-brand-600 md:bottom-6 ${showBackToTop ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
            }`}
        >
          ↑
        </button>
      </div>
    </section >

  );
};

export default MediaShowcase;