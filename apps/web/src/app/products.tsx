import React from "react";
import Image from 'next/image';
import guaran from './Image.jpg';
import energy from './ENERGY.jpg';

const Products = () => {
    return (
        <>
            <h2 className="text-4xl font-bold text-center mb-8">Are you Ready to Taste our brands </h2>
            <h3 className="text-xl text-center mb-8"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>

            <div className="flex justify-center mb-8">
                <button className="bg-blue-500 font-bold text-white py-2 px-4 rounded-full mx-2">ALL</button>
                <button className="bg-white font-bold text-black py-2 px-4 rounded-full mx-2">NICE GUARANA</button>
                <button className="bg-white font-bold text-black py-2 px-4 rounded-full mx-2">ENERGY DRINK</button>
            </div>


            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {/* First Card */}
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <div className="p-2 flex justify-center items-center">
                        <Image src={guaran} alt="Image 1" layout="responsive" width={50} height={50} />
                    </div>
                    <div className="p-5 flex flex-col justify-between">
                        <a href="https://flowbite.com/docs/components/card">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> 
                                NICE GUARANA <sup>+</sup>
                            </h5>
                            <h6 className="mb-2 text-xl  text-gray-900 dark:text-white ">
                                600 kcal
                            </h6>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <div className="p-2 flex justify-center items-center">
                        <Image src={energy} alt="Image 3" layout="responsive" width={50} height={50} />
                    </div>
                    <div className="p-5 flex flex-col justify-between">
                        <a href="https://flowbite.com/docs/components/card">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                ENERGY DRINK
                            </h5>
                            <h6 className="mb-2 text-xl  text-gray-900 dark:text-white ">
                                600 kcal
                            </h6>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
