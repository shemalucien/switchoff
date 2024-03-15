import React from 'react';
import Image from 'next/image';
import bottle from './Image.jpg';

const BrandsSection = () => {
 const brands = [
    {
      name: 'Brand A',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat fermentum felis, ut sodales dolor ultrices non.',
      products: [
        { name: 'Product 1', icon: 'icon1.svg' },
        { name: 'Product 2', icon: 'icon2.svg' },
        { name: 'Product 3', icon: 'icon3.svg' }
      ],
      image: bottle
    },
    {
      name: 'Brand B',
      description: 'Phasellus quis finibus eros, sed consequat est. Mauris pretium est eu lacus rhoncus, vel malesuada ex ultricies.',
      products: [
        { name: 'Product 4', icon: 'icon4.svg' },
        { name: 'Product 5', icon: 'icon5.svg' },
        { name: 'Product 6', icon: 'icon6.svg' }
      ],
      image: bottle
    },
    {
        name: 'Brand C',
        description: 'Phasellus quis finibus eros, sed consequat est. Mauris pretium est eu lacus rhoncus, vel malesuada ex ultricies.',
        products: [
          { name: 'Product 4', icon: 'icon4.svg' },
          { name: 'Product 5', icon: 'icon5.svg' },
          { name: 'Product 6', icon: 'icon6.svg' }
        ],
        image: bottle
      },
    // Add more brands as needed
 ];

 return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-8">Our Brands</h2>
      <h3 className='text-xl text-center mb-8'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatum expedita deserunt doloremque quod, natus cum quisquam quaerat est magni beatae quibusdam, laborum doloribus iste iusto. Mollitia quibusdam eos officiis? </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"> {/* Adjust the grid layout based on screen size */}
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md flex flex-col items-center mb-8"> {/* Add margin to create space between cards */}
              <div className="mx-auto w-24 h-24 mb-4">
                <Image src={brand.image} alt={brand.name} width={96} height={96} className="rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 mt-12">{brand.name}</h3>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <ul className="list-disc ml-6 mb-4">
                {brand.products.map((product, idx) => (
                 <li key={idx} className="flex items-center">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm9 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" clipRule="evenodd" />
                    </svg>
                    {product.name}
                 </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">View Products</button>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

export default BrandsSection;
