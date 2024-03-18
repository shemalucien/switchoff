import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import junior from './junior.jpg';
import junior2 from './junior2.jpg';
import muyango from './muyango.jpg';
import muyango2 from './muyango2.jpg';
import lady from './lady.jpg';
import lady2 from './lady2.jpg';
import guaran from './Image.jpg';
import energy from './ENERGY.jpg';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function Slide() {
  return (
    <div className="flex justify-center my-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-hidden">
      <Splide
        options={{
          type: 'loop',
          perPage: 4, // Display one slide at a time
          autoScroll: {
            speed: 1,
          },
          gap: '0.125rem', // Set the gap between slides
          breakpoints: {
            640: {
              perPage: 4,
            },
            768: {
              perPage: 4,
            },
            1024: {
              perPage: 4,
            },
          },
        }}
        extensions={{ AutoScroll }}

      >
        <SplideSlide>
          <div className="flex  items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px] text-white '>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={guaran} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex  items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px] text-white '>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={energy} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg  text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px]  text-white '>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={junior} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg  text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px]  text-white '>The secret to your stamina, featuring a unique blend of ingredients</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={muyango} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex  items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg  text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px]  text-white '>The secret to your stamina, featuring a unique blend of ingredients</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={muyango2} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex  items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg  text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px]  text-white '>The secret to your stamina, featuring a unique blend of ingredients</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={junior2} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex  items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg  text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px]  text-white '>The secret to your stamina, featuring a unique blend of ingredients</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={lady} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex  items-center justify-center h-screen">
            <div className="w-full p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-lg  text-white font-bold">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-lg min-w-[100px]  text-white '>The secret to your stamina, featuring a unique blend of ingredients</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full">
              <Image className='rounded-lg mx-auto object-cover' src={lady2} alt="Image 1" width={400} height={300} style={{ transform: 'rotate(0deg)' }} />
            </div>

          </div>
        </SplideSlide>

        {/* Add more SplideSlide components for additional images */}
      </Splide>
    </div>
  );
}
