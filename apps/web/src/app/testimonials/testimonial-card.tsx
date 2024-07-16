import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
 quote: string;
 author: string;
 imageUrl: StaticImageData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, imageUrl }) => {
 return (
    <div className="shadow-md rounded-lg p-6 m-2 flex flex-col text-center dark:text-white dark:bg-gray-900">
      <p className="text-blue-500 text-lg mt-4 font-bold">Testimonial</p>
      <p className="text-base m-4">{quote}</p>
      <div className="h-32 w-32 mx-auto mb-8">
        <Image src={imageUrl} alt={author} width={100} height={50} className="rounded-full w-100 h-50 p-1 ring-2 ring-gray-300 dark:ring-gray-500" />
      </div>
      <div className='bottom-0 left-0 right-0 rounded-t-lg mt-4 text-center px-2 py-2 h-12  dark:text-white dark:bg-gray-900'>
        <p className="text-base">{author}</p>
      </div>
    </div>
 );
};

export default TestimonialCard;
