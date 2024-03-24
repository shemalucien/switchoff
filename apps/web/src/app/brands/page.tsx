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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat fermentum felis, ut sodales dolor ultrices non.',
      products: [
        { name: 'Product 1', icon: 'icon1.svg' },
        { name: 'Product 2', icon: 'icon2.svg' },
        { name: 'Product 3', icon: 'icon3.svg' }
      ],
      image: guaran
    },
    {
      name: 'ENERGY DRINK',
      description: 'Phasellus quis finibus eros, sed consequat est. Mauris pretium est eu lacus rhoncus, vel malesuada ex ultricies.',
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
      <div className="container px-4 py-8"> {/* Adjust the top margin as needed */}
        <h2 className="text-3xl text-center font-bold mb-8 mt-20">Our Brands</h2>
        <h3 className='text-xl text-center mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum expedita deserunt doloremque quod, natus cum quisquam dolorem</h3>
        <div className="flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjust the grid layout based on screen size */}
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md flex flex-col items-center mb-8"> {/* Add margin to create space between cards */}
                <div className="mx-auto w-24 h-24 mb-4">
                 <Image src={brand.image} alt={brand.name} width={96} height={96} className="rounded-full mx-auto object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 mt-12" dangerouslySetInnerHTML={{ __html: brand.name }}></h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
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
