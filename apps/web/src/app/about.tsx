import React from 'react';
import Image from 'next/image';
import bottle from './Image.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        {/* Column for Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image src={bottle} alt="Image 1" width={400} height={400} />
        </div>

        {/* Column for Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4 text-md">

            Brand Information: Switchoff Energy Drink and Switchoff Guarana
            Switchoff Energy Drink and Switchoff Guarana are globally recognized products owned by DISSCO Ltd, a Rwandan company.DISSCO Ltd has deep roots in the beverage distribution industry, with our parents having been involved in the distribution of Heineken and SKOL products for over 40 years.

            Driven by a desire to aim high and create our own brand, we embarked on a journey to build Switchoff with the help of industry experts. Our vision is to elevate our brand to new heights and provide consumers with high-quality energy drinks that meet their needs and expectations.

            Production of Switchoff takes place in Vietnam, specifically at the esteemed company called RITA FOOD&DRINK CO., LTD located at No. 8 Thong Nhat Boulevard, Song Than 2 Industrial Park, Di An City., Binh Duong Province, Viet Nam. We work closely with Yumi and Vivien, who oversee operations at RITA.
            Vietnam was chosen for its abundance of quality raw materials and packaging materials, as well as the expertise offered by RITA. Furthermore, RITA's positive reputation with relevant regulators solidified our decision to partner with them in bringing Switchoff to life.


          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Mission</h3>
            <p className="mb-2 text-md">Our mission is to provide the best services...</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Values</h3>
            <p className="mb-2 text-md">

              At DISSCO Ltd, we are committed to delivering excellence in every bottle of Switchoff, and we look forward to continuing our journey of growth and innovation in the beverage industry.
            </p>
          </div>

          <button className="bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
