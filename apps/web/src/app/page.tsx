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
      <main className="flex flex-col">
         <Navbar />
       
        <Slide />

        <BrandsSection />

        <AboutUs />

        <Products />

        <TestimonialsPage />
        
        <Highlights />

        <NewsSection /> 
        <ContactUsSection />
        <Footer />

      </main>
    </div>
  );
}
