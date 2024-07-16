import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageUrl: StaticImageData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, imageUrl }) => {
  return (
    <div className="shadow-md rounded-lg p-6 m-2 flex flex-col items-center text-center dark:text-white dark:bg-gray-900">
      <p className="text-blue-500 text-lg mt-4 font-bold">Testimonial</p>
      <p className="text-base m-4">{quote}</p>
      <div className="h-32 w-32 mb-4">
        <Image src={imageUrl} alt={author} width={128} height={128} className="rounded-full w-full h-full object-cover ring-2 ring-gray-300 dark:ring-gray-500" />
      </div>
      <div className="mt-4 text-center px-2 py-2 h-12 flex items-center justify-center dark:text-white dark:bg-gray-900">
        <p className="text-base">{author}</p>
      </div>
    </div>

  );
};

export default TestimonialCard;
