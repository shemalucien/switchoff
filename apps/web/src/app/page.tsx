'use client';
import React, { useState } from 'react';
import Navbar from './navbar/page';
import Footer from './footer/page';
// import NewsSection from './news/page';
import TestimonialsPage from './testimonials/page';
import Products from './products/page';
import AboutUs from './about/page';
import BrandsSection from './brands/page';
import ContactUsSection from './contact/page';
import Highlights from './highlights/page';
import Slide from './slide';
import SplashPage from './splash';

export default function Page() {
  const [isAccessGranted, setIsAccessGranted] = useState(false); // State to track access

 // Function to simulate granting access after age check
 const grantAccess = () => {
    setIsAccessGranted(true);
 };
  return (
    <div className="flex flex-col min-h-screen">
      {isAccessGranted ? (
        <>
       <Navbar />
      <main className="flex flex-col">

        <Slide />

        <BrandsSection />

        <AboutUs />

        <Products />

        <TestimonialsPage />
        
        <Highlights />
        {/* <NewsSection />  */}
        <ContactUsSection />
      </main>
      <Footer />
      </>
      ) : (
        <SplashPage onAccessGranted={grantAccess} />
      )}
    </div>
  );
}
