import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageUrl: StaticImageData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, imageUrl }) => {
  return (
    <div className="card-surface group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Star rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brand-400 text-lg">★</span>
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic flex-grow mb-6 px-1">
        &quot;{quote}&quot;
      </p>
      
      {/* Author section */}
      <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="h-16 w-16 relative flex-shrink-0">
          <Image 
            src={imageUrl} 
            alt={author} 
            width={64} 
            height={64} 
            className="rounded-full w-full h-full object-cover ring-2 ring-brand-300 dark:ring-brand-700" 
          />
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white text-center">{author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
