import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import guaran from './Image.jpg';
import energy from './ENERGY.jpg';
import junior from './junior.jpg';
import junior2 from './junior2.jpg';
import muyango from './muyango.jpg';
import muyango2 from './muyango2.jpg';
import lady from './lady.jpg';
import lady2 from './lady2.jpg';


export default function Slide() {
  return (
    <div className="flex justify-center my-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-hidden">

      <Splide
        options={{
          type: 'fade',
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
        }}
      >
        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>The secret to your stamina, featuring a unique blend of ingredients including guarana.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={energy} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={guaran} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>The secret to your stamina, featuring a unique blend of ingredients including guarana.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={junior} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={muyango} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>The secret to your stamina, featuring a unique blend of ingredients including guarana.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={lady} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={junior2} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={muyango2} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
              <div className="text-center">
                <p className="text-base sm:text-sm md:text-base lg:text-4xl text-white font-bold text-center">Elevate your test Experience</p>
                <p className='text-base sm:text-sm md:text-base lg:text-2xl  text-white m-8 text-center'>Energize your mind and body with this high-quality energy boost.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <Image className='rounded-lg mx-auto object-cover' src={lady2} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
            </div>
          </div>
        </SplideSlide>

        

      </Splide>

    </div>
  );
}
