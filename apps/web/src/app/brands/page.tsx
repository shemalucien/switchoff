'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import guaran from '../../../public/images/Image.jpg';
import energy from '../../../public/images/ENERGY.jpg';
import apple from '../../../public/images/apple.png';
import vodka from '../../../public/images/vodka.png';

function BrandsSection() {
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
    {
      name: 'SWITCHOFF ORIGINAL APPLE',
      description: 'Experience the crisp and refreshing taste of SWITCHOFF ORIGINAL APPLE. Crafted with natural apple flavor and premium ingredients, this 500ml beverage delivers authentic apple goodness in every sip. Perfect for those seeking a naturally delicious and satisfying refreshment that stands out with its distinctive green label and silver can design. Ideal for any occasion, from daily hydration to special moments.',
      products: [
        { name: 'Original Apple 500ml', icon: 'apple.svg' },
        { name: 'Natural Flavor', icon: 'flavor.svg' },
        { name: 'Premium Quality', icon: 'quality.svg' }
      ],
      image: apple
    },
    {
      name: 'SV VODKA ENERGY MIX',
      description: 'Indulge in premium excellence with SV VODKA ENERGY MIX. This sophisticated 330ml spirit beverage combines quality vodka with energizing elements, featuring an eye-catching blue and red gradient design. With 18% ABV and a premium blend, this ready-to-drink cocktail alternative delivers refined taste and premium experience. Perfect for those seeking a sophisticated and memorable beverage experience.',
      products: [
        { name: 'Vodka Energy Mix 330ml', icon: 'vodka.svg' },
        { name: 'Premium Spirit', icon: 'spirit.svg' },
        { name: '18% ABV', icon: 'alcohol.svg' }
      ],
      image: vodka
    }
 ];

 return (
    <>
      <Navbar />
      <section className="container-page py-16 md:py-20" id="brands">
        <div className="mb-12">
          <h2 className="section-heading text-gray-900 dark:text-white">Our Brands</h2>
          <p className="section-subheading">
            Welcome to the world of Dissco Ltd, where we bring you the finest selection of high-quality beverage
            products to invigorate your senses and elevate your experiences. Our brands epitomize excellence, flavor, and vitality. Crafted with precision
            and sourced from reputable manufacturers in Vietnam, our products are a testament to our commitment to
            delivering nothing but the best.
          </p>
        </div>

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {brands.map((brand, index) => (
          <div 
            className="card-interactive group flex flex-col items-center p-6 sm:p-8 text-center h-full transition-all duration-300" 
            key={index}
          >
            {/* Image */}
            <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-brand-100 dark:ring-gray-700 group-hover:ring-brand-300 dark:group-hover:ring-brand-600 transition-all duration-300">
              <Image 
                alt={brand.name} 
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" 
                height={128} 
                src={brand.image} 
                width={128} 
              />
            </div>
            
            {/* Title */}
            <h3
              className="mb-3 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors"
              dangerouslySetInnerHTML={{ __html: brand.name }}
             />
            
            {/* Description */}
            <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 flex-grow line-clamp-4">
              {brand.description}
            </p>
            
            {/* CTA Button */}
            <Link className="btn-primary text-sm sm:text-base w-full sm:w-auto" href="/products">
              View Products
            </Link>
          </div>
        ))}
      </div>
    </section>
      {/* <Footer /> */}
    </>
 );
}

export default BrandsSection;
