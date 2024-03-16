'use client';
import React from 'react';
import Head from 'next/head';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import bottle from './Image.jpg';
import bootle1 from './ENERGY_41.jpg';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Navbar from './navbar';
import Footer from './footer';
import NewsSection from './newssection';
import TestimonialsPage from './testimonials';
import Products from './products';
import AboutUs from './about';
import BrandsSection from './brands';
import ContactUsSection from './ContactUsSection';
import Highlights from './highlights';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='mb-12'>
        <Navbar />
      </div>

      <main className="flex-grow mt-8">
        <div className="flex justify-center my-8 bg-blue-500">
          <Splide
            options={{
              type: 'loop',
              perPage: 4,
              autoScroll: {
                speed: 1,
              },
            }}
            extensions={{ AutoScroll }}
          >
             <SplideSlide>
              <div className="flex items-center justify-center flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 flex items-center justify-center sm:justify-start">
                  <div className="text-center sm:text-left">
                    <p className="text-lg py-2 px-4">Elevate your test Experience</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <Image src={bottle} alt="Image 1" width={600} height={600} style={{ transform: 'rotate(-10deg)' }} />
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex items-center justify-center flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-2 flex items-center justify-center sm:justify-start">
                  <div className="text-center sm:text-left">
                    <p className="text-lg py-2 px-4">Elevate your test Experience</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <Image src={bootle1} alt="Image 1" width={600} height={600} style={{ transform: 'rotate(10deg)' }} />
                </div>
              </div>
            </SplideSlide>

            {/* Add more SplideSlide components for additional images */}
          </Splide>
        </div>

        <BrandsSection />

        <AboutUs />

        <Products />

        <TestimonialsPage />
        
        <Highlights />

        <NewsSection />
        <ContactUsSection />

      </main>

      <footer className="bg-blue-950 text-white">
        <Footer />
      </footer>
    </div>
  );
}
