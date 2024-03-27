
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import energy from '../../public/images/ENERGY.jpg';
import junior from '../../public/images/junior.jpg';
// import junior2 from '../../public/images/junior2.jpg';
// import muyango from '../../public/images/muyango.jpg';
// import muyango2 from '../../public/images/muyango2.jpg';
// import lady from '../../public/images/lady.jpg';
import lady2 from '../../public/images/lady2.jpg'; // change this image
import guaran from '../../public/images/nice.jpg'; // change this image
import nicepackage from '../../public/images/nice_package.jpg';
import energypackage from '../../public/images/energy_package.jpg';

// Define an array of images and their associated text
const images = [
  { src: energy, alt: "Energy", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  { src: junior, alt: "Junior", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  //  { src: junior2, alt: "Junior", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  // { src: muyango, alt: "Muyango", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
 // { src: muyango2, alt: "Muyango", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  //  { src: lady, alt: "Lady", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  { src: lady2, alt: "Lady", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  { src: nicepackage, alt: "Nice Package", text1: "Elevate your test Experience", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  { src: energypackage, alt: "Energy Package", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  { src: guaran, alt: "Guaran", text1: "The secret to your stamina", text2: "The secret to your stamina, featuring a unique blend of ingredients including guarana." },
  // Add more images and their text here
];

export default function Slide() {
  return (
    <div className="flex justify-center my-8 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen overflow-hidden mt-20">

      <Splide
        options={{
          type: 'fade',
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          rewind: true,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center h-screen">
              <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-center text-white">
                {/* Hide the text on small screens */}
                <div className="text-center mx-0">
                  <p className=" hidden md:block text-sm sm:text-base md:text-base lg:text-3xl text-white font-bold text-center">{image.text1}	</p>
                  <p className=' hidden md:block text-xs  md:text-sm lg:text-2xl text-white m-4 sm:m-8 text-center'>{image.text2}</p>
                  {/* Wrap the button in a div and use flex utilities to center it */}
                  <div className="flex justify-center items-center">
                    <button className="hidden md:block bg-blue-500 text-white py-2 px-4 rounded mt-4">Explore More</button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col items-center justify-center">
                <Image className='h-auto max-w-full rounded-lg object-fill' src={image.src} alt="Image 1" width={600} height={500} style={{ transform: 'rotate(0deg)' }} />
              </div>
            </div>

          </SplideSlide>
        ))}

      </Splide>


    </div>
  );
}


