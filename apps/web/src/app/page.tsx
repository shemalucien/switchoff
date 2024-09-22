'use client';
import React, { useEffect, useState } from 'react';
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
// import NewsTicker from './newsticker/newsticker';
import Announcement from './announcement/announcement';

export default function Page() {
  const [isAccessGranted, setIsAccessGranted] = useState(false); // State to track access

  useEffect(() => {
    // Check if access token and expiration are in local storage
    const accessToken = localStorage.getItem('accessGranted');
    const expiration = localStorage.getItem('expiration');

    if (accessToken && expiration) {
      // Parse expiration as a date
      const expirationDate = new Date(expiration);
      const currentDate = new Date();

      // Grant access if expiration date is in the future
      if (expirationDate > currentDate) {
        setIsAccessGranted(true);
      }
    }
  }, []);

  // Function to simulate granting access after age check
  // Function to simulate granting access after age check
  const grantAccess = () => {
    // Simulate granting access by setting access token and expiration in local storage
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1); // Expires in 1 hour

    localStorage.setItem('accessGranted', 'true');
    localStorage.setItem('expiration', expirationDate.toISOString());

    setIsAccessGranted(true);
  };

  // const announcement = [
  //   'We have a new product coming soon!',
  // ];

  return (
    <div className="flex flex-col min-h-screen">
      {isAccessGranted ? (
        <>
          <Navbar />
          <div className="mt-24">
            <Announcement
              // message=""
              backgroundColor="bg-blue-500"
              textColor="text-white"
              dismissible={true}
            />
          </div>
          {/* <div className="mt-4">
            <NewsTicker announcements={announcement} />
          </div> */}
          <main className="bg-gray-200 text-black flex flex-col dark:text-white dark:bg-gray-900 mt-12">

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
