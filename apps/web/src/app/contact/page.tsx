'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../logo1.png';
import Navbar from '../navbar';

const ContactUsSection = () => {
  // Dummy data for partners
  const partners = [
    { name: 'DISSCO LTD', address: 'City, Kigali, Rwanda,KN 20 Ave', logo: logo, email: 'dissco@gmail.com', tel: 250785135816 }
  ];

  return (

    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-8">
          {/* Column for Partners (Our Address) */}
          <div className="mb-8 lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-left mt-4">Our Address</h3>
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col mb-4">
                <Image src={partner.logo} alt={partner.name} width={80} height={80} className="mr-4 rounded-lg" />
                <div>
                  <h4 className="font-semibold">{partner.name}</h4>
                </div>
                <div>
                  <h4 className="font-semibold">{partner.address}</h4>
                </div>
                <div>
                  <p className="font-semibold">Email: {partner.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Tel: {partner.tel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column for Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 mt-20">Connect with Us</h3>
            <form className="space-y-4">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name:</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1">Phone:</label>
                <input type="text" id="phone" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="comment" className="block mb-1">Comment:</label>
                <textarea id="comment" name="comment" className="w-full border border-gray-300 rounded-lg px-4 py-2"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>

        {/* Back to Top Button */}
        <button className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={() => { window.scrollTo(0, 0); }}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </button>
      </div>

    </>
  );
};

export default ContactUsSection;
