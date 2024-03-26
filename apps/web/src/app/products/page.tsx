import React from "react";
import Image from 'next/image';
// import guaran from '../../../public/images/nice.jpg';
// import energy from '../../../public/images/ENERGY.jpg';

import nicepackage from '../../../public/images/nice_package.jpg';
import energypackage from '../../../public/images/energy_package.jpg';

const Products = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-8">Are you Ready to Taste our Products</h2>
            <h3 className="text-xl text-center mb-8">Discover the perfect blend of flavors and textures that redefine your taste buds. Our drinks are crafted with the finest ingredients, designed to quench your thirst while delighting your palate. Experience the essence of our brand, where every sip is a journey of discovery.</h3>

            <div className="flex justify-center mb-8">
                <button className="bg-blue-500 font-bold text-white py-2 px-4 rounded-full mx-2">ALL</button>
                <button className="bg-white font-bold text-black py-2 px-4 rounded-full mx-2">NICE GUARANA</button>
                <button className="bg-white font-bold text-black py-2 px-4 rounded-full mx-2">ENERGY DRINK</button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {/* First Card */}
                <div className="w-full m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <div className="p-2 flex justify-center items-center ">
                        <Image src={nicepackage} alt="NICE GUARANA" className="h-auto max-w-full" />
                    </div>
                    <div className="p-5 flex flex-col justify-between h-1/2">
                        <a href="/products">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                NICE GUARANA <sup>+</sup>
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Each can of SWITCHOFF NICE GUARANA is elegantly packaged in a sleek white can, standing at 250 ml. This unique packaging not only enhances the product's appeal but also distinguishes it as a premium choice for consumers. The color theme for SWITCHOFF NICE GUARANA is silver, reflecting the sophistication and premium quality of the beverage. This silver hue adds a touch of elegance to the product, making it visually appealing to discerning consumers.
                        </p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="w-full m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <div className="p-2 flex justify-center items-center ">
                        <Image src={energypackage} alt="ENERGY DRINK" className="h-auto max-w-full" />
                    </div>
                    <div className="p-5 flex flex-col justify-between h-1/2">
                        <a href="/products">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                               SWITCHOFF ENERGY DRINK
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            SWITCHOFF ENERGY DRINK comes in the same distinctive white cans as SWITCHOFF NICE GUARANA, with each can containing 250 ml of the invigorating beverage. The packaging is designed to exude class and sophistication, catering to the preferences of premium consumers. The color theme for SWITCHOFF ENERGY DRINK is a captivating shade of cyane, which is a blend between green and blue. This unique color choice not only sets the product apart but also conveys a sense of freshness and energy, aligning perfectly with the drink's invigorating properties.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
