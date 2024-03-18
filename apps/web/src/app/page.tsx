'use client';
import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import NewsSection from './newssection';
import TestimonialsPage from './testimonials';
import Products from './products';
import AboutUs from './about';
import BrandsSection from './brands';
import ContactUsSection from './contact-us-section';
import Highlights from './highlights';
import Slide from './slide';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='mb-12'>
        <Navbar />
      </div>

      <main className="flex-grow mt-8">
       
        <Slide />

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
