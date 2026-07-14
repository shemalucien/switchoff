'use client';

import React from 'react';
import VideoPlayer from './video-player';
import ImageGallery from './image-gallery';
import { VIDEOS, IMAGES } from '../../lib/media-config';

export const MediaShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-heading text-gray-900 dark:text-white">
            Experience Switchoff
          </h2>
          <p className="section-subheading">
            Discover the quality and taste through our visual content
          </p>
        </div>

        {/* Videos Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Videos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hero Promo Video (2 columns) */}
            <div className="md:col-span-2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <VideoPlayer
                  videoUrl={VIDEOS.HERO_PROMO.url}
                  thumbnail={VIDEOS.HERO_PROMO.thumbnail}
                  title={VIDEOS.HERO_PROMO.title}
                  autoplay={false}
                  loop={true}
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Product Demo Video */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <VideoPlayer
                videoUrl={VIDEOS.PRODUCT_DEMO.url}
                thumbnail={VIDEOS.PRODUCT_DEMO.thumbnail}
                title={VIDEOS.PRODUCT_DEMO.title}
                autoplay={false}
                loop={true}
                className="w-full h-full"
              />
            </div>

            {/* Behind Scenes Video */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <VideoPlayer
                videoUrl={VIDEOS.BEHIND_SCENES.url}
                thumbnail={VIDEOS.BEHIND_SCENES.thumbnail}
                title={VIDEOS.BEHIND_SCENES.title}
                autoplay={false}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Testimonial Video */}
          <div className="mt-8 md:w-1/2">
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <VideoPlayer
                videoUrl={VIDEOS.TESTIMONIAL.url}
                thumbnail={VIDEOS.TESTIMONIAL.thumbnail}
                title={VIDEOS.TESTIMONIAL.title}
                autoplay={false}
                loop={true}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Product Images Section */}
        <div className="my-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Product Gallery
          </h3>
          
          {/* Nice Guarana */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Switchoff Nice Guarana
            </h4>
            <ImageGallery
              images={IMAGES.PRODUCTS.NICE_GUARANA}
              columns={3}
              showLightbox={true}
            />
          </div>

          {/* Energy Drink */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Switchoff Energy Drink
            </h4>
            <ImageGallery
              images={IMAGES.PRODUCTS.ENERGY_DRINK}
              columns={3}
              showLightbox={true}
            />
          </div>

            {/* Lemon */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Switchoff Lemon
            </h4>
            <ImageGallery
              images={IMAGES.PRODUCTS.LEMON}
              columns={3}
              showLightbox={true}
            />
          </div>

          {/* Apple */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Switchoff Apple
            </h4>
            <ImageGallery
              images={IMAGES.PRODUCTS.APPLE}
              columns={3}
              showLightbox={true}
            />
          </div>

          {/* Vodka */}
          <div className="mb-16">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              SV Vodka Energy Mix
            </h4>
            <ImageGallery
              images={IMAGES.PRODUCTS.VODKA}
              columns={3}
              showLightbox={true}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Lifestyle/Brand Images */}
        <div className="my-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Lifestyle & Brand
          </h3>
          <ImageGallery
            images={IMAGES.LIFESTYLE}
            columns={3}
            showLightbox={true}
          />
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Switchoff?</h3>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of satisfied customers enjoying our premium beverages
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary !bg-white !text-brand-600 hover:!bg-gray-100">
              Order Now
            </button>
            <button className="btn-ghost !text-white border-2 border-white hover:!bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
