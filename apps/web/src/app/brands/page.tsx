'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import guaran from '../../../public/images/Image.jpg';
import energy from '../../../public/images/ENERGY.jpg';
import Navbar from '../navbar/page';

const BrandsSection = () => {
 const brands = [
    {
      name: "NICE GUARANA <sup>+</sup>",
      description: 'Energize your mind and body with SWITCHOFF NICE GUARANA, a refreshing beverage that combines the invigorating essence of high-quality spirit with the natural boost of guarana, all infused with exquisite flavors. Ideal for those seeking a natural energy lift, our guarana-infused drink offers a delightful fusion of taste and vitality. Whether you are tackling a busy day or winding down after work, SWITCHOFF NICE GUARANA is your trusted companion for sustained energy and pure enjoyment.',
      products: [
        { name: 'Product 1', icon: 'icon1.svg' },
        { name: 'Product 2', icon: 'icon2.svg' },
        { name: 'Product 3', icon: 'icon3.svg' }
      ],
      image: guaran
    },
    {
      name: 'ENERGY DRINK',
      description: 'SWITCHOFF ENERGY DRINK:Elevate your energy and savor the taste of excitement with SWITCHOFF ENERGY DRINK. Bursting with vibrant flavors and infused with revitalizing ingredients, our energy drink is designed to fuel your passion and keep you going strong. Whether you are hitting the gym, embarking on an adventure, or simply need a pick-me-up during your daily routine, SWITCHOFF ENERGY DRINK delivers the perfect blend of refreshment and vigor. Indulge in the exhilarating taste that redefines what it means to feel alive.',
      products: [
        { name: 'Product 4', icon: 'icon4.svg' },
        { name: 'Product 5', icon: 'icon5.svg' },
        { name: 'Product 6', icon: 'icon6.svg' }
      ],
      image: energy
    },
    // Add more brands as needed
 ];

 return (
    <><Navbar />
      <div className="container px-4 py-8  dark:text-white dark:bg-gray-900"> {/* Adjust the top margin as needed */}
        <h2 className="text-3xl text-center font-bold mb-8 mt-20">Our Brands</h2>
        <h3 className='text-base text-center  mb-8'>Welcome to the world of DISSCO LTD, where we bring you the finest selection of high-quality beverage products to invigorate your senses and elevate your experiences. Our brands, SWITCHOFF NICE GUARANA and SWITCHOFF ENERGY DRINK, epitomize excellence, flavor, and vitality. Crafted with precision and sourced from reputable manufacturers in Vietnam, our products are a testament to our commitment to delivering nothing but the best. As a proudly Rwandan-owned company, we take pride in offering beverages that not only tantalize your taste buds but also reflect our dedication to quality and innovation.</h3>
        <div className="flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8  dark:text-white dark:bg-gray-900"> {/* Adjust the grid layout based on screen size */}
            {brands.map((brand, index) => (
              <div key={index} className="p-6 rounded-lg text-center shadow-md flex flex-col items-center mb-8  dark:text-white dark:bg-gray-900"> {/* Add margin to create space between cards */}
                <div className="mx-auto w-24 h-24 mb-4">
                 <Image src={brand.image} alt={brand.name} width={96} height={96} className="rounded-full mx-auto object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 mt-12" dangerouslySetInnerHTML={{ __html: brand.name }}></h3>
                <p className="mb-4">{brand.description}</p>
                <Link href="/products" className="bg-blue-500 text-white py-2 px-4 rounded">View Products</Link>
                {/* <button className="bg-blue-500 text-white py-2 px-4 rounded">View Products</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>

    </>

 );
};

export default BrandsSection;
