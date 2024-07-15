'use client';
import React, { useState } from "react";
import Image from 'next/image';
import nicepackage from '../../../public/images/nice_package.jpg';
import energypackage from '../../../public/images/energy_package.jpg';
import Navbar from "../navbar/page";

const Products = () => {
    const [filter, setFilter] = useState<string | null>(null);

    const products = [
        {
            id: 1,
            name: 'NICE GUARANA <sup>+</sup>',
            description: 'Each can of SWITCHOFF NICE GUARANA is elegantly packaged in a sleek white can, standing at 250 ml. This unique packaging not only enhances the product\'s appeal but also distinguishes it as a premium choice for consumers. The color theme for SWITCHOFF NICE GUARANA is silver, reflecting the sophistication and premium quality of the beverage. This silver hue adds a touch of elegance to the product, making it visually appealing to discerning consumers.',
            image: nicepackage,
            category: 'NICE GUARANA'
        },
        {
            id: 2,
            name: 'SWITCHOFF ENERGY DRINK',
            description: 'SWITCHOFF ENERGY DRINK comes in the same distinctive white cans as SWITCHOFF NICE GUARANA, with each can containing 250 ml of the invigorating beverage. The packaging is designed to exude class and sophistication, catering to the preferences of premium consumers. The color theme for SWITCHOFF ENERGY DRINK is a captivating shade of cyane, which is a blend between green and blue. This unique color choice not only sets the product apart but also conveys a sense of freshness and energy, aligning perfectly with the drink\'s invigorating properties.',
            image: energypackage,
            category: 'ENERGY DRINK'
        }
    ];

    const filteredProducts = filter ? products.filter(product => product.category === filter) : products;

    return (
        <>
            <div className="mt-0 dark:text-white dark:bg-gray-900">
                <Navbar />
                <div className="container px-4 py-8  dark:text-white dark:bg-gray-900"> {/* Adjust the top margin as needed */}
                    <h2 className="text-3xl text-center font-bold mb-8 mt-20">Are you Ready to Taste our Products</h2>
                    <h3 className='text-base text-center  mb-8'>Discover the perfect blend of flavors and textures that redefine your taste buds. Our drinks are crafted with the finest ingredients, designed to quench your thirst while delighting your palate. Experience the essence of our brand, where every sip is a journey of discovery.</h3>

                    <div className="flex justify-center mb-8">
                        <button
                            onClick={() => setFilter(null)}
                            className={`font-bold py-2 px-4 rounded-full mx-2 text-sm sm:text-xs md:text-sm ${filter === null ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                }`}
                        >
                            ALL
                        </button>
                        <button
                            onClick={() => setFilter('NICE GUARANA')}
                            className={`font-bold py-2 px-4 rounded-full mx-2 text-sm sm:text-xs md:text-sm ${filter === 'NICE GUARANA' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                }`}
                        >
                            NICE GUARANA <sup>+</sup>
                        </button>
                        <button
                            onClick={() => setFilter('ENERGY DRINK')}
                            className={`font-bold py-2 px-4 rounded-full mx-2 text-sm sm:text-xs md:text-sm ${filter === 'ENERGY DRINK' ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                }`}
                        >
                            ENERGY DRINK
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 dark:text-white dark:bg-gray-900">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="w-full m-2 border border-gray-200 rounded-lg shadow dark:border-gray-900 flex flex-col">
                            <div className="p-2 flex justify-center items-center">
                                <Image src={product.image} alt={product.name} className="h-auto max-w-full" />
                            </div>
                            <div className="p-5 flex flex-col justify-between h-1/2">
                                <a href="/products">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: product.name }}></h5>
                                </a>
                                <p className="mb-3 font-normal ">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
