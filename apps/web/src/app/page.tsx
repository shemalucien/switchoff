'use client';
import React from 'react';
import Navbar from './navbar/page';
import Footer from './footer/page';
import NewsSection from './news/page';
import TestimonialsPage from './testimonials/page';
import Products from './products/page';
import AboutUs from './about/page';
import BrandsSection from './brands/page';
import ContactUsSection from './contact/page';
import Highlights from './highlights/page';
import Slide from './slide/page';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar />
      <main className="flex flex-col">

        <Slide />

        <BrandsSection />

        <AboutUs />

        <Products />

        <TestimonialsPage />
        
        <Highlights />

        <NewsSection /> 
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}
