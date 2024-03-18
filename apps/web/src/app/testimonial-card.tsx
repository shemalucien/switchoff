import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
 quote: string;
 author: string;
 imageUrl: StaticImageData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, imageUrl }) => {
 return (
    <div className="bg-blue-400 shadow-md rounded-lg p-6 m-2 flex flex-col text-center relative">
      <p className="text-white text-lg mt-4 font-bold">Testimonial</p>
      <p className="text-gray-700 text-lg mt-4">{quote}</p>
      <div className="relative h-32 w-32 mx-auto mb-8">
        <Image src={imageUrl} alt={author} width={100} height={50} className="rounded-lg" />
      </div>
      <div className='absolute bottom-0 left-0 right-0 bg-white rounded-t-lg mt-4 flex items-center justify-center px-2 py-2 h-12'>
        <p className="text-gray-500">- {author}</p>
      </div>
    </div>
 );
};

export default TestimonialCard;
