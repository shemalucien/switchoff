'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../navbar/page';
import bottle from '../../../public/images/Image.jpg';



const AboutUs = () => {
  return (
    <><Navbar />
      <div className="container px-4 py-4 m-2 dark:text-white dark:bg-gray-900">

        <div className="flex flex-col lg:flex-row m-2">
          {/* Column for Image */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <Image className='rounded-lg  object-cover' src={bottle} alt="Image 1" width={450} height={250} />
          </div>

          {/* Column for Content */}
          <div className="w-full lg:w-2/3 lg:pl-4">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4 text-base text-justify">
            Welcome to DISSCO LTD, a company dedicated to providing superior quality products at competitive prices. With our commitment to excellence, we aim to elevate the world market by offering unparalleled goods that meet and exceed consumer expectations.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Motto</h3>
              <p className="mb-4 text-base text-justify">
                Excellence in Every Pour.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="mb-2 text-base text-justify">Our mission is to revolutionize the local market by delivering high-quality products at affordable prices while fostering sustainable growth and contributing positively to the community.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="mb-2 text-base text-justify">Our vision is to become a leading provider of premium-quality products in Region and beyond, recognized for our commitment to excellence, innovation, and customer satisfaction.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Values</h3>
              <p className="mb-2 text-base text-justify">
                At DISSCO Ltd, we are committed to delivering excellence in every bottle of Switchoff, and we look forward to continuing our journey of growth and innovation in the beverage industry.
              </p>
            </div>
            <Link href="/about/moreinfo">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
