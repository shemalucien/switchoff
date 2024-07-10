'use client';
import React from 'react';
import Image from 'next/image';
import bottle from '../../../../public/images/Image.jpg';


const MoreInfo = () => {
    return (
        <div className="container px-4 py-4 m-2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="flex flex-col  m-2">
                {/* Column for Image */}
                <div className="w-full mb-8 lg:mb-4 flex justify-center">
                    <Image className='rounded-lg  object-cover' src={bottle} alt="Image 1" width={450} height={250} />
                </div>

                <div className="flex flex-col m-2">



                    <p className="mb-2 text-base text-justify">
                        Founded with a vision to transform the local market, DISSCO LTD began its journey with the ambition to deliver high-quality products at reasonable prices. Our experience in distributing various products led us to realize the need for something new and innovative, inspiring us to create our own line of exceptional offerings.

                        Driven by our passion for excellence and fueled by our desire to make a difference, we embarked on a journey to create products that not only meet but exceed industry standards. Our dedication to quality, coupled with our unwavering commitment to customer satisfaction, sets us apart in the market.

                        At DISSCO LTD, we believe in continuous improvement and innovation. We are constantly striving to enhance our products and expand our reach to serve a wider audience. With a solid plan for growth and a focus on excellence, we are poised to make a significant impact in the market and beyond.

                        As a registered Rwandan company , we adhere to the highest standards of integrity, transparency, and professionalism in all our operations. We are proud to be a part of the vibrant Rwandan business community and are committed to contributing positively to its growth and development.

                        Join us on our journey as we continue to push the boundaries of quality, affordability, and innovation. Experience the difference with DISSCO LTD – where excellence meets affordability.
                    </p>
                </div>
            </div>


        </div>



    );
};

export default MoreInfo;